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
    <SectionContainer
      className="
        bg-linear-to-b
        from-slate-50
        via-background
        to-background
      "
    >
      <AnimatedSection>
        <PageHeader
          eyebrow="MEET OUR DOCTORS"
          title="Experienced Specialists Dedicated to Your Smile"
          description="Meet the experienced professionals behind thousands of confident smiles, combining clinical excellence, ethical care, and modern dental technology to deliver exceptional treatment experiences."
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
          gap-8
          lg:grid-cols-2
        "
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
            delay={index * 0.12}
          />
        ))}
      </motion.div>
    </SectionContainer>
  );
}