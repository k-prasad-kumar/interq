import {
  HouseIcon,
  LayoutDashboardIcon,
  MapPinIcon,
  MoveLeft,
} from "lucide-react";
import Link from "next/link";

export default async function NotFound() {
  return (
    <main className="w-full h-screen grow flex items-center justify-center p-4 relative overflow-hidden">
      {/* <!-- Abstract Background Orbs --> */}
      <div className="absolute top-[-10%] left-[-5%] w-100 h-100 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-100 h-100 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="max-w-2xl w-full relative z-10">
        {/* <!-- Glassmorphic Container --> */}
        <div className="glass-card rounded-xl p-8 md:p-12 shadow-2xl flex flex-col items-center text-center">
          {/* <!-- Illustration Section --> */}
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl"></div>
            <div className="relative flex items-center justify-center">
              <span className="text-[120px] font-extrabold text-primary/20 select-none tracking-tighter">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPinIcon className="w-24 h-24 text-primary" />
              </div>
            </div>
          </div>
          {/* <!-- Text Content --> */}
          <div className="space-y-4 max-w-md">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#121117] dark:text-white leading-tight">
              Whoops! This page didn&apos;t make the cut.
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              It seems like we&apos;ve lost our way during the interview.
              Don&apos;t sweat it, we can get you back on track in no time.
            </p>
          </div>
          {/* <!-- Action Buttons --> */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link
              href={"/"}
              className="w-full sm:w-auto min-w-50 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white text-base font-bold h-14 px-8 rounded-xl transition-all shadow-lg shadow-primary/25 group"
              type="button"
            >
              <MoveLeft />
              <HouseIcon />
              <span>Go to Homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
