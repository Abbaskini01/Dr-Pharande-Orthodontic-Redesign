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
  isMainHeading?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  isMainHeading = false,
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

      {isMainHeading ? (
        <h1 className="font-heading mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
      ) : (
        <Heading className="mt-5">
          {title}
        </Heading>
      )}

      {description && (
        <Body className="mt-6">
          {description}
        </Body>
      )}
    </div>
  );
}