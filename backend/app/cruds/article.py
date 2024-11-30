from shortuuid import ShortUUID

import datetime

from app.cruds import CRUD
from app.schemas.article import Article


class ArticleCRUD(CRUD):
    def __init__(self) -> None:
        super().__init__("article_test") # ハードコーディングしているので注意

    def create_article(self, new_article: Article) -> None:
        new_article.article_id = ShortUUID().random(length=6)
        new_article.created_at = datetime.datetime.now().isoformat() # isoformat() で日時を文字列に変換

        try:
            self.table.put_item(Item=new_article.model_dump())
        except Exception as e:
            raise ValueError(e)

    def get_article(self, article_id: str) -> Article:
        try:
            response: dict = self.table.get_item(Key={"article_id": article_id})
            item = response.get("Item")
            if not item:
                raise ValueError(f"ID {article_id} の記事は存在しません")
            return Article.model_validate(item)
        except Exception as e:
            raise ValueError(e)

    def get_all_articles(self) -> list[Article]:
        response: dict = self.table.scan()
        return [Article.model_validate(item) for item in response["Items"]]
