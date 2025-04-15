"use client";

import { Button } from "@/components/ui/button";
import { WarningCircle } from "@phosphor-icons/react";
import { useEffect } from "react";

export default function WorksError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Works section error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <WarningCircle size={64} className="text-red-500 mb-6 mx-auto" />
        <h1 className="text-2xl font-bold mb-4">
          作品の読み込みに失敗しました
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          申し訳ありませんが、作品データの取得中にエラーが発生しました。インターネット接続を確認し、再試行してください。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} variant="default" size="lg">
            再試行する
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/">ホームに戻る</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
