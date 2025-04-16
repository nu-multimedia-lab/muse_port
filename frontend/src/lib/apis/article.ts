import { Article, ArticleCreate, ArticleUpdate } from "@/lib/types";
import { api, API_ENDPOINTS } from "@/lib/apis/apiClient";

/**
 * 全記事を取得する
 */
export const getAllArticles = async (): Promise<Article[]> => {
  return api.get<Article[]>(API_ENDPOINTS.ARTICLES);
};

/**
 * 指定したIDの記事を取得する
 */
export const getArticle = async (id: string): Promise<Article> => {
  return api.get<Article>(`${API_ENDPOINTS.ARTICLES}/${id}`);
};

/**
 * 指定したユーザーIDの記事を取得する
 */
export const getArticlesByUserId = async (
  userId: string
): Promise<Article[]> => {
  return api.get<Article[]>(`${API_ENDPOINTS.ARTICLES}?user_id=${userId}`);
};

/**
 * 新しい記事を作成する
 */
export const createArticle = async (data: ArticleCreate): Promise<Article> => {
  return api.post<Article, ArticleCreate>(API_ENDPOINTS.ARTICLES, data);
};

/**
 * 記事を更新する
 */
export const updateArticle = async (
  id: string,
  data: ArticleUpdate
): Promise<Article> => {
  return api.put<Article, ArticleUpdate>(
    `${API_ENDPOINTS.ARTICLES}/${id}`,
    data
  );
};

/**
 * 記事を削除する
 */
export const deleteArticle = async (id: string): Promise<Article> => {
  return api.delete<Article>(`${API_ENDPOINTS.ARTICLES}/${id}`);
};
