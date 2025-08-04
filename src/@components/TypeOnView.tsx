"use client";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

export function TypeOnView({ text, loop }: { text: string | string[]; loop?: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // so it only triggers once
    threshold: 0.5,     // fires when half of the element is visible
  });

  return (
    <div ref={ref}>
      <p className="text-4xl lg:text-5xl font-bold">
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
