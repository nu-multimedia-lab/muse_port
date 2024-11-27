from shortuuid import ShortUUID

import datetime

from app.cruds import CRUD
from app.schemas.user import User, UserUpdate


class UserCRUD(CRUD):
    def __init__(self) -> None:
        super().__init__("user_test") # ハードコーディングしているので注意

    def create_user(self, new_user: User) -> None:
        new_user.user_id = ShortUUID().random(length=6)
        new_user.created_at = datetime.datetime.now().isoformat() # isoformat() で日時を文字列に変換

        try:
            self.table.put_item(Item=new_user.model_dump())
        except Exception as e:
            raise ValueError(e)

    def get_user(self, id: str) -> User:
        try:
            response: dict = self.table.get_item(Key={"id": id})
            item = response.get("Item")
            if not item:
                raise ValueError(f"ID {id} のユーザは存在しません")
            return User.model_validate(item)
        except Exception as e:
            raise ValueError(e)

    def get_all_users(self) -> list[User]:
        response: dict = self.table.scan()
        return [User.model_validate(item) for item in response["Items"]]

    def update_user(self, id: str, user_update: UserUpdate) -> User:
        try:
            user: User = self.get_user(id)
            updated_user = user.model_copy(
                update=user_update.model_dump(exclude_unset=True)
            )
            self.table.put_item(Item=updated_user.model_dump())
            return updated_user
        except Exception as e:
            raise ValueError(e)

    def delete_user(self, id: str) -> None:
        try:
            self.table.delete_item(Key={"id": id})
            return None
        except Exception as e:
            raise ValueError(e)
