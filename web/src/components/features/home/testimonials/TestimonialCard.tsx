"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  author: string;
  review: string;
  rating: number;
  index: number;
}

export function TestimonialCard({
  author,
  review,
  rating,
  index,
}: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
      }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <Quote className="mb-5 h-8 w-8 text-blue-600" />

      <p className="leading-8 text-slate-600">
        "{review}"
      </p>

      <div className="mt-6 flex items-center justify-between">
        <h4 className="font-semibold">
          {author}
        </h4>

        <span className="text-yellow-500">
          {"★".repeat(rating)}
        </span>
      </div>
    </motion.article>
  );
}