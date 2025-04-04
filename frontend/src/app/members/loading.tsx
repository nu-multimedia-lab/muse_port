import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="">
      {[...Array(16)].map((_, index) => (
        <Skeleton key={index} className="w-[560px] h-[240px] mx-auto mt-8" />
      ))}
    </div>
  );
};
export default Loading;
