import io
import os

import cloudinary
import cloudinary.uploader
from dotenv import load_dotenv

load_dotenv()

cloudinary.config(
    cloud_name=os.getenv("CLOUD_NAME"),
    api_key=os.getenv("CLOUD_API_KEY"),
    api_secret=os.getenv("CLOUD_API_SECRET"),
    secure=True,
)


def upload_image(contents: bytes, folder: str = "products") -> dict:
    res = cloudinary.uploader.upload(
        io.BytesIO(contents), folder=folder, resource_type="image"
    )
    return {"url": res["secure_url"], "public_id": res["public_id"]}


def delete_image(public_id: str) -> bool:
    try:
        res = cloudinary.uploader.destroy(public_id, resource_type="image")
        return res.get("result") in ("ok", "not found")
    except Exception as e:
        print(f"Cloudinary delete failed for {public_id}: {e}")
        return False