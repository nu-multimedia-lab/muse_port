import { WorkDetailPresentation } from "./WorkDetailPresentation";
import { getWork } from "@/lib/apis/work";
import { Work, User } from "@/lib/types";
import { getUser } from "@/lib/apis/user";

type WorkDetailContainerProps = {
  workId: string;
};

export const WorkDetailContainer = async ({
  workId,
}: WorkDetailContainerProps) => {
  const work: Work = await getWork(workId);
  let author: User | null = null;

  if (work && work.user_id) {
    author = await getUser(work.user_id);
  }

  if (!work) {
    return <div>作品が見つかりませんでした。</div>;
  }

  return (
    <WorkDetailPresentation
      id={work.id}
      title={work.title}
      content={work.content}
      tags={work.tags ?? null}
      createdAt={work.created_at} // Dateオブジェクトではなく文字列として渡す
      authorId={work.user_id}
      authorName={author?.username ?? "不明なユーザー"} // name を username に変更
      authorImgSrc={author?.avatar_url ?? undefined} // img を avatar_url に変更
    />
  );
};
