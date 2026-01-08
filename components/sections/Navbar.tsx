"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90vw] sm:w-auto"
      >
        <div className="flex items-center justify-between gap-4 px-4 py-2 bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 backdrop-blur-md rounded-full">
          <Link href="/" className="text-xl font-bold text-indigo-500">
            CK
          </Link>

          <div className="hidden sm:flex items-center gap-1 bg-zinc-800/50 p-1 rounded-full">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <Button
                  variant="ghost"
                  className="rounded-full text-sm font-normal px-4 text-zinc-300 hover:bg-zinc-700/50 hover:text-white"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="#contact">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-normal">
                Contact Me
              </Button>
            </a>
            <ThemeToggle />
            <div className="sm:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden fixed top-20 left-0 right-0 z-40 mx-auto w-[90vw] p-4 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-2xl border border-black/10 dark:border-white/10"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} passHref>
                  <Button
                    variant="ghost"
                    className="w-full text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
