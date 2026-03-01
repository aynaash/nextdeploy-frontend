import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextDeploy - Self-Hosted Next.js Deployment",
  description:
    "Deploy Next.js to your own VPS. No lock-in. Full control. Complete transparency.",
  keywords: ["Next.js", "deployment", "self-hosted", "Docker", "VPS"],
  openGraph: {
    title: "NextDeploy",
    description: "Self-hosted Next.js deployment platform",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
