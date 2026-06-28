import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADDX Studio — Highly Animated UX/UI Web Design",
  description:
    "Your product videos are premium. Why is your website static? ADDX Studio builds highly animated, immersive web experiences with the same motion choreography as our launch films.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
