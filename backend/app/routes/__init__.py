from fastapi import HTTPException
from pydantic import BaseModel

from app.cruds import CRUD


class Route:
    def __init__(self, crud: CRUD) -> None:
        self.crud = crud

    def get_items(self) -> list[BaseModel]:
        try:
            items = self.crud.get_all()
            return items
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e))

    def create_item(self, new_item: BaseModel) -> BaseModel:
        try:
            self.crud.create(new_item)
            return new_item
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e))

    def get_item(self, item_id: str) -> BaseModel:
        try:
            item = self.crud.get(item_id)
            return item
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e))

    def update_item(self, item_id: str, item_update: BaseModel) -> BaseModel:
        try:
            updated_item = self.crud.update(item_id, item_update)
            return updated_item
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e))

    def delete_item(self, item_id: str) -> None:
        try:
            self.crud.delete(item_id)
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e))
