"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? I’d love to
            hear from you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-12 gap-6">
          {/* LEFT — CONTACT FORM */}
          <Card className="md:col-span-8 p-8 md:p-10 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 ">
            <form className="space-y-6">
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="Your email" />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Subject of your message" />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Your message"
                  className="min-h-[140px]"
                />
              </div>

              {/* Button */}
              <Button
                size="lg"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold h-12 gap-2"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* RIGHT — INFO CARDS */}
          <div className="md:col-span-4 space-y-6">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "sridhar.kamineni@outlook.com",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Hyderabad, India",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "Available on request",
              },
            ].map(({ icon: Icon, label, value }) => (
              <Card
                key={label}
                className="
                  relative flex items-center gap-5
                  px-6 py-6
                  bg-white dark:bg-zinc-950
                  border border-zinc-200 dark:border-zinc-800
                  rounded-xl
                  shadow-sm
                "
              >
                {/* ICON — center left */}
                <div
                  className="
                    flex items-center justify-center
                    w-12 h-12
                    rounded-full
                    bg-indigo-100 dark:bg-indigo-600/15
                    text-indigo-600 dark:text-indigo-400
                    shrink-0
                  "
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* TEXT */}
                <div className="leading-tight text-center mx-auto">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {label}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    {value}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
