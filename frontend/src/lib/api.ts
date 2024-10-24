import axios from "axios";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
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
