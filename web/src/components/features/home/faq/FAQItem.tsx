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
    <AccordionItem value={value}>
      <AccordionTrigger>
        {question}
      </AccordionTrigger>

      <AccordionContent>
        <p className="leading-7 text-slate-600">
          {answer}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
}