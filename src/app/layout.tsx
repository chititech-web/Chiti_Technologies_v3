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
    title: {
    default: "Chiti Technologies — AI Systems, Premium Websites & Digital Infrastructure",
    template: "%s | Chiti Technologies",
  },
  description:
    "Chiti Technologies builds AI systems, premium websites, ecommerce platforms, SaaS dashboards, automation workflows, and scalable design systems for ambitious brands.",
  keywords: [
    "AI systems",
    "premium websites",
    "digital infrastructure",
    "ecommerce development",
    "SaaS design",
    "automation workflows",
    "CRM automation",
    "WhatsApp automation",
    "brand design systems",
    "chiti technologies",
  ],
  robots: { index: true, follow: true },
  alternates: {
    languages: {
      en: "/en",
      hi: "/hi",
    },
  },
    openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Chiti Technologies",
    title: "Chiti Technologies — AI Systems, Premium Websites & Digital Infrastructure",
    description:
      "Chiti Technologies builds AI systems, premium websites, ecommerce platforms, SaaS dashboards, automation workflows, and scalable design systems for ambitious brands.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Chiti Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiti Technologies — AI Systems, Premium Websites & Digital Infrastructure",
    description:
      "Chiti Technologies builds AI systems, premium websites, ecommerce platforms, SaaS dashboards, automation workflows, and scalable design systems for ambitious brands.",
    images: ["/logo.png"],
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
