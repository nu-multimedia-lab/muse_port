import { PostCard } from "@/components/PostCard";
import { PostCardSkeleton } from "@/components/skeleton/PostCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { Article, fetchArticles, fetchPosts, Post } from "@/lib/api";
import React, { Suspense } from "react";

const Articles = async () => {
  const articles: Article[] = await fetchArticles();

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </li>
      ))}
    </ul>
  );
};

const Posts = async () => {
  const posts: Post[] = await fetchPosts();

  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map((post: Post) => (
        <PostCard
          key={post.id}
          id={post.id}
          userId={post.userId}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
};

const Debug = async () => {
  return (
    <main>
      <div className="h-screen grid place-items-center bg-neutral-50 dark:bg-neutral-900">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-6xl font-extrabold">開発者デバッグ用ページ</h1>
          <p className="text-xl font-medium">開発者デバック用のページです。</p>
          <p className="text-xl font-medium font-mono">
            This page is for debugging.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 p-16">
        <h1 className="text-4xl font-extrabold">Articles</h1>
        <Suspense fallback={<Skeleton className="w-64 h-16 bg-amber-400" />}>
          <Articles />
        </Suspense>
      </div>
      <div className="grid gap-8 p-16 bg-zinc-100 dark:bg-neutral-800">
        <h1 className="text-4xl font-extrabold">Dummy Posts</h1>
        <Suspense fallback={<PostCardSkeleton />}>
          <Posts />
        </Suspense>
      </div>
    </main>
  );
};

export default Debug;
