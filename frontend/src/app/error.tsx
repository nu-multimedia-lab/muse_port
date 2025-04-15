"use client";

import { Button } from "@/components/ui/button";
import { WarningCircle } from "@phosphor-icons/react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // ログ出力（実際のプロダクションでは適切なエラー追跡サービスに送信）
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <WarningCircle size={64} className="text-red-500 mb-6 mx-auto" />
        <h1 className="text-2xl font-bold mb-4">何か問題が発生しました</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          申し訳ありませんが、ページの読み込み中にエラーが発生しました。再試行するか、問題が続く場合は管理者にお問い合わせください。
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
