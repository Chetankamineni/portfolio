"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "Ektha Tech",
    role: "Software Development Intern",
    date: "May 2025 - Jun 2025",
    location: "Hyderabad, India", // Inferred location
    description: [
      "Developed custom vendor and warehouse reports using the Frappe framework, reducing manual data gathering time by 30%.",
      "Collaborated with senior developers to integrate reporting features directly into ERP workflows for over 10 users.",
      "Gained hands-on experience in full-stack ERPNext development using Python, JavaScript, and Jinja."
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
            <h2 className="text-3xl font-bold mb-4">
                Experience
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-mono">
                My professional work history and roles
            </p>
        </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[9px] top-6 h-5 w-5 rounded-full bg-blue-600 ring-4 ring-white dark:ring-black transition-transform hover:scale-125" />

              <Card className="bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                        {exp.role}
                      </CardTitle>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mt-1">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-col md:items-end gap-1">
                        <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
                            {exp.date}
                        </span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                            {exp.location}
                        </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mt-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 min-w-[6px] rounded-full bg-blue-500/80" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};