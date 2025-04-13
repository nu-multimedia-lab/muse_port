import Link from "next/link";
import { AnchorSimple } from "@phosphor-icons/react";

export const Logo = () => {
  return (
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
  );
};
