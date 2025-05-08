export const siteConfig = {
  name: "BioIQ",
  description: "Advanced health optimization platform powered by AI",
  url: "https://bioiq.ai",
  ogImage: "https://bioiq.ai/og-image.png",
  links: {
    twitter: "https://twitter.com/bioiq",
    github: "https://github.com/bioiq",
    linkedin: "https://linkedin.com/company/bioiq",
  },
  contactEmail: "info@bioiq.ai",
  waitlistEnabled: true,
};

export const navigationLinks = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Biomarkers",
    href: "#biomarkers",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "About",
    href: "#about",
  },
];

export const colorScheme = {
  excellent: "#63D8BF", // Teal
  good: "#3B82F6", // Blue
  moderate: "#FFBE55", // Amber
  attention: "#FF8FA3", // Coral
  background: "#0A0A0A", // Dark background
  text: "#F9FAFB", // Light text
};

export const typography = {
  fontFamily: {
    sans: ["Inter", "sans-serif"],
    mono: ["Roboto Mono", "monospace"],
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};
