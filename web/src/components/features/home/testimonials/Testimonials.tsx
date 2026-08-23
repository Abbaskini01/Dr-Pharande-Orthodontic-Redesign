"use client";

import { motion } from "framer-motion";

import {
  AnimatedSection,
  PageHeader,
  SectionContainer,
} from "@/components/shared";

import { testimonials } from "@/content";

import { staggerContainer } from "@/lib";

import { Rating } from "./Rating";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  return (
    <SectionContainer
      id="testimonials"
      className="
        bg-linear-to-b
        from-slate-50
        via-background
        to-background
      "
    >
      <AnimatedSection>
        <PageHeader
          eyebrow="PATIENT REVIEWS"
          title="Trusted by Thousands of Happy Smiles"
          description="Real stories from patients who experienced compassionate care, painless treatments, and life-changing smile transformations at Dr. Pharande Orthodontic & Dental Clinic."
          isMainHeading={false}
        />
      </AnimatedSection>

      <div className="mt-10 flex justify-center">
        <Rating
          rating={testimonials.rating}
          reviews={testimonials.reviews}
        />
      </div>

      <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
        {testimonials.summary}
      </p>

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
          lg:grid-cols-3
        "
      >
        {testimonials.featured.map((review, index) => (
          <TestimonialCard
            key={`${review.author}-${index}`}
            index={index}
            {...review}
          />
        ))}
      </motion.div>
    </SectionContainer>
  );
}