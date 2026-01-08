"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const GithubHeatmap = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Use resolvedTheme to handle "system" setting correctly
  const currentTheme = (resolvedTheme || theme) as "light" | "dark";

  // Custom Indigo theme scale matching your --primary: #6366f1
  const customTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section className="py-20 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold mb-2">Open Source Contributions</h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-mono">
          My activity on GitHub
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 shadow-sm"
      >
        {/* Replace 'grubersjoe' with your actual GitHub username */}
        <GitHubCalendar
          username="chetankamineni"
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          colorScheme={currentTheme}
          theme={customTheme}
          loading={false}
        />
      </motion.div>
    </section>
  );
};
