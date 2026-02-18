"use client";

import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { QuestionsBeforeUpdate } from "@/types/interview";
import {
  LightbulbIcon,
  LogOutIcon,
  MicIcon,
  SkipForwardIcon,
  CheckCircle2Icon,
  SquareIcon,
  Volume2Icon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { saveUserAnswer, endInterview } from "@/lib/actions/interview-actions"; // Import actions
import { useRouter } from "next/navigation";
import { toast } from "sonner"; // Assuming you use sonner/toast

export const InterviewRoom = ({
  mockId,
  questions,
}: {
  mockId: string;
  questions: QuestionsBeforeUpdate[];
}) => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isPending, startTransition] = useTransition();
  const [isAudioEnabled] = useState(true); // Allow user to toggle

  // --- SPEECH RECOGNITION HOOKS ---
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // Sync the spoken transcript continuously to the textarea
  useEffect(() => {
    // Only update if there is actual transcribed text
    if (transcript.length > 0) {
      setUserAnswer(transcript);
    }
  }, [transcript]);

  // Get the active question object
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const speakQuestion = () => {
    // 1. Stop any previous speech
    window.speechSynthesis.cancel();

    if (isAudioEnabled && currentQuestion) {
      // 2. Create the utterance
      const speech = new SpeechSynthesisUtterance(currentQuestion.questionText);

      // 3. Optional: Customize voice
      // const voices = window.speechSynthesis.getVoices();
      // speech.voice = voices.find(v => v.lang === 'en-US') || null;
      speech.rate = 1.0; // Normal speed
      speech.pitch = 1.0; // Normal pitch
      speech.volume = 1.0;

      // 4. Speak
      window.speechSynthesis.speak(speech);
    }
  };

  useEffect(() => {
    speakQuestion();

    // Cleanup: Stop speaking if user leaves or component unmounts
    return () => {
      window.speechSynthesis.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion, currentQuestionIndex, isAudioEnabled]); // Triggers when question changes

  const toggleRecording = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      // 'continuous: true' ensures it doesn't stop when the user pauses for a breath
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  // Logic to Move to Next Question
  const handleNext = async () => {
    if (!userAnswer.trim()) {
      toast.error("Please provide an answer before moving on.");
      return;
    }

    // Stop listening if they are still recording
    if (listening) SpeechRecognition.stopListening();

    startTransition(async () => {
      // 1. Save current answer to DB
      await saveUserAnswer(currentQuestion.id, userAnswer);

      if (isLastQuestion) {
        // 2. If last, Generate Feedback & Finish
        toast.info("Analyzing interview... This may take a moment.");
        await endInterview(mockId);
        toast.success("Interview Completed!");
        router.push(`/interview/feedback/${mockId}`);
      } else {
        // 3. Move to next question
        setCurrentQuestionIndex((prev) => prev + 1);
        setUserAnswer(""); // Clear input for next question
        resetTranscript(); // Clear the speech memory for the next question
      }
    });
  };

  // Fallback for unsupported browsers (like older Firefox or Safari)
  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="p-10 text-white">
        Your browser does not support speech recognition. Please use Google
        Chrome.
      </div>
    );
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-4 gap-8 flex flex-col py-4 bg-slate-900 text-white relative">
      {/* --- HEADER --- */}
      <section className="w-full flex justify-between items-center">
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider hidden md:block">
            Progress
          </span>
          <div className="h-4 w-px bg-white/20 hidden md:block"></div>
          <span className="text-sm font-semibold text-white">
            Question {currentQuestionIndex + 1}{" "}
            <span className="text-slate-500 font-normal">
              / {questions.length}
            </span>
          </span>
        </div>

        {/* Timer (Static for now) */}
        {/* <div className="flex flex-col items-center">
          <span className="font-mono text-xl text-white tracking-widest tabular-nums opacity-90">
            04:21
          </span>
          <span className="text-[10px] text-primary-300 font-medium uppercase tracking-widest mt-1">
            Time Elapsed
          </span>
        </div> */}

        <Link
          href={"/"}
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
        >
          <LogOutIcon size={14} />
          <span className="text-sm font-medium">End Interview</span>
        </Link>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-2 md:px-6 gap-4">
        {/* <!-- AI Visualizer Area --> */}
        <div className="relative w-full flex flex-col items-center justify-center h-40">
          {/* <!-- Pulsing Halo Background --> */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse-slow"></div>
          </div>
          {/* <!-- Waveform Animation --> */}
          <div
            aria-label="AI Speaking Visualizer"
            className="flex items-center justify-center gap-1.5 h-20 w-full max-w-xs"
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

        {/* Question Card */}
        <div className="w-full bg-white text-slate-900 rounded-2xl shadow-2xl p-4 md:p-6 relative border border-white/20">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-600 to-purple-600"></div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                {currentQuestion?.category || "General"}
              </span>
              <button
                className="text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
                onClick={speakQuestion}
              >
                <Volume2Icon size={18} />
              </button>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold leading-tight text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-500 key={currentQuestionIndex}">
              {currentQuestion?.questionText}
            </h2>

            <div className="text-slate-500 text-sm flex gap-2 items-center">
              <LightbulbIcon size={14} />
              <span className="text-sm">
                Tip: Keep your answer concise and relevant.
              </span>
            </div>

            {/* Temporary Text Area for Testing */}
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Type your answer here (or use the mic button)..."
              className="w-full p-2 border rounded-lg text-slate-700 ring shadow ring-slate-300 focus:ring-2 focus:ring-primary outline-none"
              rows={4}
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER CONTROLS --- */}
      <footer className="relative z-10 w-full pb-10 pt-4 flex flex-col items-center justify-center gap-6">
        {/* <!-- Microphone Interaction Area --> */}
        <div className="relative group">
          {/* <!-- Ripple Effect rings (Behind) --> */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-500/20 rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-500/30 rounded-full animate-pulse"></div>
          <button
            className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-red-500 text-white shadow-lg shadow-red-500/40 hover:bg-red-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-500/30 cursor-pointer"
            onClick={toggleRecording}
          >
            {listening ? <SquareIcon fill="white" /> : <MicIcon />}
          </button>
        </div>
        {/* <!-- Status Text --> */}
        <div className="text-center space-y-1">
          <p className="text-white font-medium text-lg">
            {listening ? "Recording..." : "Record Answer"}
          </p>
          <p className="text-slate-400 text-sm">
            {listening
              ? "Click square to stop"
              : "Click mic to start recording"}
          </p>
        </div>

        {/* Next / Finish Button */}
        <div className="absolute bottom-10 right-10 hidden md:flex gap-3">
          <button
            onClick={handleNext}
            disabled={isPending}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all text-sm font-medium
              ${
                isLastQuestion
                  ? "bg-green-600 border-green-500 hover:bg-green-700 text-white"
                  : "bg-white/5 border-white/10 hover:bg-white/10 text-slate-300"
              }`}
          >
            {isPending ? (
              <span>Saving...</span>
            ) : isLastQuestion ? (
              <>
                <span>Finish Interview</span>
                <CheckCircle2Icon size={16} />
              </>
            ) : (
              <>
                <span>Next Question</span>
                <SkipForwardIcon size={16} />
              </>
            )}
          </button>
        </div>

        {/* <div className="fixed bottom-0 right-0 md:hidden gap-3 w-full flex justify-center bg-slate-800"> */}
        <button
          onClick={handleNext}
          disabled={isPending}
          className={`fixed bottom-0 right-0 md:hidden gap-3 w-full flex justify-center px-6 py-4 rounded-lg transition-all text-sm font-medium border-t
              ${
                isLastQuestion
                  ? "bg-green-600 border-green-500 hover:bg-green-700 text-white"
                  : "bg-slate-900 border-white/10 hover:bg-white/10 text-slate-300"
              }`}
        >
          {isPending ? (
            <span>Saving...</span>
          ) : isLastQuestion ? (
            <>
              <span>Finish Interview</span>
              <CheckCircle2Icon size={16} />
            </>
          ) : (
            <>
              <span>Next Question</span>
              <SkipForwardIcon size={16} />
            </>
          )}
        </button>
        {/* </div> */}
      </footer>
    </main>
  );
};
