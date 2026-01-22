// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider"; // <-- Import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chetan Kamineni | Software Developer",
  description:
    "Portfolio of Chetan Kamineni, a software developer specializing in React, Node.js, and Machine Learning.",
  other: {
    "msvalidate.01": "CE4E5D384725C0E0C0333BBE6D564222",
    "google-site-verification": "2M1xcu_OUHWWrAqZB8CAAoEJ7f6lAy0Q9j6HMpGG47o",
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
      </body>
    </html>
  );
}
