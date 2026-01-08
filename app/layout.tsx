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
