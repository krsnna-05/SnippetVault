import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SnippetVault",
  description:
    "A modern code snippet management platform built with Next.js and Supabase.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("dark font-sans", geist.variable)}>
      <body className={manrope.className + " min-h-screen flex flex-col"}>
        {children}
      </body>
    </html>
  );
}
