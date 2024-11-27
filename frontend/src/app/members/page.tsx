import { AllUsers } from "@/app/members/AllUsers";
import Loading from "@/app/members/loading";
import React, { Suspense } from "react";

const MembersPage = () => {
  return (
    <main>
      <div className="min-h-screen grid place-items-center bg-neutral-50 dark:bg-neutral-900">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-extrabold mt-24">Members</h1>
          <Suspense fallback={<Loading />}>
            <AllUsers />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default MembersPage;
