import Link from "next/link";

export const FooterLinks = () => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">コンテンツ</h3>
      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
        <li>
          <Link href="/" className="hover:text-blue-600 transition-colors">
            ホーム
          </Link>
        </li>
        <li>
          <Link href="/works" className="hover:text-blue-600 transition-colors">
            作品一覧
          </Link>
        </li>
        <li>
          <Link
            href="/members"
            className="hover:text-blue-600 transition-colors"
          >
            部員紹介
          </Link>
        </li>
      </ul>
    </div>
  );
};
