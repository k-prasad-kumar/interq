import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const nunitoSans = Nunito_Sans({ variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InterQ | AI-Powered Mock Interviews",
  description:
    "Master your interview skills with InterQ's AI mock interviews. Get personalized questions, voice interaction, and detailed performance scoring.",

  openGraph: {
    title: "InterQ",
    description:
      "Master your interview skills with InterQ's AI mock interviews. Get personalized questions, voice interaction, and detailed performance scoring.",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "InterQ",
    images: [
      {
        url: process.env.OG_IMAGE as string, // This points to public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "InterQ - AI Interview Coach",
      },
    ],
    locale: "en-US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "InterQ",
    description:
      "Master your interview skills with InterQ's AI mock interviews. Get personalized questions, voice interaction, and detailed performance scoring.",
    images: [process.env.OG_IMAGE as string],
  },
  // generator: "Next.js",
  // manifest: "/manifest.json",
  // keywords: [
  //   "InterQ",
  //   "interq",
  //   "Interq",
  //   "AI Mockinterview",
  //   "mock interview",
  //   "interview",
  // ],
  authors: [{ name: "InterQ", url: process.env.NEXT_PUBLIC_URL }],
  // viewport:
  //   " minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  // icons: [
  //   { rel: "apple-touch-icon", url: "/icons/logo-512.png" },
  //   { rel: "icon", url: "/icons/logo-512.png" },
  // ],
};

export const viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  shrinkToFit: "no",
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className={nunitoSans.variable}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster position="top-center" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
