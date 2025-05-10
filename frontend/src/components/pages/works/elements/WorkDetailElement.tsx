import { WorkContent } from "./WorkContent";
import { WorkFooter } from "./WorkFooter";
import { WorkHeader } from "./WorkHeader";
import { ISODateString } from "@/lib/types";

type WorkDetailElementProps = {
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
 * 作品詳細を表示するエレメントコンポーネント
 * ヘッダー、本文、フッターに分割して表示します
 */
export const WorkDetailElement: React.FC<WorkDetailElementProps> = ({
  id,
  title,
  content,
  tags,
  createdAt,
  authorId,
  authorName,
  authorImgSrc,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* 作品ヘッダー */}
      <WorkHeader
        title={title}
        authorId={authorId}
        authorName={authorName}
        authorImgSrc={authorImgSrc}
        createdAt={createdAt}
        tags={tags}
      />

      {/* 作品本文 */}
      <WorkContent content={content} />

      {/* フッターナビゲーション */}
      <WorkFooter id={id} />
    </div>
  );
};
