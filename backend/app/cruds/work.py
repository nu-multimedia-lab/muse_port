from app.cruds import CRUD
from app.schemas.work import Work


class WorkCRUD(CRUD[Work]):
    table_name = "works" # DynamoDBのテーブル名（現在使用しているのはarticlesなので要変更）
    model_class = Work
    id_length = 12

    def get_user_works(self, user_id: str) -> list[Work]:
        """
        Get all works for a specific user.
        """
        try:
            response: dict = self.table.scan(
                FilterExpression="user_id = :uid",
                ExpressionAttributeValues={":uid": user_id},
            )

            items = response.get("Items", [])
            return [self.model_class.model_validate(item) for item in items]
        except Exception as e:
            self._handle_db_error("get_user_works", e)
        return []
