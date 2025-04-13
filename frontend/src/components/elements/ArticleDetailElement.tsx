import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type ArticleDetailProps = {
  id: string;
  title: string;
  content: string;
  tags: string[] | null;
  createdAt: Date;
  authorId: string;
  authorName: string;
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
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col gap-4">
          <CardTitle className="text-2xl font-bold">{props.title}</CardTitle>

          <div className="flex items-center justify-between">
            <Link
              href={`/members/${props.authorId}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span className="font-medium">{props.authorName}</span> (@
              {props.authorId})
            </Link>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              {formattedDate}
            </span>
          </div>

          {props.tags && props.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {props.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent>
        <div className="prose dark:prose-invert max-w-none">
          {paragraphs.map((paragraph, idx) => (
            <p key={idx} className="my-4">
              {paragraph}
            </p>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-end">
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          ID: {props.id}
        </div>
      </CardFooter>
    </Card>
  );
};
