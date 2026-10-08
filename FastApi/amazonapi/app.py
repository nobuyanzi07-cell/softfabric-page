from contextlib import asynccontextmanager

from fastapi import FastAPI

from db import db
from routing.users import router as users_router
from routing.products import router as products_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    await db.connect()
    yield
    await db.disconnect()


app = FastAPI(title="Amazon API", lifespan=lifespan)

app.include_router(users_router)
app.include_router(products_router)


@app.get("/")
def home():
    return {"message": "API running"}