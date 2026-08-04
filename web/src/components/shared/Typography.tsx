import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function Display({
  children,
  className,
}: TypographyProps) {
  return (
    <h1
      className={cn(
        "font-heading text-5xl font-bold tracking-tight text-foreground lg:text-6xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function Heading({
  children,
  className,
}: TypographyProps) {
  return (
    <h2
      className={cn(
        "font-heading text-4xl font-bold tracking-tight text-foreground",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SubHeading({
  children,
  className,
}: TypographyProps) {
  return (
    <h3
      className={cn(
        "font-heading text-2xl font-semibold text-foreground",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function Body({
  children,
  className,
}: TypographyProps) {
  return (
    <p
      className={cn(
        "text-lg leading-8 text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Eyebrow({
  children,
  className,
}: TypographyProps) {
  return (
    <p
      className={cn(
        "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
        className
      )}
    >
      {children}
    </p>
  );
}