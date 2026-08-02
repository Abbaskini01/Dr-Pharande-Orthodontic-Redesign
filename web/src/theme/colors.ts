export const colors = {
  primary: {
    DEFAULT: "#2563EB",
    light: "#60A5FA",
    dark: "#1D4ED8",
  },

  secondary: {
    DEFAULT: "#14B8A6",
    light: "#5EEAD4",
    dark: "#0F766E",
  },

  accent: {
    DEFAULT: "#F59E0B",
    light: "#FCD34D",
    dark: "#D97706",
  },

  background: {
    DEFAULT: "#FFFFFF",
    subtle: "#F8FAFC",
    muted: "#F1F5F9",
  },

  surface: {
    DEFAULT: "#FFFFFF",
    elevated: "#FFFFFF",
  },

  text: {
    primary: "#0F172A",
    secondary: "#475569",
    muted: "#64748B",
    inverse: "#FFFFFF",
  },

  border: {
    DEFAULT: "#E2E8F0",
    strong: "#CBD5E1",
  },

  success: "#22C55E",

  warning: "#F59E0B",

  error: "#EF4444",
} as const;

export type ThemeColors = typeof colors;