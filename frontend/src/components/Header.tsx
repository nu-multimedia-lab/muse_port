import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed w-full h-24 z-50 flex justify-between items-center px-16 bg-neutral-300 dark:bg-neutral-800">
      <Link href="/" className="font-bold text-xl flex gap-2 items-center">
        <div className="w-8 h-8 rounded-full bg-blue-500" />
        MUSE PORT
      </Link>
      <div className="flex items-center gap-4">
        <nav>
          <ul className="flex">
            <Button variant="link" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/debug">Debug</Link>
            </Button>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};
