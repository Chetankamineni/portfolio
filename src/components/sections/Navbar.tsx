"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle"; // <-- Import

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center justify-center gap-4 px-4 py-2 bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 backdrop-blur-md rounded-full">
        <Link href="/" className="text-xl font-bold text-blue-500">CK</Link>
        
        <div className="hidden sm:flex items-center gap-1 bg-zinc-800/50 p-1 rounded-full">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} passHref>
              <Button variant="ghost" className="rounded-full text-sm font-normal px-4 text-zinc-300 hover:bg-zinc-700/50 hover:text-white">
                {link.name}
              </Button>
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <a href="#contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-normal">
                  Contact Me
              </Button>
          </a>
          <ThemeToggle /> 
        </div>
      </div>
    </motion.nav>
  );
};