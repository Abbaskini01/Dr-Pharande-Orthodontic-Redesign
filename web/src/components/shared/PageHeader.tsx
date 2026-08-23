import { SectionHeading } from "./SectionHeading";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  isMainHeading?: boolean;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  isMainHeading = true,
}: PageHeaderProps) {
  return (
    <SectionHeading
      eyebrow={eyebrow}
      title={title}
      description={description}
      isMainHeading={isMainHeading}
    />
  );
}