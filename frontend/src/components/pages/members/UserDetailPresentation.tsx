"use client";

import { Suspense } from "react";
import { UserProfileHeader } from "./elements/UserProfileHeader";
import { UserWorksSection } from "./elements/UserWorksSection";
import { Skeleton } from "@/components/ui/skeleton";
import { ISODateString } from "@/lib/types";

type UserDetailPresentationProps = {
  id: string;
  username: string;
  bio: string | null;
  imgSrc: string | undefined;
  joinedAt?: ISODateString;
};

export const UserDetailPresentation = (props: UserDetailPresentationProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* ヘッダー情報 */}
      <UserProfileHeader
        id={props.id}
        username={props.username}
        imgSrc={props.imgSrc}
        joinedAt={props.joinedAt}
      />

      {/* プロフィール情報 */}
      <div className="mb-12 border rounded-lg p-6 bg-white dark:bg-neutral-900">
        <h2 className="text-xl font-medium mb-4">自己紹介</h2>
        <p className="whitespace-pre-line text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {props.bio == null ? "記述なし" : props.bio}
        </p>
      </div>

      {/* 投稿作品 */}
      <div className="border rounded-lg p-6 bg-white dark:bg-neutral-900">
        <h2 className="text-xl font-medium mb-6">投稿作品</h2>
        <Suspense fallback={<WorksLoadingFallback />}>
          <UserWorksSection userId={props.id} />
        </Suspense>
      </div>

      {/* フッター情報 */}
      <div className="mt-6 text-sm text-neutral-500 dark:text-neutral-400 text-right">
        ID: {props.id}
      </div>
    </div>
  );
};

// ローディング表示用のコンポーネント
const WorksLoadingFallback = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="border rounded-lg overflow-hidden">
          <Skeleton className="h-40 w-full" />
          <div className="p-4">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-3" />
            <div className="flex gap-2">
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
