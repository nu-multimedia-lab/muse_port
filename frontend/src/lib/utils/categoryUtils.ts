import {
  GameController,
  PaintBrush,
  Cube,
  MusicNotes,
  Code,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";

// アイコンのマッピング
export const iconComponents = {
  GameController,
  PaintBrush,
  Cube,
  MusicNotes,
  Code,
  VideoCamera,
};

// 色のマッピングオブジェクト
export const colorClasses = {
  red: {
    bg: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/60 dark:to-red-800",
    text: "text-red-500 dark:text-red-300",
    hover: "group-hover:text-red-500 dark:group-hover:text-red-300",
  },
  blue: {
    bg: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/60 dark:to-blue-800",
    text: "text-blue-500 dark:text-blue-300",
    hover: "group-hover:text-blue-500 dark:group-hover:text-blue-300",
  },
  green: {
    bg: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/60 dark:to-green-800",
    text: "text-green-500 dark:text-green-300",
    hover: "group-hover:text-green-500 dark:group-hover:text-green-300",
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/60 dark:to-purple-800",
    text: "text-purple-500 dark:text-purple-300",
    hover: "group-hover:text-purple-500 dark:group-hover:text-purple-300",
  },
  amber: {
    bg: "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/60 dark:to-amber-800",
    text: "text-amber-500 dark:text-amber-300",
    hover: "group-hover:text-amber-500 dark:group-hover:text-amber-300",
  },
  rose: {
    bg: "bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/60 dark:to-rose-800",
    text: "text-rose-500 dark:text-rose-300",
    hover: "group-hover:text-rose-500 dark:group-hover:text-rose-300",
  },
};

// 色名の型定義
export type ColorName = keyof typeof colorClasses;

// アイコン名の型定義
export type IconName = keyof typeof iconComponents;
