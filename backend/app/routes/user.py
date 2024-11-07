from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def read_root() -> dict:
    return {"message": "User endpoint"}
