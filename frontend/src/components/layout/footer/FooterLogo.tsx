import Link from "next/link";

export const FooterLogo = () => {
  return (
    <div className="col-span-1 md:col-span-1">
      <Link
        href="/"
        className="font-bold text-xl flex gap-1 items-center hover:text-blue-600 transition-colors mb-4"
      >
        MUSE PORT
      </Link>
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
        長崎大学マルチメディア研究会の創作ポータルサイト。部員たちの作品を自由に閲覧できるオンラインギャラリーです。
      </p>
    </div>
  );
};
