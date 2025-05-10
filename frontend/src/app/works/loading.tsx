import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col h-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm"
          >
            {/* サムネイルスケルトン */}
            <Skeleton className="w-full aspect-[16/9]" />

            {/* コンテンツスケルトン */}
            <div className="p-5">
              <Skeleton className="h-7 w-4/5 mb-4" />
              <div className="flex flex-wrap gap-2 mb-4">
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-5 w-20 rounded-full" />
                <Skeleton className="h-5 w-12 rounded-full" />
              </div>
              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 mt-auto">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div>
                    <Skeleton className="h-4 w-24 mb-1" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
