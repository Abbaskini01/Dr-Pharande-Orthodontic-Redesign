"use client";

import { motion } from "framer-motion";

import { fadeInUp } from "@/lib";

import {
  Card,
  CardContent,
} from "./Card";

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card>
        <CardContent className="text-center">
          <h3 className="text-4xl font-bold text-blue-600">
            {value}
          </h3>

          <p className="mt-3 text-slate-600">
            {label}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}