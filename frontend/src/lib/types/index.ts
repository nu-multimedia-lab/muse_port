export type User = {
  id: string;
  created_at: Date;
  updated_at: Date;
  username: string;
  bio: string | null;
};

export type UserCreate = {
  username: string;
  bio: string | null;
};

export type UserUpdate = {
  username: string | null;
  bio: string | null;
};

export type Article = {
  id: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
  title: string;
  tags: string[] | null;
  content: string;
};

export type ArticleCreate = {
  user_id: string;
  title: string;
  tags: string[] | null;
  content: string;
};

export type ArticleUpdate = {
  title: string | null;
  tags: string[] | null;
  content: string | null;
};
