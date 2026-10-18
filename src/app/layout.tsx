import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const identidadExtraLight = localFont({
  src: [
    {
      path: "../fonts/Identidad-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Identidad-ExtraLight.woff",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-identidad",
  display: "swap",
});

export const metadata: Metadata = {
  title: "New website under development — Foxlead",
  description: "A new website is currently under development by Foxlead.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} ${identidadExtraLight.variable} h-full antialiased`}
    >
      <body className="font-body flex min-h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
