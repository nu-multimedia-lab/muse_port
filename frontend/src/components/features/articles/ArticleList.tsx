import { ArticleCard } from "@/components/elements/ArticleCard";
import { getAllArticles } from "@/lib/apis/article";
import { Article } from "@/lib/types";
import Link from "next/link";

export const ArticleList = async () => {
  try {
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
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="p-8 bg-red-50 dark:bg-red-900/20 rounded-xl shadow-sm">
          <p className="text-xl font-semibold text-red-600 dark:text-red-400">
            情報の取得に失敗しました。
          </p>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            復旧までしばらくお待ちください。
          </p>
        </div>
      </div>
    );
  }
};
