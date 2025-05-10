import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* ヘッダー情報 */}
      <div className="flex flex-col items-center text-center mb-8 pt-6">
        <Skeleton className="h-24 w-24 rounded-full mb-4" />
        <Skeleton className="h-8 w-40 mb-1" />
        <Skeleton className="h-4 w-36 mt-1" />
      </div>

      {/* プロフィール情報 */}
      <div className="mb-12 border rounded-lg p-6 bg-white dark:bg-neutral-900">
        <Skeleton className="h-7 w-32 mb-4" /> {/* 自己紹介タイトル */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
        </div>
      </div>

      {/* 投稿作品 */}
      <div className="border rounded-lg p-6 bg-white dark:bg-neutral-900">
        <Skeleton className="h-7 w-32 mb-6" /> {/* 投稿作品タイトル */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <Skeleton className="h-40 w-full" />
              <div className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-3" />
                <div className="flex gap-2">
                  <Skeleton className="h-5 w-16 rounded-full" />
                  <Skeleton className="h-5 w-16 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* フッター情報 */}
      <div className="mt-6 text-sm text-neutral-500 dark:text-neutral-400 text-right">
        <Skeleton className="h-4 w-20 ml-auto" />
      </div>
    </div>
  );
};

export default Loading;
