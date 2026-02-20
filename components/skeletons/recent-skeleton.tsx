import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";
import { TableSkeleton } from "./table-skeleton";

export const RecentSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
      {/* <!-- Recent Activity List (Left 2/3) --> */}
      <div className="lg:col-span-2 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="w-50 h-8" />
          <Skeleton className="w-20 h-8" />
        </div>
        <TableSkeleton />
      </div>
      {/* <!-- Side Widgets (Right 1/3) --> */}
      <div className="space-y-6">
        {/* <!-- Skill Distribution --> */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              <Skeleton className="w-50 h-8" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* <!-- Skill 1 --> */}
              <div>
                <div className="flex justify-between mb-1">
                  <Skeleton className="w-40 h-5" />
                  <Skeleton className="w-10 h-5" />
                </div>
                <Skeleton className="w-full h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <Skeleton className="w-40 h-5" />
                  <Skeleton className="w-10 h-5" />
                </div>
                <Skeleton className="w-full h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <Skeleton className="w-40 h-5" />
                  <Skeleton className="w-10 h-5" />
                </div>
                <Skeleton className="w-full h-2" />
              </div>
            </div>

            <Skeleton className="w-full h-10 mt-5" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
