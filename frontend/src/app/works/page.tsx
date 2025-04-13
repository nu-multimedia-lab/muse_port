import { WorkList } from "@/app/works/WorkList";
import Loading from "@/app/works/loading";
import React, { Suspense } from "react";

export const dynamic = "force-dynamic";

const WorksPage = () => {
  return (
    <main>
      <div className="min-h-screen py-32">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-extrabold mx-auto">Works</h1>
          <div className="mx-auto">
            <Suspense fallback={<Loading />}>
              <WorkList />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorksPage;
