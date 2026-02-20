import {
  ChartColumnIcon,
  CheckCircleIcon,
  FileUpIcon,
  PlayIcon,
  SparkleIcon,
  SparklesIcon,
  SquareActivityIcon,
  TrendingUpIcon,
  VideoIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { RecentAcivity } from "./recent-activity";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { DashboardStats, MockInterviewHistory } from "@/types/interview";
import { getRelativeTime } from "@/lib/get-relative-time";
import Image from "next/image";

export const Homepage = ({
  stats,
  history,
}: {
  stats: DashboardStats;
  history: MockInterviewHistory[];
}) => {
  return (
    <main className="w-full max-w-7xl mx-auto mt-5 px-4 gap-8 flex flex-col">
      <section>
        <Card>
          <CardContent>
            <div className="flex flex-col lg:flex-row lg:justify-around items-center">
              <div className="w-full lg:w-3/5 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold mb-4 border border-green-200 dark:border-green-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  System Online
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  Ready to ace your next interview,{" "}
                  <span className="text-primary">{stats.userName}?</span>
                </h1>
                <p className="text-slate-500 dark:text-slate-300 text-lg mb-8 max-w-lg">
                  Your AI coach is prepped with new questions. Choose a topic or
                  resume a previous session to level up your career.
                </p>
                <div className="flex items-center gap-2 md:gap-4">
                  <Button className="cursor-pointer" asChild>
                    <Link href={"/interview/new"}>
                      {" "}
                      <PlayIcon /> Start Interview
                    </Link>
                  </Button>
                  <Button
                    className="cursor-pointer"
                    variant={"outline"}
                    asChild
                  >
                    <Link href={"/interview/new"}>
                      <FileUpIcon /> Upload Resume
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="w-full lg:w-2/5 lg:flex justify-center order-1 lg:order-2 hidden">
                <Image src={"/hero.png"} alt="hero" width={300} height={200} />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="group relative overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-primary">
                <SquareActivityIcon />
              </span>
              Average Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900 dark:text-white">
                {stats.averageScore}
              </span>
              <span className="text-sm font-medium text-slate-400">/ 100</span>
            </div>
            <div className="mt-3 flex items-center text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded w-fit">
              <TrendingUpIcon size={14} /> &nbsp; +1.2 vs last week
            </div>
            <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <ChartColumnIcon size={50} />
            </div>
          </CardContent>
        </Card>
        <Card className="group relative overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-primary">
                <CheckCircleIcon />
              </span>
              Completed Interview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900 dark:text-white">
                {stats.completedInterviews} / {stats.totalInterviews}
              </span>
              <span className="text-sm font-medium text-slate-400">
                Interviews
              </span>
            </div>
            <div className="mt-3 flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded w-fit">
              Last Interview:{" "}
              {history.length > 0 && getRelativeTime(history[0].createdAt)}
            </div>
            <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <VideoIcon size={50} />
            </div>
          </CardContent>
        </Card>
        <Card className="group relative overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-primary">
                <SparklesIcon />
              </span>
              Top Skill
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900 dark:text-white">
                React
              </span>
            </div>
            <div className="mt-3 flex items-center text-xs font-medium text-primary bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded w-fit border border-indigo-100 dark:border-indigo-800">
              Frontend Development
            </div>
            <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <SparkleIcon size={50} />
            </div>
          </CardContent>
        </Card>
      </section>
      <section>
        <RecentAcivity history={history} />
      </section>
    </main>
  );
};
