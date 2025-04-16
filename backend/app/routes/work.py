from fastapi import APIRouter

from app.cruds.work import WorkCRUD
from app.routes import Route
from app.schemas.work import Work, WorkCreate, WorkUpdate

router = APIRouter()
crud = WorkCRUD()
route = Route(crud)


@router.get("/")
async def get_works() -> list[Work]:
    return route.get_items()


@router.post("/", status_code=201)
async def create_work(new_work: WorkCreate) -> Work:
    return route.create_item(new_work)


@router.get("/{work_id}")
async def get_work(work_id: str) -> Work:
    return route.get_item(work_id)


@router.put("/{work_id}")
async def update_work(work_id: str, work_update: WorkUpdate) -> Work:
    return route.update_item(work_id, work_update)


@router.delete("/{work_id}", status_code=204)
async def delete_work(work_id: str) -> None:
    route.delete_item(work_id)


@router.get("/user/{user_id}")
async def get_user_works(user_id: str) -> list[Work]:
    """
    Get all works for a specific user.
    """
    return crud.get_user_works(user_id)
