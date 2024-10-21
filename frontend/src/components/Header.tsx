import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed w-full h-24 flex justify-between items-center px-16 bg-neutral-300 dark:bg-neutral-800">
      <Link href="/" className="font-bold text-xl">
        MUSE PORT
      </Link>
      <div className="flex items-center gap-4">
        <nav>
          <ul className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/debug">Debug</Link>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};
