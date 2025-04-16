import { UserListPresentation } from "./UserListPresentation";
import { getAllUsers } from "@/lib/apis/user";
import { User } from "@/lib/types";

export const UserListContainer = async () => {
  const users: User[] = await getAllUsers();

  return <UserListPresentation users={users} />;
};
