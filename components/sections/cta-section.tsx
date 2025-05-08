"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function CTASection() {
  return (
    <section id="cta" className="w-full py-24 bg-black relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 opacity-50"></div>
      
      {/* Radial gradient for glow effect */}
      <div className="absolute inset-0 [background:radial-gradient(circle_at_center,rgba(59,130,246,0.3)_0,transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Unlock Your Biological Potential
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of high performers who are optimizing their biology with AI-powered insights and personalized protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 h-auto text-lg rounded-lg">
              <span>Get Started</span>
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white px-8 py-6 h-auto text-lg rounded-lg">
              Learn More
            </Button>
          </div>
          <p className="text-gray-500 mt-6 text-sm">
            No credit card required. Start your 14-day free trial today.
          </p>
        </div>
      </div>
    </section>
  );
}
