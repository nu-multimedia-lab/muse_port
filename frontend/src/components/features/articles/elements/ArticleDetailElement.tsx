import { ArticleHeader } from "./ArticleHeader";
import { ArticleContent } from "./ArticleContent";
import { ArticleFooter } from "./ArticleFooter";

type ArticleDetailProps = {
  id: string;
  title: string;
  content: string;
  tags: string[] | null;
  createdAt: Date;
  authorId: string;
  authorName: string;
  authorImgSrc?: string;
};

/**
 * 記事詳細を表示するエレメントコンポーネント
 * ヘッダー、本文、フッターに分割して表示します
 */
export const ArticleDetailElement = (props: ArticleDetailProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* 記事ヘッダー */}
      <ArticleHeader
        title={props.title}
        authorId={props.authorId}
        authorName={props.authorName}
        authorImgSrc={props.authorImgSrc}
        createdAt={props.createdAt}
        tags={props.tags}
      />

      {/* 記事本文 */}
      <ArticleContent content={props.content} />

      {/* フッターナビゲーション */}
      <ArticleFooter id={props.id} />
    </div>
  );
};
