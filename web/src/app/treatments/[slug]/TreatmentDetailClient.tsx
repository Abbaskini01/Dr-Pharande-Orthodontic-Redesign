"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, HeartHandshake, UserCheck } from "lucide-react";

import {
  AnimatedSection,
  Badge,
  BookingDialog,
  Card,
  CardContent,
  SectionContainer,
} from "@/components/shared";
import { Button } from "@/components/ui/button";
import type { Treatment } from "@/content";
import { Icons, routes } from "@/lib";

interface TreatmentDetailClientProps {
  treatment: Treatment;
}

export function TreatmentDetailClient({
  treatment,
}: TreatmentDetailClientProps) {
  const IconComponent = Icons[treatment.icon];

  return (
    <>
      <SectionContainer className="bg-linear-to-b from-background via-background to-slate-50/50 pt-8 sm:pt-12">
        <AnimatedSection>
          <div className="mb-8">
            <Link
              href={routes.treatments}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Treatments
            </Link>
          </div>

          <div className="flex flex-col items-start">
            <Badge className="gap-2">
              <IconComponent className="h-4 w-4" />
              Specialized Care
            </Badge>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {treatment.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {treatment.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <BookingDialog
                buttonLabel="Book Consultation"
                buttonSize="lg"
                buttonClassName="px-8"
              />
              <Link href={routes.contact}>
                <Button variant="outline" size="lg" className="w-full px-8 sm:w-auto">
                  Enquire About This Treatment
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </SectionContainer>

      <SectionContainer className="bg-slate-50/50">
        <AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-foreground">
                  Key Treatment Benefits
                </h2>
                <p className="mt-4 leading-8 text-muted-foreground">
                  {treatment.benefits}
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <UserCheck className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-foreground">
                  Ideal Candidate
                </h2>
                <p className="mt-4 leading-8 text-muted-foreground">
                  {treatment.idealPatient}
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </SectionContainer>

      <SectionContainer>
        <AnimatedSection>
          <div className="rounded-3xl bg-linear-to-r from-slate-900 to-slate-800 p-8 text-center text-white sm:p-12">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-200 backdrop-blur">
                <HeartHandshake className="h-4 w-4" /> Personal Consultation
              </span>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Discuss {treatment.title} With Our Specialists
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Receive a comprehensive assessment, clear treatment timeline, and painless care plan.
            </p>
            <div className="mt-8 flex justify-center">
              <BookingDialog
                buttonLabel="Schedule Consultation"
                buttonSize="lg"
                buttonClassName="px-8"
              />
            </div>
          </div>
        </AnimatedSection>
      </SectionContainer>
    </>
  );
}
