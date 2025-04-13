"use client";

import * as React from "react";
import { Moon, Sun, Desktop, Check } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun
            size={32}
            weight="bold"
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Moon
            size={32}
            weight="bold"
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">表示テーマの切り替え</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>テーマを切り替える</DropdownMenuLabel>
        <hr className="my-1 border-t border-gray-200 dark:border-gray-700" />
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun size={16} className="mr-2" />
          ライト
          {theme === "light" && (
            <span className="ml-auto text-xs">
              <Check size={16} />
            </span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon size={16} className="mr-2" />
          ダーク
          {theme === "dark" && (
            <span className="ml-auto text-xs">
              <Check size={16} />
            </span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Desktop size={16} className="mr-2" />
          自動
          {theme === "system" && (
            <span className="ml-auto text-xs">
              <Check size={16} />
            </span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
