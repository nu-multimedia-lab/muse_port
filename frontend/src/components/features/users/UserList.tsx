import { UserCard } from "@/components/elements/UserCard";
import { getAllUsers } from "@/lib/apis/user";
import { User } from "@/lib/types";
import Link from "next/link";

export const UserList = async () => {
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
};
