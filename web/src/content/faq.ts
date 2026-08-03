export * from "./clinic";
export * from "./doctors";
export * from "./treatments";export const faq = [
  {
    question: "Does orthodontic treatment or root canal hurt?",
    answer:
      "Dr. Pharande's clinic is highly rated for providing advanced, genuinely painless treatments using modern techniques and low-force mechanics.",
  },

  {
    question: "What are the clinic timings?",
    answer:
      "Monday to Saturday: 10:30 AM – 1:30 PM and 6:00 PM – 9:00 PM. Sunday Closed.",
  },

  {
    question: "Do you provide clear aligners?",
    answer:
      "Yes. We provide modern clear aligners along with conventional orthodontic braces.",
  },
] as const;