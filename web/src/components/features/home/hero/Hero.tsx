"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout";

import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <HeroBackground />

      <Container>
        <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <HeroContent />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <HeroImage />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}