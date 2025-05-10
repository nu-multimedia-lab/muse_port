"use client";

import { ErrorPage } from "@/components/common/ErrorPage";
import { useEffect } from "react";

export default function WorkDetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Work detail error:", error);
  }, [error]);

  return (
    <ErrorPage
      title="作品の詳細を表示できません"
      description="申し訳ありませんが、この作品の詳細情報を取得できませんでした。作品が存在しないか、一時的なエラーが発生している可能性があります。"
      reset={reset}
      backHref="/works"
      backLabel="作品一覧に戻る"
    />
  );
}
