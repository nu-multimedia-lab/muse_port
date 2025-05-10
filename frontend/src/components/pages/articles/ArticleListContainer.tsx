import { ArticleListPresentation } from "./ArticleListPresentation";
import { getAllArticles } from "@/lib/apis/article";
import { Article } from "@/lib/types";

export const ArticleListContainer = async () => {
  const articles: Article[] = await getAllArticles();

  return <ArticleListPresentation articles={articles} />;
};
