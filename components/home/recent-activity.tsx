import { BrainIcon, CodeIcon, ComponentIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const RecentAcivity = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
      {/* <!-- Recent Activity List (Left 2/3) --> */}

      <div className="lg:col-span-2 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Recent Activity
          </h2>
          <a
            className="text-sm font-medium text-primary hover:text-primary-dark hover:underline"
            href="#"
          >
            View All
          </a>
        </div>
        <Card className="p-0">
          <CardContent className="p-0">
            <div className="overflow-hidden">
              {/* <!-- Table Header --> */}
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-200 dark:border-slate-600 bg-slate-100 dark:bg-background/10 text-xs font-semibold text-grey-500 uppercase tracking-wider">
                <div className="col-span-5 md:col-span-4">Session Name</div>
                <div className="col-span-3 md:col-span-2 hidden md:block">
                  Date
                </div>
                <div className="col-span-3 md:col-span-2 text-center">
                  Status
                </div>
                <div className="col-span-2 md:col-span-2 text-center">
                  Score
                </div>
                <div className="col-span-2 text-right">Action</div>
              </div>
              {/* <!-- Row 1 --> */}
              <div className="grid grid-cols-12 gap-4 p-4 items-center border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <CodeIcon size={14} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white text-sm">
                      Senior Frontend Dev
                    </p>
                    <p className="text-xs text-slate-500">Technical Round</p>
                  </div>
                </div>
                <div className="col-span-3 md:col-span-2 hidden md:block text-sm text-slate-500">
                  2 hours ago
                </div>
                <div className="col-span-3 md:col-span-2 flex justify-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Completed
                  </span>
                </div>
                <div className="col-span-2 md:col-span-2 text-center text-sm font-bold text-slate-900 dark:text-white">
                  9.0
                </div>
                <div className="col-span-2 flex justify-end">
                  <button className="text-xs font-medium text-primary border border-primary/20 hover:bg-primary/5 rounded px-3 py-1.5 transition-colors">
                    View
                  </button>
                </div>
              </div>
              {/* <!-- Row 2 --> */}
              <div className="grid grid-cols-12 gap-4 p-4 items-center border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <ComponentIcon size={14} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white text-sm">
                      System Design
                    </p>
                    <p className="text-xs text-slate-500">Architecture</p>
                  </div>
                </div>
                <div className="col-span-3 md:col-span-2 hidden md:block text-sm text-slate-500">
                  Yesterday
                </div>
                <div className="col-span-3 md:col-span-2 flex justify-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                    In Progress
                  </span>
                </div>
                <div className="col-span-2 md:col-span-2 text-center text-sm font-bold text-slate-400">
                  --
                </div>
                <div className="col-span-2 flex justify-end">
                  <button className="text-xs font-medium text-white bg-primary hover:bg-primary-dark rounded px-3 py-1.5 transition-colors shadow-sm shadow-primary/30">
                    Resume
                  </button>
                </div>
              </div>
              {/* <!-- Row 3 --> */}
              <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 flex items-center justify-center shrink-0">
                    <BrainIcon size={14} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white text-sm">
                      Behavioral Interview
                    </p>
                    <p className="text-xs text-slate-500">Soft Skills</p>
                  </div>
                </div>
                <div className="col-span-3 md:col-span-2 hidden md:block text-sm text-slate-500">
                  2 days ago
                </div>
                <div className="col-span-3 md:col-span-2 flex justify-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Completed
                  </span>
                </div>
                <div className="col-span-2 md:col-span-2 text-center text-sm font-bold text-slate-900 dark:text-white">
                  7.5
                </div>
                <div className="col-span-2 flex justify-end">
                  <button className="text-xs font-medium text-primary border border-primary/20 hover:bg-primary/5 rounded px-3 py-1.5 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* <!-- Side Widgets (Right 1/3) --> */}
      <div className="space-y-6">
        {/* <!-- Skill Distribution --> */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Skill Strength
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* <!-- Skill 1 --> */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    React / Frontend
                  </span>
                  <span className="text-xs font-bold text-primary">90%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full w-[90%]"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              {/* <!-- Skill 2 --> */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    System Design
                  </span>
                  <span className="text-xs font-bold text-indigo-400">65%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-indigo-400 h-2 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
              {/* <!-- Skill 3 --> */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Algorithms
                  </span>
                  <span className="text-xs font-bold text-indigo-300">45%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-indigo-300 h-2 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-2 text-xs font-medium text-slate-500 hover:text-primary border border-dashed border-slate-300 dark:border-slate-600 rounded-lg hover:border-primary transition-colors">
              + Add Target Skill
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
