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
  title: "You - Sacred Technology for Consciousness Evolution",
  description: "A transformative technology for facilitating self-reflection through AI-driven dialogue, inspired by Jungian active imagination and philosophical traditions.",
  keywords: "AI technology, digital reflection, self-improvement, personal development, consciousness, psychology, Jungian, wellbeing technology",
  authors: [{ name: "Nathaniel" }],
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: "You - Sacred Technology for Consciousness Evolution",
    description: "A transformative technology for facilitating self-reflection through AI-driven dialogue",
    type: "website",
    images: [
      {
        url: '/logo.jpg',
        width: 280,
        height: 280,
        alt: 'You - A luminous white Y emerging from darkness',
      },
    ],
  },
  other: {
    'classification': 'Technology/Health and Wellness',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
