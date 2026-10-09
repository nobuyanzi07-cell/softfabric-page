from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, Field

from db import db

router = APIRouter(prefix="/categories", tags=["categories"])


class CategoryIn(BaseModel):
    name: str = Field(min_length=1, max_length=250)


@router.post("", status_code=status.HTTP_201_CREATED)
async def create_category(payload: CategoryIn):
    name = payload.name.strip()
    existing = await db.category.find_first(where={"name": name})
    if existing:
        raise HTTPException(status_code=409, detail="Category already exists")
    return await db.category.create(data={"name": name})


@router.get("")
async def list_categories():
    return await db.category.find_many(order={"name": "asc"})