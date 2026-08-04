"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

export function FAQItem({
  question,
  answer,
  value,
}: FAQItemProps) {
  return (
    <AccordionItem
      value={value}
      className="
        mb-5
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-background
        px-6
        shadow-sm
        transition-all
        duration-300
        hover:border-primary/20
        hover:shadow-md
      "
    >
      <AccordionTrigger
        className="
          py-6
          text-left
          text-lg
          font-semibold
          text-foreground
          transition-colors
          duration-300
          hover:text-primary
        "
      >
        {question}
      </AccordionTrigger>

      <AccordionContent
        className="
          pb-6
          text-base
          leading-8
          text-muted-foreground
        "
      >
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}