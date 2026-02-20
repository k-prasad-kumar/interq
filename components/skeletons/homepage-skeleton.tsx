import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { RecentSkeleton } from "./recent-skeleton";

export const HomepageSkeleton = () => {
  return (
    <main className="w-full max-w-7xl mx-auto mt-5 px-4 gap-8 flex flex-col">
      <section>
        <Card>
          <CardContent>
            <div className="flex flex-col lg:flex-row lg:justify-around items-center">
              <div className="w-full lg:w-3/5 order-2 lg:order-1">
                <Skeleton className="h-8 w-40 rounded-full my-2" />
                <Skeleton className="w-full h-14 my-3" />
                <Skeleton className="h-5 w-full my-3" />
                <Skeleton className="h-5 w-full mb-8" />

                <div className="flex items-center gap-2 md:gap-4">
                  <Skeleton className="w-40 h-10" />
                  <Skeleton className="w-40 h-10" />
                </div>
              </div>
              <div className="w-full lg:w-2/5 lg:flex justify-center order-1 lg:order-2 hidden">
                <Skeleton className="w-80 h-64" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="group relative overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Skeleton className="w-12 h-10" />
              <Skeleton className="w-40 h-7" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="w-40 h-10" />
            <Skeleton className="w-50 h-6 mt-4" />
            <Skeleton className="absolute right-0 top-0 w-12 h-12 m-4 block md:hidden lg:block" />
          </CardContent>
        </Card>
        <Card className="group relative overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Skeleton className="w-12 h-10" />
              <Skeleton className="w-40 h-7" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="w-40 h-10" />
            <Skeleton className="w-50 h-6 mt-4" />
            <Skeleton className="absolute right-0 top-0 w-12 h-12 m-4 block md:hidden lg:block" />
          </CardContent>
        </Card>
        <Card className="group relative overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Skeleton className="w-12 h-10" />
              <Skeleton className="w-40 h-7" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="w-40 h-10" />
            <Skeleton className="w-50 h-6 mt-4" />
            <Skeleton className="absolute right-0 top-0 w-12 h-12 m-4 block md:hidden lg:block" />
          </CardContent>
        </Card>
      </section>
      <section>
        <RecentSkeleton />
      </section>
    </main>
  );
};
