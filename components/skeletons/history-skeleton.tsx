import { Skeleton } from "../ui/skeleton";
import { TableSkeleton } from "./table-skeleton";

export const HistorySkeleton = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-5 px-4 gap-8 flex flex-col">
      <div>
        <Skeleton className="h-8 w-60 my-2" />
        <Skeleton className="h-8 w-72 my-2" />
      </div>
      <TableSkeleton />
    </div>
  );
};
