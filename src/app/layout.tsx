import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileContactBar } from "@/components/MobileContactBar";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Joey Rubino \u2014 Sober Companion & Recovery Support",
    template: "%s | Joey Rubino",
  },
  description:
    "Private sober companioning, interventions, fitness coaching, and recovery support with Joey Rubino in Los Angeles. Personal, discreet, and grounded in real-world accountability.",
  metadataBase: new URL("https://joeyrubinorehab.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Joey Rubino",
    title: "Joey Rubino \u2014 Sober Companion & Recovery Support",
    description:
      "Private sober companioning, interventions, fitness coaching, and recovery support with Joey Rubino in Los Angeles.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Joey Rubino \u2014 Find Healing. Find Hope. Find Meaning.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@joeyrubino",
    title: "Joey Rubino \u2014 Sober Companion & Recovery Support",
    description:
      "Private sober companioning, interventions, fitness coaching, and recovery support.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
