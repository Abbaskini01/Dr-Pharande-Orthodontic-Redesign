import type { ReactNode } from "react";

import { Container } from "@/components/layout";
import { LAYOUT } from "@/lib";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <section className={`${LAYOUT.SECTION_Y} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}