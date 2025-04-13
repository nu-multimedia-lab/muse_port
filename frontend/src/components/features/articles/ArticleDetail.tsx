import { ArticleDetail } from "@/components/elements/ArticleDetail";
import { getArticle } from "@/lib/apis/article";
import { getUser } from "@/lib/apis/user";
import { Article, User } from "@/lib/types";
import { notFound } from "next/navigation";

type WorkProps = {
  workId: string;
};

export const WorkDetail = async (props: WorkProps) => {
  try {
    const article: Article = await getArticle(props.workId);
    let author: User | null = null;

    try {
      author = await getUser(article.user_id);
    } catch (error) {
      // Continue even if we can't get the author
      console.error("Failed to fetch author:", error);
    }

    return (
      <ArticleDetail
        id={article.id}
        title={article.title}
        content={article.content}
        tags={article.tags}
        createdAt={article.created_at}
        authorId={article.user_id}
        authorName={author?.username || "Unknown Author"}
      />
    );
  } catch (error) {
    notFound();
  }
};
