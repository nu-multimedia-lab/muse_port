import axios from "axios";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Article = {
  id: number;
  title: string;
  content: string;
};

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
    .get("http://127.0.0.1:8000/articles")
    .then((res) => res.data);
  return res;
};
