"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/elements/ModeToggle";
import {
  GithubLogo,
  InstagramLogo,
  DiscordLogo,
  XLogo,
  GlobeSimple,
} from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50/90 via-indigo-50/80 to-blue-50/90 dark:from-blue-950/90 dark:via-indigo-900/80 dark:to-blue-950/90 border-t border-blue-200 dark:border-blue-800/50">
      {/* メインフッターコンテンツ */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ロゴと説明 */}
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

          {/* リンク: コンテンツ */}
          <div>
            <h3 className="font-bold text-lg mb-4">コンテンツ</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-600 transition-colors"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="hover:text-blue-600 transition-colors"
                >
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

          {/* リンク: お問い合わせ */}
          <div>
            <h3 className="font-bold text-lg mb-4">ソーシャルリンク</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-4 mt-4">
                <a
                  href="https://ecml.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <GlobeSimple size={22} weight="bold" />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
                    Homepage
                  </span>
                </a>
                <a
                  href="https://x.com/ecmultiple"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <XLogo size={22} weight="bold" />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
                    X
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/nagasakidaigakuml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <InstagramLogo size={22} weight="bold" />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
                    Instagram
                  </span>
                </a>
                <a
                  href="https://github.com/nu-multimedia-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <GithubLogo size={22} weight="bold" />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
                    GitHub
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* コピーライトセクション */}
      <div className="border-t border-blue-200 dark:border-blue-800/50 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © 2024 MUSE PORT - 長崎大学マルチメディア研究会
          </p>
        </div>
      </div>
    </footer>
  );
};
