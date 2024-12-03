import { MemberList } from "@/app/members/MemberList";
import Loading from "@/app/members/loading";
import React, { Suspense } from "react";

export const dynamic = "force-dynamic";

const MembersPage = () => {
  return (
    <main>
      <div className="min-h-screen py-32">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-extrabold mx-auto">Members</h1>
          <div className="mx-auto">
            <Suspense fallback={<Loading />}>
              <MemberList />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MembersPage;
