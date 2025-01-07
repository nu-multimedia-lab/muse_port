import { Article, ArticleCreate, ArticleUpdate } from "@/lib/types";
import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: `${process.env.BACKEND_API_URL}/articles`,
});

const getAllArticles = async (): Promise<Article[]> => {
  const res: Article[] = await apiClient.get("/").then((res) => res.data);
  return res;
};

const getArticle = async (id: string): Promise<Article> => {
  const res: Article = await apiClient.get(`/${id}`).then((res) => res.data);
  return res;
};

const createArticle = async (data: ArticleCreate): Promise<Article> => {
  const res: Article = await apiClient.post("/", data).then((res) => res.data);
  return res;
};

const updateArticle = async (
  id: string,
  data: ArticleUpdate
): Promise<Article> => {
  const res: Article = await apiClient
    .put(`/${id}`, data)
    .then((res) => res.data);
  return res;
};

const deleteArticle = async (id: string): Promise<Article> => {
  const res: Article = await apiClient.delete(`/${id}`).then((res) => res.data);
  return res;
};

export {
  getAllArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};
