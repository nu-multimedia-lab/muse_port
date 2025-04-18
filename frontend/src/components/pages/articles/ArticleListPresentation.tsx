import { ArticleCard } from "./elements/ArticleCard";
import { Article } from "@/lib/types";
import Link from "next/link";

type ArticleListPresentationProps = {
  articles: Article[];
};

export const ArticleListPresentation = ({
  articles,
}: ArticleListPresentationProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link key={article.id} href={`/works/${article.id}`}>
            <ArticleCard
              id={article.id}
              userId={article.user_id}
              title={article.title}
              tags={article.tags ?? null}
              content={article.content}
              createdAt={new Date(article.created_at)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
