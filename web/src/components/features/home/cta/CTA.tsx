"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import {
  AnimatedSection,
  SectionContainer,
} from "@/components/shared";

import {
  Icons,
  routes,
} from "@/lib";

export function CTA() {
  return (
    <SectionContainer className="bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 text-white">
      <AnimatedSection>
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Icons.calendar className="mx-auto mb-6 h-14 w-14" />

          <h2 className="text-4xl font-bold lg:text-5xl">
            Ready to Transform Your Smile?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Book your consultation today and experience
            advanced, painless dental care backed by more
            than 24 years of clinical excellence.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={routes.contact}>
              <Button size="lg">
                Book Appointment
              </Button>
            </Link>

            <Link href={routes.services}>
              <Button
                variant="outline"
                size="lg"
              >
                View Treatments
              </Button>
            </Link>
          </div>
        </motion.div>
      </AnimatedSection>
    </SectionContainer>
  );
}