"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({
  className,
  size = 150,
  duration = 10,
  delay = 0,
  colorFrom = "var(--color-primary)",
  colorTo = "var(--color-secondary)",
}: BorderBeamProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setHasMounted(true);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ref.current.style.setProperty("--x", `${x}px`);
      ref.current.style.setProperty("--y", `${y}px`);
    };

    const handleMouseLeave = () => {
      if (!ref.current) return;

      ref.current.style.setProperty("--x", `${ref.current.offsetWidth / 2}px`);
      ref.current.style.setProperty("--y", `${ref.current.offsetHeight / 2}px`);
    };

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
      currentRef.addEventListener("mouseleave", handleMouseLeave);
    }

    timeoutRef.current = setTimeout(() => {
      handleMouseLeave();
    }, 50);

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", handleMouseMove);
        currentRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [hasMounted]);

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 overflow-hidden rounded-[inherit] [mask:linear-gradient(white,transparent)]",
        className
      )}
      style={
        {
          "--size": `${size}px`,
          "--duration": `${duration}s`,
          "--delay": `${delay}s`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--x": "50%",
          "--y": "50%",
          maskImage: "linear-gradient(black, transparent)",
          WebkitMaskImage: "linear-gradient(black, transparent)",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-[-100%] opacity-0 [animation-delay:var(--delay)] [animation-duration:var(--duration)] [animation-iteration-count:infinite] [animation-name:beam] [animation-timing-function:linear] [background:radial-gradient(var(--size)_circle_at_var(--x)_var(--y),var(--color-from),transparent_70%)]"
        style={{
          animationName: "beam",
          animationDuration: `${duration}s`,
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
          animationDelay: `${delay}s`,
        }}
      />
    </div>
  );
}
