import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Work//OS | Personal HQ",
  description:
    "One place to orchestrate work, habits, money, and ideas. Your personal operating system.",
  keywords: ["productivity", "dashboard", "work os", "personal hq"],
  authors: [{ name: "Work OS" }],
  creator: "Work OS",
};

export const viewport: Viewport = {
  themeColor: "#00ff41",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
