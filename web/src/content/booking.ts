import { contact } from "./contact";

export interface BookingDestinationConfig {
  onlineBookingUrl?: string;
  conciergeChatUrl?: string;
}

export const bookingConfig: BookingDestinationConfig = {
  onlineBookingUrl: process.env.NEXT_PUBLIC_BOOKING_ONLINE_URL,
  conciergeChatUrl: process.env.NEXT_PUBLIC_CONCIERGE_CHAT_URL,
};

export type BookingChoiceIcon = "calendar" | "message" | "phone" | "mail";

export interface BookingChoiceConfig {
  id: string;
  label: string;
  description: string;
  href: string;
  target?: string;
  rel?: string;
  icon: BookingChoiceIcon;
}

function toTelHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

/**
 * Booking choices are contact-first until the clinic confirms a booking
 * platform or a WhatsApp-enabled line. Setting
 * NEXT_PUBLIC_BOOKING_ONLINE_URL / NEXT_PUBLIC_CONCIERGE_CHAT_URL upgrades
 * the dialog to the approved destination without any redesign.
 */
export function getBookingChoices(
  config: BookingDestinationConfig = bookingConfig
): BookingChoiceConfig[] {
  const primaryPhone = contact.phones[0];
  const alternatePhone = contact.phones[1];

  const bookingChoice: BookingChoiceConfig = config.onlineBookingUrl
    ? {
        id: "book-online",
        label: "Book Online",
        description: "Schedule your appointment directly online.",
        href: config.onlineBookingUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        icon: "calendar",
      }
    : {
        id: "call-to-book",
        label: "Call to Book",
        description: `Speak with our front desk on ${primaryPhone} or ${alternatePhone} to schedule your consultation.`,
        href: toTelHref(primaryPhone),
        icon: "phone",
      };

  const conciergeChoice: BookingChoiceConfig = config.conciergeChatUrl
    ? {
        id: "chat-concierge",
        label: "Chat with Concierge",
        description: "Connect directly with our clinic concierge team.",
        href: config.conciergeChatUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        icon: "message",
      }
    : {
        id: "email-clinic",
        label: "Email Our Team",
        description: `Write to ${contact.email} with your preferred date and time and we will confirm your appointment.`,
        href: `mailto:${contact.email}`,
        icon: "mail",
      };

  return [bookingChoice, conciergeChoice];
}
