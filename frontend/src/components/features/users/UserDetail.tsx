import { UserDetailElement } from "@/components/elements/UserDetailElement";
import { getUser } from "@/lib/apis/user";
import { User } from "@/lib/types";
import { notFound } from "next/navigation";

type UserDetailProps = {
  userId: string;
};

export const UserDetail = async (props: UserDetailProps) => {
  const user: User = await getUser(props.userId);

  return (
    <UserDetailElement
      id={user.id}
      username={user.username}
      bio={user.bio ?? null}
      imgSrc={undefined}
      joinedAt={new Date(user.created_at)}
    />
  );
};
