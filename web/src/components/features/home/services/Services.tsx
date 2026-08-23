"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  AnimatedSection,
  BookingDialog,
  FeatureCard,
  PageHeader,
  SectionContainer,
} from "@/components/shared";
import { Button } from "@/components/ui/button";

import { treatments } from "@/content";

import {
  Icons,
  staggerContainer,
} from "@/lib";

export function Services() {
  return (
    <SectionContainer
      id="services"
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
          isMainHeading={false}
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
              ctaLabel="Learn More"
              ctaHref={`/treatments/${service.slug}`}
            />
          );
        })}
      </motion.div>

      <AnimatedSection>
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <BookingDialog
            buttonLabel="Book Consultation"
            buttonSize="lg"
            buttonClassName="w-full px-8 sm:w-auto"
          />

          <Link href="#consultation" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full px-8 sm:w-auto"
            >
              Speak to Our Team
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}