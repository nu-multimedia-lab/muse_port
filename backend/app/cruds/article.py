from app.cruds import CRUD
from app.schemas.article import Article


class ArticleCRUD(CRUD[Article]):
    table_name = "articles"
    model_class = Article
    id_length = 12
