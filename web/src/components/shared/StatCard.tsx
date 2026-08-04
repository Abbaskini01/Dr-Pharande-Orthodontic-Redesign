"use client";

import { motion } from "framer-motion";

import { fadeInUp } from "@/lib";

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-3xl border bg-white p-8 text-center shadow-sm"
    >
      <h3 className="text-4xl font-bold text-blue-600">
        {value}
      </h3>

      <p className="mt-3 text-slate-600">
        {label}
      </p>
    </motion.div>
  );
}