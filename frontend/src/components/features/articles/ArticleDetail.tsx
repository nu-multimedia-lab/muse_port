import { ArticleDetailElement } from "@/components/elements/ArticleDetailElement";
import { getArticle } from "@/lib/apis/article";
import { getUser } from "@/lib/apis/user";
import { Article, User } from "@/lib/types";
import { notFound } from "next/navigation";

type ArticleDetailProps = {
  articleId: string;
};

export const ArticleDetail = async (props: ArticleDetailProps) => {
  try {
    const article: Article = await getArticle(props.articleId);
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
