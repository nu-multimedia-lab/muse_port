import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

type WorkFooterProps = {
  id: string;
  backLinkHref?: string; // デフォルトは "/works"
  backLinkLabel?: string; // デフォルトは "作品一覧に戻る"
};

/**
 * 作品詳細のフッター部分を表示するコンポーネント
 * 戻るリンクとIDを表示
 */
export const WorkFooter = (props: WorkFooterProps) => {
  const backLinkHref = props.backLinkHref ?? "/works";
  const backLinkLabel = props.backLinkLabel ?? "作品一覧に戻る";

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
