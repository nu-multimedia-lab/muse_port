from shortuuid import ShortUUID

from app.cruds import CRUD
from app.schemas.user import User, UserCreate


class UserCRUD(CRUD):
    def __init__(self) -> None:
        super().__init__("users")

    def create_user(self, user_create: UserCreate) -> None:
        user_create.id = ShortUUID().random(length=6)

        try:
            self.table.put_item(Item=user_create.model_dump())
        except Exception as e:
            raise ValueError(f"User with id {user_create.id} already exists. {e}")

    def get_user(self, id: str) -> User:
        try:
            response: dict = self.table.get_item(Key={"id": id})
            return User.model_validate(response["Item"])
        except Exception as e:
            raise ValueError(f"User with id {id} does not exist. {e}")

    def get_all_users(self) -> list[User]:
        response: dict = self.table.scan()
        return [User.model_validate(item) for item in response["Items"]]

    def update_user(self, id: str, user_create: UserCreate) -> None:
        try:
            self.table.update_item(
                Key={"id": id},
                UpdateExpression="set username=:u, email=:e, hashed_password=:h",
                ExpressionAttributeValues={
                    ":u": user_create.username,
                },
                ReturnValues="UPDATED_NEW",
            )
        except Exception as e:
            raise ValueError(f"User with id {id} does not exist. {e}")

    def delete_user(self, id: str) -> None:
        try:
            self.table.delete_item(Key={"id": id})
        except Exception as e:
            raise ValueError(f"User with id {id} does not exist. {e}")
