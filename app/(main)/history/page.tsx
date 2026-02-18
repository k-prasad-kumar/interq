import { History } from "@/components/interview/history";
import {
  fetchInterviewHistory,
  fetchInterviewsCount,
} from "@/lib/actions/interview-actions";
import { MockInterviewHistory } from "@/types/interview";

const page = async ({
  searchParams,
}: {
  searchParams: { q: string; page: string };
}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";

  const count = await fetchInterviewsCount();
  const history = await fetchInterviewHistory(q, page);
  return (
    <div className="w-full max-w-7xl mx-auto mt-5 px-4 gap-8 flex flex-col">
      <History
        count={count as number}
        history={history as MockInterviewHistory[]}
      />
    </div>
  );
};
export default page;
