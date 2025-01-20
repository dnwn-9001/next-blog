"use client";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/common/header";
import Star from "@/components/styles/star";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const starCount: number = 80; // 원하는 별의 개수

  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full bg-black`}
      >
        <Header />
        <div className="h-full relative">
          {Array.from({ length: starCount }).map((_, index) => (
            <Star key={index} />
          ))}
          {children}
        </div>
      </body>
    </html>
  );
}
