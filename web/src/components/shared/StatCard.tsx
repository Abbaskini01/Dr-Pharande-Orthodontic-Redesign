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
      <Card className="group h-full">
        <CardContent className="flex flex-col items-center justify-center p-8 text-center">

          <div className="mb-5 h-1 w-16 rounded-full bg-primary transition-all duration-300 group-hover:w-24" />

          <h3 className="text-5xl font-extrabold tracking-tight text-primary transition-transform duration-300 group-hover:scale-105">
            {value}
          </h3>

          <p className="mt-4 max-w-[220px] text-base leading-7 text-muted-foreground">
            {label}
          </p>

        </CardContent>
      </Card>
    </motion.div>
  );
}