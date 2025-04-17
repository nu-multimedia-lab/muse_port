import { UserDetailPresentation } from "./UserDetailPresentation";
import { getUser } from "@/lib/apis/user";
import { User } from "@/lib/types";
import { UserWorksSection } from "./elements/UserWorksSection";
import { Suspense } from "react";
import { WorksLoadingFallback } from "./elements/WorksLoadingFallback";

type UserDetailContainerProps = {
  userId: string;
};

export const UserDetailContainer = async ({
  userId,
}: UserDetailContainerProps) => {
  // ユーザー情報を取得
  const user: User = await getUser(userId);

  return (
    <UserDetailPresentation
      id={user.id}
      username={user.username}
      bio={user.bio ?? null}
      imgSrc={undefined}
      joinedAt={user.created_at}
      worksComponent={
        <Suspense fallback={<WorksLoadingFallback />}>
          <UserWorksSection userId={userId} />
        </Suspense>
      }
    />
  );
};
