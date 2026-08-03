"use client";

import { treatments } from "@/content";
import { Container } from "@/components/layout";

import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Comprehensive Dental & Orthodontic Care
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We provide modern dental treatments tailored to every stage of life,
            from preventive care to advanced orthodontic solutions.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {treatments.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              {...service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}