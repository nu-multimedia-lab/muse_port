import Loading from "@/app/works/[workId]/loading";
import { ArticleDetail } from "@/components/features/articles/ArticleDetail";
import React, { Suspense } from "react";

const WorkPage = ({ params }: { params: { workId: string } }) => {
  const workId: string = params.workId;

  return (
    <div className="min-h-screen py-32">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-extrabold mx-auto">Work Detail</h1>
        <div className="mx-auto w-full max-w-3xl px-4">
          <Suspense fallback={<Loading />}>
            <ArticleDetail workId={workId} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
