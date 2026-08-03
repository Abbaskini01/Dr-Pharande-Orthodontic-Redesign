"use client";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { clinic } from "@/content";

export function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Link href={clinic.hero.primaryCTA.href}>
        <Button
          size="lg"
          className="rounded-full px-8"
        >
          {clinic.hero.primaryCTA.label}
        </Button>
      </Link>

      <Link href={clinic.hero.secondaryCTA.href}>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full px-8"
        >
          {clinic.hero.secondaryCTA.label}

          <ArrowRight className="size-4" />
        </Button>
      </Link>
    </div>
  );
}