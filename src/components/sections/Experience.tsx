"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
       <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
       <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
         className="max-w-2xl mx-auto"
       >
        <Card className="bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>Software Development Intern</CardTitle>
                        <CardDescription className="pt-1">Ektha Tech</CardDescription>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">May 2025 - Jun 2025</p>
                </div>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li>Developed custom vendor and warehouse reports using the Frappe framework, reducing manual data gathering time by 30%.</li>
                    <li>Collaborated with senior developers to integrate reporting features directly into ERP workflows for over 10 users.</li>
                    <li>Gained hands-on experience in full-stack ERPNext development using Python, JavaScript, and Jinja.</li>
                </ul>
            </CardContent>
        </Card>
       </motion.div>
    </section>
  );
};