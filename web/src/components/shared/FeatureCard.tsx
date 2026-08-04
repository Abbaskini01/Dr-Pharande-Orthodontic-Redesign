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
      <Card className="group h-full">
        <CardContent className="flex h-full flex-col p-8">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg">
            <Icon
              icon={IconComponent}
              className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-white"
            />
          </div>

          <h3 className="text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>

          <p className="mt-5 flex-1 leading-8 text-muted-foreground">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}