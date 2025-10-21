"use client";

import { motion } from "framer-motion";
import { PythonIcon } from "../../../public/icons/PythonIcon";
import { ReactIcon } from "../../../public/icons/ReactIcon";
import { NodeIcon } from "../../../public/icons/NodeIcon";
import { GitIcon } from "../../../public/icons/GitIcon";
import { MySqlIcon } from "../../../public/icons/MySqlIcon";
import { GithubIcon } from "../../../public/icons/GithubIcon";
import { SupabaseIcon } from "../../../public/icons/SupabaseIcon";
import { PostgreSqlIcon } from "../../../public/icons/PostgreSqlIcon";
import { ScikitLearnIcon } from "../../../public/icons/ScikitLearnIcon";
import { PandasIcon } from "../../../public/icons/PandasIcon";
import { VscodeIcon } from "../../../public/icons/VscodeIcon";

// List using all custom icons with correct styling
const skillsList = [
  {name: "Java", icon: <span className="h-10 w-10 text-[#007396]" />}, // Simple text icon
  { name: "Python", icon: <PythonIcon className="h-10 w-10" /> }, // Multi-color, no text class
  { name: "React.js", icon: <ReactIcon className="h-10 w-10 text-[#61DAFB]" /> },
  { name: "Node.js", icon: <NodeIcon className="h-10 w-10 text-[#8CC84B]" /> },
  { name: "Git", icon: <GitIcon className="h-10 w-10 text-[#F05032]" /> },
  { name: "MySQL", icon: <MySqlIcon className="h-10 w-10" /> }, // Multi-color, no text class
  { name: "Github", icon: <GithubIcon className="h-10 w-10" /> }, // Inherits color
  { name: "Supabase", icon: <SupabaseIcon className="h-10 w-10" /> }, // Multi-color, no text class
  { name: "PostgreSQL", icon: <PostgreSqlIcon className="h-10 w-10 text-[#336791]" /> },
  { name: "Scikit-learn", icon: <ScikitLearnIcon className="h-10 w-10" /> }, // Multi-color, no text class
  { name: "Pandas", icon: <PandasIcon className="h-10 w-10 text-[#130654]" /> },
  { name: "VS Code", icon: <VscodeIcon className="h-10 w-10 text-[#007ACC]" /> },
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