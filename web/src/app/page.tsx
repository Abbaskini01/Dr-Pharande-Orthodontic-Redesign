import { Hero } from "@/components/features/home/hero";
import { Trust } from "@/components/features/home/trust";
import { Services } from "@/components/features/home/services";
import { Doctors } from "@/components/features/home/doctors";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Doctors />
    </>
  );
}