"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const GithubHeatmap = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = (resolvedTheme || theme) as "light" | "dark";

  const customTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section className="py-12 md:py-20 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="mb-6 sm:mb-8 text-center text-base sm:text-lg text-muted-foreground">
          GitHub Contributions{" "}
          <span className="text-foreground">· @Chetankamineni</span>
        </h2>
      </motion.div>

      {/* - 'no-scrollbar' class hides the visual scrollbar
         - 'overflow-x-auto' allows swiping on mobile without the bar
      */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="w-full max-w-5xl overflow-x-auto no-scrollbar"
      >
        <div className="min-w-[844px] flex justify-center pb-2">
          <GitHubCalendar
            username="chetankamineni"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            colorScheme={currentTheme}
            theme={customTheme}
            loading={false}
          />
        </div>
      </motion.div>

      {/* CSS to hide scrollbars across all browsers */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};
