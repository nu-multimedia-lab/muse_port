"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Calendar, User } from "@phosphor-icons/react";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

type ArticleDetailProps = {
  id: string;
  title: string;
  content: string;
  tags: string[] | null;
  createdAt: Date;
  authorId: string;
  authorName: string;
  authorImgSrc?: string;
};

export const ArticleDetailElement = (props: ArticleDetailProps) => {
  // Format the date for display
  const formattedDate = new Date(props.createdAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Process content for display (split by paragraphs)
  const paragraphs = props.content.split("\n").filter((p) => p.trim() !== "");

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* 記事ヘッダー */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-6 leading-tight">{props.title}</h1>

        <div className="flex items-center mb-4">
          <Link
            href={`/members/${props.authorId}`}
            className="flex items-center gap-3 group"
          >
            <Avatar className="h-12 w-12">
              <AvatarImage src={props.authorImgSrc} />
              <AvatarFallback className="text-sm uppercase">
                <User size={24} />
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {props.authorName}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                @{props.authorId}
              </p>
            </div>
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-6">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* タグ */}
        {props.tags && props.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {props.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-neutral-50 dark:bg-neutral-800 px-3 py-1"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* 記事本文 */}
      <article className="prose dark:prose-invert max-w-none mb-16">
        {paragraphs.map((paragraph, idx) => (
          <p key={idx} className="mb-6 leading-relaxed whitespace-pre-line">
            {paragraph}
          </p>
        ))}
      </article>

      {/* フッターナビゲーション */}
      <div className="flex justify-between items-center py-4 border-t border-neutral-200 dark:border-neutral-700">
        <Link
          href="/works"
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft weight="bold" className="inline" /> 記事一覧に戻る
        </Link>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          ID: {props.id}
        </span>
      </div>
    </div>
  );
};
