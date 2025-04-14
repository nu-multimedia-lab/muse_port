import { UserCard } from "@/components/elements/UserCard";
import { getAllUsers } from "@/lib/apis/user";
import { User } from "@/lib/types";
import Link from "next/link";

export const UserList = async () => {
  try {
    const users: User[] = await getAllUsers();

    return (
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {users.map((user) => (
            <Link key={user.id} href={`/members/${user.id}`}>
              <UserCard
                imgSrc={undefined}
                userId={user.id}
                userName={user.username}
                bio={user.bio}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="p-8 bg-red-50 dark:bg-red-900/20 rounded-xl shadow-sm">
          <p className="text-xl font-semibold text-red-600 dark:text-red-400">
            情報の取得に失敗しました。
          </p>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            復旧までしばらくお待ちください。
          </p>
        </div>
      </div>
    );
  }
};
