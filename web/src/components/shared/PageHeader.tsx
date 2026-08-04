import { SectionHeading } from "./SectionHeading";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <SectionHeading
      eyebrow={eyebrow}
      title={title}
      description={description}
    />
  );
}