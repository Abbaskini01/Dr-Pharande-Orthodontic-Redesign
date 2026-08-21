"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  AnimatedSection,
  BookingDialog,
  SectionContainer,
} from "@/components/shared";
import { Button } from "@/components/ui/button";

import {
  Icons,
  routes,
} from "@/lib";

export function CTA() {
  return (
    <SectionContainer
      className="
        relative
        overflow-hidden
        bg-linear-to-br
        from-primary
        via-primary
        to-slate-900
        text-white
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -left-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-white/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -right-24
          h-96
          w-96
          rounded-full
          bg-white/10
          blur-3xl
        "
      />

      <AnimatedSection>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="
            relative
            z-10
            mx-auto
            max-w-4xl
            text-center
          "
        >
          <div
            className="
              mx-auto
              mb-8
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-white/10
              backdrop-blur
            "
          >
            <Icons.calendar className="h-10 w-10" />
          </div>

          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              lg:text-5xl
            "
          >
            Ready to Begin Your Smile Transformation?
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-blue-100
            "
          >
            Schedule your consultation today and experience
            ethical, painless, and technology-driven dental
            care delivered by experienced specialists trusted
            by thousands of happy patients.
          </p>

          <div
            className="
              mt-12
              flex
              flex-col
              justify-center
              gap-4
              sm:flex-row
            "
          >
            <BookingDialog
              buttonLabel="Book Consultation"
              buttonVariant="default"
              buttonSize="lg"
              buttonClassName="
                w-full
                rounded-full
                bg-white
                px-8
                text-primary
                hover:bg-slate-100
                sm:w-auto
              "
            />

            <Link href={routes.treatments} className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="
                  w-full
                  rounded-full
                  px-8
                  border-white/30
                  bg-transparent
                  text-white
                  hover:bg-white/10
                  sm:w-auto
                "
              >
                Explore Treatments
              </Button>
            </Link>
          </div>
        </motion.div>
      </AnimatedSection>
    </SectionContainer>
  );
}