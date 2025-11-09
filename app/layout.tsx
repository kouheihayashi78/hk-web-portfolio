import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'HK | Developer Portfolio',
  description: 'Modern portfolio website showcasing projects and skills. Developer specializing in React, Next.js, and TypeScript.',
  keywords: ['Portfolio', 'Developer', 'React', 'Next.js', 'TypeScript', 'Web Development'],
  authors: [{ name: 'HK' }],
  creator: 'HK',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    title: 'HK | Developer Portfolio',
    description: 'Modern portfolio website showcasing projects and skills.',
    siteName: 'HK Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HK | Developer Portfolio',
    description: 'Modern portfolio website showcasing projects and skills.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
