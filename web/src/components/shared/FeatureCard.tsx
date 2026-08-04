"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/lib";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
    >
      <Icon className="mb-6 h-10 w-10 text-blue-600" />

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </motion.article>
  );
}