"use client";

import { AnimatedSection, PageHeader, SectionContainer, StatCard } from "@/components/shared";
import { clinic } from "@/content";
import { staggerContainer } from "@/lib";
import { motion } from "framer-motion";

export function Trust() {
  return (
    <SectionContainer className="bg-slate-50">
      <AnimatedSection>
        <PageHeader
          eyebrow="WHY PATIENTS TRUST US"
          title="Excellence Built on Experience"
          description="For over two decades, we've combined advanced technology with compassionate care to create healthy, confident smiles."
        />
      </AnimatedSection>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
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