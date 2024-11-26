import { User } from "@/lib/types";
import axios from "axios";

const UserApi = axios.create({
  baseURL: `${process.env.BACKEND_API_URL}/users`,
});

export const fetchUsers = async (): Promise<User[]> => {
  const res: User[] = await UserApi.get("/").then((res) => res.data);

  return res;
};
