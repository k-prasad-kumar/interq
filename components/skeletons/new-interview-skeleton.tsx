import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const NewInterviewSkeleton = () => {
  return (
    <main className="w-full max-w-2xl animate-fade-in-up mx-auto mt-5 px-6">
      <section>
        <div className="flex flex-col gap-4 mb-8">
          <Skeleton className="w-80 h-8 mx-auto" />
          <Skeleton className="w-100 h-4 mx-auto" />
          <Skeleton className="w-80 h-4 mx-auto" />
        </div>
      </section>
      <section className="mb-14">
        <Card>
          <CardContent>
            <Skeleton className="h-1 w-full" />
            <div className="py-4 sm:py-6 md:py-8 space-y-8">
              {/* <!-- Job Position Input --> */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Skeleton className="w-40 h-6" />
                  <Skeleton className="w-20 h-6" />
                </div>
                <Skeleton className="w-full h-14" />
              </div>
              {/* <!-- Job Description Input --> */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Skeleton className="w-40 h-6" />
                  <Skeleton className="w-20 h-6" />
                </div>
                <Skeleton className="w-full h-40" />
              </div>
              {/* <!-- Resume Upload Dropzone --> */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Skeleton className="w-40 h-6" />
                  <Skeleton className="w-40 h-6" />
                </div>
                <Skeleton className="w-full h-40" />
              </div>
              {/* <!-- Difficulty Selector --> */}
              <div className="space-y-3">
                <Skeleton className="w-40 h-6" />
                <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-lg radio-group">
                  <Skeleton className="w-full h-20" />
                </div>
              </div>
              {/* <!-- Action Button --> */}
              <div className="pt-4">
                <Skeleton className="w-full h-14" />
                <Skeleton className="mx-auto w-1/2 h-5 mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};
