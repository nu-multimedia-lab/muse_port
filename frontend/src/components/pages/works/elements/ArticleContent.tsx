import React from "react";

type WorkContentProps = {
  content: string;
};

/**
 * 記事本文を表示するコンポーネント
 * テキストを段落に分けて表示します
 */
export const WorkContent: React.FC<WorkContentProps> = ({ content }) => {
  // Process content for display (split by paragraphs)
  const paragraphs = content.split("\n").filter((p) => p.trim() !== "");

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
