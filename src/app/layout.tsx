import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chitistudio.com"),
  title: "Chiti Studio — Intelligent Systems & Digital Design",
  description:
    "A premium creative agency specializing in UI/UX design, web development, and brand identity. We build intelligent systems, not just websites.",
  keywords: [
    "design studio",
    "UI/UX",
    "web development",
    "brand identity",
    "digital agency",
    "automation",
    "CRM",
  ],
  openGraph: {
    title: "Chiti Studio",
    description:
      "A premium creative agency specializing in UI/UX design, web development, and brand identity.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Chiti Studio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased selection:bg-primary selection:text-on-primary overflow-x-hidden`}
      >
        <div id="theme-clip" />
        {children}
      </body>
    </html>
  );
}
