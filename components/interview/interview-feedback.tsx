"use client";

import {
  BotIcon,
  CheckCircle2Icon,
  CloudDownloadIcon,
  InfoIcon,
  LightbulbIcon,
  PlayIcon,
} from "lucide-react";
import Image from "next/image";
import { MockInterview, Question } from "@/types/interview";
import Link from "next/link";
import { Share } from "./share";
import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import { toast } from "sonner";

export const InterviewFeedback = ({
  userImage,
  interview,
}: {
  userImage: string;
  interview: MockInterview;
}) => {
  const [showButtons, setShowButtons] = useState(true);
  const overallScore = `${interview.overallScore ?? 0}, 100`;

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const playFullInterview = (questions: Question[] | undefined) => {
    if (!questions?.length) return;

    // Stop anything currently playing
    window.speechSynthesis.cancel();

    // Loop through all Q&A and queue them up
    questions.forEach((q, index) => {
      // 1. Speak the Question (AI Voice)
      const questionSpeech = new SpeechSynthesisUtterance(
        `Question ${index + 1}: ${q.questionText}`,
      );
      questionSpeech.rate = 1.1; // Slightly faster
      window.speechSynthesis.speak(questionSpeech);

      // 2. Speak the User's Answer (Different tone/rate to distinguish)
      const answerText = q.userAnswer || "No answer provided.";
      const answerSpeech = new SpeechSynthesisUtterance(
        `Your Answer: ${answerText}`,
      );
      answerSpeech.rate = 1.0;
      answerSpeech.pitch = 0.9; // Slightly deeper to sound like a different person
      window.speechSynthesis.speak(answerSpeech);

      // 3. Optional: Pause between Q&A
      // We can't easily "sleep", but we can speak a silent character or just rely on natural pause
    });
  };

  const printRef = useRef<HTMLDivElement>(null);
  const exportPdf = async () => {
    const element = printRef.current;
    if (!element) return;
    setShowButtons(false);
    const toastId = toast.loading("Generating PDF...");

    try {
      // 1. DEFINE A FIXED DESKTOP WIDTH
      // This ensures the PDF looks like the desktop version, not a mobile/cropped one.
      const desktopWidth = 1400;
      // We calculate height based on the new forced width (approximation) or just use scrollHeight
      // const elementHeight = element.scrollHeight;

      // 2. Capture Image with Forced Dimensions
      const dataUrl = await toPng(element, {
        cacheBust: true,
        // useCORS: true,
        // Force the canvas to be this wide
        width: desktopWidth,
        // height: elementHeight,
        style: {
          // Crucial: Force the element to layout at 1400px during capture
          width: `${desktopWidth}px`,
          height: "auto",
          overflow: "visible",
        },
      });

      // 3. Initialize PDF (A4 Portrait)
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(dataUrl);

      // 4. Calculate PDF Dimensions
      const pdfWidth = pdf.internal.pageSize.getWidth();
      // Scale the 1400px image down to fit the A4 PDF width (approx 210mm)
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      const pageHeight = pdf.internal.pageSize.getHeight();

      // 5. Add Image to PDF (Multi-page Logic)
      let heightLeft = pdfHeight;
      let position = 0;

      // First Page
      pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      // Extra Pages
      while (heightLeft >= 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("interview-feedback.pdf");
      toast.success("PDF Downloaded!", { id: toastId });
    } catch (error) {
      console.error("PDF Export Error:", error);
      toast.error("Failed to export PDF", { id: toastId });
    }

    setShowButtons(true);
  };

  return (
    <main
      className="w-full max-w-7xl mx-auto mt-5 px-4 gap-8 flex flex-col"
      ref={printRef}
    >
      <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Interview Feedback
          </h1>
          <p className="text-sm text-primary font-semibold">
            {interview.jobPosition} | {interview.jobExperience}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Completed on{" "}
            <span>
              {new Date(interview.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>{" "}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center px-4 py-2 border-slate-300 dark:border-slate-600 shadow-sm text-sm font-medium rounded text-white dark:text-slate-200 bg-primary dark:bg-primary hover:bg-primary/90 dark:hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
            onClick={exportPdf}
          >
            <CloudDownloadIcon size={14} /> &nbsp; Export PDF
          </button>
          <Share mockId={interview.id} />
        </div>
      </section>

      <section className="grow max-w-7xl w-full mx-auto px-0 sm:px-2 md:px-4 lg:px-8 py-8 pb-32">
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

                <path
                  className="circle"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  // strokeDasharray={overallScore}
                  strokeDasharray={overallScore}
                ></path>
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">
                  {interview.overallScore}
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
                {interview.feedbackTitle}
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {interview.feedbackSummary}
            </p>
            {/* <!-- Quick stats --> */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-700/50 pt-4">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Technical
                </div>
                <div className="text-lg font-semibold text-slate-900 dark:text-white">
                  {interview.technicalScore ?? "-"}/100
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Communication
                </div>
                <div className="text-lg font-semibold text-slate-900 dark:text-white">
                  {interview.communicationScore ?? "-"}/100
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Confidence
                </div>
                <div className="text-lg font-semibold text-slate-900 dark:text-white">
                  {interview.confidenceScore ?? "-"}/100
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
                {interview.feedbackDetails?.strengths &&
                  interview.feedbackDetails?.strengths.map((item, index) => (
                    <li
                      className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group"
                      key={index}
                    >
                      <div className="flex gap-3">
                        <div className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            {item.title}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
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
                {interview.feedbackDetails?.improvements &&
                  interview.feedbackDetails?.improvements.map((item, index) => (
                    <li
                      className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group"
                      key={index}
                    >
                      <div className="flex gap-3">
                        <div className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            {item.title}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
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

                <button
                  className="text-primary hover:text-primary-hover p-1 rounded-full border border-primary/20 bg-primary/10 cursor-pointer"
                  onClick={() =>
                    interview.questions &&
                    playFullInterview(interview.questions as Question[])
                  }
                >
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
              {interview.questions &&
                interview.questions.map((question) => (
                  <span className="flex flex-col gap-4" key={question.id}>
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
                          {question.questionText}
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
                          src={userImage}
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
                          {question.userAnswer}
                        </p>
                      </div>
                    </div>
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Sticky Footer --> */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-surface-light/80 dark:bg-surface-dark/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-4 px-4 z-10 ${showButtons ? "" : "hidden"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center text-sm text-slate-500 dark:text-slate-400">
            <InfoIcon size={16} className="mr-2" />
            <span>
              Pro tip: Review the transcript highlights to improve specific
              answers.
            </span>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            <Link
              href="/"
              className="flex-1 md:flex-none justify-center px-6 py-2.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium text-sm rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors cursor-pointer truncate text-center"
            >
              Back to Dashboard
            </Link>
            <Link
              href={`/interview-room/${interview.id}`}
              className="flex-1 md:flex-none justify-center px-6 py-2.5 bg-primary hover:bg-primary-hover text-white font-medium text-sm rounded-lg shadow-lg shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform active:scale-95 cursor-pointer truncate text-center"
            >
              Retry Interview
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
