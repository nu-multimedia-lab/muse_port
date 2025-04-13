import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="">
      {[...Array(8)].map((_, index) => (
        <Skeleton key={index} className="w-[640px] h-[160px] mx-auto mt-8" />
      ))}
    </div>
  );
};

export default Loading;
