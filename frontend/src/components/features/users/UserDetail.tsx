import { UserDetail as UserDetailElement } from "@/components/elements/UserDetail";
import { getUser } from "@/lib/apis/user";
import { User } from "@/lib/types";
import { notFound } from "next/navigation";

type UserDetailProps = {
  userId: string;
};

export const UserDetail = async (props: UserDetailProps) => {
  try {
    const user: User = await getUser(props.userId);

    return (
      <UserDetailElement
        id={user.id}
        username={user.username}
        bio={user.bio}
        imgSrc={undefined}
      />
    );
  } catch (error) {
    notFound();
  }
};
