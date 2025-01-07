from datetime import datetime
from typing import Generic, Type
from zoneinfo import ZoneInfo

import boto3
from botocore.exceptions import ClientError
from pydantic import BaseModel
from shortuuid import ShortUUID

from app.cruds.errors import DatabaseError, ItemNotFoundError
from app.schemas import Model


class CRUD(Generic[Model]):
    table_name: str
    primary_key: str = "id"
    time_zone: str = "Asia/Tokyo"
    id_length: int
    model_class: Type[Model]

    def __init__(self) -> None:
        try:
            self.dynamodb = boto3.resource("dynamodb")
            self.table = self.dynamodb.Table(self.table_name)
        except Exception as e:
            raise DatabaseError(f"データベース接続エラー: {str(e)}")

    def _generate_id(self) -> str:
        return ShortUUID().random(length=self.id_length)

    def _get_current_time(self) -> str:
        return datetime.now(ZoneInfo(self.time_zone)).isoformat(timespec="seconds")

    def _handle_db_error(self, operation: str, error: Exception) -> None:
        if isinstance(error, ClientError):
            raise DatabaseError(f"DynamoDB {operation} エラー: {str(error)}")
        raise error

    def create(self, new_item: BaseModel) -> Model:
        try:
            put_item: Model = self.model_class(
                id=self._generate_id(),
                created_at=self._get_current_time(),
                updated_at=self._get_current_time(),
                **new_item.model_dump(),
            )
            self.table.put_item(Item=put_item.model_dump())
            return put_item
        except Exception as e:
            self._handle_db_error("create", e)

    def get(self, id: str) -> Model:
        try:
            response: dict = self.table.get_item(Key={self.primary_key: id})
            item = response.get("Item")
            if not item:
                raise ItemNotFoundError(f"ID {id} のアイテムは存在しません")
            return self.model_class.model_validate(item)
        except ItemNotFoundError:
            raise
        except Exception as e:
            self._handle_db_error("get", e)

    def get_all(self) -> list[Model]:
        try:
            response: dict = self.table.scan()
            return [self.model_class.model_validate(item) for item in response["Items"]]
        except Exception as e:
            self._handle_db_error("scan", e)

    def update(self, id: str, update_item: BaseModel) -> Model:
        try:
            item: Model = self.get(id)
            item.updated_at = self._get_current_time()
            updated_item: Model = item.model_copy(
                update=update_item.model_dump(exclude_unset=True)
            )
            self.table.put_item(Item=updated_item.model_dump())
            return updated_item
        except Exception as e:
            self._handle_db_error("update", e)

    def delete(self, id: str) -> None:
        try:
            self.table.delete_item(Key={self.primary_key: id})
        except Exception as e:
            self._handle_db_error("delete", e)
