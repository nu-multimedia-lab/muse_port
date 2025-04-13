import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

  // Create a summary from the content (first 100 characters)
  const summary =
    props.content.length > 100
      ? `${props.content.substring(0, 100)}...`
      : props.content;

  return (
    <Card className="w-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
      <CardHeader>
        <div className="flex flex-col gap-2">
          <CardTitle className="text-xl font-bold">{props.title}</CardTitle>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            投稿者: @{props.userId} • {formattedDate}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-700 dark:text-neutral-300">{summary}</p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {props.tags &&
            props.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
        </div>
      </CardFooter>
    </Card>
  );
};
