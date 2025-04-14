"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Link from "next/link";
import { WarningCircle } from "@phosphor-icons/react";

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
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        <WarningCircle size={64} className="text-red-500 mb-6 mx-auto" />
        <h1 className="text-2xl font-bold mb-4">作品の詳細を表示できません</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          申し訳ありませんが、この作品の詳細情報を取得できませんでした。作品が存在しないか、一時的なエラーが発生している可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} variant="default" size="lg">
            再試行する
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/works">作品一覧に戻る</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
