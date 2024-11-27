import { getAllUsers } from "@/lib/apis/user";
import { User } from "@/lib/types";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const AllUsers = async () => {
  try {
    const users: User[] = await getAllUsers();
    return (
      <ul>
        {users.map((user) => (
          <div
            key={user.id}
            className="m-4 p-4 bg-zinc-200 rounded-md text-black"
          >
            <Link href={`/members/${user.id}`}>
              <h2>id: {user.id}</h2>
              <h2>username: {user.username}</h2>
              <p>bio: {user.bio === null ? "なし" : user.bio}</p>
            </Link>
          </div>
        ))}
      </ul>
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
