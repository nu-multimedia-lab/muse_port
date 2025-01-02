import boto3
from pydantic import BaseModel


class CRUD:
    def __init__(self, table: str) -> None:
        self.dynamodb = boto3.resource("dynamodb")
        self.table = self.dynamodb.Table(table)

    def create(self, new_item: dict) -> None:
        pass

    def get(self, id: str) -> BaseModel:
        pass

    def get_all(self) -> list[BaseModel]:
        pass

    def update(self, id: str, update_item: BaseModel) -> BaseModel:
        pass

    def delete(self, id: str) -> None:
        pass
