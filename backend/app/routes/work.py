from fastapi import APIRouter, HTTPException

from app.cruds.work import WorkCRUD
from app.cruds.s3_handler import S3Handler
from app.routes import Route
from app.schemas.work import Work, WorkCreate, WorkUpdate

router = APIRouter()
crud = WorkCRUD()
route = Route(crud)
s3 = S3Handler(bucket_name="museport-media-bucket") # バケット名は環境変数から取得するように変更が必要

@router.get("/")
async def get_works(
    user_id: str = None,
    tag: str = None,
) -> list[Work]:
    all_works = route.get_items()
    if user_id:
        all_works = [work for work in all_works if work.user_id == user_id]
    if tag:
        all_works = [work for work in all_works if tag in (work.tags or [])] # タグがNoneの場合も考慮
    return all_works


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

@router.get("/{work_id}/media", status_code=200)
async def get_media(work_id: str) -> dict:
    """
    Get all media for a specific work.
    """
    try:
        objects = s3.get_work_media(work_id)
        return {"objects": objects}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/{work_id}/media/{filename}", status_code=200)
async def get_upload_url(work_id: str, filename: str) -> dict:
    try:
        key = generate_object_key(work_id, filename)
        presigned_url = s3.generate_presigned_url_for_upload(key=key)
        return {"upload_url": presigned_url, "key": key}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{work_id}/media/{filename}", status_code=200)
async def get_download_url(work_id: str, filename: str) -> dict:
    try:
        key = generate_object_key(work_id, filename)
        presigned_url = s3.generate_presigned_url_for_download(key=key)
        return {"download_url": presigned_url, "key": key}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def generate_object_key(work_id, filename) -> str:
    """
    S3オブジェクトキーを生成する
    """
    return f"{work_id}/{filename}"