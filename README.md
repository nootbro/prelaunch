# BioIQ Landing Page

A modern, responsive landing page for BioIQ - an advanced health optimization platform powered by AI.

## Project Structure

```
bioiq-landing-page/
├── app/                    # Next.js app directory
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page component
├── components/             # React components
│   ├── effects/            # Visual effect components
│   │   ├── border-beam.tsx # Border beam effect
│   │   └── particles.tsx   # Particles animation
│   ├── layout/             # Layout components
│   │   ├── dialog.tsx      # Dialog component
│   │   └── marquee.tsx     # Marquee component
│   ├── sections/           # Page section components
│   │   ├── biomarker-section.tsx
│   │   ├── cta-section.tsx
│   │   ├── feature-section.tsx
│   │   ├── footer-section.tsx
│   │   ├── hero-section.tsx
│   │   └── testimonial-section.tsx
│   ├── ui/                 # UI components
│   │   ├── button.tsx
│   │   ├── circular-progress.tsx
│   │   ├── form/           # Form-related components
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   └── label.tsx
│   │   ├── metric-card.tsx
│   │   ├── progress-bar.tsx
│   │   └── sparkline.tsx
│   ├── section-header.tsx
│   ├── testimonial-scroll.tsx
│   ├── theme-provider.tsx
│   └── waitlist-dialog.tsx
├── data/                   # Data files
│   ├── features.ts         # Feature data
│   ├── metrics.ts          # Metrics data
│   ├── site-config.ts      # Site configuration
│   └── testimonials.ts     # Testimonial data
├── hooks/                  # Custom React hooks
│   ├── use-intersection-observer.ts
│   └── use-media-query.ts
├── lib/                    # Library code
│   ├── config.tsx          # Configuration
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
│   ├── assets/
│   │   └── Notable-Logo_White@2000px.png
│   └── images/
│       ├── agent-cta-background.png
│       └── hero-dark.png
├── styles/                 # CSS styles
│   ├── animations.css      # Animation styles
│   └── variables.css       # CSS variables
├── types/                  # TypeScript type definitions
│   └── index.ts
├── utils/                  # Utility functions
│   └── format-utils.ts     # Formatting utilities
├── .env.local              # Environment variables
├── next-env.d.ts           # Next.js TypeScript declarations
├── next.config.js          # Next.js configuration
├── package-lock.json       # NPM lock file
├── package.json            # Project dependencies
├── postcss.config.js       # PostCSS configuration
├── shadow-adjustment-guide.txt # Guide for shadow adjustments
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
cd bioiq-landing-page
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Development Guidelines

### Component Development

1. When creating new UI components:
   - Place reusable UI components in the `components/ui` directory
   - Place section-specific components in `components/sections` directory
   - Follow the existing naming conventions (e.g., kebab-case for files)

2. For metric visualizations:
   - Use appropriate visualization types based on the data being displayed
   - Maintain consistent color coding for status indicators
   - Ensure visualizations are accessible and easy to understand

3. Dashboard layout:
   - Use grid-based layouts for consistent spacing
   - Group related metrics together
   - Place most important metrics at the top
   - Maintain responsive design for all screen sizes

### Styling Guidelines

1. Color scheme:
   - Excellent: `#63D8BF` (Teal)
   - Good: `#3B82F6` (Blue)
   - Moderate: `#FFBE55` (Amber)
   - Attention: `#FF8FA3` (Coral)
   - Background: Dark with subtle transparency
   - Text: Light with appropriate contrast

2. Typography:
   - Use consistent font sizes and weights
   - For metric cards:
     - Title: Small, lighter weight text
     - Value: Large, colored based on status
     - Subtitle: Small, subdued text

3. Visual effects:
   - Subtle hover effects for interactive elements
   - Appropriate transitions for state changes
   - Corner glow effects that match the metric's status color
   - Inner shadows and highlights for depth

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.org/) - JavaScript library for building user interfaces

## License

This project is proprietary and confidential.
