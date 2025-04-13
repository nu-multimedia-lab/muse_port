import { UserCard } from "@/components/elements/UserCard";
import { getAllUsers } from "@/lib/apis/user";
import { User } from "@/lib/types";
import Link from "next/link";

export const UserList = async () => {
  try {
    const users: User[] = await getAllUsers();

    return (
      <div className="grid grid-cols-1 gap-8 w-[640px]">
        {users.map((user) => (
          <div key={user.id}>
            <Link href={`/members/${user.id}`}>
              <UserCard
                imgSrc={undefined}
                userId={user.id}
                userName={user.username}
                bio={user.bio}
              />
            </Link>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return (
      <div>
        <p>情報の取得に失敗しました。</p>
        <p>復旧までしばらくお待ちください。</p>
      </div>
    );
  }
};
