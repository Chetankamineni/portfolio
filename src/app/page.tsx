import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact"; // Kept import
import { ScrollProgress } from "@/components/scroll-progress"; // Kept import

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress /> {/* Added ScrollProgress component */}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact /> {/* Added Contact component */}
      <footer className="text-center py-6 text-zinc-500">
        &copy; {new Date().getFullYear()} Chetan Kamineni. All Rights Reserved.
      </footer>
    </main>
  );
}