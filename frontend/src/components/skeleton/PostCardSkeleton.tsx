import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const PostCardSkeleton = () => {
  return (
    <Card className="rounded-3xl">
      <CardHeader>
        <Skeleton className="w-full aspect-video rounded-2xl mb-4" />
        <CardTitle>
          <Skeleton className="w-5/6 h-8 mb-2" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className="w-1/2 h-4 mb-2" />
        <Skeleton className="w-1/3 h-4 mb-2" />
        <Skeleton className="w-1/4 h-4 mb-2" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-4">
          <Skeleton className="h-16 aspect-square rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-8 w-1/4" />
      </CardFooter>
    </Card>
  );
};
