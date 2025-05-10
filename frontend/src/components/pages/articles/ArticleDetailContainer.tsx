import { ArticleDetailPresentation } from "./ArticleDetailPresentation";
import { getArticle } from "@/lib/apis/article";
import { getUser } from "@/lib/apis/user";
import { Article, User } from "@/lib/types";

type ArticleDetailContainerProps = {
  workId: string;
};

export const ArticleDetailContainer = async ({
  workId,
}: ArticleDetailContainerProps) => {
  const article: Article = await getArticle(workId);
  let author: User | null = null;

  try {
    author = await getUser(article.user_id);
  } catch (error) {
    // Continue even if we can't get the author
    console.error("Failed to fetch author:", error);
  }

  return (
    <ArticleDetailPresentation
      id={article.id}
      title={article.title}
      content={article.content}
      tags={article.tags ?? null}
      createdAt={article.created_at} // Dateオブジェクトではなく文字列として渡す
      authorId={article.user_id}
      authorName={author?.username || "Unknown Author"}
      authorImgSrc={undefined} // 将来的に著者のアバター画像を実装できるようにしておく
    />
  );
};
