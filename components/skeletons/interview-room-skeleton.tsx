import { Skeleton } from "../ui/skeleton";

export const InterviewRoomSkeleton = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 gap-8 flex flex-col py-4 relative">
      {/* --- HEADER --- */}
      <section className="w-full flex justify-between items-center">
        <Skeleton className="w-35 md:w-50 h-10 rounded-full" />

        {/* Timer (Static for now) */}
        {/* <div className="flex flex-col items-center">
          <span className="font-mono text-xl text-white tracking-widest tabular-nums opacity-90">
            04:21
          </span>
          <span className="text-[10px] text-primary-300 font-medium uppercase tracking-widest mt-1">
            Time Elapsed
          </span>
        </div> */}

        <Skeleton className="w-35 md:w-40 h-10" />
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-2 md:px-6 gap-4">
        {/* <!-- AI Visualizer Area --> */}
        <div className="relative w-full flex flex-col items-center justify-center h-40">
          {/* <!-- Pulsing Halo Background --> */}

          {/* <!-- Waveform Animation --> */}
          <div
            aria-label="AI Speaking Visualizer"
            className="flex items-center justify-center gap-1.5 h-20 w-full max-w-xs"
          >
            {/* <!-- Generative bars --> */}
            <Skeleton className="h-8 w-1.5 rounded-full" />
            <Skeleton className="h-12 w-1.5 rounded-full" />
            <Skeleton className="h-6 w-1.5 rounded-full" />
            <Skeleton className="h-16 w-1.5 rounded-full" />
            <Skeleton className="h-10 w-1.5 rounded-full" />
            <Skeleton className="h-20 w-1.5 rounded-full" />
            <Skeleton className="h-24 w-1.5 rounded-full" />
            <Skeleton className="h-14 w-1.5 rounded-full" />
            <Skeleton className="h-8 w-1.5 rounded-full " />
            <Skeleton className="h-12 w-1.5 rounded-full" />
            <Skeleton className="h-4 w-1.5 rounded-full" />
            <Skeleton className="h-6 w-1.5 rounded-full" />
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Skeleton className="h-4 w-50 mt-4" />
          </div>
        </div>

        {/* Question Card */}
        <Skeleton className="h-60 w-full" />
      </section>

      {/* --- FOOTER CONTROLS --- */}
      <footer className="relative z-10 w-full pb-10 pt-4 flex flex-col items-center justify-center gap-6">
        {/* <!-- Microphone Interaction Area --> */}
        <div className="relative group">
          <Skeleton className="w-20 h-20 rounded-full" />
        </div>
        {/* <!-- Status Text --> */}
        <div className="text-center space-y-1">
          <Skeleton className="w-40 h-7 mx-auto" />
          <Skeleton className="w-50 h-4 mt-2 mb-4" />
        </div>

        {/* Next / Finish Button */}
        <div className="absolute bottom-10 right-10 hidden md:flex gap-3">
          <Skeleton className="w-40 h-10" />
        </div>
      </footer>
    </main>
  );
};
