"use client";

import { Container } from "@/components/layout";
import { testimonials } from "@/content";

import { Rating } from "./Rating";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            PATIENT REVIEWS
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Trusted by Thousands of Happy Patients
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Every smile tells a story. Here&apos; what our patients say
            about their experience at Dr. Pharande&apos; Orthodontic &
            Dental Clinic.
          </p>

          <div className="mt-10">
            <Rating
              rating={testimonials.rating}
              reviews={testimonials.reviews}
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.featured.map((review, index) => (
            <TestimonialCard
              key={index}
              index={index}
              {...review}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}