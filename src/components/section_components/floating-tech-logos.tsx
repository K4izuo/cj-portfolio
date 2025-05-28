import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import React from "react";

interface TechLogo {
  icon: string;
  style: React.CSSProperties;
}

interface FloatingTechLogosProps {
  logos: TechLogo[];
}

export default function FloatingTechLogos({ logos }: FloatingTechLogosProps) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {logos.map((logo, index) => (
        <motion.i
          key={index}
          className={`${logo.icon} absolute text-4xl md:text-6xl text-gray-800 opacity-10`}
          style={{
            ...logo.style,
            willChange: prefersReducedMotion ? "auto" : "transform",
          }}
          {...(prefersReducedMotion 
            ? { animate: { opacity: 0.1 } }
            : {
                animate: {
                  y: ["0%", "20%", "0%"],
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                },
                transition: {
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: index * 0.3,
                  ease: "easeInOut",
                }
              }
          )}
        />
      ))}
    </div>
  );
}