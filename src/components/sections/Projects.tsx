"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Continuum - Full stack web application",
    description: "Designed and developed a full-stack media and gaming web application using React.js (frontend) and Node.js with Express (backend), integrating TMDB and RAWG APIs.",
    tags: ["React.js", "Node.js", "Express", "Vercel", "Render"],
    githubUrl: "https://github.com/Chetankamineni/continuum-app",
    liveUrl: "https://continuum-app.vercel.app/",
  },
  {
    title: "Music Popularity Prediction (ML)",
    description: "Developed a machine learning model to predict song popularity using audio features, achieving high accuracy in classification on a large Spotify dataset.",
    tags: ["Python", "Scikit-learn", "Pandas", "XGBoost", "ML"],
    githubUrl: "https://github.com/Chetankamineni/music-popularity",
  },
  {
    title: "Weather app",
    description: "Developed a responsive weather application using React and Vite, integrating the OpenWeatherMap API to provide real-time weather data for any global location.",
    tags: ["React", "Vite", "OpenWeatherMap API", "Vercel"],
    githubUrl: "https://github.com/Chetankamineni/weather-app",
    liveUrl: "https://weather-app-chetan.vercel.app/",
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* --- CSS classes for equal height are on this Card component --- */}
            <Card className="bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 h-full flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="pt-2 text-zinc-600 dark:text-zinc-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow"> {/* This makes the content area expand */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-blue-500 transition-colors">
                      <Github size={16} />
                      Code
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-blue-500 transition-colors">
                      <ExternalLink size={16} />
                      Live Demo
                    </Link>
                  )}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};