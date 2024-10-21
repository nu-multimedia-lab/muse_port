import React from "react";

const Debug = () => {
  return (
    <main className="min-h-screen grid place-items-center bg-zinc-200 dark:bg-zinc-900">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-6xl font-extrabold">開発者デバッグ用ページ</h1>
        <p className="text-xl font-medium">開発者デバック用のページです。</p>
        <p className="text-xl font-medium font-mono">
          This page is for debugging.
        </p>
      </div>
    </main>
  );
};

export default Debug;
