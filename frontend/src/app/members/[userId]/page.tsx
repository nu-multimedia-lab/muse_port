import Loading from "@/app/members/[userId]/loading";
import { UserDetailContainer } from "@/components/features/users/UserDetailContainer";
import { Suspense } from "react";

const MemberPage = ({ params }: { params: { userId: string } }) => {
  const userId: string = params.userId;

  return (
    <div className="min-h-screen py-32">
      <div className="flex flex-col gap-8">
        <div className="mx-auto w-full max-w-3xl px-4">
          <Suspense fallback={<Loading />}>
            <UserDetailContainer userId={userId} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
