"use client";

import { ModeToggle } from "@/components/elements/ModeToggle";
import { Button } from "@/components/ui/button";
import { UsersThree, House, Cube, AnchorSimple } from "@phosphor-icons/react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed w-full h-24 z-50 flex justify-between items-center px-16 bg-neutral-300 dark:bg-neutral-800">
      <Link href="/" className="font-bold text-xl flex gap-2 items-center">
        <AnchorSimple size={32} weight="bold" className="text-blue-600" />
        MUSE PORT
        <div className="text-sm">ベータ版</div>
      </Link>
      <div className="flex items-center gap-4">
        <nav>
          <ul className="flex">
            <Button variant="link" asChild>
              <Link href="/">
                <House weight="bold" />
                ホーム
              </Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/members">
                <UsersThree weight="bold" />
                部員紹介
              </Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/works">
                <Cube weight="bold" />
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
