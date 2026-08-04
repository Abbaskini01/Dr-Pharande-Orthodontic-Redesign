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
          text-5xl
          font-extrabold
          leading-[1.05]
          tracking-tight
          text-foreground
          sm:text-6xl
          lg:text-7xl
        "
      >
        {clinic.hero.title}
      </h1>

      <p
        className="
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-muted-foreground
          lg:text-xl
        "
      >
        {clinic.hero.subtitle}
      </p>

      <div className="mt-10">
        <HeroButtons />
      </div>

      <div className="mt-14">
        <HeroStats />
      </div>
    </div>
  );
}