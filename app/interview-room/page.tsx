import { InterviewRoom } from "@/components/interview/interview-room";

const page = () => {
  return (
    <div className="bg-slate-900 text-white font-display h-screen flex flex-col relative selection:bg-primary selection:text-white">
      <InterviewRoom />
    </div>
  );
};
export default page;
