import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* 記事ヘッダー */}
      <div className="mb-10">
        <Skeleton className="h-10 w-5/6 mb-6" />

        <div className="flex items-center mb-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div>
              <Skeleton className="h-5 w-32 mb-1" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Skeleton className="h-5 w-32" />
        </div>

        {/* タグ */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
      </div>

      {/* 記事本文 */}
      <div className="space-y-6 mb-16">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-16 w-4/5" />
      </div>

      {/* フッターナビゲーション */}
      <div className="flex justify-between items-center py-4 border-t border-neutral-200 dark:border-neutral-700">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-5 w-20" />
      </div>
    </div>
  );
};

export default Loading;
