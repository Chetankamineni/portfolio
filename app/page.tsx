import { Navbar } from "../components/sections/Navbar";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { ChatSection } from "../components/sections/ChatSection";
import { Experience } from "../components/sections/Experience";
import { Skills } from "../components/sections/Skills";
import { GithubHeatmap } from "../components/sections/GithubHeatmap"; // New Import
import { Projects } from "../components/sections/Projects";
import { Blog } from "../components/sections/Blog";
import { Contact } from "../components/sections/Contact";
import { ScrollProgress } from "../components/scroll-progress";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <ChatSection />
      <Experience />
      <Skills />
      <GithubHeatmap />
      <Projects />
      <Blog />
      <Contact />
      <footer className="text-center py-6 text-zinc-500">
        &copy; {new Date().getFullYear()} Chetan Kamineni. All Rights Reserved.
      </footer>
    </main>
  );
}
