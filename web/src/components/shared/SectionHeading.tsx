import { cn } from "@/lib/utils";

import {
  Body,
  Eyebrow,
  Heading,
} from "./Typography";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center"
          ? "text-center"
          : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow>
          {eyebrow}
        </Eyebrow>
      )}

      <Heading className="mt-5">
        {title}
      </Heading>

      {description && (
        <Body className="mt-6">
          {description}
        </Body>
      )}
    </div>
  );
}