import { Article, Post } from "@/lib/type";
import axios from "axios";

export const fetchPosts = async (): Promise<Post[]> => {
  const res: Post[] = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
  return res;
};

export const fetchPostById = async (id: number): Promise<Post> => {
  const res: Post = await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.data);
  return res;
};

export const fetchArticles = async (): Promise<Article[]> => {
  const res: Article[] = await axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/articles/`)
    .then((res) => res.data);
  return res;
};
