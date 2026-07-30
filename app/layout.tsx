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
  metadataBase: new URL("https://www.hyper-space.com.au"),
  title: {
    default: "Canberra Architects | Hyperspace Architecture",
    template: "%s | Hyperspace Architecture",
  },
  description:
    "Award-winning Canberra architects for residential, commercial, multi-dwelling, interiors, heritage and planning projects across ACT and NSW.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Hyperspace Architecture",
    title: "Canberra Architects | Hyperspace Architecture",
    description:
      "Award-winning architecture, planning, interiors and heritage across Canberra, the ACT, Sydney and regional NSW.",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canberra Architects | Hyperspace Architecture",
    description:
      "Award-winning architecture, planning, interiors and heritage across Canberra, ACT and NSW.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
