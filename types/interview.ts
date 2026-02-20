// 1. Enums
export type InterviewStatus = "IN_PROGRESS" | "COMPLETED";

// 2. JSON Structure Types (Custom types for your JSON fields)

// For MockInterview.feedbackDetails
export interface FeedbackArea {
  title: string;
  description: string;
}

export interface FeedbackDetails {
  strengths: FeedbackArea[];
  improvements: FeedbackArea[];
}

// For Question.transcriptInsights
export interface TranscriptInsight {
  text: string;
  type: "positive" | "negative" | "neutral";
  startIndex?: number; // Optional: good for highlighting
  endIndex?: number;
}

// 3. Database Model Interfaces

export interface User {
  id: string;
  clerkId: string;
  email: string;
  name: string | null;
  imageUrl: string | null;
  plan: string;
  averageScore: number;
  createdAt: Date;
  updatedAt: Date;
  // Relations are optional because they aren't always fetched
  interviews?: MockInterview[];
  skills?: UserSkill[];
}

export interface MockInterview {
  id: string;
  // Inputs
  jobPosition: string;
  jobDescription: string;
  jobExperience: string;
  resumeText: string | null;

  // Status
  status: InterviewStatus;
  createdAt: Date;
  duration: number;

  // Scores
  overallScore: number | null;
  technicalScore: number | null;
  communicationScore: number | null;
  confidenceScore: number | null;

  // Feedback
  feedbackTitle: string | null;
  feedbackSummary: string | null;

  // JSON Field (Typed strictly instead of 'any')
  feedbackDetails: FeedbackDetails | null;

  // Foreign Keys
  userId: string;

  // Relations
  user?: User;
  questions?: Question[];
}

export interface Question {
  id: string;
  questionText: string;
  questionOrder: number;
  category: string | null;
  answer: string | null; // AI's ideal answer

  // User Response
  userAnswer: string | null;

  // AI Feedback
  feedback: string | null;
  rating: number | null;

  // JSON Field
  transcriptInsights: TranscriptInsight[] | null;

  // Foreign Keys
  mockInterviewId: string;

  // Relations
  mockInterview?: MockInterview;
}

export interface UserSkill {
  id: string;
  skillName: string;
  proficiency: number;
  isTarget: boolean;

  // Foreign Keys
  userId: string;

  // Relations
  user?: User;
}

// 4. Other Types - only rrequired

export interface QuestionsBeforeUpdate {
  id: string;
  questionText: string;
  questionOrder: number;
  category: string | null;
  answer: string | null; // AI's ideal answer
}

export interface MockInterviewHistory {
  id: string;
  // Inputs
  jobPosition: string;
  jobExperience: string;
  // Status
  status: InterviewStatus;
  createdAt: Date;
  // Scores
  overallScore: number | null;
}

export interface DashboardStats {
  averageScore: number;
  completedInterviews: number;
  totalInterviews: number;
  userName: string;
}
