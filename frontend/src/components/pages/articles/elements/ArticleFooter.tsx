import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

type ArticleFooterProps = {
  id: string;
  backLinkHref?: string; // デフォルトは "/works"
  backLinkLabel?: string; // デフォルトは "記事一覧に戻る"
};

/**
 * 記事詳細のフッター部分を表示するコンポーネント
 * 戻るリンクとIDを表示
 */
export const ArticleFooter = (props: ArticleFooterProps) => {
  const backLinkHref = props.backLinkHref || "/works";
  const backLinkLabel = props.backLinkLabel || "記事一覧に戻る";

  return (
    <div className="flex justify-between items-center py-4 border-t border-neutral-200 dark:border-neutral-700">
      <Link
        href={backLinkHref}
        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        <ArrowLeft weight="bold" className="inline" /> {backLinkLabel}
      </Link>
      <span className="text-sm text-neutral-500 dark:text-neutral-400">
        ID: {props.id}
      </span>
    </div>
  );
};
