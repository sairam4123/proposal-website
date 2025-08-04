"use client";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollIndicator() {
  const { ref, inView } = useInView({
    triggerOnce: false, // so it only triggers once
    threshold: 0.5, // fires when half of the element is visible
  });

  return (
    <div ref={ref}>
      {inView && (
        <motion.div
          className="absolute bottom-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <ChevronDown size={40} className="text-white opacity-80" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
