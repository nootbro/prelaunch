"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  strokeWidth?: number;
  className?: string;
  color?: string;
  animated?: boolean;
  showDots?: boolean;
  showArea?: boolean;
  minValue?: number;
  maxValue?: number;
  referenceRange?: [number, number];
  showReferenceRange?: boolean;
  statusColor?: "excellent" | "good" | "moderate" | "attention";
}

export function Sparkline({
  data,
  width = 80,
  height = 24,
  strokeWidth = 1.5,
  className,
  color = "#3b82f6", // blue-500
  animated = true,
  showDots = false,
  showArea = true,
  minValue,
  maxValue,
  referenceRange,
  showReferenceRange = false,
  statusColor,
}: SparklineProps) {
  
  // Determine color based on statusColor if provided
  const lineColor = statusColor
    ? statusColor === "excellent"
      ? "#63D8BF" // Teal
      : statusColor === "good"
      ? "#3B82F6" // Blue
      : statusColor === "moderate"
      ? "#FFBE55" // Amber
      : "#FF8FA3" // Coral (attention)
    : color;
  const [pathLength, setPathLength] = useState(0);
  
  // Calculate min and max values if not provided
  const min = minValue !== undefined ? minValue : Math.min(...data);
  const max = maxValue !== undefined ? maxValue : Math.max(...data);
  
  // Calculate points for the sparkline
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / (max - min)) * height;
    return { x, y };
  });
  
  // Create SVG path
  const linePath = points.map((point, i) => 
    `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ');
  
  // Create area path (for filled area below the line)
  const areaPath = `${linePath} L ${width} ${height} L 0 ${height} Z`;
  
  // Animation effect
  useEffect(() => {
    if (animated) {
      setPathLength(1);
    }
  }, [animated]);

  return (
    <div className={cn("relative", className)}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Reference range if provided */}
        {showReferenceRange && referenceRange && (
          <rect
            x={0}
            y={height - ((referenceRange[1] - min) / (max - min)) * height}
            width={width}
            height={((referenceRange[1] - referenceRange[0]) / (max - min)) * height}
            fill={`${lineColor}10`} // 10 = 6.25% opacity
            rx={2}
          />
        )}
        
        {/* Area under the line */}
        {showArea && (
          <motion.path
            d={areaPath}
            fill={`${lineColor}20`} // 20 = 12.5% opacity
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: animated ? 1 : 0 }}
          />
        )}
        
        {/* Line */}
        <motion.path
          d={linePath}
          stroke={lineColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: animated ? 1.5 : 0, ease: "easeInOut" }}
        />
        
        {/* Dots at data points */}
        {showDots && points.map((point, index) => (
          <motion.circle
            key={index}
            cx={point.x}
            cy={point.y}
            r={2}
            fill={lineColor}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: animated ? 1.5 + (index * 0.1) : 0,
              duration: 0.2
            }}
          />
        ))}
        
        {/* Latest value dot (always shown) */}
        <motion.circle
          cx={points[points.length - 1].x}
          cy={points[points.length - 1].y}
          r={2}
          fill={lineColor}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: animated ? 1.5 : 0,
            duration: 0.2
          }}
        />
      </svg>
    </div>
  );
}
