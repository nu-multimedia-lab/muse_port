"use client";

import { ModeToggle } from "@/components/elements/ModeToggle";
import { Button } from "@/components/ui/button";
import { UsersThree, House, Cube, AnchorSimple } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed w-full h-24 z-50 flex justify-between items-center px-16 backdrop-blur-md bg-gradient-to-r from-blue-50/90 via-indigo-50/80 to-blue-50/90 dark:from-blue-950/80 dark:via-indigo-900/70 dark:to-blue-950/80 border-b border-blue-200 dark:border-blue-800/50 shadow-sm">
      <Link
        href="/"
        className="font-bold text-xl flex gap-2 items-center hover:text-blue-600 transition-colors"
      >
        <AnchorSimple size={32} weight="bold" className="text-blue-600" />
        MUSE PORT
        <div className="text-sm px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
          ベータ版
        </div>
      </Link>
      <div className="flex items-center gap-4">
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
    </header>
  );
};
