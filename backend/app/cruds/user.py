from app.cruds import CRUD
from app.schemas.user import User


class UserCRUD(CRUD[User]):
    table_name = "users"
    model_class = User
    id_length = 6
