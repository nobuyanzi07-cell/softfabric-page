from fastapi import APIRouter, File, HTTPException, UploadFile, status
from fastapi.concurrency import run_in_threadpool

from cloud import delete_image, upload_image
from db import db

router = APIRouter(tags=["product images"])

ALLOWED_TYPES = {"image/jpeg", "image/png", "image/webp"}
MAX_BYTES = 5 * 1024 * 1024  # 5 MB


async def read_valid_image(file: UploadFile) -> bytes:
    if file.content_type not in ALLOWED_TYPES:
        raise HTTPException(status_code=400, detail="Only JPEG, PNG or WebP images are allowed")
    contents = await file.read()
    if len(contents) > MAX_BYTES:
        raise HTTPException(status_code=413, detail="Image must be under 5 MB")
    return contents


async def upload_or_fail(contents: bytes) -> dict:
    try:
        return await run_in_threadpool(upload_image, contents)
    except Exception:
        raise HTTPException(status_code=502, detail="Image upload failed")


@router.post("/products/{product_id}/images", status_code=status.HTTP_201_CREATED)
async def upload_product_image(product_id: int, file: UploadFile = File(...)):
    product = await db.product.find_unique(where={"id": product_id})
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    contents = await read_valid_image(file)
    uploaded = await upload_or_fail(contents)

    position = await db.product_image.count(where={"product_id": product_id})
    image = await db.product_image.create(
        data={
            "product_id": product_id,
            "url": uploaded["url"],
            "public_id": uploaded["public_id"],
            "position": position,
        }
    )
    return {"message": "Image uploaded", "image": image}


@router.get("/products/{product_id}/images")
async def list_product_images(product_id: int):
    return await db.product_image.find_many(
        where={"product_id": product_id}, order={"position": "asc"}
    )


@router.put("/products/{product_id}/images/{image_id}")
async def replace_product_image(product_id: int, image_id: int, file: UploadFile = File(...)):
    image = await db.product_image.find_first(
        where={"id": image_id, "product_id": product_id}
    )
    if not image:
        raise HTTPException(status_code=404, detail="Image not found")

    contents = await read_valid_image(file)
    uploaded = await upload_or_fail(contents)

    updated = await db.product_image.update(
        where={"id": image_id},
        data={"url": uploaded["url"], "public_id": uploaded["public_id"]},
    )

    # remove the old file only after the new one is saved
    if image.public_id:
        await run_in_threadpool(delete_image, image.public_id)

    return {"message": "Image replaced", "image": updated}


@router.delete("/products/{product_id}/images/{image_id}")
async def delete_product_image(product_id: int, image_id: int):
    image = await db.product_image.find_first(
        where={"id": image_id, "product_id": product_id}
    )
    if not image:
        raise HTTPException(status_code=404, detail="Image not found")

    if image.public_id:
        await run_in_threadpool(delete_image, image.public_id)

    await db.product_image.delete(where={"id": image_id})
    return {"message": "Image removed"}