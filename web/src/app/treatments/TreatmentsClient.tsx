"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

import {
  AnimatedSection,
  BookingDialog,
  FeatureCard,
  PageHeader,
  SectionContainer,
} from "@/components/shared";
import { Button } from "@/components/ui/button";
import { treatments } from "@/content";
import { Icons, routes } from "@/lib";

export function TreatmentsClient() {
  return (
    <>
      <SectionContainer className="bg-linear-to-b from-background via-background to-slate-50/50 pt-8 sm:pt-12">
        <AnimatedSection>
          <PageHeader
            eyebrow="OUR TREATMENTS"
            title="Comprehensive Orthodontic & Dental Solutions"
            description="From preventive dental care to advanced orthodontic alignment and minimally invasive laser treatments, we offer personalized care designed for every smile."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {treatments.map((treatment) => {
            const IconComponent = Icons[treatment.icon];

            return (
              <FeatureCard
                key={treatment.slug}
                icon={IconComponent}
                title={treatment.title}
                description={treatment.description}
                ctaLabel="View Details"
                ctaHref={`/treatments/${treatment.slug}`}
              />
            );
          })}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-slate-50/50">
        <AnimatedSection>
          <div className="rounded-3xl bg-card border border-border p-8 text-center sm:p-12 shadow-sm">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <Sparkles className="h-4 w-4" /> Customized Treatment Plans
              </span>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Not Sure Which Treatment Is Right For You?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Schedule a comprehensive clinical evaluation with Dr. Pharande&apos;s specialist team to discuss your goals and receive a tailored care plan.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <BookingDialog
                buttonLabel="Book Consultation"
                buttonSize="lg"
                buttonClassName="px-8"
              />
              <Link href={routes.contact}>
                <Button variant="outline" size="lg" className="w-full px-8 sm:w-auto">
                  Contact Clinic
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </SectionContainer>
    </>
  );
}
