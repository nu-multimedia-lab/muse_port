"use client";

import { ErrorPage } from "@/components/common/ErrorPage";
import { useEffect } from "react";

export default function MembersError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Members section error:", error);
  }, [error]);

  return (
    <ErrorPage
      title="メンバー情報の読み込みに失敗しました"
      description="申し訳ありませんが、メンバーデータの取得中にエラーが発生しました。インターネット接続を確認し、再試行してください。"
      reset={reset}
      backHref="/"
      backLabel="ホームに戻る"
    />
  );
}
