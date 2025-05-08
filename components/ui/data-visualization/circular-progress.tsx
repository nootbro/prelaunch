"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
  label?: string;
  animated?: boolean;
  showValue?: boolean;
  valuePrefix?: string;
  valueSuffix?: string;
  glowEffect?: boolean;
  pulseEffect?: boolean;
  statusColor?: "excellent" | "good" | "moderate" | "attention";
}

export function CircularProgress({
  value,
  max = 100,
  size = 128,
  strokeWidth = 4,
  className,
  valueClassName,
  labelClassName,
  label,
  animated = true,
  showValue = true,
  valuePrefix = "",
  valueSuffix = "",
  glowEffect = true,
  pulseEffect = true,
  statusColor,
}: CircularProgressProps) {
  const [progress, setProgress] = useState(0);
  
  // Calculate percentage and SVG parameters
  const percentage = (value / max) * 100;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  
  // Center coordinates
  const center = size / 2;
  
  // Animate the progress on mount
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setProgress(percentage);
    }
  }, [percentage, animated]);

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Main circle */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="rgba(59, 130, 246, 0.2)"
          strokeWidth={strokeWidth}
          className="opacity-30"
        />
        
        {/* Progress track with gradient */}
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke={`url(#circleGradient${statusColor || 'Default'})`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: animated ? "stroke-dashoffset 1.5s cubic-bezier(0.65, 0, 0.35, 1)" : "none",
          }}
          className={cn(
            glowEffect && {
              "filter drop-shadow-[0_0_3px_rgba(59,130,246,0.7)]": !statusColor || statusColor === "good",
              "filter drop-shadow-[0_0_3px_rgba(99,216,191,0.7)]": statusColor === "excellent",
              "filter drop-shadow-[0_0_3px_rgba(255,190,85,0.7)]": statusColor === "moderate",
              "filter drop-shadow-[0_0_3px_rgba(255,143,163,0.7)]": statusColor === "attention"
            }
          )}
        />
        
        {/* Gradient definitions */}
        <defs>
          {/* Default gradient (blue to emerald) */}
          <linearGradient id="circleGradientDefault" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" /> {/* blue-500 */}
            <stop offset="100%" stopColor="#10b981" /> {/* emerald-500 */}
          </linearGradient>
          
          {/* Excellent gradient (teal) */}
          <linearGradient id="circleGradientexcellent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#63D8BF" /> {/* teal */}
            <stop offset="100%" stopColor="#4AC0A8" /> {/* darker teal */}
          </linearGradient>
          
          {/* Good gradient (blue) */}
          <linearGradient id="circleGradientgood" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" /> {/* blue */}
            <stop offset="100%" stopColor="#2563EB" /> {/* darker blue */}
          </linearGradient>
          
          {/* Moderate gradient (amber) */}
          <linearGradient id="circleGradientmoderate" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFBE55" /> {/* amber */}
            <stop offset="100%" stopColor="#F59E0B" /> {/* darker amber */}
          </linearGradient>
          
          {/* Attention gradient (coral) */}
          <linearGradient id="circleGradientattention" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8FA3" /> {/* coral */}
            <stop offset="100%" stopColor="#F43F5E" /> {/* darker coral */}
          </linearGradient>
        </defs>
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {showValue && (
          <motion.div
            className={cn("text-4xl font-bold", valueClassName)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: pulseEffect ? [1, 1.05, 1] : 1, 
              opacity: 1 
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              opacity: { duration: 0.5 }
            }}
          >
            {valuePrefix}{value}{valueSuffix}
          </motion.div>
        )}
        {label && (
          <div className={cn("text-sm text-gray-400 mt-1", labelClassName)}>
            {label}
          </div>
        )}
      </div>
    </div>
  );
}
