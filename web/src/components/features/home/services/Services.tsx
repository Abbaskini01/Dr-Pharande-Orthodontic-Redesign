"use client";

import { motion } from "framer-motion";

import {
  AnimatedSection,
  FeatureCard,
  PageHeader,
  SectionContainer,
} from "@/components/shared";

import { treatments } from "@/content";

import {
  Icons,
  staggerContainer,
} from "@/lib";

export function Services() {
  return (
    <SectionContainer
      className="
        bg-linear-to-b
        from-background
        via-background
        to-slate-50/40
      "
    >
      <AnimatedSection>
        <PageHeader
          eyebrow="OUR TREATMENTS"
          title="Comprehensive Dental & Orthodontic Solutions"
          description="From preventive care and smile enhancement to advanced orthodontics, we deliver personalized treatments using modern technology and a patient-first approach."
        />
      </AnimatedSection>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          mt-16
          grid
          gap-6
          sm:grid-cols-2
          xl:grid-cols-3
        "
      >
        {treatments.map((service) => {
          const Icon = Icons[service.icon];

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