import { WorkHeader } from "./elements/WorkHeader";
import { WorkContent } from "./elements/WorkContent";
import { WorkFooter } from "./elements/WorkFooter";
import { ISODateString } from "@/lib/types";

type WorkDetailPresentationProps = {
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
 * 作品詳細のプレゼンテーションコンポーネント
 * データを受け取り、適切に表示します
 */
export const WorkDetailPresentation = (props: WorkDetailPresentationProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* 作品ヘッダー */}
      <WorkHeader
        title={props.title}
        authorId={props.authorId}
        authorName={props.authorName}
        authorImgSrc={props.authorImgSrc}
        createdAt={props.createdAt}
        tags={props.tags}
      />

      {/* 作品本文 */}
      <WorkContent content={props.content} />

      {/* フッターナビゲーション */}
      <WorkFooter id={props.id} />
    </div>
  );
};
