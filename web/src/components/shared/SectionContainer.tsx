import type { ReactNode } from "react";

import { Container } from "@/components/layout";
import { LAYOUT } from "@/lib";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({
  children,
  className = "",
  id,
}: SectionContainerProps) {
  return (
    <section id={id} className={`${LAYOUT.SECTION_Y} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}