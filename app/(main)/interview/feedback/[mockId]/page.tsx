import { InterviewFeedback } from "@/components/interview/interview-feedback";
import { fetchMockInterview } from "@/lib/actions/interview-actions";
import { MockInterview } from "@/types/interview";
import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";
import Loading from "./loading";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ mockId: string }> }) => {
  const mockId = (await params).mockId;

  const user = await currentUser();

  // 1. Fetch the data (returns Prisma type)
  let interviewData;
  try {
    interviewData = await fetchMockInterview(mockId);
  } catch {
    notFound();
  }

  // 3. Type Assertion (The Fix)
  // We cast to 'unknown' first, then to your strict 'MockInterview' type.
  // This tells TS: "Trust me, the JSON in the DB matches this structure."
  const interview = interviewData as unknown as MockInterview;

  return (
    <Suspense fallback={<Loading />}>
      {" "}
      <InterviewFeedback userImage={user!.imageUrl} interview={interview} />
    </Suspense>
  );
};
export default page;
