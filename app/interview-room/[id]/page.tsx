import NotFound from "@/app/not-found";
import { InterviewRoom } from "@/components/interview/interview-room";
import { fetchMockInterviewQuestions } from "@/lib/actions/interview-actions";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const mockId = (await params).id;

  if (!mockId) return <NotFound />;

  // 1. Fetch Interview AND its Questions
  const questions = await fetchMockInterviewQuestions(mockId);

  // Security Check: If doesn't exist, kick them out
  if (!questions) {
    redirect("/");
  }
  return (
    <div className="bg-slate-900 text-white font-display w-full flex flex-col relative selection:bg-primary selection:text-white">
      <InterviewRoom mockId={mockId} questions={questions} />
    </div>
  );
};
export default page;
