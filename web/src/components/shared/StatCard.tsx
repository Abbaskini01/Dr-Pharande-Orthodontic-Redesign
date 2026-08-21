"use client";

import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

import { fadeInUp } from "@/lib";

import {
  Card,
  CardContent,
} from "./Card";

interface StatCardProps {
  value: string;
  label: string;
}

const STAT_ICONS = {
  experience: Award,
  patients: Users,
  rating: Star,
  default: ShieldCheck,
} as const;

export function StatCard({
  value,
  label,
}: StatCardProps) {
  const isNumeric = /[\d+★]/.test(value);
  const iconType = label.includes("Experience")
    ? "experience"
    : label.includes("Patients")
      ? "patients"
      : label.includes("Rating")
        ? "rating"
        : "default";
  const Icon = STAT_ICONS[iconType];

  return (
    <motion.div variants={fadeInUp}>
      <Card
        className="
          group
          h-full
          min-h-[250px]
        "
      >
        <CardContent
          className="
            flex
            h-full
            flex-col
            items-center
            justify-center
            p-8
            text-center
          "
        >
          {/* Icon */}

          <div
            className="
              mb-6
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-primary/10
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:bg-primary
              group-hover:shadow-lg
            "
          >
            <Icon
              className="
                h-8
                w-8
                text-primary
                transition-colors
                duration-300
                group-hover:text-white
              "
            />
          </div>

          {/* Value */}

          <h3
            className={
              isNumeric
                ? `
                  text-5xl
                  font-extrabold
                  tracking-tight
                  text-primary
                  transition-transform
                  duration-300
                  group-hover:scale-105
                `
                : `
                  text-3xl
                  font-bold
                  leading-tight
                  text-primary
                `
            }
          >
            {value}
          </h3>

          {/* Label */}

          <p
            className="
              mt-5
              max-w-[180px]
              text-base
              leading-7
              text-muted-foreground
            "
          >
            {label}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}