"use client";

import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Smile,
  Star,
} from "lucide-react";

import { clinic } from "@/content";

const icons = [
  Award,
  Star,
  Smile,
  ShieldCheck,
];

export function HeroStats() {
  return (
    <div
      className="
        mt-16
        rounded-[32px]
        border
        border-border/60
        bg-background/70
        p-6
        shadow-xl
        backdrop-blur-xl
      "
    >
      <div
        className="
          grid
          grid-cols-2
          gap-6
          lg:grid-cols-4
        "
      >
        {clinic.stats.map((stat, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
              }}
              className="
                group
                flex
                min-h-[220px]
                flex-col
                items-center
                justify-center
                rounded-3xl
                bg-background
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div
                className="
                  mx-auto
                  mb-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary/10
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:bg-primary
                "
              >
                <Icon
                  className="
                    h-7
                    w-7
                    text-primary
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                />
              </div>

              <h3
                className="
                  text-center
                  text-4xl
                  font-extrabold
                  tracking-tight
                  text-primary
                "
              >
                {stat.value}
              </h3>

              <p
                className="
                  mt-3
                  max-w-[140px]
                  text-center
                  text-sm
                  leading-6
                  text-muted-foreground
                "
              >
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}