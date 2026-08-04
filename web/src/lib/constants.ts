export const APP = {
  NAME: "Dr. Pharande's Orthodontic & Dental Clinic",
  TAGLINE: "Quality Dentistry – Creating Healthy & Beautiful Smiles!",
} as const;

export const LAYOUT = {
  HEADER_HEIGHT: "80px",
  CONTAINER: "max-w-7xl",
  CONTENT: "max-w-3xl",
  SECTION_Y: "py-24",
} as const;

export const COLORS = {
  PRIMARY: "text-blue-600",
  PRIMARY_BG: "bg-blue-600",

  SECONDARY: "text-slate-600",

  SURFACE: "bg-white",

  SURFACE_ALT: "bg-slate-50",

  BORDER: "border-slate-200",

  SUCCESS: "text-green-600",

  WARNING: "text-yellow-500",
} as const;

export const RADIUS = {
  CARD: "rounded-3xl",

  BUTTON: "rounded-xl",

  BADGE: "rounded-full",
} as const;

export const SHADOW = {
  CARD: "shadow-sm",

  CARD_HOVER: "hover:shadow-xl",
} as const;

export const ANIMATION = {
  FAST: 0.3,

  NORMAL: 0.5,

  SLOW: 0.8,
} as const;