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
      <Card
        className="
          group
          relative
          h-full
          overflow-hidden
        "
      >
        {/* Premium Accent */}
        <div
          className="
            absolute
            left-0
            top-0
            h-1
            w-0
            bg-primary
            transition-all
            duration-500
            group-hover:w-full
          "
        />

        <CardContent
          className="
            flex
            h-full
            flex-col
            p-8
          "
        >
          {/* Icon */}
          <div
            className="
              mb-8
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-primary/10
              shadow-sm
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:bg-primary
              group-hover:shadow-lg
            "
          >
            <Icon
              icon={IconComponent}
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

          {/* Title */}
          <h3
            className="
              text-2xl
              font-bold
              tracking-tight
              text-foreground
              transition-colors
              duration-300
              group-hover:text-primary
            "
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="
              mt-5
              flex-1
              leading-8
              text-muted-foreground
            "
          >
            {description}
          </p>

          {/* Learn More */}
          <span
            className="
              mt-8
              inline-flex
              items-center
              font-medium
              text-primary
              opacity-0
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:opacity-100
            "
          >
            Learn More →
          </span>
        </CardContent>
      </Card>
    </motion.div>
  );
}