import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Cube, User } from "@phosphor-icons/react/dist/ssr";

type ArticleCardProps = {
  id: string;
  userId: string;
  title: string;
  tags: string[] | null;
  content: string;
  createdAt: Date;
};

export const ArticleCard = (props: ArticleCardProps) => {
  // Format the date for display
  const formattedDate = new Date(props.createdAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col h-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all duration-300">
      {/* サムネイル画像エリア - アスペクト比を保持 */}
      <div className="w-full aspect-[16/9] bg-secondary relative">
        <div className="absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-500">
          <Cube size={48} />
        </div>
      </div>

      {/* コンテンツエリア - 残りの高さを占める */}
      <div className="flex flex-col flex-grow p-5">
        {/* タイトルのみ表示 - 常に2行まで表示 */}
        <h3 className="text-xl font-bold mb-3 break-words">{props.title}</h3>

        {/* タグエリア - タグが存在しない場合は「タグ未設定」と表示 */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {props.tags && props.tags.length > 0 ? (
              props.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))
            ) : (
              <Badge variant="outline" className="text-xs text-neutral-500">
                タグ未設定
              </Badge>
            )}
          </div>
        </div>

        {/* 投稿者情報と日付 - 常に下部に表示 */}
        {/* 将来的にユーザーのプロフィール画像や名前を表示する */}
        <div className="flex items-center gap-3 mt-auto pt-3 border-t border-neutral-100 dark:border-neutral-800">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs bg-neutral-200 dark:bg-neutral-700">
              <User size={16} />
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="text-sm font-medium">@{props.userId}</div>
            <div className="text-xs text-neutral-500">{formattedDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
