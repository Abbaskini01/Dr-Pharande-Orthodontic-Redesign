"use client";

import { motion } from "framer-motion";

import {
  AnimatedSection,
  PageHeader,
  SectionContainer,
} from "@/components/shared";

import { Accordion } from "@/components/ui/accordion";

import { faq } from "@/content";

import { staggerContainer } from "@/lib";

import { FAQItem } from "./FAQItem";

export function FAQ() {
  return (
    <SectionContainer
      id="faq"
      className="
        bg-linear-to-b
        from-background
        via-slate-50/30
        to-background
      "
    >
      <AnimatedSection>
        <PageHeader
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Everything You Need Before Your Visit"
          description="Find answers to the most common questions about appointments, treatments, consultations, and patient care before visiting Dr. Pharande Orthodontic & Dental Clinic."
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
        className="mx-auto mt-16 max-w-4xl"
      >
        <Accordion defaultValue={[]}>
          {faq.map((item, index) => (
            <FAQItem
              key={`faq-${index}`}
              value={`faq-${index}`}
              {...item}
            />
          ))}
        </Accordion>
      </motion.div>
    </SectionContainer>
  );
}