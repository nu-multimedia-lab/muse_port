import Loading from "@/app/members/[userId]/loading";
import { UserDetail } from "@/components/features/users/UserDetail";
import React, { Suspense } from "react";

const MemberPage = ({ params }: { params: { userId: string } }) => {
  const userId: string = params.userId;

  return (
    <div className="min-h-screen py-32">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-extrabold mx-auto">Member Detail</h1>
        <div className="mx-auto min-w-[720px]">
          <Suspense fallback={<Loading />}>
            <UserDetail userId={userId} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
