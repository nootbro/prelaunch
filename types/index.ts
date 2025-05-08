// Common type definitions for the BioIQ landing page

// Status types for metrics and health indicators
export type StatusType = 'excellent' | 'good' | 'moderate' | 'attention';

// Base metric interface
export interface BaseMetric {
  name: string;
  status: StatusType;
}

// Metric with value
export interface ValueMetric extends BaseMetric {
  value: number;
  unit?: string;
  change?: number;
}

// Biomarker interface
export interface Biomarker extends BaseMetric {
  id: string;
  value?: number;
  unit?: string;
  reference?: string;
  description?: string;
}

// User testimonial
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  img: string;
  description: string;
}

// Feature interface
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

// Navigation link
export interface NavLink {
  title: string;
  href: string;
  external?: boolean;
}

// Site configuration
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
  };
  contactEmail: string;
  waitlistEnabled: boolean;
}

// Theme configuration
export interface ThemeConfig {
  colorScheme: {
    excellent: string;
    good: string;
    moderate: string;
    attention: string;
    background: string;
    text: string;
  };
  typography: {
    fontFamily: {
      sans: string[];
      mono: string[];
    };
    fontSize: Record<string, string>;
    fontWeight: Record<string, number>;
  };
}
