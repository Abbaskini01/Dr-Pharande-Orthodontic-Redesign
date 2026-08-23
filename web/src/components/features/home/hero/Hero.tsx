"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout";

import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-background
        pt-24
        pb-20
        lg:pt-32
        lg:pb-28
      "
    >
      <HeroBackground />

      <Container>
        <div
          className="
            relative
            z-10
            grid
            items-center
            gap-16
            lg:grid-cols-2
            lg:gap-24
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <HeroContent />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <HeroImage />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}