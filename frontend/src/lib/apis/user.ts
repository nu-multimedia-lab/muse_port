import { User, UserCreate, UserUpdate } from "@/lib/types";
import { api, API_ENDPOINTS } from "@/lib/apis/apiClient";

/**
 * 全ユーザー情報を取得する
 */
export const getAllUsers = async (): Promise<User[]> => {
  return api.get<User[]>(API_ENDPOINTS.USERS);
};

/**
 * 指定したIDのユーザー情報を取得する
 */
export const getUser = async (id: string): Promise<User> => {
  return api.get<User>(`${API_ENDPOINTS.USERS}/${id}`);
};

/**
 * 新しいユーザーを作成する
 */
export const createUser = async (data: UserCreate): Promise<User> => {
  return api.post<User, UserCreate>(API_ENDPOINTS.USERS, data);
};

/**
 * ユーザー情報を更新する
 */
export const updateUser = async (
  id: string,
  data: UserUpdate
): Promise<User> => {
  return api.put<User, UserUpdate>(`${API_ENDPOINTS.USERS}/${id}`, data);
};

/**
 * ユーザーを削除する
 */
export const deleteUser = async (id: string): Promise<User> => {
  return api.delete<User>(`${API_ENDPOINTS.USERS}/${id}`);
};
