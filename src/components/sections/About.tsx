"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
          <CardHeader>
            <div className="flex items-center gap-4">
                <GraduationCap className="h-8 w-8 text-blue-500" />
                <div>
                    <CardTitle>Education</CardTitle>
                    <CardDescription className="mt-1">
                        Gitam University, Hyderabad
                    </CardDescription>
                </div>
            </div>
            <p className="pt-4 text-zinc-700 dark:text-zinc-300">
              I am pursuing a B.Tech in Computer Science and Engineering with a current CGPA of 8.7.
            </p>
          </CardHeader>
        </Card>
      </motion.div>
    </section>
  );
};