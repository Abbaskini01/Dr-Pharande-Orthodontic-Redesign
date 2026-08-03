import { clinic } from "@/content";

import { HeroBadge } from "./HeroBadge";
import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";

export function HeroContent() {
  return (
    <>
      <HeroBadge />

      <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-900 lg:text-7xl">
        {clinic.hero.title}
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
        {clinic.hero.subtitle}
      </p>

      <HeroButtons />

      <HeroStats />
    </>
  );
}