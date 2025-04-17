import { ArticleHeader } from "./elements/ArticleHeader";
import { ArticleContent } from "./elements/ArticleContent";
import { ArticleFooter } from "./elements/ArticleFooter";
import { ISODateString } from "@/lib/types";

type ArticleDetailPresentationProps = {
  id: string;
  title: string;
  content: string;
  tags: string[] | null;
  createdAt: ISODateString; // Date型ではなく文字列型に変更
  authorId: string;
  authorName: string;
  authorImgSrc?: string;
};

/**
 * 記事詳細のプレゼンテーションコンポーネント
 * データを受け取り、適切に表示します
 */
export const ArticleDetailPresentation = (
  props: ArticleDetailPresentationProps
) => {
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
