import { Work, WorkCreate, WorkUpdate } from "@/lib/types";
import { api, API_ENDPOINTS } from "@/lib/apis/apiClient";

/**
 * 全作品を取得する
 */
export const getAllWorks = async (): Promise<Work[]> => {
  return api.get<Work[]>(API_ENDPOINTS.WORKS);
};

/**
 * 指定したIDの作品を取得する
 */
export const getWork = async (id: string): Promise<Work> => {
  return api.get<Work>(`${API_ENDPOINTS.WORKS}/${id}`);
};

/**
 * 指定したユーザーIDの作品を取得する
 */
export const getWorksByUserId = async (userId: string): Promise<Work[]> => {
  return api.get<Work[]>(`${API_ENDPOINTS.WORKS}/?user_id=${userId}`);
};

/**
 * 新しい作品を作成する
 */
export const createWork = async (data: WorkCreate): Promise<Work> => {
  return api.post<Work, WorkCreate>(API_ENDPOINTS.WORKS, data);
};

/**
 * 作品を更新する
 */
export const updateWork = async (
  id: string,
  data: WorkUpdate
): Promise<Work> => {
  return api.put<Work, WorkUpdate>(`${API_ENDPOINTS.WORKS}/${id}`, data);
};

/**
 * 作品を削除する
 */
export const deleteWork = async (id: string): Promise<Work> => {
  return api.delete<Work>(`${API_ENDPOINTS.WORKS}/${id}`);
};
