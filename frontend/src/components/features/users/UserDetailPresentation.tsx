"use client";

import { useState, Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, User } from "@phosphor-icons/react";
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
  const [activeTab, setActiveTab] = useState<"profile" | "works">("profile");

  // Format the joined date if available
  const formattedDate = props.joinedAt
    ? new Date(props.joinedAt).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* ヘッダー情報 */}
      <div className="flex flex-col items-center text-center mb-8 pt-6">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src={props.imgSrc} />
          <AvatarFallback className="text-3xl uppercase">
            <User size={48} />
          </AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold mb-1">{props.username}</h1>
        <Badge variant="secondary">@{props.id}</Badge>　
        {formattedDate && (
          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            <Calendar size={16} className="mr-1" />
            <span>{formattedDate}から参加</span>
          </div>
        )}
      </div>

      {/* メイン情報 */}
      <div className="border rounded-lg overflow-hidden">
        {/* タブナビゲーション */}
        <div className="flex border-b">
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === "profile"
                ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                : "text-gray-500 hover:text-blue-500 transition-colors"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            プロフィール
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === "works"
                ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                : "text-gray-500 hover:text-blue-500 transition-colors"
            }`}
            onClick={() => setActiveTab("works")}
          >
            投稿作品
          </button>
        </div>

        {/* コンテンツエリア */}
        <div className="p-6">
          {activeTab === "profile" ? (
            <div>
              <h2 className="text-lg font-medium mb-3">自己紹介</h2>
              <p className="whitespace-pre-line text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {props.bio == null ? "記述なし" : props.bio}
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-medium mb-4">投稿作品</h2>
              <Suspense fallback={<WorksLoadingFallback />}>
                <UserWorksSection userId={props.id} />
              </Suspense>
            </div>
          )}
        </div>
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
