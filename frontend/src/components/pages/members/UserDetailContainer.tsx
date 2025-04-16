import { UserDetailPresentation } from "./UserDetailPresentation";
import { getUser } from "@/lib/apis/user";
import { User } from "@/lib/types";

type UserDetailContainerProps = {
  userId: string;
};

export const UserDetailContainer = async ({
  userId,
}: UserDetailContainerProps) => {
  const user: User = await getUser(userId);

  return (
    <UserDetailPresentation
      id={user.id}
      username={user.username}
      bio={user.bio ?? null}
      imgSrc={undefined}
      joinedAt={new Date(user.created_at)}
    />
  );
};
