import { useState } from "react";
import { UserProfileHeader } from "./UserProfileHeader";
import { ProfileTabs } from "./ProfileTabs";
import { UserWorksSection } from "./UserWorksSection";
import { ISODateString } from "@/lib/types";

type UserDetailProps = {
  id: string;
  username: string;
  bio: string | null;
  imgSrc: string | undefined;
  joinedAt?: ISODateString;
};

/**
 * ユーザー詳細情報を表示するコンポーネント
 * クライアントサイドでのタブ切り替えに対応したバージョン
 */
export const UserDetailElement = (props: UserDetailProps) => {
  const [activeTab, setActiveTab] = useState<"profile" | "works">("profile");

  // タブコンテンツを定義
  const tabs = [
    {
      id: "profile",
      label: "プロフィール",
      content: (
        <div>
          <h2 className="text-lg font-medium mb-3">自己紹介</h2>
          <p className="whitespace-pre-line text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {props.bio == null ? "記述なし" : props.bio}
          </p>
        </div>
      ),
    },
    {
      id: "works",
      label: "投稿作品",
      content: (
        <div>
          <h2 className="text-lg font-medium mb-4">投稿作品</h2>
          <UserWorksSection userId={props.id} />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* ヘッダー情報 */}
      <UserProfileHeader
        id={props.id}
        username={props.username}
        imgSrc={props.imgSrc}
        joinedAt={props.joinedAt}
      />

      {/* メイン情報とタブ */}
      <ProfileTabs
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab as "profile" | "works")}
        tabs={tabs}
      />

      {/* フッター情報 */}
      <div className="mt-6 text-sm text-neutral-500 dark:text-neutral-400 text-right">
        ID: {props.id}
      </div>
    </div>
  );
};
