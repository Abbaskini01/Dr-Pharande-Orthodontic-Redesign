"use client";

import { motion } from "framer-motion";

import {
  AnimatedSection,
  PageHeader,
  SectionContainer,
  StatCard,
} from "@/components/shared";

import { clinic } from "@/content";
import { staggerContainer } from "@/lib";

export function Trust() {
  return (
    <SectionContainer
      id="trust"
      className="
        bg-linear-to-b
        from-slate-50
        via-background
        to-background
      "
    >
      <AnimatedSection>
        <PageHeader
          eyebrow="WHY PATIENTS TRUST US"
          title="Clinical Excellence Built on Trust"
          description="Combining advanced dental technology, ethical treatment, and a patient-first philosophy to deliver confident smiles for over two decades."
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
          lg:grid-cols-4
        "
      >
        {clinic.stats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </motion.div>
    </SectionContainer>
  );
}