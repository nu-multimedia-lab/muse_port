"use client";

import { useState } from "react";
import { ModeToggle } from "@/components/elements/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  UsersThree,
  House,
  Cube,
  AnchorSimple,
  List,
  X,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full h-16 md:h-20 lg:h-24 z-50 flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 backdrop-blur-md bg-gradient-to-r from-blue-50/90 via-indigo-50/80 to-blue-50/90 dark:from-blue-950/80 dark:via-indigo-900/70 dark:to-blue-950/80 border-b border-blue-200 dark:border-blue-800/50 shadow-sm">
      <Link
        href="/"
        className="font-bold text-lg md:text-xl flex gap-1 md:gap-2 items-center hover:text-blue-600 transition-colors"
      >
        <AnchorSimple
          size={24}
          weight="bold"
          className="text-blue-600 md:text-3xl"
        />
        MUSE PORT
        <div className="text-xs md:text-sm px-1 md:px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
          ベータ版
        </div>
      </Link>

      {/* モバイルメニューボタン */}
      <div className="flex md:hidden items-center gap-2">
        <ModeToggle />
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          aria-label="メニュー"
        >
          {isMenuOpen ? (
            <X size={24} weight="bold" />
          ) : (
            <List size={24} weight="bold" />
          )}
        </Button>
      </div>

      {/* デスクトップナビゲーション */}
      <div className="hidden md:flex items-center gap-4">
        <nav>
          <ul className="flex gap-1">
            <Button
              variant="ghost"
              asChild
              className={
                pathname === "/"
                  ? "bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  : ""
              }
            >
              <Link href="/">
                <House weight="bold" className="mr-2" />
                ホーム
              </Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className={
                pathname === "/members"
                  ? "bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  : ""
              }
            >
              <Link href="/members">
                <UsersThree weight="bold" className="mr-2" />
                部員紹介
              </Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className={
                pathname === "/works"
                  ? "bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  : ""
              }
            >
              <Link href="/works">
                <Cube weight="bold" className="mr-2" />
                作品一覧
              </Link>
            </Button>
          </ul>
        </nav>
        <ModeToggle />
      </div>

      {/* モバイルメニュー（ドロップダウン） */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 left-0 bg-white dark:bg-gray-950 border-b border-blue-200 dark:border-blue-800/50 shadow-lg">
          <nav className="p-4">
            <ul className="flex flex-col gap-2">
              <Button
                variant="ghost"
                asChild
                className={`justify-start w-full ${
                  pathname === "/"
                    ? "bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/">
                  <House weight="bold" className="mr-2" />
                  ホーム
                </Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className={`justify-start w-full ${
                  pathname === "/members"
                    ? "bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/members">
                  <UsersThree weight="bold" className="mr-2" />
                  部員紹介
                </Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className={`justify-start w-full ${
                  pathname === "/works"
                    ? "bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/works">
                  <Cube weight="bold" className="mr-2" />
                  作品一覧
                </Link>
              </Button>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
