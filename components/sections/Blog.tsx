"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import Link from "next/link";

// 1. Define the data interface
interface BlogPost {
  title: string;
  description: string;
  url: string;
}

// 2. Sample Data
const blogPosts: BlogPost[] = [
  {
    title: "Visit My Blog",
    description:
      "I write about JavaScript, React, Node.js, AWS, and other technologies on my Hashnode blog. Check out my latest articles and tutorials.",
    url: "https://js-package-manager.hashnode.dev/",
  },
];

// 3. The Blog Card Component
const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
  if (!post) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 0px 15px rgba(99, 102, 241, 0.4)",
      }}
      className="h-full rounded-2xl overflow-hidden transform-gpu will-change-transform"
    >
      <Card className="bg-zinc-100 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 h-full flex flex-col rounded-2xl transition-colors duration-300 hover:border-indigo-500/60 text-center">
        <CardHeader>
          <CardTitle className="leading-tight">{post.title}</CardTitle>
          <CardDescription className="pt-2 text-base text-zinc-600 dark:text-zinc-400">
            {post.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow" />

        <CardFooter className="flex justify-center">
          <Link
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors text-center w-full"
          >
            Read Article
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// 4. The Main Blog Section
export const Blog = () => {
  const post = blogPosts[0];

  return (
    <section id="blog" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Blog</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 font-mono">
          Thoughts, tutorials, and insights on software development
        </p>
      </motion.div>

      <div className="max-w-md mx-auto">
        <BlogCard post={post} index={0} />
      </div>
    </section>
  );
};
