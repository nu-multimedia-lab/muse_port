import Loading from "@/app/members/[slug]/loading";
import { UserCard } from "@/app/members/[slug]/UserCard";
import React, { Suspense } from "react";

const MemberPage = ({ params }: { params: { slug: string } }) => {
  const userId: string = params.slug;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold mt-24">Member Detail</h1>
      <Suspense fallback={<Loading />}>
        <UserCard userId={userId} />
      </Suspense>
    </div>
  );
};

export default MemberPage;
