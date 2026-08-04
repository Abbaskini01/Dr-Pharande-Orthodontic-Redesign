"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import { clinic } from "@/content";

export function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">

      {/* Primary CTA */}
      <Link href={clinic.hero.primaryCTA.href}>
        <Button
          size="lg"
          className="
            group
            rounded-full
            px-8
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
        >
          <CalendarDays className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />

          {clinic.hero.primaryCTA.label}
        </Button>
      </Link>

      {/* Secondary CTA */}
      <Link href={clinic.hero.secondaryCTA.href}>
        <Button
          variant="outline"
          size="lg"
          className="
            group
            rounded-full
            border-border
            px-8
            transition-all
            duration-300
            hover:border-primary
            hover:bg-primary/5
          "
        >
          {clinic.hero.secondaryCTA.label}

          <ArrowRight
            className="
              ml-2
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Button>
      </Link>

    </div>
  );
}