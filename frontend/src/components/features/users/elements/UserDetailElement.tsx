"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@phosphor-icons/react";

type UserDetailProps = {
  id: string;
  username: string;
  bio: string | null;
  imgSrc: string | undefined;
  joinedAt?: Date;
};

export const UserDetailElement = (props: UserDetailProps) => {
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
            {props.username[0] + (props.username[1] || "")}
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
        {/* タブナビゲーション (現在は単一タブのみ) */}
        <div className="flex border-b">
          <div className="py-2 px-4 font-medium">プロフィール</div>
        </div>

        {/* プロフィール内容 */}
        <div className="p-6">
          {/* 自己紹介 */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-3">自己紹介</h2>
            <p className="whitespace-pre-line text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {props.bio == null ? "記述なし" : props.bio}
            </p>
          </div>
        </div>
      </div>

      {/* フッター情報 */}
      <div className="mt-6 text-sm text-neutral-500 dark:text-neutral-400 text-right">
        ID: {props.id}
      </div>
    </div>
  );
};
