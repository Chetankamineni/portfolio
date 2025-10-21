"use client";

import { motion } from "framer-motion";
import {
    FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava
} from "react-icons/fa";
import {
    SiMysql, SiSupabase, SiPostgresql, SiPandas, SiVercel, SiNextdotjs,
    SiExpress, SiFirebase, SiVite, SiMongodb, SiScikitlearn
} from "react-icons/si";  
import { DiJavascript1, DiCss3, DiHtml5 } from "react-icons/di"; // HTML, CSS, JS
import { VscCode } from "react-icons/vsc"; // VS Code icon

const skillsList = [
    { name: "Java", icon: <FaJava className="h-10 w-10 text-[#007396]" /> },
    { name: "Python", icon: <FaPython className="h-10 w-10 text-[#3776AB]" /> },
    { name: "React.js", icon: <FaReact className="h-10 w-10 text-[#61DAFB]" /> },
    { name: "Node.js", icon: <FaNodeJs className="h-10 w-10 text-[#8CC84B]" /> },
    { name: "Git", icon: <FaGitAlt className="h-10 w-10 text-[#F05032]" /> },
    { name: "MySQL", icon: <SiMysql className="h-10 w-10 text-[#4479A1]" /> },
    { name: "Github", icon: <FaGithub className="h-10 w-10 text-gray-800 dark:text-white" /> },
    { name: "Supabase", icon: <SiSupabase className="h-10 w-10 text-[#3ECF8E]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="h-10 w-10 text-[#336791]" /> },
    { name: "Pandas", icon: <SiPandas className="h-10 w-10 text-[#130654]" /> },
    { name: "VS Code", icon: <VscCode className="h-10 w-10 text-[#007ACC]" /> },
    { name: "HTML", icon: <DiHtml5 className="h-10 w-10 text-[#E34F26]" /> },
    { name: "CSS", icon: <DiCss3 className="h-10 w-10 text-[#1572B6]" /> },
    { name: "JavaScript", icon: <DiJavascript1 className="h-10 w-10 text-[#F7DF1E]" /> },
    { name: "Next JS", icon: <SiNextdotjs className="h-10 w-10 text-[#000000]" /> },
    { name: "Vite", icon: <SiVite className="h-10 w-10 text-[#646CFF]" /> },
    { name: "Firebase", icon: <SiFirebase className="h-10 w-10 text-[#FFCA28]" /> },
    { name: "Express JS", icon: <SiExpress className="h-10 w-10 text-[#000000]" /> },
    { name: "MongoDB", icon: <SiMongodb className="h-10 w-10 text-[#47A248]" /> },
    { name: "Vercel", icon: <SiVercel className="h-10 w-10 text-[#000000]" /> },
    { name: "Scikit-learn", icon: <SiScikitlearn className="h-10 w-10 text-[#F7931E]" /> }, // Added Scikit-learn icon
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

export const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Technologies I Use</h2>
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.05 }}
                >
                    {skillsList.map((skill) => (
                        <motion.div
                            key={skill.name}
                            className="flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)",
                                borderColor: "rgba(59, 130, 246, 0.7)"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {skill.icon}
                            <p className="text-sm font-medium text-center text-zinc-700 dark:text-zinc-300">
                                {skill.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
