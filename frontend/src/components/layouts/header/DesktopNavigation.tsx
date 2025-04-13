"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UsersThree, House, Cube } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

export const DesktopNavigation = () => {
  const pathname = usePathname();

  return (
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
  );
};
