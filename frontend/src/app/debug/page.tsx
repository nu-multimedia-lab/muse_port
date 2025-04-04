import { ConsoleDebug } from "@/app/debug/Console";
import React from "react";

export const dynamic = "force-dynamic";

const DebugPage = () => {
  return (
    <main>
      <div className="min-h-screen grid place-items-center bg-neutral-50 dark:bg-neutral-900">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-6xl font-extrabold">開発者デバッグ用ページ</h1>
          <p className="text-xl font-medium">開発者デバック用のページです。</p>
          <p className="text-xl font-medium font-mono">
            This page is for debugging.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 p-16">
        <h3 className="text-2xl font-bold">フェッチ検証用</h3>
        <p>現在は検証UIがありません</p>
        <ConsoleDebug />
      </div>
    </main>
  );
};

export default DebugPage;
