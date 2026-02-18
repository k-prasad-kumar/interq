import NotFound from "@/app/not-found";
import { InterviewFeedback } from "@/components/interview/interview-feedback";
import { fetchMockInterview } from "@/lib/actions/interview-actions";
import { MockInterview } from "@/types/interview";
import { currentUser } from "@clerk/nextjs/server";

const page = async ({ params }: { params: Promise<{ mockId: string }> }) => {
  const mockId = (await params).mockId;

  const user = await currentUser();

  // 1. Fetch the data (returns Prisma type)
  const interviewData = await fetchMockInterview(mockId);

  // 2. Handle 404
  if (!interviewData) return <NotFound />;

  // 3. Type Assertion (The Fix)
  // We cast to 'unknown' first, then to your strict 'MockInterview' type.
  // This tells TS: "Trust me, the JSON in the DB matches this structure."
  const interview = interviewData as unknown as MockInterview;

  return <InterviewFeedback userImage={user!.imageUrl} interview={interview} />;
};
export default page;
