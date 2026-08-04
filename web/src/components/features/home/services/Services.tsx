"use client";

import { motion } from "framer-motion";
import {
  AnimatedSection,
  FeatureCard,
  PageHeader,
  SectionContainer,
} from "@/components/shared";
import { treatments } from "@/content";
import { staggerContainer } from "@/lib";
import {
  Activity,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Smile,
} from "lucide-react";

const iconMap = {
  Braces: Smile,
  Tooth: HeartPulse,
  Child: ShieldCheck,
  Implant: Activity,
  Laser: Sparkles,
} as const;

export function Services() {
  return (
    <SectionContainer>
      <AnimatedSection>
        <PageHeader
          eyebrow="OUR TREATMENTS"
          title="Advanced Dental & Orthodontic Care"
          description="Comprehensive dental solutions using modern technology, painless procedures and personalized treatment plans."
        />
      </AnimatedSection>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {treatments.map((service) => {
          const Icon = iconMap[service.icon];

          return (
            <FeatureCard
              key={service.title}
              icon={Icon}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}