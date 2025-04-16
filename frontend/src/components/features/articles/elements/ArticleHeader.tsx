import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Calendar, User } from "@phosphor-icons/react/dist/ssr";

type ArticleHeaderProps = {
  title: string;
  authorId: string;
  authorName: string;
  authorImgSrc?: string;
  createdAt: Date;
  tags: string[] | null;
};

/**
 * 記事詳細のヘッダー部分を表示するコンポーネント
 * タイトル、著者情報、投稿日、タグを表示
 */
export const ArticleHeader = (props: ArticleHeaderProps) => {
  // Format the date for display
  const formattedDate = new Date(props.createdAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold mb-6 leading-tight">{props.title}</h1>

      <div className="flex items-center mb-4">
        <Link
          href={`/members/${props.authorId}`}
          className="flex items-center gap-3 group"
        >
          <Avatar className="h-12 w-12">
            <AvatarImage src={props.authorImgSrc} />
            <AvatarFallback className="text-sm uppercase">
              <User size={24} />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {props.authorName}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              @{props.authorId}
            </p>
          </div>
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-6">
        <div className="flex items-center">
          <Calendar size={16} className="mr-1" />
          <span>{formattedDate}</span>
        </div>
      </div>

      {/* タグ */}
      {props.tags && props.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {props.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-neutral-50 dark:bg-neutral-800 px-3 py-1"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};
