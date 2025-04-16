import Loading from "@/app/works/loading";
import { Suspense } from "react";
import { Cube } from "@phosphor-icons/react/dist/ssr";
import { ArticleListContainer } from "@/components/features/articles/ArticleListContainer";

export const dynamic = "force-dynamic";

const WorksPage = () => {
  return (
    <main>
      <div className="py-32 md:py-40">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              <Cube className="inline-block mr-2" />
              作品一覧
            </h1>
          </div>
          <Suspense fallback={<Loading />}>
            <ArticleListContainer />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default WorksPage;
