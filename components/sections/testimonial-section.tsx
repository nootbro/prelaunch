"use client";

import { SectionHeader } from "@/components/section-header";
import { SocialProofTestimonials } from "@/components/testimonial-scroll";
import { siteConfig } from "@/lib/config";

export default function TestimonialSection() {
  const { testimonials } = siteConfig;

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center w-full py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-balance">
          What Our Users Say
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center text-balance">
          Hear from high performers who have transformed their health and performance with BioIQ.
        </p>
      </SectionHeader>
      <SocialProofTestimonials testimonials={testimonials} />
    </section>
  );
}
