"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sparkline } from "./sparkline";
import { ProgressBar } from "./progress-bar";
import { CircularProgress } from "./circular-progress";

// Status color mapping
const statusColors = {
  excellent: { color: "var(--status-excellent)", name: "Excellent" },  // Teal
  good: { color: "var(--status-good)", name: "Good" },                 // Blue
  moderate: { color: "var(--status-moderate)", name: "Moderate" },     // Amber
  attention: { color: "var(--status-attention)", name: "Needs Attention" }  // Coral
};

// Get color based on value and thresholds
const getStatusColor = (value: number, type: string) => {
  // Different metrics have different threshold scales
  if (type === "index") { // For index-based metrics (0-100 scale)
    if (value >= 90) return statusColors.excellent;
    if (value >= 80) return statusColors.good;
    if (value >= 70) return statusColors.moderate;
    return statusColors.attention;
  } 
  else if (type === "age") { // For biological age
    if (value <= 25) return statusColors.excellent;
    if (value <= 35) return statusColors.good;
    if (value <= 45) return statusColors.moderate;
    return statusColors.attention;
  }
  else if (type === "stress") { // For stress (lower is better)
    if (value >= 80) return statusColors.excellent;
    if (value >= 70) return statusColors.good;
    if (value >= 60) return statusColors.moderate;
    return statusColors.attention;
  }
  
  // Default scale
  if (value >= 90) return statusColors.excellent;
  if (value >= 75) return statusColors.good;
  if (value >= 60) return statusColors.moderate;
  return statusColors.attention;
};

// Tiny noise texture for material authenticity
const NoiseTexture = () => (
  <div
    className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      backgroundSize: '100px 100px'
    }}
  />
);

// Tiny dot indicator component
const DotIndicator = ({ count, activeIndex, color, statusClass }: { count: number, activeIndex: number, color: string, statusClass: string }) => {
  return (
    <div className="flex space-x-1 opacity-60 transition-opacity duration-300">
      {[...Array(count)].map((_, i) => (
        <div 
          key={i} 
          className={cn(
            "w-1 h-1 rounded-full transition-all duration-300",
            i <= activeIndex ? statusClass : "bg-white/10"
          )}
        />
      ))}
    </div>
  );
};

// Tiny up/down trend arrow
const TrendArrow = ({ direction, statusClass, small = false }: { direction: 'up' | 'down', statusClass: string, small?: boolean }) => {
  const size = small ? 8 : 12;
  return (
    <div className="opacity-60 transition-opacity duration-300">
      {direction === 'up' ? (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={statusClass}>
          <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={statusClass}>
          <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  valueType: "index" | "age" | "stress" | string;
  visualType: "radial" | "bar" | "dots" | "sparkline" | "trend";
  sparklineData?: number[];
  className?: string;
}

export function MetricCard({ 
  title, 
  value, 
  subtitle, 
  valueType, 
  visualType,
  sparklineData = [60, 65, 70, 68, 75],
  className
}: MetricCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine status color based on value and type
  const statusInfo = getStatusColor(parseFloat(value.toString()), valueType);
  const statusColor = statusInfo.color;
  
  // Determine Tailwind class for text color based on status
  const statusTextColorClass = (() => {
    if (statusInfo === statusColors.excellent) return "text-status-excellent";
    if (statusInfo === statusColors.good) return "text-status-good";
    if (statusInfo === statusColors.moderate) return "text-status-moderate";
    if (statusInfo === statusColors.attention) return "text-status-attention";
    return "text-status-good"; // Default
  })();
  
  // Determine status class for visual elements
  const statusColorClass = (() => {
    if (statusInfo === statusColors.excellent) return "text-status-excellent";
    if (statusInfo === statusColors.good) return "text-status-good";
    if (statusInfo === statusColors.moderate) return "text-status-moderate";
    if (statusInfo === statusColors.attention) return "text-status-attention";
    return "text-status-good"; // Default
  })();
  
  // Determine status type for component props
  const statusType = (() => {
    if (statusInfo === statusColors.excellent) return "excellent";
    if (statusInfo === statusColors.good) return "good";
    if (statusInfo === statusColors.moderate) return "moderate";
    if (statusInfo === statusColors.attention) return "attention";
    return "good"; // Default
  })();
  
  // Create the appropriate visual element with the status color
  let statusVisual;
  switch(visualType) {
    case 'radial':
      statusVisual = (
        <div className="opacity-60 transition-opacity duration-300" style={{ width: 20, height: 20 }}>
          <CircularProgress 
            value={parseFloat(value.toString())} 
            max={100}
            size={20}
            strokeWidth={1.5}
            showValue={false}
            animated={false}
            glowEffect={false}
            statusColor={statusType}
          />
        </div>
      );
      break;
    case 'bar':
      statusVisual = (
        <div className="w-16 opacity-60 transition-opacity duration-300">
          <ProgressBar 
            value={parseFloat(value.toString())} 
            max={100} 
            height={2}
            animated={false}
            positive={true}
            statusColor={statusType}
          />
        </div>
      );
      break;
    case 'dots':
      // Calculate active dots based on value (assuming 0-100 scale for simplicity)
      const activeDots = Math.round((parseFloat(value.toString()) / 100) * 5);
      statusVisual = <DotIndicator count={5} activeIndex={activeDots - 1} color={statusColor} statusClass={statusColorClass} />;
      break;
    case 'sparkline':
      // For sparkline, we need the data points
      statusVisual = (
        <div className="w-16 opacity-60 transition-opacity duration-300">
          <Sparkline 
            data={sparklineData} 
            width={60} 
            height={20} 
            color={statusColor}
            statusColor={statusType}
            animated={false}
            showDots={false}
          />
        </div>
      );
      break;
    case 'trend':
      // Determine if trend is up or down based on subtitle containing "+"
      const trendDirection = subtitle.includes("+") ? "up" : "down";
      statusVisual = <TrendArrow direction={trendDirection} statusClass={statusColorClass} />;
      break;
    default:
      statusVisual = null;
  }
  
  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden relative transition-all duration-300",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'rgba(20, 20, 20, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: isHovered 
          ? '0 6px 28px rgba(0, 0, 0, 0.25), 0 1px 0 rgba(255, 255, 255, 0.03)' 
          : '0 4px 24px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(255, 255, 255, 0.02)',
        borderTop: '1px solid rgba(255, 255, 255, 0.02)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
      }}
    >
      {/* Top inner shadow */}
      <div 
        className="absolute top-0 left-0 right-0 h-px opacity-10"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent)' }}
      />
      
      {/* Bottom inner shadow */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-5"
        style={{ 
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent)',
          transform: 'translateY(-1px)'
        }}
      />
      
      <NoiseTexture />
      
      <div className="p-5 relative z-10 flex flex-col justify-between h-full">
        {/* Title - explicitly left-aligned */}
        <h3 className="text-sm font-normal text-gray-300 text-left" style={{ letterSpacing: '-0.01em' }}>
          {title}
        </h3>
        
        {/* Value and subtitle container - positioned at bottom */}
        <div className="mt-auto">
          {/* Value - left-aligned with lighter font weight */}
          <div className="flex flex-col items-start">
            <span 
              className={cn(
                "text-3xl font-light transition-colors duration-300",
                statusTextColorClass
              )}
              style={{ 
                letterSpacing: '-0.02em',
                opacity: isHovered ? 1 : 0.95
              }}
            >
              {value}
            </span>
            
            {/* Subtitle with optional trend arrow for Cognitive Performance */}
            <div className="flex items-center mt-1">
              <span className="text-xs text-gray-500 font-light" style={{ letterSpacing: '0.01em' }}>
                {subtitle}
              </span>
              {title === "Cognitive Performance" ? (
                <div className="ml-1" style={{ opacity: isHovered ? 0.8 : 0.6 }}>
                  {visualType === 'sparkline' && <TrendArrow direction="up" statusClass={statusColorClass} small={true} />}
                </div>
              ) : null}
            </div>
          </div>
          
          {/* Divider line at the bottom */}
          <div className="w-full h-px bg-gray-800 opacity-50 mt-4"></div>
        </div>
        
        {/* Visual indicators positioned in bottom right except for Cognitive Performance */}
        {title !== "Cognitive Performance" && (
          <div className="absolute bottom-5 right-5" style={{ opacity: isHovered ? 0.8 : 0.6 }}>
            {statusVisual}
          </div>
        )}
      </div>
      
      {/* Subtle glow effect in corner - intensifies slightly on hover */}
      <div 
        className={cn(
          "absolute bottom-0 right-0 w-32 h-32 rounded-full transition-opacity duration-300",
          {
            "bg-status-excellent": statusInfo === statusColors.excellent,
            "bg-status-good": statusInfo === statusColors.good,
            "bg-status-moderate": statusInfo === statusColors.moderate,
            "bg-status-attention": statusInfo === statusColors.attention,
          }
        )}
        style={{
          transform: 'translate(40%, 40%)',
          opacity: isHovered ? 0.25 : 0.15,
          filter: `blur(${isHovered ? '8px' : '10px'})`,
          background: `radial-gradient(circle, currentColor, transparent 70%)`
        }}
      />
    </div>
  );
}
