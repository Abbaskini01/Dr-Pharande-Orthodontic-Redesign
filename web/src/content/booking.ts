export interface BookingDestinationConfig {
  onlineBookingUrl?: string;
  conciergeChatUrl?: string;
}

export const bookingConfig: BookingDestinationConfig = {
  onlineBookingUrl: process.env.NEXT_PUBLIC_BOOKING_ONLINE_URL,
  conciergeChatUrl: process.env.NEXT_PUBLIC_CONCIERGE_CHAT_URL,
};

export interface BookingChoiceConfig {
  id: string;
  label: string;
  description: string;
  href?: string;
  target?: string;
  rel?: string;
}

export function getBookingChoices(
  config: BookingDestinationConfig = bookingConfig
): BookingChoiceConfig[] {
  return [
    {
      id: "book-online",
      label: "Book Online",
      description: config.onlineBookingUrl
        ? "Schedule your appointment directly online."
        : "Future online scheduling flow. Replace this option with the client-approved booking destination later.",
      href: config.onlineBookingUrl,
      target: config.onlineBookingUrl ? "_blank" : undefined,
      rel: config.onlineBookingUrl ? "noopener noreferrer" : undefined,
    },
    {
      id: "chat-concierge",
      label: "Chat with Concierge",
      description: config.conciergeChatUrl
        ? "Connect directly with our clinic concierge team."
        : "Future concierge workflow. Replace this option with the approved concierge destination later.",
      href: config.conciergeChatUrl,
      target: config.conciergeChatUrl ? "_blank" : undefined,
      rel: config.conciergeChatUrl ? "noopener noreferrer" : undefined,
    },
  ];
}
