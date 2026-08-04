import { Hero } from "@/components/features/home/hero";
import { Trust } from "@/components/features/home/trust";
import { Services } from "@/components/features/home/services";
import { Doctors } from "@/components/features/home/doctors";
import { Testimonials } from "@/components/features/home/testimonials";
import { CTA } from "@/components/features/home/cta";
import { FAQ } from "@/components/features/home/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Doctors />
      <Testimonials />
      <CTA />
      <FAQ />
    </>
  );
}