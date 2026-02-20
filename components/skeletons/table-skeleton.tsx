import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const TableSkeleton = () => {
  return (
    <div>
      <Card className="p-0">
        <CardContent className="p-0">
          <div className="overflow-hidden">
            <div className="grid grid-cols-5 gap-2 sm:gap-4 md:gap-4 lg:gap-14 p-4 border-b">
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
            </div>
            <div className="grid grid-cols-5 gap-2 sm:gap-4 md:gap-4 lg:gap-14 p-4">
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
            </div>
            <div className="grid grid-cols-5 gap-2 sm:gap-4 md:gap-4 lg:gap-14 p-4">
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
            </div>
            <div className="grid grid-cols-5 gap-2 sm:gap-4 md:gap-4 lg:gap-14 p-4">
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
            </div>
            <div className="grid grid-cols-5 gap-2 sm:gap-4 md:gap-4 lg:gap-14 p-4">
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
            </div>
            <div className="grid grid-cols-5 gap-2 sm:gap-4 md:gap-4 lg:gap-14 p-4">
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
