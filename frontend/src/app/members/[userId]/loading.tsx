import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* ヘッダー情報 */}
      <div className="flex flex-col items-center text-center mb-8 pt-6">
        <Skeleton className="h-24 w-24 rounded-full mb-4" />
        <Skeleton className="h-8 w-40 mb-1" />
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-4 w-36 mt-1" />
      </div>

      {/* メイン情報 */}
      <div className="border rounded-lg overflow-hidden">
        {/* タブナビゲーション */}
        <div className="flex border-b">
          <Skeleton className="h-10 w-24 ml-4 my-2" />
        </div>

        {/* プロフィール内容 */}
        <div className="p-6">
          {/* 自己紹介 */}
          <div className="mb-8">
            <Skeleton className="h-7 w-32 mb-3" />
            <div className="space-y-3">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5" />
            </div>
          </div>
        </div>
      </div>

      {/* フッター情報 */}
      <div className="mt-6 text-right">
        <Skeleton className="h-4 w-20 ml-auto" />
      </div>
    </div>
  );
};

export default Loading;
