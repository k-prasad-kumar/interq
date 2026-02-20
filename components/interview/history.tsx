import { Card, CardContent } from "@/components/ui/card";
import { getRelativeTime } from "@/lib/get-relative-time";
import { MockInterviewHistory } from "@/types/interview";
import { CodeIcon } from "lucide-react";
import Link from "next/link";
import { PaginationPage } from "../pagination";

export const History = ({
  count,
  history,
}: {
  count: number;
  history: MockInterviewHistory[];
}) => {
  const handleScoreColor = (score: number): string => {
    if (score >= 70 && score <= 100) {
      return "bg-green-500";
    } else if (score >= 50 && score < 70) {
      return "bg-yellow-500";
    } else if (score >= 30 && score < 50) {
      return "bg-orange-500";
    } else if (score < 30 && score > 0) {
      return "bg-red-500";
    }

    return "text-slate-500";
  };
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Interview History
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Review and analyze your past mock interview sessions.
        </p>
      </div>
      <Card className="p-0">
        <CardContent className="p-0">
          <div className="overflow-hidden">
            {/* <!-- Table Header --> */}
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-200 dark:border-slate-600 bg-slate-100 dark:bg-background/10 text-xs font-semibold text-grey-500 uppercase tracking-wider">
              <div className="col-span-5 md:col-span-4">Session Name</div>
              <div className="col-span-3 md:col-span-2 hidden md:block">
                Date
              </div>
              <div className="col-span-3 md:col-span-2 text-center">Status</div>
              <div className="col-span-2 md:col-span-2 text-center">Score</div>
              <div className="col-span-2 text-right">Action</div>
            </div>

            {history.length === 0 && (
              <div className="p-4 text-sm text-slate-500 dark:text-slate-400 text-center">
                No activity found
              </div>
            )}
            {/* <!-- Row 1 --> */}
            {history &&
              history.map((item) => (
                <div
                  className="grid grid-cols-12 gap-4 p-4 items-center border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                  key={item.id}
                >
                  <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <CodeIcon size={14} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white text-sm">
                        {item.jobPosition}
                      </p>
                      <p className="text-xs text-slate-500">
                        {item.jobExperience}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-3 md:col-span-2 hidden md:block text-sm text-slate-500">
                    {getRelativeTime(item.createdAt)}
                  </div>
                  <div className="col-span-3 md:col-span-2 flex justify-center">
                    {item.status && item.status === "COMPLETED" && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        {item.status}
                      </span>
                    )}
                    {item.status && item.status === "IN_PROGRESS" && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                        {item.status}
                      </span>
                    )}
                  </div>
                  <div className="col-span-2 text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {item.status && item.status === "COMPLETED"
                          ? item.overallScore
                          : "-"}
                      </span>
                      <div
                        className={`w-12 bg-slate-200 dark:bg-slate-700 rounded-full h-1 mt-1 ${item.status && item.status === "IN_PROGRESS" && "hidden"}`}
                      >
                        <div
                          className={`${item.overallScore && handleScoreColor(item.overallScore)} h-1 rounded-full`}
                          style={{ width: `${item.overallScore}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 flex justify-end">
                    {item.status && item.status === "COMPLETED" && (
                      <Link
                        href={`/interview/feedback/${item.id}`}
                        className="text-xs font-medium text-primary border border-primary/20 hover:bg-primary/5 rounded px-3 py-1.5 transition-colors"
                      >
                        View
                      </Link>
                    )}
                    {item.status && item.status === "IN_PROGRESS" && (
                      <Link
                        href={`/interview-room/${item.id}`}
                        className="text-xs font-medium text-white bg-primary hover:bg-primary-dark rounded px-3 py-1.5 transition-colors shadow-sm shadow-primary/30"
                      >
                        Resume
                      </Link>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      <PaginationPage
        count={count}
        itemsPerPage={Number(process.env.NEXT_PUBLIC_ITEMS_PER_PAGE) || 5}
      />
    </div>
  );
};
