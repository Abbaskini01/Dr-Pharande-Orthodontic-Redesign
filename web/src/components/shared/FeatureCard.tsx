"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/lib";

import {
  Card,
  CardContent,
} from "./Card";

import { Icon } from "./Icon";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: IconComponent,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card>
        <CardContent>
          <Icon
            icon={IconComponent}
            className="mb-6"
          />

          <h3 className="text-xl font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}