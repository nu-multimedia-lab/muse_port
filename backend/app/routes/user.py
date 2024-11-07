import asyncio
from typing import List, Union

from fastapi import APIRouter

from app.dummyDB import users
from app.schemas.user import User

router = APIRouter()


@router.get("/")
async def get_users() -> List[User]:
    await asyncio.sleep(2)
    return users


@router.get("/{user_id}")
async def get_user(user_id: int) -> Union[User, dict]:
    for user in users:
        if user["id"] == user_id:
            return user
    return {"message": "User not found"}


@router.post("/")
async def create_user(user: User) -> User:
    users.append(user)
    return user
