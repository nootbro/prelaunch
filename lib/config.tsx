export const siteConfig = {
  name: "BioIQ",
  description: "The Future of Human Optimization",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "Health Optimization",
    "Biomarker Analysis",
    "AI Health",
    "Performance",
  ],
  links: {
    email: "support@bioiq.com",
    twitter: "https://twitter.com/bioiq",
    instagram: "https://instagram.com/bioiq",
  },
  nav: {
    links: [
      { id: 1, name: "Home", href: "#hero" },
      { id: 2, name: "Biomarkers", href: "#biomarkers" },
      { id: 3, name: "Features", href: "#features" },
      { id: 4, name: "Testimonials", href: "#testimonials" },
    ],
  },
  testimonials: [
    {
      id: "1",
      name: "Dr. Michael Chen",
      role: "Neurosurgeon",
      img: "https://randomuser.me/api/portraits/men/91.jpg",
      description: (
        <p>
          BioIQ has completely transformed my approach to health optimization. The personalized insights and protocols have helped me increase my testosterone by 28% and reduce inflammation markers significantly.
        </p>
      ),
    },
    {
      id: "2",
      name: "Sarah Johnson",
      role: "Olympic Athlete",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      description: (
        <p>
          As an athlete, I've always been data-driven. BioIQ takes biomarker analysis to the next level with AI-powered insights that have helped me optimize my performance and recovery.
        </p>
      ),
    },
    {
      id: "3",
      name: "James Wilson",
      role: "Tech Executive",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      description: (
        <p>
          The cognitive enhancement protocols have been a game-changer for my work. My focus, memory, and mental clarity have improved dramatically since implementing BioIQ's recommendations.
        </p>
      ),
    },
    {
      id: "4",
      name: "Emily Chen",
      role: "Product Manager",
      img: "https://randomuser.me/api/portraits/women/83.jpg",
      description: (
        <p>
          BioIQ's hormone optimization program has completely changed my energy levels and sleep quality. I'm more productive and focused than ever before.
        </p>
      ),
    },
    {
      id: "5",
      name: "Michael Brown",
      role: "Data Scientist",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      description: (
        <p>
          As someone who analyzes data for a living, I'm impressed by the depth and accuracy of BioIQ's analytics. The AI-driven insights have helped me make targeted improvements to my health.
        </p>
      ),
    },
    {
      id: "6",
      name: "Linda Wu",
      role: "VP of Operations",
      img: "https://randomuser.me/api/portraits/women/5.jpg",
      description: (
        <p>
          The personalized nutrition recommendations from BioIQ have helped me lose 15 pounds and improve all my metabolic markers. I've never felt better.
        </p>
      ),
    },
    {
      id: "7",
      name: "Carlos Gomez",
      role: "Head of R&D",
      img: "https://randomuser.me/api/portraits/men/14.jpg",
      description: (
        <p>
          BioIQ's approach to longevity optimization is unparalleled. The comprehensive biomarker analysis and personalized protocols have helped me improve my biological age markers significantly.
        </p>
      ),
    },
    {
      id: "8",
      name: "Aisha Khan",
      role: "Chief Marketing Officer",
      img: "https://randomuser.me/api/portraits/women/56.jpg",
      description: (
        <p>
          I've tried many health optimization platforms, but BioIQ is in a league of its own. The AI-driven insights and personalized recommendations have helped me achieve optimal health.
        </p>
      ),
    },
    {
      id: "9",
      name: "Tom Chen",
      role: "Director of IT",
      img: "https://randomuser.me/api/portraits/men/18.jpg",
      description: (
        <p>
          BioIQ's cognitive enhancement protocols have been a game-changer for my mental performance. My focus, memory, and problem-solving abilities have improved dramatically.
        </p>
      ),
    },
  ],
};

export type SiteConfig = typeof siteConfig;
