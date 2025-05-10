"use client";

import { ErrorPage } from "@/components/common/ErrorPage";
import { useEffect } from "react";

export default function MemberDetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Member detail error:", error);
  }, [error]);

  return (
    <ErrorPage
      title="メンバー情報を表示できません"
      description="申し訳ありませんが、このメンバーの情報を取得できませんでした。メンバーが存在しないか、一時的なエラーが発生している可能性があります。"
      reset={reset}
      backHref="/members"
      backLabel="メンバー一覧に戻る"
    />
  );
}
