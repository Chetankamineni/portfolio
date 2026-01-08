"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

export const GithubHeatmap = () => {
  return (
    <section className="py-20 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-zinc-500 dark:text-zinc-400 font-mono">
          GitHub Contributions · @Chetankamineni
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800"
      >
        {/* Replace 'grubersjoe' with your actual GitHub username */}
        <GitHubCalendar
          username="Chetankamineni"
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          theme={{
            light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
        />
      </motion.div>
    </section>
  );
};
