import { ArticleCard } from "@/components/elements/ArticleCard";
import { getAllArticles } from "@/lib/apis/article";
import { Article } from "@/lib/types";
import Link from "next/link";

export const WorkList = async () => {
  try {
    const articles: Article[] = await getAllArticles();

    return (
      <div className="grid grid-cols-1 gap-8 w-[640px]">
        {articles.map((article) => (
          <div key={article.id}>
            <Link href={`/works/${article.id}`}>
              <ArticleCard
                id={article.id}
                userId={article.user_id}
                title={article.title}
                tags={article.tags}
                content={article.content}
                createdAt={article.created_at}
              />
            </Link>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center">
        <p>情報の取得に失敗しました。</p>
        <p>復旧までしばらくお待ちください。</p>
      </div>
    );
  }
};
