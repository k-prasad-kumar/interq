import { Homepage } from "@/components/home/homepage";
import {
  fetchDashboardStats,
  fetchInterviewHistory,
} from "@/lib/actions/interview-actions";
import { Suspense } from "react";
import Loading from "./loading";
import { DashboardStats } from "@/types/interview";

export default async function Page() {
  const [stats, history] = await Promise.all([
    fetchDashboardStats(),
    fetchInterviewHistory("", "1"),
  ]);

  if (!stats) return null; // or redirect to sign-in

  return (
    <Suspense fallback={<Loading />}>
      <Homepage stats={stats as DashboardStats} history={history ?? []} />
    </Suspense>
  );
}
