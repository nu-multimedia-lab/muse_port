from fastapi import HTTPException

from app.cruds import CRUD
from app.schemas import Model


class Route:
    def __init__(self, crud: CRUD) -> None:
        self.crud = crud

    def get_items(self) -> list[Model]:
        try:
            items = self.crud.get_all()
            return items
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e))

    def create_item(self, new_item: Model) -> Model:
        try:
            self.crud.create(new_item)
            return new_item
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e))

    def get_item(self, item_id: str) -> Model:
        try:
            item = self.crud.get(item_id)
            return item
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e))

    def update_item(self, item_id: str, item_update: Model) -> Model:
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
