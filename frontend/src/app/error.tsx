"use client";

import { ErrorPage } from "@/components/elements/ErrorPage";
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
    <ErrorPage
      title="何か問題が発生しました"
      description="申し訳ありませんが、ページの読み込み中にエラーが発生しました。再試行するか、問題が続く場合は管理者にお問い合わせください。"
      reset={reset}
      backHref="/"
      backLabel="ホームに戻る"
    />
  );
}
