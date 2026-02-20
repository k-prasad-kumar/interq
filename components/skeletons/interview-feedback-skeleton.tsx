import { Skeleton } from "../ui/skeleton";

export const InterviewFeedbackSkeleton = () => {
  return (
    <main className="w-full max-w-7xl mx-auto mt-5 px-4 gap-8 flex flex-col">
      <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <Skeleton className="w-50 h-8" />
          <Skeleton className="w-30 h-4 my-2" />
          <Skeleton className="w-40 h-5" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="w-full md:w-40 h-10" />
          <Skeleton className="w-full md:w-30 h-10" />
        </div>
      </section>

      <section className="grow max-w-7xl w-full mx-auto px-0 sm:px-2 md:px-4 lg:px-8 py-8 pb-32">
        {/* <!-- Score Overview --> */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* <!-- Circular Chart --> */}
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <Skeleton className="h-48 w-48 rounded-full" />
          </div>
          {/* <!-- Score Summary Text --> */}
          <div className="md:col-span-9 bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Skeleton className="w-14 h-6" />
              <Skeleton className="w-1/2 h-6" />
            </div>

            <Skeleton className="w-full h-4 my-2" />
            <Skeleton className="w-full h-4 my-2" />
            <Skeleton className="w-full h-4 my-2" />
            {/* <!-- Quick stats --> */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-700/50 pt-4">
              <div>
                <Skeleton className="w-24 sm:w-30 md:w-30 h-4" />
                <Skeleton className="w-24 sm:w-30 md:w-30 h-7 mt-2" />
              </div>
              <div>
                <Skeleton className="w-24 sm:w-30 md:w-30 h-4" />
                <Skeleton className="w-24 sm:w-30 md:w-30 h-7 mt-2" />
              </div>
              <div>
                <Skeleton className="w-24 sm:w-30 md:w-30 h-4" />
                <Skeleton className="w-24 sm:w-30 md:w-30 h-7 mt-2" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 2 Column Layout --> */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
          {/* <!-- Left Column: Feedback Analysis --> */}
          <div className="lg:col-span-5 space-y-6">
            {/* <!-- Strengths --> */}
            <div className="rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-3 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                <Skeleton className="w-50 h-7" />
              </div>
              <ul className="divide-y divide-slate-100 dark:divide-slate-800">
                <li className="p-4">
                  <div className="flex gap-3">
                    <Skeleton className="mt-1 shrink-0 w-2 h-2 rounded-full" />
                    <div className="w-full">
                      <Skeleton className="w-50 h-5" />
                      <div className="w-full">
                        <Skeleton className="w-full h-3 mt-2" />
                        <Skeleton className="w-full h-3 mt-2" />
                        <Skeleton className="w-full h-3 mt-2" />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="p-4">
                  <div className="flex gap-3">
                    <Skeleton className="mt-1 shrink-0 w-2 h-2 rounded-full" />
                    <div className="w-full">
                      <Skeleton className="w-50 h-5" />
                      <div className="w-full">
                        <Skeleton className="w-full h-3 mt-2" />
                        <Skeleton className="w-full h-3 mt-2" />
                        <Skeleton className="w-full h-3 mt-2" />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- Improvements --> */}
            <div className="rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-3 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                <Skeleton className="w-50 h-7" />
              </div>
              <ul className="divide-y divide-slate-100 dark:divide-slate-800">
                <li className="p-4">
                  <div className="flex gap-3">
                    <Skeleton className="mt-1 shrink-0 w-2 h-2 rounded-full" />
                    <div className="w-full">
                      <Skeleton className="w-50 h-5" />
                      <div className="w-full">
                        <Skeleton className="w-full h-3 mt-2" />
                        <Skeleton className="w-full h-3 mt-2" />
                        <Skeleton className="w-full h-3 mt-2" />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="p-4">
                  <div className="flex gap-3">
                    <Skeleton className="mt-1 shrink-0 w-2 h-2 rounded-full" />
                    <div className="w-full">
                      <Skeleton className="w-50 h-5" />
                      <div className="w-full">
                        <Skeleton className="w-full h-3 mt-2" />
                        <Skeleton className="w-full h-3 mt-2" />
                        <Skeleton className="w-full h-3 mt-2" />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Right Column: Transcript --> */}
          <div className="lg:col-span-7 flex flex-col h-200 bg-surface-light dark:bg-surface-dark rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* <!-- Transcript Header --> */}
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30 gap-2">
              <Skeleton className="w-50 h-7" />
              <div className="flex items-center gap-2">
                <Skeleton className="w-30 h-5 hidden md:block" />

                <Skeleton className="w-6 h-6 rounded-full" />
                <Skeleton className="w-20 h-2 rounded-full" />
                <Skeleton className="w-10 h-5" />
              </div>
            </div>
            {/* <!-- Scrollable Body --> */}
            <div className="grow overflow-y-auto px-3 md:px-6 py-4 md:py-6 space-y-6 custom-scrollbar">
              <span className="flex flex-col gap-4">
                {/* <!-- AI Message --> */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Skeleton className="w-8 h-8" />
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="flex items-center gap-2 mb-2">
                      <Skeleton className="w-40 h-5" />
                      <Skeleton className="w-10 h-4" />
                    </div>
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-full h-4" />
                  </div>
                </div>
                {/* <!-- User Message --> */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Skeleton className="w-9 h-9 rounded-full" />
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="flex items-center gap-2 mb-2">
                      <Skeleton className="w-14 h-5" />
                      <Skeleton className="w-10 h-4" />
                    </div>
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-full h-4 mb-2" />
                  </div>
                </div>
              </span>
              <span className="flex flex-col gap-4">
                {/* <!-- AI Message --> */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Skeleton className="w-8 h-8" />
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="flex items-center gap-2 mb-2">
                      <Skeleton className="w-40 h-5" />
                      <Skeleton className="w-10 h-4" />
                    </div>
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-full h-4" />
                  </div>
                </div>
                {/* <!-- User Message --> */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Skeleton className="w-9 h-9 rounded-full" />
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="flex items-center gap-2 mb-2">
                      <Skeleton className="w-14 h-5" />
                      <Skeleton className="w-10 h-4" />
                    </div>
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-full h-4 mb-2" />
                    <Skeleton className="w-full h-4 mb-2" />
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Sticky Footer --> */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-surface-light/80 dark:bg-surface-dark/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-4 px-4 z-10`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center">
            <Skeleton className="w-80 h-5" />
          </div>
          <div className="flex justify-center items-center gap-4 w-full md:w-auto md:justify-end">
            <Skeleton className="w-full md:w-50 h-11" />
            <Skeleton className="w-full md:w-50 h-11" />
          </div>
        </div>
      </div>
    </main>
  );
};
