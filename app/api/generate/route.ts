import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { jobPosition, jobDesc, jobExperience } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      Job Position: ${jobPosition}
      Job Description: ${jobDesc}
      Years of Experience: ${jobExperience}
      
      Depending on Job Position, Job Description & Years of Experience, give me 5 Interview questions along with Answer in JSON format.
      
      Required JSON Structure:
      [
        {
          "question": "Question text",
          "answer": "Ideal answer text"
        }
      ]
      
      IMPORTANT: Return ONLY the JSON. No markdown (like \`\`\`json).
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Clean up the text (Gemini sometimes adds markdown syntax despite instructions)
    const cleanedJson = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsedResponse = JSON.parse(cleanedJson);

    return NextResponse.json(parsedResponse);
  } catch (error) {
    console.error("Error generating questions:", error);
    return NextResponse.json(
      { error: "Failed to generate questions" },
      { status: 500 },
    );
  }
}
