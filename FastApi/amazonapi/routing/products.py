from typing import Optional

from fastapi import APIRouter, HTTPException, status
from fastapi.concurrency import run_in_threadpool
from pydantic import BaseModel, Field

from cloud import delete_image
from db import db

router = APIRouter(prefix="/products", tags=["products"])


class ProductIn(BaseModel):
    name: str = Field(min_length=1, max_length=250)
    description: Optional[str] = None
    price: int = Field(ge=0)
    stock: int = Field(default=0, ge=0)
    category_id: Optional[int] = None


class ProductUpdate(BaseModel):
    name: Optional[str] = Field(default=None, min_length=1, max_length=250)
    description: Optional[str] = None
    price: Optional[int] = Field(default=None, ge=0)
    stock: Optional[int] = Field(default=None, ge=0)
    category_id: Optional[int] = None
    is_active: Optional[bool] = None


async def ensure_category(category_id: Optional[int]):
    if category_id is None:
        return
    if not await db.category.find_unique(where={"id": category_id}):
        raise HTTPException(
            status_code=400, detail=f"Category {category_id} does not exist"
        )


@router.post("", status_code=status.HTTP_201_CREATED)
async def create_product(payload: ProductIn):
    await ensure_category(payload.category_id)
    data = payload.model_dump(exclude_none=True)
    data["name"] = data["name"].strip()
    product = await db.product.create(data=data)
    return {"message": "Product added", "product": product}


@router.get("")
async def list_products(search: Optional[str] = None):
    where = {"is_active": True}
    if search:
        where["name"] = {"contains": search, "mode": "insensitive"}
    return await db.product.find_many(where=where, order={"id": "desc"})


@router.get("/{product_id}")
async def get_product(product_id: int):
    product = await db.product.find_unique(
        where={"id": product_id}, include={"product_image": True}
    )
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


@router.put("/{product_id}")
async def update_product(product_id: int, payload: ProductUpdate):
    existing = await db.product.find_unique(where={"id": product_id})
    if not existing:
        raise HTTPException(status_code=404, detail="Product not found")

    data = payload.model_dump(exclude_unset=True)
    if not data:
        raise HTTPException(status_code=400, detail="Nothing to update")

    await ensure_category(data.get("category_id"))
    if data.get("name"):
        data["name"] = data["name"].strip()

    product = await db.product.update(where={"id": product_id}, data=data)
    return {"message": "Product updated", "product": product}


@router.delete("/{product_id}")
async def delete_product(product_id: int, permanent: bool = False):
    existing = await db.product.find_unique(where={"id": product_id})
    if not existing:
        raise HTTPException(status_code=404, detail="Product not found")

    if not permanent:
        await db.product.update(where={"id": product_id}, data={"is_active": False})
        return {"message": "Product removed"}

    ordered = await db.order_item.count(where={"product_id": product_id})
    if ordered:
        raise HTTPException(
            status_code=409,
            detail="Product has orders and can't be permanently deleted. Deactivate it instead.",
        )

    images = await db.product_image.find_many(where={"product_id": product_id})
    for img in images:
        if img.public_id:
            await run_in_threadpool(delete_image, img.public_id)

    await db.product.delete(where={"id": product_id})  # image rows cascade
    return {"message": "Product and images permanently deleted"}