"use client";

import {
  BotIcon,
  BrainIcon,
  BriefcaseBusinessIcon,
  CloudUploadIcon,
  GraduationCapIcon,
  LoaderCircleIcon,
  LockKeyholeIcon,
  SparklesIcon,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { useState } from "react";
import { createMockInterview } from "@/lib/actions/interview-actions";
import { useRouter } from "next/navigation";

export const NewSession = () => {
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [level, setLevel] = useState("");
  const router = useRouter();

  const handleLevel = (level: string) => {
    setLevel(level);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setDisable(true);

    const formData = new FormData(e.currentTarget);

    const result = await createMockInterview(formData);

    if (result.error) console.error(result.error);

    if (result.mockId) router.push(`/interview-room/${result.mockId}`);

    setLoading(false);
    setDisable(false);
  };

  return (
    <main className="w-full max-w-2xl animate-fade-in-up mx-auto mt-5 px-6">
      <section>
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
            Let&apos;s set up your mock interview
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed text-lg">
            Provide the details below so our AI can tailor questions
            specifically for your target role.
          </p>
        </div>
      </section>
      <section className="mb-14">
        <Card>
          <CardContent>
            <div className="h-1 w-full bg-slate-100 dark:bg-slate-800">
              <div className="h-full w-1/3 bg-primary rounded-full"></div>
            </div>
            <form
              className="py-4 sm:py-6 md:py-8 space-y-8"
              onSubmit={handleSubmit}
            >
              {/* <!-- Job Position Input --> */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label
                    className="block text-base font-bold text-slate-700 dark:text-slate-200"
                    htmlFor="job-position"
                  >
                    Job Position
                  </label>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    Required
                  </span>
                </div>
                <div className="relative group">
                  <input
                    className="w-full rounded-lg border-violet-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 outline-violet-500 focus:border-violet-500 focus:ring-violet-500 transition-shadow resize-none p-4 text-sm leading-relaxed shadow border"
                    id="job-position"
                    name="jobPosition"
                    type="text"
                    placeholder="Software Engineer"
                    required
                    disabled={disable}
                  />
                </div>
              </div>
              {/* <!-- Job Description Input --> */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label
                    className="block text-base font-bold text-slate-700 dark:text-slate-200"
                    htmlFor="job-description"
                  >
                    Job Description
                  </label>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    Required
                  </span>
                </div>
                <div className="relative group">
                  <textarea
                    className="w-full rounded-lg border-violet-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 outline-violet-500 focus:border-violet-500 focus:ring-violet-500 transition-shadow resize-none p-4 text-sm leading-relaxed shadow border"
                    id="job-description"
                    name="jobDescription"
                    placeholder="Paste the full job description here (responsibilities, requirements, tech stack)..."
                    rows={6}
                    required
                    disabled={disable}
                  ></textarea>
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    <button
                      className="p-1.5 text-slate-400 hover:text-primary hover:bg-white dark:hover:bg-slate-700 rounded-md transition-all shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-600"
                      title="Auto-fill with sample"
                      type="button"
                    >
                      <SparklesIcon size={14} />
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Resume Upload Dropzone --> */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Your Resume
                  </label>
                  <span className="text-xs text-slate-400">
                    PDF or DOCX up to 5MB
                  </span>
                </div>
                <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-8 transition-all hover:border-primary hover:bg-primary/2 dark:hover:bg-primary/5 group cursor-pointer text-center">
                  <input
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    type="file"
                    name="resume"
                    disabled={disable}
                  />
                  <div className="flex flex-col items-center justify-center space-y-3 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                      <CloudUploadIcon />
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      <span className="font-semibold text-primary">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </div>
                    <p className="text-xs text-slate-400">
                      Supported formats: PDF, DOCX
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Difficulty Selector --> */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Target Role Level
                </label>
                <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-lg radio-group">
                  {/* <!-- Junior --> */}
                  <div className="relative">
                    <input
                      className="peer sr-only"
                      id="level-junior"
                      name="jobExperience"
                      type="radio"
                      value="Junior"
                      onChange={() => handleLevel("Junior")}
                      required
                      disabled={disable}
                    />
                    <label
                      className={`flex flex-col items-center justify-center py-3 px-2 rounded-md cursor-pointer transition-all  border border-transparent font-semibold h-full gap-2 ${level === "Junior" ? "bg-violet-600 dark:bg-violet-600 text-white dark:text-white hover:bg-violet-600 dark:hover:bg-violet-600" : "hover:bg-violet-200/50 dark:hover:bg-violet-800/50 text-slate-600 dark:text-slate-400"}`}
                      htmlFor="level-junior"
                    >
                      <GraduationCapIcon />
                      <span>Junior</span>
                    </label>
                  </div>
                  {/* <!-- Mid-Level --> */}
                  <div className="relative">
                    <input
                      className="peer sr-only"
                      id="level-mid"
                      name="jobExperience"
                      type="radio"
                      value="Mid-level"
                      onChange={() => handleLevel("Mid-level")}
                      required
                      disabled={disable}
                    />

                    <label
                      className={`flex flex-col items-center justify-center py-3 px-2 rounded-md cursor-pointer transition-all  border border-transparent font-semibold h-full gap-2 ${level === "Mid-level" ? "bg-violet-600 dark:bg-violet-600 text-white dark:text-white hover:bg-violet-600 dark:hover:bg-violet-600" : "hover:bg-violet-200/50 dark:hover:bg-violet-800/50 text-slate-600 dark:text-slate-400"}`}
                      htmlFor="level-mid"
                    >
                      <BriefcaseBusinessIcon />
                      <span>Mid-level</span>
                    </label>
                  </div>
                  {/* <!-- Senior --> */}
                  <div className="relative">
                    <input
                      className="peer sr-only"
                      id="level-senior"
                      name="jobExperience"
                      type="radio"
                      value="Senior"
                      onChange={() => handleLevel("Senior")}
                      required
                      disabled={disable}
                    />
                    <label
                      className={`flex flex-col items-center justify-center py-3 px-2 rounded-md cursor-pointer transition-all  border border-transparent font-semibold h-full gap-2 ${level === "Senior" ? "bg-violet-600 dark:bg-violet-600 text-white dark:text-white hover:bg-violet-600 dark:hover:bg-violet-600" : "hover:bg-violet-200/50 dark:hover:bg-violet-800/50 text-slate-600 dark:text-slate-400"}`}
                      htmlFor="level-senior"
                    >
                      <BrainIcon />
                      <span>Senior</span>
                    </label>
                  </div>
                </div>
              </div>
              {/* <!-- Action Button --> */}
              <div className="pt-4">
                <button
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-lg shadow-lg shadow-primary/25 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 group cursor-pointer"
                  type="submit"
                >
                  {loading ? (
                    <LoaderCircleIcon className="animate-spin" />
                  ) : (
                    <span className="group-hover:animate-pulse">
                      <BotIcon />
                    </span>
                  )}
                  Generate Interview
                </button>
                <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                  <LockKeyholeIcon size={14} />
                  Your data is encrypted and private.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};
