"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiMysql,
  SiSupabase,
  SiVercel,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { DiJavascript1, DiCss3, DiHtml5 } from "react-icons/di";

const skillsList = [
  { name: "Java", icon: <FaJava className="h-10 w-10 text-[#007396]" /> },
  { name: "Python", icon: <FaPython className="h-10 w-10 text-[#3776AB]" /> },
  { name: "React.js", icon: <FaReact className="h-10 w-10 text-[#61DAFB]" /> },
  { name: "Node.js", icon: <FaNodeJs className="h-10 w-10 text-[#8CC84B]" /> },
  { name: "Git", icon: <FaGitAlt className="h-10 w-10 text-[#F05032]" /> },
  { name: "MySQL", icon: <SiMysql className="h-10 w-10 text-[#4479A1]" /> },
  {
    name: "Github",
    icon: <FaGithub className="h-10 w-10 text-gray-800 dark:text-white" />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="h-10 w-10 text-[#3ECF8E]" />,
  },
  { name: "HTML", icon: <DiHtml5 className="h-10 w-10 text-[#E34F26]" /> },
  { name: "CSS", icon: <DiCss3 className="h-10 w-10 text-[#1572B6]" /> },
  {
    name: "JavaScript",
    icon: <DiJavascript1 className="h-10 w-10 text-[#F7DF1E]" />,
  },
  {
    name: "Next JS",
    icon: <SiNextdotjs className="h-10 w-10 text-black dark:text-white" />,
  },
  {
    name: "Express JS",
    icon: <SiExpress className="h-10 w-10 text-black dark:text-white" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="h-10 w-10 text-[#47A248]" /> },
  {
    name: "Vercel",
    icon: <SiVercel className="h-10 w-10 text-black dark:text-white" />,
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 font-mono">
          My expertise and technical proficiencies
        </p>
      </motion.div>
      {/* Constraints maintained without the border/background box */}
      <div className="max-w-4xl mx-auto overflow-hidden relative">
        {/* Faded Left Overlay (Matches page background) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />

        {/* Faded Right Overlay (Matches page background) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />

        <div className="flex relative py-6">
          <motion.div
            className="flex whitespace-nowrap gap-16"
            animate={{
              x: [0, -1800], // Ensure this matches the total width of your icons + gaps
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...skillsList, ...skillsList].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex flex-col items-center justify-center min-w-[80px] gap-3 group"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 group-hover:text-indigo-500 transition-colors">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
