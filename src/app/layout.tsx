import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const outfit = localFont({
  src: "./fonts/outfit-latin.woff2",
  variable: "--font-outfit",
  weight: "100 900",
  display: "swap",
});

const urbanist = localFont({
  src: "./fonts/urbanist-latin.woff2",
  variable: "--font-urbanist",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NusaPlan — AI Travel Planner Indonesia",
  description: "Ceritakan perjalananmu. AI menyusun itinerary terbaik untuk liburanmu di Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${urbanist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
