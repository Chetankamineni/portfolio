"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { GraduationCap } from "lucide-react";
import { ChatSection } from "./ChatSection";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      {/* ABOUT TEXT */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>

        <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          As a full-stack engineer, I’ve designed and developed applications
          from the ground up — everything from backend architecture and frontend
          experience to database design, scalability, and intelligent
          automation.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      ></motion.div>
    </section>
  );
};
