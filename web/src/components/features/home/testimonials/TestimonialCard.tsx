"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { fadeInUp } from "@/lib";

import {
  Card,
  CardContent,
} from "@/components/shared";

import { Icon } from "@/components/shared";

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
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
      }}
    >
      <Card>
        <CardContent>
          <Icon
            icon={Quote}
            className="mb-5 h-8 w-8"
          />

          <p className="leading-8 text-slate-600 italic">
            "{review}"
          </p>

          <div className="mt-6 flex items-center justify-between">
            <h4 className="font-semibold text-slate-900">
              {author}
            </h4>

            <span className="text-yellow-500">
              {"★".repeat(rating)}
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}