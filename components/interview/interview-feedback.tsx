import {
  BotIcon,
  CheckCircle2Icon,
  CloudDownloadIcon,
  InfoIcon,
  LightbulbIcon,
  PlayIcon,
  Share2Icon,
  TriangleAlertIcon,
} from "lucide-react";
import Image from "next/image";
import Signin from "@/assets/signin.webp";

export const InterviewFeedback = () => {
  return (
    <main className="w-full max-w-7xl mx-auto mt-5 px-4 gap-8 flex flex-col">
      <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Interview #41 Feedback
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Completed on Oct 24, 2023 • Duration: 24m 12s
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center px-4 py-2 border-slate-300 dark:border-slate-600 shadow-sm text-sm font-medium rounded text-white dark:text-slate-200 bg-primary dark:bg-primary hover:bg-primary/90 dark:hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer">
            <CloudDownloadIcon size={14} /> &nbsp; Export PDF
          </button>
          <button className="inline-flex items-center px-4 py-2 border-slate-300 dark:border-slate-600 shadow-sm text-sm font-medium rounded text-white dark:text-slate-200 bg-primary dark:bg-primary hover:bg-primary/90 dark:hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer">
            <Share2Icon size={14} /> &nbsp; Share
          </button>
        </div>
      </section>

      <main className="grow max-w-7xl w-full mx-auto px-0 sm:px-2 md:px-4 lg:px-8 py-8 pb-32">
        {/* <!-- Score Overview --> */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* <!-- Circular Chart --> */}
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <div className="relative h-48 w-48 text-primary">
              <svg className="circular-chart" viewBox="0 0 36 36">
                <path
                  className="circle-bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                ></path>
                {/* here i have to change the stroke-dasharray */}
                <path
                  className="circle"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  strokeDasharray="82, 100"
                ></path>
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">
                  82
                </span>
                <span className="text-xs uppercase font-medium text-slate-500 dark:text-slate-400 tracking-wide mt-1">
                  Score
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Score Summary Text --> */}
          <div className="md:col-span-9 bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                Top 15%
              </span>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Excellent Performance!
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              You demonstrated strong technical knowledge and clear
              communication. Your answers regarding React hooks and state
              management were particularly impressive. There are minor
              opportunities to improve pacing during complex explanations.
            </p>
            {/* <!-- Quick stats --> */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-700/50 pt-4">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Technical
                </div>
                <div className="text-lg font-semibold text-slate-900 dark:text-white">
                  88/100
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Communication
                </div>
                <div className="text-lg font-semibold text-slate-900 dark:text-white">
                  76/100
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Confidence
                </div>
                <div className="text-lg font-semibold text-slate-900 dark:text-white">
                  92/100
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 2 Column Layout --> */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
          {/* <!-- Left Column: Feedback Analysis --> */}
          <div className="lg:col-span-5 space-y-6">
            {/* <!-- Strengths --> */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-3 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                <h3 className="font-semibold text-slate-900 dark:text-white flex items-center">
                  <CheckCircle2Icon
                    size={20}
                    className="mr-2"
                    fill="green"
                    color="white"
                  />
                  Key Strengths
                </h3>
              </div>
              <ul className="divide-y divide-slate-100 dark:divide-slate-800">
                <li className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                  <div className="flex gap-3">
                    <div className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        STAR Method Usage
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Excellent structure in answering the behavioral question
                        about conflict resolution.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                  <div className="flex gap-3">
                    <div className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        Technical Depth
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Correctly identified the race condition in the
                        asynchronous JavaScript challenge.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                  <div className="flex gap-3">
                    <div className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        Active Listening
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Asked clarifying questions before jumping into the
                        solution.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- Improvements --> */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-3 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                <h3 className="font-semibold text-slate-900 dark:text-white flex items-center">
                  <LightbulbIcon
                    size={20}
                    fill="#f97316"
                    color="#f97316"
                    className="mr-2"
                  />
                  Areas for Improvement
                </h3>
              </div>
              <ul className="divide-y divide-slate-100 dark:divide-slate-800">
                <li className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                  <div className="flex gap-3">
                    <div className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        Speaking Pace
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Spoke at 160wpm during the intro, which is slightly
                        fast. Aim for 130-140wpm.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                  <div className="flex gap-3">
                    <div className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        Filler Words
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Detected 12 instances of &quot;um&quot; and
                        &quot;like&quot;. Try pausing silently instead.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Right Column: Transcript --> */}
          <div className="lg:col-span-7 flex flex-col h-200 bg-surface-light dark:bg-surface-dark rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* <!-- Transcript Header --> */}
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Interview Transcript
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase mr-2">
                  Audio Playback
                </span>
                <button className="text-primary hover:text-primary-hover p-1 rounded-full border border-primary/20 bg-primary/10 cursor-pointer">
                  <PlayIcon size={16} fill="#7f22fe" color="#7f22fe" />
                </button>
                <div className="h-1 w-24 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/3"></div>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  04:12
                </span>
              </div>
            </div>
            {/* <!-- Scrollable Body --> */}
            <div className="grow overflow-y-auto px-3 md:px-6 py-4 md:py-6 space-y-6 custom-scrollbar">
              {/* <!-- AI Message --> */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                    <BotIcon size={18} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      InterQ AI
                    </span>
                    <span className="text-xs text-slate-400">00:05</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Let&apos;s start with a technical question. Can you describe
                    a challenging bug you encountered recently and how you
                    solved it?
                  </p>
                </div>
              </div>
              {/* <!-- User Message --> */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <Image
                    className="w-8 h-8 rounded-full"
                    width={32}
                    height={32}
                    alt="User Avatar"
                    src={Signin}
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      You
                    </span>
                    <span className="text-xs text-slate-400">00:18</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Sure.{" "}
                    <span
                      className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 px-1 rounded cursor-help border-b border-orange-300 dark:border-orange-700 border-dashed"
                      title="Filler word detected"
                    >
                      Um
                    </span>
                    , in my last project, we had a really strange issue where
                    the user session would drop randomly. At first, I thought it
                    was a frontend state issue.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-2">
                    I started by{" "}
                    <span
                      className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-1 rounded cursor-help border-b border-green-300 dark:border-green-700 border-dashed"
                      title="Good systematic approach"
                    >
                      checking the local storage and Redux store
                    </span>{" "}
                    to see if the token was being cleared. It wasn&apos;t. Then
                    I looked at the network tab and noticed some 401 errors on
                    specific endpoints.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-2">
                    It turned out to be a race condition in the refresh token
                    logic. When multiple requests fired at once, the first one
                    would refresh the token, but subsequent ones were still
                    using the old token before the new one came back. I fixed it
                    by implementing a queue system for requests while the token
                    was refreshing.
                  </p>
                </div>
              </div>
              {/* <!-- AI Message --> */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                    <BotIcon size={18} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      InterQ AI
                    </span>
                    <span className="text-xs text-slate-400">01:45</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    That&apos;s a great example of debugging a concurrency
                    issue. Moving on to soft skills, tell me about a time you
                    disagreed with a teammate.
                  </p>
                </div>
              </div>
              {/* <!-- User Message --> */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <Image
                    className="w-8 h-8 rounded-full"
                    width={32}
                    height={32}
                    alt="User Avatar"
                    src={Signin}
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      You
                    </span>
                    <span className="text-xs text-slate-400">02:10</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    So,{" "}
                    <span
                      className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 px-1 rounded cursor-help border-b border-orange-300 dark:border-orange-700 border-dashed"
                      title="Filler word detected"
                    >
                      like
                    </span>
                    , there was this time a designer wanted a feature that was
                    technically very heavy. I just told him no immediately
                    because of the deadline.
                  </p>
                  <div className="mt-2 p-3 bg-orange-50 dark:bg-orange-900/20 rounded border-l-4 border-orange-400">
                    <p className="text-xs text-orange-800 dark:text-orange-200 font-medium mb-1 flex items-center gap-2">
                      <TriangleAlertIcon size={14} /> AI Insight: Tone Check
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      This initial response sounds a bit defensive. Consider
                      framing it as a trade-off discussion instead of a flat
                      refusal.
                    </p>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-2">
                    But later I realized I should have explained *why*. So I
                    went back, apologized for being abrupt, and we sketched out
                    a simpler version that met his goals but fit the timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- Sticky Footer --> */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface-light/80 dark:bg-surface-dark/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-4 px-4 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center text-sm text-slate-500 dark:text-slate-400">
            <InfoIcon size={16} className="mr-2" />
            <span>
              Pro tip: Review the transcript highlights to improve specific
              answers.
            </span>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            <button className="flex-1 md:flex-none justify-center px-6 py-2.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium text-sm rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors cursor-pointer">
              Back to Dashboard
            </button>
            <button className="flex-1 md:flex-none justify-center px-6 py-2.5 bg-primary hover:bg-primary-hover text-white font-medium text-sm rounded-lg shadow-lg shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform active:scale-95 cursor-pointer">
              Retry Interview
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
