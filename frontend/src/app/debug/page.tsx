import { PostCard } from "@/components/PostCard";
import { PostCardSkeleton } from "@/components/skeleton/PostCardSkeleton";
import { fetchPosts, Post } from "@/lib/api";
import React, { Suspense } from "react";

const Debug = async () => {
  const posts: Post[] = await fetchPosts();

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
      <div className="grid grid-cols-3 gap-8 p-32 bg-zinc-100 dark:bg-neutral-800">
        <h1 className="col-span-3 text-4xl font-extrabold">Dummy Posts</h1>
        {posts.map((post) => (
          <Suspense fallback={<PostCardSkeleton />}>
            <PostCard
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          </Suspense>
        ))}
      </div>
    </main>
  );
};

export default Debug;
