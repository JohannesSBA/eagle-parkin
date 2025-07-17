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
  title: "Richo Parking | Smart Urban Parking Solutions",
  description: "🚗 Reserve parking spots instantly across multiple cities. Real-time availability, smart navigation, and secure payments. Save time and reduce stress with Richo Parking's urban mobility solutions.",
  keywords: [
    'parking app',
    'reserve parking',
    'smart parking',
    'urban parking solutions',
    'instant parking reservation',
    'towing support',
    'mobile parking app'
  ],
  openGraph: {
    title: "Richo Parking | Modern Parking Management Platform",
    description: "Discover stress-free urban parking with real-time availability updates, smart navigation, and 24/7 towing support. Reserve your spot in seconds!",
    type: "website",
    locale: "en_US",
    url: "https://richoparking.com",
    siteName: "Richo Parking",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Richo Parking Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Richo Parking | Revolutionizing Urban Parking",
    description: "AI-powered parking solutions with real-time availability and smart navigation. Reserve your spot now and experience hassle-free urban parking.",
    images: {
      url: "/logo.png",
      alt: "Richo Parking Logo",
    },
  },
  icons: {
    icon: "/logo.png",
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
