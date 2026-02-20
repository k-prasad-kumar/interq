"use server";

import { currentUser } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import prisma from "@/lib/prisma";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export async function createMockInterview(formData: FormData) {
  const user = await currentUser();

  if (!user) return { error: "User not logged in." };

  const jobPosition = formData.get("jobPosition") as string;
  const jobDescription = formData.get("jobDescription") as string;
  const jobExperience = formData.get("jobExperience") as string;

  if (!jobPosition || !jobDescription || jobExperience === undefined)
    return {
      error: "Missing required fields: jobPosition, jobDesc, jobExperience",
    };

  // 2. Prompt for Specific JSON Structure
  // We ask for 'category' to fill your schema's category field
  const prompt = `
        Job Position: ${jobPosition}
        Job Description: ${jobDescription}
        Years of Experience: ${jobExperience}
        
        Depending on Job Position, Job Description & Years of Experience, give me 5 Interview questions along with Answer in JSON format.
        
        Required JSON Structure:
        [
          {
            "question": "Question text",
            "answer": "Ideal answer text"
            "category": "Technical" // or "Behavioral", "Situational"
          }
        ]
        
        IMPORTANT: Return ONLY the JSON. No markdown (like \`\`\`json).
      `;

  const result = await model.generateContent(prompt);
  const response = result.response;

  // Clean text and parse JSON
  const cleanText = response
    .text()
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
  const questionsData = JSON.parse(cleanText);

  // 3. Save to DB (Nested Write)
  // This creates the Interview AND the 5 Questions at the same time
  const interview = await prisma.mockInterview.create({
    data: {
      userId: user.id, // Ensure this matches your User table ID (Clerk ID)
      jobPosition,
      jobDescription,
      jobExperience,
      status: "IN_PROGRESS",

      // THE MAGIC PART: Creating related questions automatically
      questions: {
        create: questionsData.map(
          (
            q: { question: string; answer: string; category?: string },
            index: number,
          ) => ({
            questionText: q.question,
            answer: q.answer,
            category: q.category || "Technical", // Fallback if AI forgets
            questionOrder: index + 1, // 1, 2, 3, 4
          }),
        ),
      },
    },
  });

  return { mockId: interview.id };
}

export const fetchMockInterviewQuestions = async (mockId: string) => {
  try {
    const questions = await prisma.question.findMany({
      where: {
        mockInterviewId: mockId,
      },
      // select: ONLY fetches the fields you set to 'true'
      select: {
        id: true,
        questionText: true,
        questionOrder: true,
        category: true,
        answer: true,
        // All other fields (userAnswer, feedback, etc.) are ignored
      },
      orderBy: {
        questionOrder: "asc", // Keeps them in 1, 2, 3... order
      },
    });

    return questions;
  } catch (err) {
    console.log(err);
  }
};

// Action 1: Save a single answer (Called on "Next Question")
export async function saveUserAnswer(questionId: string, userAnswer: string) {
  if (!questionId) return;

  await prisma.question.update({
    where: { id: questionId },
    data: { userAnswer: userAnswer },
  });

  return { success: true };
}

// Action 2: Finish Interview & Generate Feedback (Called on "Finish")
export async function endInterview(mockId: string) {
  // 1. Fetch all questions and user answers
  const interview = await prisma.mockInterview.findUnique({
    where: { id: mockId },
    include: { questions: { orderBy: { questionOrder: "asc" } } },
  });

  if (!interview) throw new Error("Interview not found");

  // 2. Construct the prompt for Gemini
  const transcript = interview.questions
    .map(
      (q) =>
        `Q: ${q.questionText}\nUser Answer: ${q.userAnswer || "No Answer Provided"}`,
    )
    .join("\n\n");

  const prompt = `
    Analyze this interview transcript for a ${interview.jobPosition} role.
    
    TRANSCRIPT:
    ${transcript}
    
    Provide a JSON response with the following structure:
    {
      "overallScore": number (0-100),
      "technicalScore": number (0-100),
      "communicationScore": number (0-100),
      "confidenceScore": number (0-100),
      "feedbackTitle": "A short, encouraging title (e.g. Excellent Performance!)",
      "feedbackSummary": "A 2-3 sentence summary of the candidate's performance.",
      "feedbackDetails": {
        "strengths": [{"title": "string", "description": "string"}], // 3-4 items
        "improvements": [{"title": "string", "description": "string"}] // 3-4 items
      }
    }
    
    Return ONLY valid JSON.
  `;

  const result = await model.generateContent(prompt);
  const responseText = result.response
    .text()
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const feedbackData = JSON.parse(responseText);

  // 3. Update the Database with the Scores
  await prisma.mockInterview.update({
    where: { id: mockId },
    data: {
      status: "COMPLETED",
      overallScore: feedbackData.overallScore,
      technicalScore: feedbackData.technicalScore,
      communicationScore: feedbackData.communicationScore,
      confidenceScore: feedbackData.confidenceScore,
      feedbackTitle: feedbackData.feedbackTitle,
      feedbackSummary: feedbackData.feedbackSummary,
      feedbackDetails: feedbackData.feedbackDetails, // Prisma handles JSON automatically
    },
  });

  return { success: true };
}

export async function fetchMockInterview(interviewId: string) {
  try {
    const interview = await prisma.mockInterview.findUnique({
      where: {
        id: interviewId,
      },
      include: {
        questions: {
          orderBy: {
            questionOrder: "asc", // Ensures Question 1 comes before Question 2
          },
        },
      },
    });

    if (!interview) {
      throw new Error("Interview not found");
    }

    return interview;
  } catch (error) {
    console.error("Error fetching interview:", error);
    throw new Error("Failed to fetch interview details");
  }
}

export async function fetchInterviewHistory(q: string, page: string) {
  const user = await currentUser();

  if (!user) return;
  const itemsPerPage: number = Number(process.env.NEXT_PUBLIC_ITEMS_PER_PAGE);
  try {
    const interviews = await prisma.mockInterview.findMany({
      where: {
        userId: user.id, // Only fetch for the logged-in user
      },
      select: {
        id: true,
        jobPosition: true,
        jobExperience: true,
        status: true,
        createdAt: true,
        overallScore: true,
        // We select ONLY what you asked for to keep it fast
      },
      orderBy: {
        createdAt: "desc", // Show newest first
      },
      take: itemsPerPage,
      skip: itemsPerPage * (Number(page) - 1),
    });

    return interviews;
  } catch (error) {
    console.error("Error fetching interviews:", error);
    return [];
  }
}

export async function fetchDashboardStats() {
  const user = await currentUser();

  if (!user) return;

  try {
    const stats = await prisma.mockInterview.aggregate({
      where: {
        userId: user.id, // Only calculate for this user
      },
      // 1. Calculate Average Score (Only for completed interviews with scores)
      _avg: {
        overallScore: true,
      },
      // 2. Count Total Interviews
      _count: {
        _all: true, // Total interviews created
      },
    });

    // 3. Count Completed Interviews specifically
    // We run a separate fast count for just "COMPLETED" status
    const completedCount = await prisma.mockInterview.count({
      where: {
        userId: user.id,
        status: "COMPLETED",
      },
    });

    return {
      averageScore: Math.round(stats._avg.overallScore || 0), // Round to whole number (e.g., 78)
      completedInterviews: completedCount,
      totalInterviews: stats._count._all,
      userName: user.fullName,
    };
  } catch (error) {
    console.error("Error fetching stats:", error);
    return {
      averageScore: 0,
      completedInterviews: 0,
      totalInterviews: 0,
      userName: "Loagn",
    };
  }
}
export async function fetchInterviewsCount() {
  const user = await currentUser();

  if (!user) return;

  try {
    const stats = await prisma.mockInterview.aggregate({
      where: {
        userId: user.id, // Only calculate for this user
      }, // 2. Count Total Interviews
      _count: {
        _all: true, // Total interviews created
      },
    });

    return stats._count._all;
  } catch (error) {
    console.error("Error fetching stats:", error);
    return 0;
  }
}
