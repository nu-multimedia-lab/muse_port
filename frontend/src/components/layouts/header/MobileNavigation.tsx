"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UsersThree, House, Cube } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation = ({
  isOpen,
  onClose,
}: MobileNavigationProps) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
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
            onClick={onClose}
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
            onClick={onClose}
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
            onClick={onClose}
          >
            <Link href="/works">
              <Cube weight="bold" className="mr-2" />
              作品一覧
            </Link>
          </Button>
        </ul>
      </nav>
    </div>
  );
};
