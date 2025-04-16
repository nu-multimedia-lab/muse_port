import { UserCard } from "./elements/UserCard";
import { User } from "@/lib/types";
import Link from "next/link";

type UserListPresentationProps = {
  users: User[];
};

export const UserListPresentation = ({ users }: UserListPresentationProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {users.map((user) => (
          <Link key={user.id} href={`/members/${user.id}`}>
            <UserCard
              imgSrc={undefined}
              userId={user.id}
              userName={user.username}
              bio={user.bio ?? null}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
