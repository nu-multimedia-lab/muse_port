import { ArticleDetailElement } from "@/components/features/articles/elements/ArticleDetailElement";
import { getArticle } from "@/lib/apis/article";
import { getUser } from "@/lib/apis/user";
import { Article, User } from "@/lib/types";

type WorkDetailProps = {
  workId: string;
};

export const ArticleDetail = async (props: WorkDetailProps) => {
  const article: Article = await getArticle(props.workId);
  let author: User | null = null;

  try {
    author = await getUser(article.user_id);
  } catch (error) {
    // Continue even if we can't get the author
    console.error("Failed to fetch author:", error);
  }

  return (
    <ArticleDetailElement
      id={article.id}
      title={article.title}
      content={article.content}
      tags={article.tags ?? null}
      createdAt={new Date(article.created_at)}
      authorId={article.user_id}
      authorName={author?.username || "Unknown Author"}
      authorImgSrc={undefined} // 将来的に著者のアバター画像を実装できるようにしておく
    />
  );
};
