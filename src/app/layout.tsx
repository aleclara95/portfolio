import "./globals.css";
import type { Metadata } from "next";
import { Anonymous_Pro } from "next/font/google";

const anonymousPro = Anonymous_Pro({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alejandro Clara",
  description: "Alejandro Clara's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={anonymousPro.className}>{children}</body>
    </html>
  );
}
