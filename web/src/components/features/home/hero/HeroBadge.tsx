"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

import { clinic } from "@/content";

export function HeroBadge() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="
        inline-flex
        max-w-full
        flex-wrap
        items-center
        gap-x-3
        gap-y-2
        rounded-2xl
        border
        border-primary/15
        bg-primary/5
        px-4
        py-2.5
        shadow-sm
        backdrop-blur-sm
        sm:rounded-full
        sm:px-5
      "
    >
      <div
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-primary/10
        "
      >
        <Award className="h-4 w-4 text-primary" />
      </div>

      <span className="text-sm font-semibold text-foreground">
        {clinic.hero.badge}
      </span>

      <div className="hidden h-5 w-px bg-border sm:block" />

      <div className="flex items-center gap-1 text-sm text-muted-foreground">
        <ShieldCheck className="h-4 w-4 text-primary" />

        <span>Trusted Care</span>
      </div>
    </motion.div>
  );
}