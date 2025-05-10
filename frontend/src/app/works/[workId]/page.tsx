import Loading from "@/app/works/[workId]/loading";
import { ArticleDetailContainer } from "@/components/pages/articles/ArticleDetailContainer";
import { Suspense } from "react";

const WorkPage = async (props: { params: Promise<{ workId: string }> }) => {
  const params = await props.params;
  const workId: string = params.workId;

  return (
    <div className="min-h-screen py-32">
      <div className="flex flex-col gap-8">
        <div className="mx-auto w-full max-w-3xl px-4">
          <Suspense fallback={<Loading />}>
            <ArticleDetailContainer workId={workId} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
