import { WorkCard } from "./elements/WorkCard";
import { Work } from "@/lib/types";
import Link from "next/link";

type WorkListPresentationProps = {
  works: Work[];
};

export const WorkListPresentation = ({ works }: WorkListPresentationProps) => {
  if (!works || works.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {works.map((work) => (
          <Link key={work.id} href={`/works/${work.id}`} className="block">
            <WorkCard
              id={work.id}
              userId={work.user_id}
              title={work.title}
              tags={work.tags ?? null} // work.tags が undefined の場合に null を設定
              createdAt={work.created_at}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
