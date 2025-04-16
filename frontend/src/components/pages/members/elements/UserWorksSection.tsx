import { ArticleCard } from "@/components/pages/articles/elements/ArticleCard";
import { getArticlesByUserId } from "@/lib/apis/article";
import { Article } from "@/lib/types";
import Link from "next/link";

type UserWorksSectionProps = {
  userId: string;
};

export const UserWorksSection = async ({ userId }: UserWorksSectionProps) => {
  let articles: Article[] = [];

  try {
    const fetchedArticles = await getArticlesByUserId(userId);
    articles = fetchedArticles;
  } catch (error) {
    console.error(`Failed to fetch works for user ${userId}:`, error);
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-500 dark:text-neutral-400">
          投稿した作品がありません
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
  );
};
