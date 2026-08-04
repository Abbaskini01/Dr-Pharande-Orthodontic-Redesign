"use client";

import { motion } from "framer-motion";

import {
  AnimatedSection,
  PageHeader,
  ProfileCard,
  SectionContainer,
} from "@/components/shared";

import { doctors } from "@/content";

import { staggerContainer } from "@/lib";

export function Doctors() {
  return (
    <SectionContainer className="bg-slate-50">
      <AnimatedSection>
        <PageHeader
          eyebrow="OUR DOCTORS"
          title="Meet Our Specialists"
          description="Experienced specialists committed to ethical, compassionate and advanced dental care."
        />
      </AnimatedSection>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid gap-10 lg:grid-cols-2"
      >
        {doctors.map((doctor, index) => (
          <ProfileCard
            key={doctor.id}
            name={doctor.name}
            designation={doctor.designation}
            qualifications={doctor.qualifications}
            experience={doctor.experience}
            biography={doctor.biography}
            image={doctor.image}
            delay={index * 0.15}
          />
        ))}
      </motion.div>
    </SectionContainer>
  );
}