import { User } from "@/lib/type";
import axios from "axios";

export const fetchUsers = async (): Promise<User[]> => {
  const res: User[] = await axios
    .get(`${process.env.BACKEND_API_URL}/users/`)
    .then((res) => res.data);

  return res;
};
