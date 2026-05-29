import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alejandro Clara - Full-Stack Engineer",
  description:
    "Full-Stack Engineer with 8+ years building production software across startups, fintechs, and agencies. Based in Montevideo, Uruguay.",
  openGraph: {
    title: "Alejandro Clara - Full-Stack Engineer",
    description:
      "Full-Stack Engineer with 8+ years building production software across startups, fintechs, and agencies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="bg-black">{children}</body>
    </html>
  );
}
