import { User } from "@/lib/types";
import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: `${process.env.BACKEND_API_URL}/users`,
});

const getAllUsers = async (): Promise<User[]> => {
  const res: User[] = await apiClient.get("/").then((res) => res.data);
  return res;
};

const getUser = async (id: string): Promise<User> => {
  const res: User = await apiClient.get(`/${id}`).then((res) => res.data);
  return res;
};

const createUser = async (data: User): Promise<User> => {
  const res: User = await apiClient.post("/", data).then((res) => res.data);
  return res;
};

const updateUser = async (id: string, data: User): Promise<User> => {
  const res: User = await apiClient.put(`/${id}`, data).then((res) => res.data);
  return res;
};

const deleteUser = async (id: string): Promise<User> => {
  const res: User = await apiClient.delete(`/${id}`).then((res) => res.data);
  return res;
};

export { getAllUsers, getUser, createUser, updateUser, deleteUser };
