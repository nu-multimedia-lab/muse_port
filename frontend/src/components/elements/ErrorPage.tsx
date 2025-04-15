import { Button } from "@/components/ui/button";
import { WarningCircle } from "@phosphor-icons/react";
import Link from "next/link";

type ErrorPageProps = {
  title: string;
  description: string;
  resetLabel?: string;
  reset?: () => void;
  backHref?: string;
  backLabel?: string;
};

export function ErrorPage({
  title,
  description,
  resetLabel = "再試行する",
  reset,
  backHref,
  backLabel,
}: ErrorPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        <WarningCircle size={64} className="text-red-500 mb-6 mx-auto" />
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {reset && (
            <Button onClick={reset} variant="default" size="lg">
              {resetLabel}
            </Button>
          )}
          {backHref && (
            <Button variant="outline" size="lg" asChild>
              <Link href={backHref}>{backLabel || "戻る"}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
