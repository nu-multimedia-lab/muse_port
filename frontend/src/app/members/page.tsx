import Loading from "@/app/members/loading";
import { Suspense } from "react";
import { UsersThree } from "@phosphor-icons/react/dist/ssr";
import { UserListContainer } from "@/components/pages/members/UserListContainer";

export const dynamic = "force-dynamic";

const MembersPage = () => {
  return (
    <main>
      <div className="py-32 md:py-40">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              <UsersThree className="inline-block mr-2" />
              部員紹介
            </h1>
          </div>
          <Suspense fallback={<Loading />}>
            <UserListContainer />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default MembersPage;
