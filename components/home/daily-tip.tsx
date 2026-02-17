import { ArrowRightIcon, LightbulbIcon } from "lucide-react";

export const DailyTip = () => {
  return (
    <div className="bg-linear-to-br from-indigo-900 to-primary rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-200">
            Daily Tip
          </span>
          <LightbulbIcon />
        </div>
        <p className="text-sm font-medium leading-relaxed mb-4 text-indigo-50">
          &quot;In behavioral interviews, always use the{" "}
          <strong>STAR method</strong> (Situation, Task, Action, Result) to
          structure your answers clearly.&quot;
        </p>
        <a
          className="text-xs font-bold hover:text-indigo-200 flex items-center gap-1 transition-colors"
          href="#"
        >
          Read Guide <ArrowRightIcon size={14} />
        </a>
      </div>
      {/* <!-- Decorative Circle --> */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
    </div>
  );
};
