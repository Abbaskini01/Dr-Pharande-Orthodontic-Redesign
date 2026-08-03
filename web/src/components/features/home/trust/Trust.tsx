"use client";

import { Container } from "@/components/layout";

import { trustItems } from "./trust.data";
import { TrustCard } from "./TrustCard";

export function Trust() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            WHY PATIENTS TRUST US
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Trusted by Thousands of Families
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Combining decades of experience, advanced technology,
            and patient-centered care to create confident smiles.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item, index) => (
            <TrustCard
              key={item.title}
              index={index}
              {...item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}