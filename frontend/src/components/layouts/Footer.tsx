"use client";

import { ModeToggle } from "@/components/elements/ModeToggle";
import { FooterLogo } from "./footer/FooterLogo";
import { FooterLinks } from "./footer/FooterLinks";
import { SocialLinks } from "./footer/SocialLinks";
import { Copyright } from "./footer/Copyright";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50/90 via-indigo-50/80 to-blue-50/90 dark:from-blue-950/90 dark:via-indigo-900/80 dark:to-blue-950/90 border-t border-blue-200 dark:border-blue-800/50">
      {/* メインフッターコンテンツ */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ロゴと説明 */}
          <FooterLogo />

          {/* リンク: コンテンツ */}
          <FooterLinks />

          {/* リンク: ソーシャル */}
          <SocialLinks />
        </div>
      </div>

      {/* コピーライトセクション */}
      <div className="border-t border-blue-200 dark:border-blue-800/50 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <Copyright />
        </div>
      </div>
    </footer>
  );
};
