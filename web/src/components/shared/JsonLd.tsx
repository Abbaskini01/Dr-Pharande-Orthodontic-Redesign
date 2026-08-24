import { clinic, contact } from "@/content";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": clinic.officialName,
    "description": clinic.hero.subtitle,
    "url": "https://drpharande.com",
    "telephone": contact.phones[0],
    "email": contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contact.address,
      "addressLocality": "Aundh, Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411007",
      "addressCountry": "IN",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        "opens": "10:30",
        "closes": "13:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        "opens": "18:00",
        "closes": "21:00",
      },
    ],
    "medicalSpecialty": [
      "Orthodontics",
      "PediatricDentistry",
      "CosmeticDentistry",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
