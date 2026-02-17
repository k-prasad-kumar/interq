import {
  LightbulbIcon,
  LogOutIcon,
  MicIcon,
  RotateCwIcon,
  SettingsIcon,
  SkipForwardIcon,
} from "lucide-react";
import Link from "next/link";

export const InterviewRoom = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 gap-8 flex flex-col py-4 bg-slate-900 text-white selection:bg-primary selection:text-white">
      <section className="w-full flex justify-between items-center">
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-2 sm:px-4 py-1 sm:py-2 rounded-full">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider hidden md:block">
            Progress
          </span>
          <div className="h-4 w-px bg-white/20 hidden md:block"></div>
          <span className="text-sm font-semibold text-white">
            Question 3 <span className="text-slate-500 font-normal">/ 5</span>
          </span>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="font-mono text-sm sm:text-xl text-white tracking-widest tabular-nums opacity-90">
            04:21
          </span>
          <span className="text-[8px] sm:text-[10px] text-primary-300 font-medium uppercase tracking-widest mt-1">
            Time Elapsed
          </span>
        </div>
        <Link
          href={"/"}
          className="group flex items-center gap-1 md:gap-2 text-slate-400 hover:text-white transition-colors px-0 sm:px-4 py-2 rounded-lg hover:bg-white/5 cursor-pointer"
        >
          <LogOutIcon size={14} />
          <span className="text-sm font-medium truncate">End Interview</span>
        </Link>
      </section>
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 gap-8">
        {/* <!-- AI Visualizer Area --> */}
        <div className="relative w-full flex flex-col items-center justify-center h-48 mb-4">
          {/* <!-- Pulsing Halo Background --> */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse-slow"></div>
          </div>
          {/* <!-- Waveform Animation --> */}
          <div
            aria-label="AI Speaking Visualizer"
            className="flex items-center justify-center gap-1.5 h-24 w-full max-w-xs"
          >
            {/* <!-- Generative bars --> */}
            <div className="h-8 w-1.5 rounded-full ease-in-out duration-1000 repeat-infinite bg-linear-to-t from-violet-800 to-violet-400 animate-bounce"></div>
            <div className="h-12 w-1.5 rounded-full ease-in-out duration-500 repeat-infinite bg-linear-to-t from-violet-800 to-violet-400 animate-bounce"></div>
            <div className="h-6 w-1.5 rounded-full ease-in-out duration-100 repeat-infinite bg-linear-to-t from-violet-800 to-violet-400 animate-bounce"></div>
            <div className="h-16 w-1.5 rounded-full ease-in-out duration-1000 repeat-infinite bg-linear-to-t from-violet-800 to-violet-400 animate-bounce"></div>
            <div className="h-10 w-1.5 rounded-full ease-in-out duration-100 repeat-infinite bg-linear-to-t from-violet-800 to-violet-400 animate-bounce"></div>
            <div className="h-20 w-1.5 rounded-full ease-in-out duration-300 repeat-infinite bg-linear-to-t from-violet-800 to-violet-400 animate-bounce"></div>
            <div className="h-24 w-1.5 rounded-full ease-in-out duration-100 repeat-infinite bg-linear-to-t from-violet-800 to-violet-400 animate-bounce bg-white/90"></div>
            <div className="h-14 w-1.5 rounded-full ease-in-out duration-1000 repeat-infinite bg-linear-to-t from-violet-800 to-violet-400 animate-bounce"></div>
            <div className="h-8 w-1.5 rounded-full ease-in-out duration-1000 repeat-infinite bg-linear-to-t from-violet-800 to-violet-400 animate-bounce"></div>
            <div className="h-12 w-1.5 rounded-full ease-in-out duration-500 repeat-infinite bg-linear-to-t from-violet-800 to-violet-400 animate-bounce"></div>
            <div className="h-4 w-1.5 rounded-full ease-in-out duration-1000 repeat-infinite bg-linear-to-t from-violet-800 to-violet-400 animate-bounce"></div>
            <div className="h-6 w-1.5 rounded-full ease-in-out duration-1000 repeat-infinite bg-linear-to-t from-violet-800 to-violet-400 animate-bounce"></div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <p className="text-primary-200 text-sm font-medium tracking-wide">
              InterQ AI is speaking...
            </p>
          </div>
        </div>
        {/* <!-- Question Card --> */}
        <div className="w-full bg-white text-slate-900 rounded-2xl shadow-2xl shadow-primary/20 p-8 md:p-10 relative overflow-hidden transition-all duration-300 border border-white/20">
          {/* <!-- Decorative accent --> */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary to-purple-500"></div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                Behavioral
              </span>
              <button
                className="text-slate-400 hover:text-primary transition-colors tooltip-trigger"
                title="Repeat Question"
              >
                <RotateCwIcon size={18} />
              </button>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-slate-800">
              Can you describe a time when you had to handle a conflict within
              your team? How did you resolve it?
            </h2>
            <div className="mt-2 text-slate-500 text-sm flex gap-2 items-center">
              <LightbulbIcon size={14} />
              <span>
                Tip: Use the STAR method (Situation, Task, Action, Result) to
                structure your answer.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* <!-- Bottom Control Dock --> */}
        <footer className="relative z-10 w-full pb-10 pt-4 flex flex-col items-center justify-center gap-6">
          {/* <!-- Microphone Interaction Area --> */}
          <div className="relative group">
            {/* <!-- Ripple Effect rings (Behind) --> */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-500/20 rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-500/30 rounded-full animate-pulse"></div>
            {/* <!-- Main Button --> */}
            <button className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-red-500 text-white shadow-lg shadow-red-500/40 hover:bg-red-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-500/30 cursor-pointer">
              <MicIcon />
            </button>
          </div>
          {/* <!-- Status Text --> */}
          <div className="text-center space-y-1">
            <p className="text-white font-medium text-lg">Listening...</p>
            <p className="text-slate-400 text-sm">Click mic to finish answer</p>
          </div>
          {/* <!-- Secondary Controls --> */}
          <div className="absolute bottom-10 right-10 hidden md:flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm text-slate-300">
              <span>Skip Question</span>
              <SkipForwardIcon size={14} />
            </button>
            <button
              aria-label="Settings"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-slate-300"
            >
              <SettingsIcon />
            </button>
          </div>
        </footer>
        {/* <!-- Overlay Gradient (Vignette) --> */}
        <div className="fixed inset-0 pointer-events-none z-20 bg-radial-gradient"></div>
      </section>
    </main>
  );
};
