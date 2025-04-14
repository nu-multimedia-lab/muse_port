import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

type ArticleDetailProps = {
  id: string;
  title: string;
  content: string;
  tags: string[] | null;
  createdAt: Date;
  authorId: string;
  authorName: string;
  authorImgSrc?: string;
};

export const ArticleDetailElement = (props: ArticleDetailProps) => {
  // Format the date for display
  const formattedDate = new Date(props.createdAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // Process content for display (split by paragraphs)
  const paragraphs = props.content.split("\n").filter((p) => p.trim() !== "");

  return (
    <div className="grid grid-cols-1 gap-6 p-8 rounded-3xl shadow-md border-2 bg-white dark:bg-neutral-900 w-full max-w-3xl mx-auto">
      {/* タイトルと著者情報 */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-black">{props.title}</h1>

        <div className="flex items-center gap-4">
          <Link
            href={`/members/${props.authorId}`}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Avatar className="h-12 w-12 border-2">
              <AvatarImage src={props.authorImgSrc} />
              <AvatarFallback className="text-lg uppercase">
                {props.authorName[0] + (props.authorName[1] || "")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{props.authorName}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                @{props.authorId}
              </p>
            </div>
          </Link>

          <div className="ml-auto text-sm text-neutral-500 dark:text-neutral-400">
            {formattedDate}
          </div>
        </div>

        {props.tags && props.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {props.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* 記事本文 */}
      <div className="p-6 rounded-lg bg-neutral-100 dark:bg-neutral-800">
        <div className="prose dark:prose-invert max-w-none">
          {paragraphs.map((paragraph, idx) => (
            <p key={idx} className="my-4 whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* フッター */}
      <div className="flex justify-between items-center text-sm text-neutral-500 dark:text-neutral-400 border-t pt-4 border-neutral-200 dark:border-neutral-700">
        <Link
          href="/works"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← 作品一覧に戻る
        </Link>
        <span>ID: {props.id}</span>
      </div>
    </div>
  );
};
