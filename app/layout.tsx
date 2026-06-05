import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FieldDocs — SOPs & Training Docs for Trades Businesses",
  description:
    "AI-generated SOPs, onboarding checklists, and service procedures built specifically for HVAC, plumbing, electrical, and roofing businesses. Professional documents in minutes.",
  openGraph: {
    title: "FieldDocs — SOPs & Training Docs for Trades Businesses",
    description:
      "Stop writing procedures from scratch. FieldDocs generates OSHA-ready SOPs and training docs tailored to your trade.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
