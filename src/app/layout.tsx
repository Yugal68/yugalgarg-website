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
  title: "Yugal Garg | Automation Expert",
  description: "Code That Works While You Sleep. I build automation solutions, convert media, create websites, and help businesses scale with technology.",
  keywords: ["automation", "business automation", "excel automation", "website development", "shopify", "whatsapp marketing", "video transcription"],
  authors: [{ name: "Yugal Garg" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Yugal Garg | Automation Expert",
    description: "Code That Works While You Sleep.",
    url: "https://yugalgarg.in",
    siteName: "Yugal Garg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yugal Garg | Automation Expert",
    description: "Code That Works While You Sleep.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#ededed]`}
      >
        {children}
      </body>
    </html>
  );
}
