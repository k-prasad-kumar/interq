import { History } from "@/components/interview/history";
import {
  fetchInterviewHistory,
  fetchInterviewsCount,
} from "@/lib/actions/interview-actions";
import { MockInterviewHistory } from "@/types/interview";
import { Suspense } from "react";
import Loading from "./loading";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) => {
  const { q = "", page: page = "1" } = await searchParams;

  const countResult = await fetchInterviewsCount();
  const count = typeof countResult === "number" ? countResult : 0;
  const history = (await fetchInterviewHistory(q, page)) ?? [];

  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full max-w-7xl mx-auto mt-5 px-4 gap-8 flex flex-col">
        <History count={count} history={history as MockInterviewHistory[]} />
      </div>
    </Suspense>
  );
};
export default page;
