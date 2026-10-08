from typing import Optional

from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, Field

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


@router.post("", status_code=status.HTTP_201_CREATED)
async def create_product(payload: ProductIn):
    product = await db.product.create(data=payload.model_dump(exclude_none=True))
    return {"message": "Product added", "product": product}


@router.get("")
async def list_products(search: Optional[str] = None):
    where = {"is_active": True}
    if search:
        where["name"] = {"contains": search, "mode": "insensitive"}
    return await db.product.find_many(where=where, order={"id": "desc"})


@router.get("/{product_id}")
async def get_product(product_id: int):
    product = await db.product.find_unique(where={"id": product_id})
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

    product = await db.product.update(where={"id": product_id}, data=data)
    return {"message": "Product updated", "product": product}


@router.delete("/{product_id}")
async def delete_product(product_id: int):
    existing = await db.product.find_unique(where={"id": product_id})
    if not existing:
        raise HTTPException(status_code=404, detail="Product not found")

    # soft delete: old orders still point at this product
    await db.product.update(where={"id": product_id}, data={"is_active": False})
    return {"message": "Product removed"}