"use client";

import Link from "next/link";
import { Award, Quote, Sparkles, Star } from "lucide-react";

import {
  AnimatedSection,
  Badge,
  BookingDialog,
  Card,
  CardContent,
  PageHeader,
  SectionContainer,
  StatCard,
} from "@/components/shared";
import { Button } from "@/components/ui/button";
import { clinic, testimonials } from "@/content";
import { routes } from "@/lib";

export function TransformationsClient() {
  return (
    <>
      <SectionContainer className="bg-linear-to-b from-background via-background to-slate-50/50 pt-8 sm:pt-12">
        <AnimatedSection>
          <PageHeader
            eyebrow="PATIENT STORIES"
            title="Smile Transformations & Patient Experiences"
            description={testimonials.summary}
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            value={testimonials.rating}
            label="Google Rating"
          />
          <StatCard
            value={testimonials.reviews}
            label="Happy Patients"
          />
          <StatCard
            value={clinic.yearsOfOperation}
            label="Years of Legacy"
          />
          <StatCard
            value="100%"
            label="Dedicated Care"
          />
        </div>
      </SectionContainer>

      <SectionContainer className="bg-slate-50/50">
        <AnimatedSection>
          <div className="text-center">
            <Badge className="gap-2">
              <Sparkles className="h-4 w-4" />
              Patient Feedback
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Patients Say
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.featured.map((item, idx) => (
              <Card key={idx} className="flex h-full flex-col p-8">
                <CardContent className="flex h-full flex-col p-0">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>

                  <Quote className="mt-6 h-8 w-8 text-primary/20" />

                  <p className="mt-2 flex-1 leading-8 text-muted-foreground">
                    &ldquo;{item.review}&rdquo;
                  </p>

                  <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.author}</p>
                      <p className="text-xs text-muted-foreground">Verified Clinic Visit</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </SectionContainer>

      <SectionContainer>
        <AnimatedSection>
          <div className="rounded-3xl bg-linear-to-r from-slate-900 to-slate-800 p-8 text-center text-white sm:p-12">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-200 backdrop-blur">
                <Award className="h-4 w-4" /> Start Your Smile Journey
              </span>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Begin Your Smile Transformation Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Schedule a personalized consultation with Dr. Pharande&apos;s orthodontic specialists.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <BookingDialog
                buttonLabel="Book Consultation"
                buttonSize="lg"
                buttonClassName="px-8"
              />
              <Link href={routes.contact}>
                <Button variant="outline" size="lg" className="w-full px-8 text-white border-slate-700 hover:bg-slate-800 sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </SectionContainer>
    </>
  );
}
