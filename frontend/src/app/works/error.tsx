"use client";

import { ErrorPage } from "@/components/common/ErrorPage";
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
    <ErrorPage
      title="作品の読み込みに失敗しました"
      description="申し訳ありませんが、作品データの取得中にエラーが発生しました。インターネット接続を確認し、再試行してください。"
      reset={reset}
      backHref="/"
      backLabel="ホームに戻る"
    />
  );
}
