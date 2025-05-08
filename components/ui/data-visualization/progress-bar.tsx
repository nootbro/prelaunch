"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  positive?: boolean;
  showPercentage?: boolean;
  percentageValue?: string;
  height?: number;
  animated?: boolean;
  statusColor?: "excellent" | "good" | "moderate" | "attention";
}

export function ProgressBar({
  value,
  max = 100,
  className,
  positive = true,
  showPercentage = false,
  percentageValue,
  height = 6,
  animated = true,
  statusColor,
}: ProgressBarProps) {
  const [width, setWidth] = useState(0);
  
  // Calculate percentage
  const percentage = (value / max) * 100;
  
  // Animate the progress bar on mount
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setWidth(percentage);
    }
  }, [percentage, animated]);

  return (
    <div className={cn("relative flex items-center w-full", className)}>
      <div 
        className={cn(
          "w-full overflow-hidden rounded-full bg-gray-800",
        )}
        style={{ height: `${height}px` }}
      >
        <motion.div
          className={cn(
            "h-full rounded-full",
            {
              // Default gradient if no statusColor is provided
              "bg-gradient-to-r from-blue-500 to-teal-400": !statusColor && positive,
              "bg-gradient-to-r from-red-500 to-orange-400": !statusColor && !positive,
              
              // Status-based gradients
              "bg-gradient-to-r from-[#63D8BF] to-[#4AC0A8]": statusColor === "excellent",
              "bg-gradient-to-r from-[#3B82F6] to-[#2563EB]": statusColor === "good",
              "bg-gradient-to-r from-[#FFBE55] to-[#F59E0B]": statusColor === "moderate",
              "bg-gradient-to-r from-[#FF8FA3] to-[#F43F5E]": statusColor === "attention",
            }
          )}
          style={{ 
            width: `${width}%`,
            transition: animated ? "width 1s cubic-bezier(0.65, 0, 0.35, 1)" : "none",
          }}
        />
      </div>
      {showPercentage && (
        <span className={cn(
          "ml-2 text-xs",
          {
            // Default colors if no statusColor is provided
            "text-green-500": !statusColor && positive,
            "text-red-500": !statusColor && !positive,
            
            // Status-based colors
            "text-[#63D8BF]": statusColor === "excellent",
            "text-[#3B82F6]": statusColor === "good",
            "text-[#FFBE55]": statusColor === "moderate",
            "text-[#FF8FA3]": statusColor === "attention",
          }
        )}>
          {percentageValue || `${value}%`}
        </span>
      )}
    </div>
  );
}
