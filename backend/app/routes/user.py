from fastapi import APIRouter

from app.cruds.user import UserCRUD
from app.routes import Route
from app.schemas.user import User, UserUpdate

router = APIRouter()
crud = UserCRUD()
route = Route(crud)


@router.get("/")
async def get_users() -> list[User]:
    return route.get_items()


@router.post("/", status_code=201)
async def create_user(new_user: User) -> User:
    return route.create_item(new_user)


@router.get("/{user_id}")
async def get_user(user_id: str) -> User:
    return route.get_item(user_id)


@router.put("/{user_id}")
async def update_user(user_id: str, user_update: UserUpdate) -> User:
    return route.update_item(user_id, user_update)


@router.delete("/{user_id}")
async def delete_user(user_id: str) -> None:
    return route.delete_item(user_id)
