from fastapi import APIRouter, HTTPException

from app.cruds.user import UserCRUD
from app.schemas.user import User, UserCreate, UserUpdate

router = APIRouter()
crud = UserCRUD()


@router.get("/")
async def get_users() -> list[User]:
    try:
        users = crud.get_all_users()
        return users
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/")
async def create_user(user_create: UserCreate) -> User:
    try:
        crud.create_user(user_create)
        return user_create
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/{user_id}")
async def get_user(user_id: str) -> User:
    try:
        user = crud.get_user(user_id)
        return user
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.put("/{user_id}")
async def update_user(user_id: str, user_update: UserUpdate) -> User:
    try:
        updated_user = crud.update_user(user_id, user_update)
        return updated_user
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.delete("/{user_id}")
async def delete_user(user_id: str) -> None:
    try:
        crud.delete_user(user_id)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
