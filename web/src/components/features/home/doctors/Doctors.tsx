"use client";

import { Container } from "@/components/layout";
import { doctors } from "@/content";

import { DoctorCard } from "./DoctorCard";

export function Doctors() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            OUR SPECIALISTS
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Meet Our Experienced Doctors
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Dedicated specialists committed to delivering ethical,
            compassionate, and advanced dental care.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={doctor.id}
              index={index}
              {...doctor}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}