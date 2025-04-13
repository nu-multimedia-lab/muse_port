"use client";

import { useState } from "react";
import { ModeToggle } from "@/components/elements/ModeToggle";
import { Button } from "@/components/ui/button";
import { List, X } from "@phosphor-icons/react";
import { Logo } from "./header/Logo";
import { DesktopNavigation } from "./header/DesktopNavigation";
import { MobileNavigation } from "./header/MobileNavigation";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full h-16 md:h-20 lg:h-24 z-50 flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 backdrop-blur-md bg-gradient-to-r from-blue-50/90 via-indigo-50/80 to-blue-50/90 dark:from-blue-950/80 dark:via-indigo-900/70 dark:to-blue-950/80 border-b border-blue-200 dark:border-blue-800/50 shadow-sm">
      <Logo />

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
        <DesktopNavigation />
        <ModeToggle />
      </div>

      {/* モバイルメニュー（ドロップダウン） */}
      <MobileNavigation
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
};
