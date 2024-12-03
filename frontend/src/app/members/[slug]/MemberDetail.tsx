import { UserCard } from "@/components/elements/UserCard";
import { getUser } from "@/lib/apis/user";
import { User } from "@/lib/types";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type UserProps = {
  userId: string;
};

export const MemberDetail = async (props: UserProps) => {
  try {
    const user: User = await getUser(props.userId);

    return (
      <UserCard
        imgSrc="null"
        userId={user.id}
        userName={user.username}
        bio={user.bio}
      />
    );
  } catch (error) {
    notFound();
  }
};
