"use client";

import {
  Accordion,
} from "@/components/ui/accordion";

import { Container } from "@/components/layout";
import { faq } from "@/content";

import { FAQItem } from "./FAQItem";

export function FAQ() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Everything you need to know before your appointment.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <Accordion
            type="single"
            collapsible
          >
            {faq.map((item, index) => (
              <FAQItem
                key={index}
                value={`faq-${index}`}
                {...item}
              />
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}