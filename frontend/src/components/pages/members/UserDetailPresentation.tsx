"use client";

import { UserProfileHeader } from "./elements/UserProfileHeader";
import { ISODateString } from "@/lib/types";

type UserDetailPresentationProps = {
  id: string;
  username: string;
  bio: string | null;
  imgSrc: string | undefined;
  joinedAt?: ISODateString;
  worksComponent: React.ReactNode; // サーバーコンポーネントを受け取るためのプロパティ
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
        {props.worksComponent}
      </div>

      {/* フッター情報 */}
      <div className="mt-6 text-sm text-neutral-500 dark:text-neutral-400 text-right">
        ID: {props.id}
      </div>
    </div>
  );
};
