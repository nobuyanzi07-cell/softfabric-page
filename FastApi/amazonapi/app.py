from contextlib import asynccontextmanager

from fastapi import FastAPI

from db import db
from routing.users import router as users_router
from routing.categories import router as categories_router
from routing.products import router as products_router
from routing.product_images import router as product_images_router
from routing.orders import router as orders_router

from fastapi.middleware.cors import CORSMiddleware


@asynccontextmanager
async def lifespan(app: FastAPI):
    await db.connect()
    yield
    await db.disconnect()


app = FastAPI(title="Amazon API", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users_router)
app.include_router(categories_router)
app.include_router(products_router)
app.include_router(product_images_router)
app.include_router(orders_router)


@app.get("/")
def home():
    return {"message": "API running"}