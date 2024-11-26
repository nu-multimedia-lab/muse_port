import { fetchUsers } from "@/lib/api";
import { User } from "@/lib/type";

export const Users = async () => {
  try {
    const users: User[] = await fetchUsers();
    return (
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="m-4 p-4 bg-zinc-200 rounded-md text-black"
          >
            <h2>id: {user.id}</h2>
            <h2>username: {user.username}</h2>
            <p>bio: {user.bio === null ? "なし" : user.bio}</p>
          </li>
        ))}
      </ul>
    );
  } catch (error) {
    return <p>データの取得に失敗しました</p>;
  }
};
