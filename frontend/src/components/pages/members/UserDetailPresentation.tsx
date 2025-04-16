"use client";

import { Suspense, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { UserProfileHeader } from "./elements/UserProfileHeader";
import { ProfileTabs } from "./elements/ProfileTabs";
import { UserWorksSection } from "./elements/UserWorksSection";
import { Skeleton } from "@/components/ui/skeleton";

type UserDetailPresentationProps = {
  id: string;
  username: string;
  bio: string | null;
  imgSrc: string | undefined;
  joinedAt?: Date;
};

export const UserDetailPresentation = (props: UserDetailPresentationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab =
    (searchParams.get("tab") as "profile" | "works") || "profile";

  // タブ切り替え時にURLを更新
  const setActiveTab = useCallback(
    (tab: "profile" | "works") => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tab);
      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

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
          <Suspense fallback={<WorksLoadingFallback />}>
            <UserWorksSection userId={props.id} />
          </Suspense>
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
