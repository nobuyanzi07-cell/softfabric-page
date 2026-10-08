from fastapi import APIRouter, HTTPException, status

from db import db
from schemas import SignupIn, LoginIn
from security import hash_password, verify_password, create_token

router = APIRouter(prefix="/users", tags=["users"])


@router.post("/signup", status_code=status.HTTP_201_CREATED)
async def signup(data: SignupIn):
    email = data.email.lower()

    existing = await db.users.find_unique(where={"email": email})
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already registered",
        )

    user = await db.users.create(
        data={
            "name": data.name,
            "email": email,
            "password_hash": hash_password(data.password),
        }
    )
    return {
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "role": user.role,
        "created_at": user.created_at,
    }


@router.post("/login")
async def login(data: LoginIn):
    user = await db.users.find_unique(where={"email": data.email.lower()})

    if not user or not verify_password(data.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    return {
        "access_token": create_token(user.id, user.role),
        "token_type": "bearer",
    }
