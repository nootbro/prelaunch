"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function BiomarkerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section 
      ref={ref}
      id="biomarkers" 
      className="w-full py-24 bg-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Biomarker Analysis</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our AI-powered platform analyzes over 100 biomarkers to provide personalized insights and recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className={cn(
              "bg-gray-900 p-6 rounded-lg border border-gray-800 transition-all duration-700 opacity-0 translate-y-8",
              inView && "opacity-100 translate-y-0"
            )}
            style={{ transitionDelay: "0ms" }}
          >
            <h3 className="text-xl font-semibold mb-4">Hormonal Balance</h3>
            <div className="space-y-4">
              <BiomarkerItem name="Testosterone" value="743" unit="ng/dL" change="+28%" positive />
              <BiomarkerItem name="DHEA-S" value="328" unit="pg/dL" change="+15%" positive />
              <BiomarkerItem name="Estradiol" value="38.2" unit="pg/mL" change="-12%" positive />
              <BiomarkerItem name="Cortisol" value="14.2" unit="μg/dL" change="-24%" positive />
            </div>
          </div>
          
          <div 
            className={cn(
              "bg-gray-900 p-6 rounded-lg border border-gray-800 transition-all duration-700 opacity-0 translate-y-8",
              inView && "opacity-100 translate-y-0"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            <h3 className="text-xl font-semibold mb-4">Inflammation Markers</h3>
            <div className="space-y-4">
              <BiomarkerItem name="hs-CRP" value="0.8" unit="mg/L" change="-42%" positive />
              <BiomarkerItem name="IL-6" value="1.2" unit="pg/mL" change="-35%" positive />
              <BiomarkerItem name="TNF-α" value="1.5" unit="pg/mL" change="-28%" positive />
              <BiomarkerItem name="Homocysteine" value="7.2" unit="μmol/L" change="-18%" positive />
            </div>
          </div>
          
          <div 
            className={cn(
              "bg-gray-900 p-6 rounded-lg border border-gray-800 transition-all duration-700 opacity-0 translate-y-8",
              inView && "opacity-100 translate-y-0"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-xl font-semibold mb-4">Metabolic Health</h3>
            <div className="space-y-4">
              <BiomarkerItem name="HDL" value="62" unit="mg/dL" change="+19%" positive />
              <BiomarkerItem name="LDL" value="85" unit="mg/dL" change="-15%" positive />
              <BiomarkerItem name="Triglycerides" value="72" unit="mg/dL" change="-22%" positive />
              <BiomarkerItem name="HbA1c" value="5.1" unit="%" change="-0.4%" positive />
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Our AI analyzes your biomarkers and creates personalized protocols to optimize your health and performance.
          </p>
          <div 
            className={cn(
              "inline-block bg-blue-600/20 border border-blue-500/30 rounded-lg px-6 py-4 text-blue-400 transition-all duration-700 opacity-0 translate-y-8",
              inView && "opacity-100 translate-y-0"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <span className="font-semibold">84</span> Cognitive Score - Powered by ciranethri-in mer tracking
          </div>
        </div>
      </div>
    </section>
  );
}

interface BiomarkerItemProps {
  name: string;
  value: string;
  unit: string;
  change: string;
  positive: boolean;
}

function BiomarkerItem({ name, value, unit, change, positive }: BiomarkerItemProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <span className="font-medium">{name}</span>
        <span className="text-gray-500 ml-2 text-sm">
          {value} <span className="text-xs">{unit}</span>
        </span>
      </div>
      <span className={positive ? "text-green-500" : "text-red-500"}>
        {change}
      </span>
    </div>
  );
}
