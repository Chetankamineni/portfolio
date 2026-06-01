// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider"; // <-- Import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chetan Kamineni | Software Developer",
  description:
    "Portfolio of Chetan Kamineni, a software developer specializing in React, Node.js, and Machine Learning.",
  other: {
    "msvalidate.01": "CE4E5D384725C0E0C0333BBE6D564222",
    "google-site-verification": "Io2sAxXId-CA4qsPgfcuUyMPIRyFMp_ah9fo3Nvu_Q0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script
          defer
          src="http://localhost:3000/script.js"
          data-website-id="115f6ce8-384b-4284-8033-34bd38b143b9"
        />
      </body>
    </html>
  );
}
