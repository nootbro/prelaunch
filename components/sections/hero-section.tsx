"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BorderBeam } from "@/components/effects/border-beam";
import Particles from "@/components/effects/particles";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import { ProgressBar } from "@/components/ui/progress-bar";
import { CircularProgress } from "@/components/ui/circular-progress";
import { Sparkline } from "@/components/ui/sparkline";
import { MetricCard } from "@/components/ui/metric-card";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8"
    >
      <Particles
        className="absolute inset-0 -z-10"
        quantity={200}
        staticity={30}
        color="59, 130, 246"
      />
      <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
        <span className="inline-flex items-center justify-center text-white drop-shadow-sm">
          <span>✨ Introducing Notable AI</span>
        </span>
      </div>
      <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        The Future of
        <br className="hidden md:block" /> Human Optimization.
      </h1>
      <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Precision-built for high performers. Unlock your biology with
        <br className="hidden md:block" /> the world's first AI-powered health analytics platform.
      </p>
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 ease-in-out [--animation-delay:600ms]">
        <WaitlistDialog />
      </div>
      <div
        ref={ref}
        className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
      >
        <div
          className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${
            inView ? "before:animate-image-glow" : ""
          }`}
        >
          <div className="relative w-full h-full rounded-[inherit] border object-contain dark:block">
            {/* Biomarker Dashboard */}
            <div className="bg-black p-8 rounded-xl relative">
              <BorderBeam
                className="z-10"
                size={250}
                duration={15}
                colorFrom="rgba(59, 130, 246, 0.5)"
                colorTo="rgba(16, 185, 129, 0.2)"
              />
              <div className="flex flex-col gap-8">
                {/* Mission Control section (formerly Health Metrics) */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-left">Mission Control</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                    <MetricCard
                      title="BioIQ™ Index"
                      value="93"
                      subtitle="Top 4%"
                      valueType="index"
                      visualType="radial"
                    />
                    <MetricCard
                      title="Cognitive Performance"
                      value="78"
                      subtitle="Above average"
                      valueType="index"
                      visualType="sparkline"
                      sparklineData={[65, 68, 72, 75, 78]}
                    />
                    <MetricCard
                      title="Stress Resilience"
                      value="73"
                      subtitle="Good"
                      valueType="stress"
                      visualType="dots"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                    <MetricCard
                      title="Biological Age"
                      value="21"
                      subtitle="-5 years"
                      valueType="age"
                      visualType="bar"
                    />
                    <MetricCard
                      title="Metabolic Efficiency"
                      value="91"
                      subtitle="Top 9%"
                      valueType="index"
                      visualType="radial"
                    />
                    <MetricCard
                      title="Recovery Score"
                      value="82"
                      subtitle="+8% this week"
                      valueType="index"
                      visualType="trend"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <MetricCard
                      title="Hormonal Optimization"
                      value="85"
                      subtitle="Good balance"
                      valueType="index"
                      visualType="radial"
                    />
                    <MetricCard
                      title="Immune Function"
                      value="79"
                      subtitle="Above average"
                      valueType="index"
                      visualType="bar"
                    />
                    <MetricCard
                      title="Sleep Quality"
                      value="88"
                      subtitle="+12% this month"
                      valueType="index"
                      visualType="sparkline"
                      sparklineData={[70, 75, 80, 84, 88]}
                    />
                  </div>
                </div>
                
                {/* Original dashboard content moved below */}
                <div className="mt-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-4">Optimized Biomarkers</h3>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center mb-1">
                            <span>Testosterone</span>
                            <span className="text-green-500">+28 %</span>
                          </div>
                          <ProgressBar value={28} statusColor="excellent" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center mb-1">
                            <span>hs-CRP</span>
                            <span className="text-red-500">-42 %</span>
                          </div>
                          <ProgressBar value={42} statusColor="attention" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center mb-1">
                            <span>HDL</span>
                            <span className="text-green-500">+19 %</span>
                          </div>
                          <ProgressBar value={19} statusColor="good" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mt-8 mb-4">Personalized Protocols</h3>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <CircularProgress 
                        value={84} 
                        max={100}
                        size={128}
                        strokeWidth={4}
                        label="Cognitive score"
                        glowEffect={true}
                        pulseEffect={true}
                        statusColor="good"
                      />
                      <p className="text-xs text-gray-500 text-center mt-2">Powered by new ciranethri-in mer tracking</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-4">Hormones</h3>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span>Testosterone</span>
                            <div className="flex items-center gap-2">
                              <Sparkline 
                                data={[680, 695, 710, 725, 743]} 
                                width={60} 
                                height={20} 
                                color="#3b82f6"
                                statusColor="good"
                                showReferenceRange={true}
                                referenceRange={[600, 800]}
                              />
                              <span>743 <span className="text-xs text-gray-500">ng/dL</span></span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span>DHEA-S</span>
                            <div className="flex items-center gap-2">
                              <Sparkline 
                                data={[290, 305, 315, 322, 328]} 
                                width={60} 
                                height={20} 
                                color="#3b82f6"
                                statusColor="good"
                                showReferenceRange={true}
                                referenceRange={[280, 340]}
                              />
                              <span>328 <span className="text-xs text-gray-500">pg/dL</span></span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span>Estradiol</span>
                            <div className="flex items-center gap-2">
                              <Sparkline 
                                data={[42, 40, 39, 38.5, 38.2]} 
                                width={60} 
                                height={20} 
                                color="#3b82f6"
                                statusColor="good"
                                showReferenceRange={true}
                                referenceRange={[35, 45]}
                              />
                              <span>38,2 <span className="text-xs text-gray-500">pg/mL</span></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between items-center">
                          <span>Liver</span>
                          <span>→</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span>Cognitive</span>
                          <span>→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
