import { Homepage } from "@/components/home/homepage";
import {
  fetchDashboardStats,
  fetchInterviewHistory,
} from "@/lib/actions/interview-actions";
import { DashboardStats, MockInterviewHistory } from "@/types/interview";

export default async function Page() {
  const stats = await fetchDashboardStats();
  const history = await fetchInterviewHistory("", "1");

  return (
    <Homepage
      stats={stats as DashboardStats}
      history={history as MockInterviewHistory[]}
    />
  );
}
