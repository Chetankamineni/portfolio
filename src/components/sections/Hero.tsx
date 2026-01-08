"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-zinc-600 dark:from-white dark:to-zinc-400"
      >
        Hi, I&apos;m Chetan Kamineni
      </motion.h1>

      {/* --- NEW AVAILABILITY INDICATOR --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 dark:bg-black/30 px-3 py-1 text-sm text-zinc-700 dark:text-zinc-300 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Available for opportunities
        </div>
      </motion.div>
      {/* ---------------------------------- */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300"
      >
        Specialized in building full-stack and machine learning applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 flex flex-wrap justify-center items-center gap-4"
      >
        {/* --- UPDATED LINK --- */}
        <a
          href="/chetankamineni_resume.pdf"
          download="chetankamineni_resume.pdf"
        >
          <Button>Download Resume</Button>
        </a>
        {/* -------------------- */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Chetankamineni"
            target="_blank"
            aria-label="GitHub"
          >
            <Github className="text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 transition-colors" />
          </Link>
          <Link
            href="https://linkedin.com/in/chetan-kamineni"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Linkedin className="text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 transition-colors" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
