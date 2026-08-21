import { clinic } from "@/content";

import { HeroBadge } from "./HeroBadge";
import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";

export function HeroContent() {
  return (
    <div className="max-w-3xl">
      <HeroBadge />

      <h1
        className="
          mt-8
          text-4xl
          font-extrabold
          leading-[1.05]
          tracking-tight
          text-foreground
          sm:text-5xl
          lg:text-7xl
        "
      >
        {clinic.hero.title}
      </h1>

      <p
        className="
          mt-8
          max-w-2xl
          text-base
          leading-7
          text-muted-foreground
          sm:text-lg
          sm:leading-8
          lg:text-xl
        "
      >
        {clinic.hero.subtitle}
      </p>

      <div className="mt-10">
        <HeroButtons />
      </div>

      <div className="mt-12 sm:mt-14">
        <HeroStats />
      </div>
    </div>
  );
}