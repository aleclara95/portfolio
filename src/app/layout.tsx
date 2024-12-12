import "./globals.css";
import type { Metadata } from "next";
import { Anonymous_Pro } from "next/font/google";
import Script from "next/script"; // Import the Script component

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
      <head>
        {/* Add the Google Analytics script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1C9JKNR304"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1C9JKNR304');
          `}
        </Script>
      </head>
      <body className={anonymousPro.className}>{children}</body>
    </html>
  );
}
