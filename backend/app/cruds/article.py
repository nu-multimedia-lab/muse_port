from datetime import datetime
from zoneinfo import ZoneInfo

from shortuuid import ShortUUID

from app.cruds import CRUD
from app.schemas.article import Article


class ArticleCRUD(CRUD):
    table_name = "articles"
    primary_key = "id"
    time_zone = "Asia/Tokyo"
    id_length = 12

    def __init__(self) -> None:
        super().__init__(self.table_name)

    def create(self, new_article: Article) -> None:
        new_article.id = ShortUUID().random(length=self.id_length)
        new_article.created_at = datetime.now(ZoneInfo(self.time_zone)).isoformat(
            timespec="seconds"
        )  # isoformat() で日時を文字列に変換

        try:
            self.table.put_item(Item=new_article.model_dump())
            return None
        except Exception as e:
            raise ValueError(e)

    def get(self, id: str) -> Article:
        try:
            response: dict = self.table.get_item(Key={self.primary_key: id})
            item = response.get("Item")
            if not item:
                raise ValueError(f"ID {id} の記事は存在しません")
            return Article.model_validate(item)
        except Exception as e:
            raise ValueError(e)

    def get_all(self) -> list[Article]:
        response: dict = self.table.scan()
        return [Article.model_validate(item) for item in response["Items"]]

    def update(self, id: str, article_update: Article) -> Article:
        try:
            article: Article = self.get_article(id)
            article.updated_at = datetime.now(ZoneInfo(self.time_zone)).isoformat(
                timespec="seconds"
            )  # isoformat() で日時を文字列に変換

            updated_article = article.model_copy(
                update=article_update.model_dump(exclude_unset=True)
            )
            self.table.put_item(Item=updated_article.model_dump())
            return updated_article
        except Exception as e:
            raise ValueError(e)

    def delete(self, id: str) -> None:
        try:
            self.table.delete_item(Key={self.primary_key: id})
            return None
        except Exception as e:
            raise ValueError(e)
