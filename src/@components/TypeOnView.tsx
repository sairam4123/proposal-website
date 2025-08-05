"use client";
import { cn } from "@/utils/cn";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

export function TypeOnView({ text, loop, className }: { text: string | string[]; loop?: number; className?: string }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // so it only triggers once
    threshold: 0.5,     // fires when half of the element is visible
  });

  return (
    <div ref={ref}>
      <p className={cn("text-3xl lg:text-5xl text-balance font-bold", className)}>
        {inView && (
          <Typewriter
            words={Array.isArray(text) ? text : [text]}
            cursor
            loop={loop || 1}
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        )}
      </p>
    </div>
  );
}
