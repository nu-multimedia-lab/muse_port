import Loading from "@/app/members/[slug]/loading";
import { MemberDetail } from "@/app/members/[slug]/MemberDetail";
import React, { Suspense } from "react";

const MemberPage = ({ params }: { params: { slug: string } }) => {
  const userId: string = params.slug;

  return (
    <div className="min-h-screen py-32">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-extrabold mx-auto">Member Detail</h1>
        <div className="mx-auto min-w-[720px]">
          <Suspense fallback={<Loading />}>
            <MemberDetail userId={userId} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
