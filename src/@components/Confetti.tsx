import React, { useEffect, useState } from "react";
import { confetti } from "tsparticles-confetti";

const Confetti: React.FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (count > 2) {
        return;
      }

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0.5,
        decay: 0.94,
        startVelocity: 15,
        origin: {
          x: Math.random(),
          y: 0,
        },
        shapes: ["heart"],
        colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
      };

      confetti({
        ...defaults,
        particleCount: 50,
        scalar: 2,
      });

      confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3,
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 4,
      });

      setCount((c) => c + 1);
    }, 800);

    return () => clearTimeout(timeout);
  }, [count]);

  // run the continuous confetti effect
  useEffect(() => {
    if (count <= 2) {
      return;
    }

    function randomInRange(min: number, max: number): number {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      confetti({
        particleCount: 2,
        startVelocity: 0,
        ticks: 50,
        origin: {
          x: Math.random(),
          // since particles fall down, skew start toward the top
          y: 0,
        //   y: Math.random() * skew - 0.2,
        },
        colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
        shapes: ["heart"],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(1.1, 2.3),
        drift: randomInRange(-0.2, 0.2),
        decay: randomInRange(0.9, 0.95),
      });
    }, 200);

    return () => clearInterval(interval);
 
  }, [count]);

  return null;
};

export default Confetti;
