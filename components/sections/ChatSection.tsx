"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Send, Bot } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "Tell me about your experience",
  "What technologies do you use?",
  "What projects have you built?",
];

export function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only scroll if there are messages in the chat
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text }),
      });
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Unable to connect to AI server.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chat-ai" className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <Card className="h-[650px] flex flex-col border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          {/* HEADER */}
          <CardHeader className="bg-indigo-600 text-white border-b border-indigo-700 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white/20">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">Chat with My AI</p>
                <p className="text-xs text-indigo-100">
                  Ask me anything about my experience
                </p>
              </div>
            </div>
          </CardHeader>

          {/* CONTENT */}
          <CardContent className="flex-1 overflow-y-auto px-6 py-8 bg-white dark:bg-zinc-950">
            {/* EMPTY STATE */}
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center text-zinc-500 dark:text-zinc-400">
                <div className="mb-6 p-4 rounded-full bg-indigo-600/10 text-indigo-600">
                  <Bot className="w-8 h-8" />
                </div>

                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  Welcome!
                </h3>
                <p className="text-sm max-w-sm mb-6">
                  I am Chetan’s AI assistant. Feel free to ask me anything!
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="
                        px-4 py-2 text-sm rounded-full
                        border border-zinc-300 dark:border-zinc-700
                        text-zinc-700 dark:text-zinc-300
                        hover:border-indigo-500 hover:text-indigo-600
                        transition
                      "
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* MESSAGES */}
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "mb-4 flex",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] px-4 py-3 text-sm leading-relaxed",
                      msg.role === "user"
                        ? "bg-indigo-600 text-white rounded-2xl rounded-br-none"
                        : `
                          bg-zinc-100 text-zinc-800 border border-zinc-200
                          dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700
                          rounded-2xl rounded-bl-none
                        `
                    )}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isLoading && (
              <div className="text-sm text-indigo-500 mt-2">AI is typing…</div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          {/* INPUT */}
          <CardFooter className="border-t border-zinc-200 dark:border-zinc-800 px-4 py-3 bg-zinc-50 dark:bg-transparent">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
                setInput("");
              }}
              className="flex w-full items-center gap-3"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="
                  flex-1 rounded-full
                  bg-white dark:bg-zinc-950
                  border-zinc-300 dark:border-zinc-700
                  focus-visible:ring-indigo-500
                "
              />
              <Button
                size="icon"
                type="submit"
                disabled={!input.trim() || isLoading}
                className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
