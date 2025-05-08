export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export const features: Feature[] = [
  {
    id: "ai-analysis",
    title: "AI-Powered Biomarker Analysis",
    description: "Our advanced AI analyzes over 100 biomarkers to provide personalized health insights and optimization recommendations.",
    icon: "chart-bar"
  },
  {
    id: "personalized-protocols",
    title: "Personalized Optimization Protocols",
    description: "Receive custom protocols for nutrition, supplementation, exercise, and lifestyle based on your unique biomarker profile.",
    icon: "clipboard-list"
  },
  {
    id: "cognitive-enhancement",
    title: "Cognitive Enhancement",
    description: "Optimize your mental performance with targeted protocols designed to enhance focus, memory, and cognitive function.",
    icon: "brain"
  },
  {
    id: "hormone-optimization",
    title: "Hormone Optimization",
    description: "Balance and optimize your hormones for improved energy, mood, body composition, and overall vitality.",
    icon: "chart-line"
  },
  {
    id: "longevity-tracking",
    title: "Longevity Tracking",
    description: "Monitor and improve your biological age and longevity markers with evidence-based interventions.",
    icon: "clock"
  },
  {
    id: "stress-resilience",
    title: "Stress Resilience",
    description: "Build resilience to stress through personalized protocols that optimize your nervous system function.",
    icon: "shield"
  },
  {
    id: "sleep-optimization",
    title: "Sleep Optimization",
    description: "Enhance your sleep quality and recovery with personalized sleep protocols based on your biomarker data.",
    icon: "moon"
  },
  {
    id: "metabolic-health",
    title: "Metabolic Health",
    description: "Optimize your metabolic function for improved energy, body composition, and overall health.",
    icon: "fire"
  }
];

export const primaryFeatures: Feature[] = [
  {
    id: "comprehensive-analysis",
    title: "Comprehensive Biomarker Analysis",
    description: "Our AI analyzes over 100 biomarkers to create your personalized health optimization blueprint.",
    image: "/images/features/biomarker-analysis.png"
  },
  {
    id: "personalized-dashboard",
    title: "Personalized Health Dashboard",
    description: "Track your progress with an intuitive dashboard that visualizes your health metrics and improvements.",
    image: "/images/features/health-dashboard.png"
  },
  {
    id: "ai-recommendations",
    title: "AI-Powered Recommendations",
    description: "Receive personalized recommendations for nutrition, supplements, exercise, and lifestyle interventions.",
    image: "/images/features/ai-recommendations.png"
  }
];
