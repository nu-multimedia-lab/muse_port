import { ArticleCard } from "@/components/elements/ArticleCard";
import { getAllArticles } from "@/lib/apis/article";
import { Article } from "@/lib/types";
import Link from "next/link";

export const ArticleList = async () => {
  const articles: Article[] = await getAllArticles();

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link key={article.id} href={`/works/${article.id}`}>
            <ArticleCard
              id={article.id}
              userId={article.user_id}
              title={article.title}
              tags={article.tags}
              content={article.content}
              createdAt={article.created_at}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
