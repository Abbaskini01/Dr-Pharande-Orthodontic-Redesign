"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

import { clinic } from "@/content";

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2"
    >
      <Award className="h-4 w-4 text-blue-600" />

      <span className="text-sm font-semibold text-blue-700">
        {clinic.hero.badge}
      </span>
    </motion.div>
  );
}