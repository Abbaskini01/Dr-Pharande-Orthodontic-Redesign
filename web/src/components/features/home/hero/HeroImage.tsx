"use client";

import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Smile,
} from "lucide-react";

export function HeroImage() {
  return (
    <div className="relative flex justify-center">

      {/* Decorative Background */}
      <div
        className="
          absolute
          inset-0
          -z-10
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          relative
          flex
          aspect-[4/5]
          w-full
          max-w-sm
          items-center
          justify-center
          overflow-hidden
          rounded-[36px]
          border
          border-border
          bg-linear-to-br
          from-background
          via-background
          to-primary/5
          shadow-2xl
          sm:max-w-md
        "
      >
        {/* Placeholder */}
        <div className="px-6 text-center sm:px-10">

          <Smile className="mx-auto mb-6 h-20 w-20 text-primary" />

          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
            Doctor Photograph
          </h3>

          <p className="mt-4 leading-7 text-muted-foreground">
            Replace this placeholder with the official
            clinic photograph after the client meeting.
          </p>

        </div>

        {/* Experience Card */}
        <motion.div
          whileHover={{
            y: -4,
          }}
          className="
            absolute
            left-3
            top-4
            rounded-2xl
            border
            border-border
            bg-background
            p-3
            shadow-xl
            sm:left-6
            sm:top-8
            sm:p-5
          "
        >
          <Award className="mb-2 h-6 w-6 text-primary" />

          <p className="text-sm font-semibold text-foreground">
            24+ Years
          </p>

          <p className="text-xs text-muted-foreground">
            Experience
          </p>
        </motion.div>

        {/* Trust Card */}
        <motion.div
          whileHover={{
            y: -4,
          }}
          className="
            absolute
            bottom-4
            right-3
            rounded-2xl
            border
            border-border
            bg-background
            p-3
            shadow-xl
            sm:bottom-8
            sm:right-6
            sm:p-5
          "
        >
          <ShieldCheck className="mb-2 h-6 w-6 text-green-600" />

          <p className="text-sm font-semibold text-foreground">
            Trusted Care
          </p>

          <p className="text-xs text-muted-foreground">
            2100+ Reviews
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}