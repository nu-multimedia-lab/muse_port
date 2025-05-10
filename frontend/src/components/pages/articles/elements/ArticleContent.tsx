import React from "react";

type ArticleContentProps = {
  content: string;
};

/**
 * 記事本文を表示するコンポーネント
 * テキストを段落に分けて表示します
 */
export const ArticleContent = (props: ArticleContentProps) => {
  // Process content for display (split by paragraphs)
  const paragraphs = props.content.split("\n").filter((p) => p.trim() !== "");

  return (
    <article className="prose dark:prose-invert max-w-none mb-16">
      {paragraphs.map((paragraph, idx) => (
        <p key={idx} className="mb-6 leading-relaxed whitespace-pre-line">
          {paragraph}
        </p>
      ))}
    </article>
  );
};
