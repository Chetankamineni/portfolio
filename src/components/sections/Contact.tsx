"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Contact = () => {
    return (
        <section id="contact" className="py-20 text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold">Get In Touch</h2>
                <p className="max-w-md mx-auto mt-4 text-zinc-600 dark:text-zinc-400">
                    I&apos;m currently open to new opportunities. My inbox is always open, so feel free to reach out via email!
                </p>
                <div className="mt-8">
                    <a href="mailto:sridhar.kamineni@outlook.com">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                            Say Hello 📧
                        </Button>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};