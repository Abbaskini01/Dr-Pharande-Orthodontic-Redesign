"use client";

import { motion } from "framer-motion";
import {
  Quote,
  Star,
  ShieldCheck,
} from "lucide-react";

import { fadeInUp } from "@/lib";

import {
  Card,
  CardContent,
} from "@/components/shared";

interface TestimonialCardProps {
  author: string;
  review: string;
  rating: number;
  index: number;
}

export function TestimonialCard({
  author,
  review,
  rating,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
      }}
    >
      <Card
        className="
          group
          relative
          h-full
          overflow-hidden
        "
      >
        {/* Top Accent */}
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

        <CardContent className="flex h-full flex-col p-8">

          {/* Header */}
          <div className="mb-6 flex items-center justify-between">

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-primary/10
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:bg-primary
              "
            >
              <Quote
                className="
                  h-6
                  w-6
                  text-primary
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              />
            </div>

            <div className="flex gap-1">
              {Array.from({
                length: rating,
              }).map((_, i) => (
                <Star
                  key={i}
                  className="
                    h-4
                    w-4
                    fill-amber-400
                    text-amber-400
                  "
                />
              ))}
            </div>

          </div>

          {/* Review */}
          <p
            className="
              flex-1
              text-base
              leading-8
              italic
              text-muted-foreground
            "
          >
            &ldquo;{review}&rdquo;
          </p>

          {/* Footer */}
          <div
            className="
              mt-8
              border-t
              border-border
              pt-6
            "
          >
            <h4
              className="
                font-semibold
                text-foreground
              "
            >
              {author}
            </h4>

            <div
              className="
                mt-2
                flex
                items-center
                gap-2
                text-sm
                text-muted-foreground
              "
            >
              <ShieldCheck
                className="
                  h-4
                  w-4
                  text-primary
                "
              />

              <span>Verified Patient</span>
            </div>

          </div>

        </CardContent>
      </Card>
    </motion.div>
  );
}