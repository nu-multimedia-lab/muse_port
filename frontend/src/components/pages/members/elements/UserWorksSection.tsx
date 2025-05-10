import { WorkCard } from "@/components/pages/works/elements/WorkCard";
import { getWorksByUserId } from "@/lib/apis/work";
import { Work } from "@/lib/types";
import Link from "next/link";

type UserWorksSectionProps = {
  userId: string;
};

export const UserWorksSection = async ({ userId }: UserWorksSectionProps) => {
  let works: Work[] = [];

  try {
    const fetchedWorks = await getWorksByUserId(userId);
    works = fetchedWorks;
  } catch (error) {
    console.error(`Failed to fetch works for user ${userId}:`, error);
  }

  if (works.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-neutral-500 dark:text-neutral-400">
          まだ投稿された作品はありません。
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {works.map((work) => (
        <Link key={work.id} href={`/works/${work.id}`}>
          <WorkCard
            id={work.id}
            userId={work.user_id}
            title={work.title}
            tags={work.tags ?? null}
            createdAt={work.created_at}
          />
        </Link>
      ))}
    </div>
  );
};
