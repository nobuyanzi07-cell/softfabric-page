from typing import Literal

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field

from db import db
from deps import get_current_user, require_admin

router = APIRouter(prefix="/orders", tags=["orders"])

CART = "cart"
INCLUDE_ITEMS = {"order_item": {"include": {"product": True}}}


class CartItemIn(BaseModel):
    product_id: int
    quantity: int = Field(default=1, ge=1, le=100)


class QuantityIn(BaseModel):
    quantity: int = Field(ge=1, le=100)


class StatusIn(BaseModel):
    status: Literal["paid", "shipped", "delivered"]


async def get_cart(user_id: int, create: bool = False):
    cart = await db.orders.find_first(where={"user_id": user_id, "status": CART})
    if not cart and create:
        cart = await db.orders.create(data={"user_id": user_id, "status": CART})
    return cart


async def refresh_total(order_id: int):
    items = await db.order_item.find_many(where={"order_id": order_id})
    total = sum(i.quantity * i.unit_price for i in items)
    await db.orders.update(where={"id": order_id}, data={"total": total})


async def load_order(order_id: int):
    return await db.orders.find_unique(where={"id": order_id}, include=INCLUDE_ITEMS)


# ---------- cart ----------

@router.get("/cart")
async def view_cart(user=Depends(get_current_user)):
    cart = await get_cart(user.id)
    if not cart:
        return {"id": None, "status": CART, "total": 0, "order_item": []}
    return await load_order(cart.id)


@router.post("/cart/items", status_code=201)
async def add_to_cart(payload: CartItemIn, user=Depends(get_current_user)):
    product = await db.product.find_unique(where={"id": payload.product_id})
    if not product or not product.is_active:
        raise HTTPException(status_code=404, detail="Product not found")

    cart = await get_cart(user.id, create=True)
    existing = await db.order_item.find_first(
        where={"order_id": cart.id, "product_id": product.id}
    )

    quantity = payload.quantity + (existing.quantity if existing else 0)
    if quantity > product.stock:
        raise HTTPException(status_code=400, detail=f"Only {product.stock} in stock")

    if existing:
        await db.order_item.update(
            where={"id": existing.id},
            data={"quantity": quantity, "unit_price": product.price},
        )
    else:
        await db.order_item.create(
            data={
                "order_id": cart.id,
                "product_id": product.id,
                "quantity": quantity,
                "unit_price": product.price,
            }
        )

    await refresh_total(cart.id)
    return {"message": "Cart updated", "cart": await load_order(cart.id)}


@router.put("/cart/items/{product_id}")
async def set_cart_quantity(
    product_id: int, payload: QuantityIn, user=Depends(get_current_user)
):
    cart = await get_cart(user.id)
    item = cart and await db.order_item.find_first(
        where={"order_id": cart.id, "product_id": product_id}
    )
    if not item:
        raise HTTPException(status_code=404, detail="Item not in cart")

    product = await db.product.find_unique(where={"id": product_id})
    if not product or not product.is_active:
        raise HTTPException(status_code=404, detail="Product not found")
    if payload.quantity > product.stock:
        raise HTTPException(status_code=400, detail=f"Only {product.stock} in stock")

    await db.order_item.update(
        where={"id": item.id},
        data={"quantity": payload.quantity, "unit_price": product.price},
    )
    await refresh_total(cart.id)
    return {"message": "Cart updated", "cart": await load_order(cart.id)}


@router.delete("/cart/items/{product_id}")
async def remove_from_cart(product_id: int, user=Depends(get_current_user)):
    cart = await get_cart(user.id)
    item = cart and await db.order_item.find_first(
        where={"order_id": cart.id, "product_id": product_id}
    )
    if not item:
        raise HTTPException(status_code=404, detail="Item not in cart")

    await db.order_item.delete(where={"id": item.id})
    await refresh_total(cart.id)
    return {"message": "Item removed", "cart": await load_order(cart.id)}


@router.post("/cart/checkout")
async def checkout(user=Depends(get_current_user)):
    cart = await get_cart(user.id)
    if not cart:
        raise HTTPException(status_code=400, detail="Cart is empty")

    async with db.tx() as tx:
        # claim the cart so a double click can't check out twice
        claimed = await tx.orders.update_many(
            where={"id": cart.id, "status": CART}, data={"status": "pending"}
        )
        if claimed == 0:
            raise HTTPException(status_code=409, detail="Cart already checked out")

        items = await tx.order_item.find_many(
            where={"order_id": cart.id}, include={"product": True}
        )
        if not items:
            raise HTTPException(status_code=400, detail="Cart is empty")

        total = 0
        for item in items:
            product = item.product
            if not product.is_active:
                raise HTTPException(
                    status_code=409, detail=f"'{product.name}' is no longer available"
                )

            # decrement only if enough stock is left
            updated = await tx.product.update_many(
                where={"id": product.id, "stock": {"gte": item.quantity}},
                data={"stock": {"decrement": item.quantity}},
            )
            if updated == 0:
                raise HTTPException(
                    status_code=409, detail=f"Not enough stock for '{product.name}'"
                )

            await tx.order_item.update(
                where={"id": item.id}, data={"unit_price": product.price}
            )
            total += product.price * item.quantity

        await tx.orders.update(where={"id": cart.id}, data={"total": total})

    return {"message": "Order placed", "order": await load_order(cart.id)}


# ---------- orders ----------

@router.get("")
async def my_orders(user=Depends(get_current_user)):
    return await db.orders.find_many(
        where={"user_id": user.id, "status": {"not": CART}},
        include=INCLUDE_ITEMS,
        order={"id": "desc"},
    )


@router.get("/admin/all", dependencies=[Depends(require_admin)])
async def all_orders(status: str | None = None):
    where = {"status": status} if status else {"status": {"not": CART}}
    return await db.orders.find_many(
        where=where, include=INCLUDE_ITEMS, order={"id": "desc"}
    )


@router.get("/{order_id}")
async def get_order(order_id: int, user=Depends(get_current_user)):
    order = await load_order(order_id)
    if not order or (order.user_id != user.id and user.role != "admin"):
        raise HTTPException(status_code=404, detail="Order not found")
    return order


@router.post("/{order_id}/cancel")
async def cancel_order(order_id: int, user=Depends(get_current_user)):
    order = await load_order(order_id)
    if not order or (order.user_id != user.id and user.role != "admin"):
        raise HTTPException(status_code=404, detail="Order not found")
    if order.status != "pending":
        raise HTTPException(
            status_code=400, detail="Only pending orders can be cancelled"
        )

    async with db.tx() as tx:
        changed = await tx.orders.update_many(
            where={"id": order_id, "status": "pending"}, data={"status": "cancelled"}
        )
        if changed == 0:
            raise HTTPException(status_code=409, detail="Order already changed")

        for item in order.order_item:
            await tx.product.update(
                where={"id": item.product_id},
                data={"stock": {"increment": item.quantity}},
            )

    return {"message": "Order cancelled", "order": await load_order(order_id)}


@router.put("/{order_id}/status", dependencies=[Depends(require_admin)])
async def set_order_status(order_id: int, payload: StatusIn):
    order = await db.orders.find_unique(where={"id": order_id})
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    if order.status in (CART, "cancelled"):
        raise HTTPException(
            status_code=400, detail=f"Can't change a {order.status} order"
        )

    updated = await db.orders.update(
        where={"id": order_id}, data={"status": payload.status}
    )
    return {"message": "Status updated", "order": updated}