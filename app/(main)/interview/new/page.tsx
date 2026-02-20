import { Suspense } from "react";
import Loading from "./loading";
import { NewInterview } from "@/components/interview/new-interview";

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NewInterview />
    </Suspense>
  );
};
export default page;
