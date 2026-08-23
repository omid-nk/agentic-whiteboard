import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import ToastProvider from "@/providers/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentic Whiteboard",
  description:
    "An AI-powered agentic whiteboard built with Next.js, React, TypeScript, and Tailwind CSS, enabling users to create and manipulate whiteboard content using natural language and AI agents.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-light text-dark dark:bg-dark dark:text-light font-mono">
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
