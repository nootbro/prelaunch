export interface Metric {
  id: string;
  name: string;
  value: number;
  status: 'excellent' | 'good' | 'moderate' | 'attention';
  change?: number;
  unit?: string;
  description?: string;
}

export const missionControlMetrics: Metric[] = [
  {
    id: "bioiq-index",
    name: "BioIQ™ Index",
    value: 87,
    status: "excellent",
    change: 3,
    description: "Overall health optimization score based on all biomarkers"
  },
  {
    id: "cognitive-performance",
    name: "Cognitive Performance",
    value: 92,
    status: "excellent",
    change: 5,
    description: "Mental clarity, focus, and cognitive function"
  },
  {
    id: "stress-resilience",
    name: "Stress Resilience",
    value: 78,
    status: "good",
    change: 2,
    description: "Ability to adapt to and recover from stress"
  },
  {
    id: "biological-age",
    name: "Biological Age",
    value: 32,
    status: "excellent",
    unit: "years",
    change: -4,
    description: "Estimated biological age based on biomarkers"
  },
  {
    id: "metabolic-efficiency",
    name: "Metabolic Efficiency",
    value: 81,
    status: "good",
    change: 6,
    description: "Energy production and utilization efficiency"
  },
  {
    id: "recovery-score",
    name: "Recovery Score",
    value: 73,
    status: "good",
    change: 4,
    description: "Physical recovery and adaptation capacity"
  },
  {
    id: "hormonal-optimization",
    name: "Hormonal Optimization",
    value: 68,
    status: "moderate",
    change: 8,
    description: "Balance and optimization of key hormones"
  },
  {
    id: "immune-function",
    name: "Immune Function",
    value: 85,
    status: "excellent",
    change: 3,
    description: "Immune system strength and responsiveness"
  },
  {
    id: "sleep-quality",
    name: "Sleep Quality",
    value: 76,
    status: "good",
    change: 7,
    description: "Sleep efficiency and restorative quality"
  }
];

export const detailedMetrics = {
  optimizedBiomarkers: {
    title: "Optimized Biomarkers",
    value: 24,
    total: 32,
    status: "good",
    items: [
      { name: "Glucose", status: "excellent" },
      { name: "Insulin", status: "good" },
      { name: "HbA1c", status: "excellent" },
      { name: "Testosterone", status: "good" },
      { name: "Estradiol", status: "moderate" },
      { name: "Cortisol", status: "good" },
      { name: "DHEA", status: "excellent" },
      { name: "Vitamin D", status: "excellent" }
    ]
  },
  cognitiveScore: {
    title: "Cognitive Score",
    value: 92,
    status: "excellent",
    change: 5,
    components: [
      { name: "Focus", value: 94, status: "excellent" },
      { name: "Memory", value: 89, status: "excellent" },
      { name: "Processing Speed", value: 91, status: "excellent" },
      { name: "Mental Endurance", value: 87, status: "excellent" }
    ]
  },
  hormones: {
    title: "Hormones",
    status: "good",
    items: [
      { name: "Testosterone", value: 720, unit: "ng/dL", status: "good", reference: "500-1000" },
      { name: "Estradiol", value: 22, unit: "pg/mL", status: "moderate", reference: "10-40" },
      { name: "Cortisol", value: 14, unit: "μg/dL", status: "good", reference: "5-25" },
      { name: "DHEA-S", value: 350, unit: "μg/dL", status: "excellent", reference: "100-500" },
      { name: "IGF-1", value: 180, unit: "ng/mL", status: "good", reference: "100-300" }
    ]
  }
};
