import { Homepage } from "@/components/home/homepage";
import {
  fetchDashboardStats,
  fetchInterviewHistory,
} from "@/lib/actions/interview-actions";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Page() {
  const stats = await fetchDashboardStats();
  const history = await fetchInterviewHistory("", "1");

  if (!stats) return null; // or redirect to sign-in

  return (
    <Suspense fallback={<Loading />}>
      <Homepage stats={stats} history={history ?? []} />;
    </Suspense>
  );
}
