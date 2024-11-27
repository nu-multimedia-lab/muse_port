import { getUser } from "@/lib/apis/user";
import { User } from "@/lib/types";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type UserProps = {
  userId: string;
};

export const UserCard = async (props: UserProps) => {
  try {
    const user: User = await getUser(props.userId);
    return (
      <ul className="m-4 p-4 bg-zinc-200 rounded-md text-black">
        <p>ID: {user.id}</p>
        <p>アカウント名: {user.username}</p>
        <p>概要: {user.bio === null ? "記載がありません" : user.bio}</p>
      </ul>
    );
  } catch (error) {
    notFound();
  }
};
