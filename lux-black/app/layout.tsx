import type { Metadata } from "next";
import "./globals.css";
import contentData from "@/public/content.json";
import type { SiteContent } from "@/lib/content-types";
import { ContentProvider } from "@/components/content/ContentProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Build-time seed of the editable content source (also re-fetched on the client).
const content = contentData as unknown as SiteContent;

export const metadata: Metadata = {
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description:
    "Ultra-luxury private chauffeur service. Executive sedans, SUVs, and ultra-luxury saloons with discreet, around-the-clock concierge.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-obsidian text-ivory font-sans antialiased">
        <ContentProvider initial={content}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ContentProvider>
      </body>
    </html>
  );
}
