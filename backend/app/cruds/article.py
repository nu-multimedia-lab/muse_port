from app.cruds import CRUD
from app.schemas.article import Article


class ArticleCRUD(CRUD[Article]):
    table_name = "articles"
    model_class = Article
    id_length = 12

    def get_user_articles(self, user_id: str) -> list[Article]:
        """
        Get all articles for a specific user.
        """
        try:
            response: dict = self.table.scan(
                FilterExpression="user_id = :uid",
                ExpressionAttributeValues={":uid": user_id},
            )

            items = response.get("Items", [])
            return [self.model_class.model_validate(item) for item in items]
        except Exception as e:
            self._handle_db_error("get_user_articles", e)
        return []
