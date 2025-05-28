import type React from "react"
import { useEffect } from "react"
import { motion, useAnimation, type Variants, useReducedMotion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimatedSectionProps {
  children: React.ReactNode
  id: string
  threshold?: number
  delay?: number
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  id, 
  threshold = 0.1,
  delay = 0 
}) => {
  const prefersReducedMotion = useReducedMotion()
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false, // Consider true if animations should only play once
    threshold: threshold,
    rootMargin: "-100px 0px",
  })

  // Define variants based on reduced motion preference
  const variants: Variants = prefersReducedMotion 
    ? {
        // Simplified variants for reduced motion
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration: 0.3 }
        },
        exit: { opacity: 0 }
      }
    : {
        hidden: {
          opacity: 0,
          y: 50,
          scale: 0.95,
          filter: "blur(10px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 0.5,
            duration: 0.8,
            delay: delay,
          },
        },
        exit: {
          opacity: 0,
          y: -50,
          scale: 0.95,
          filter: "blur(10px)",
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
          },
        },
      }

  useEffect(() => {
    // Add a small delay before animation to avoid animation jank
    let timeout: NodeJS.Timeout
    
    if (inView) {
      timeout = setTimeout(() => {
        controls.start("visible")
      }, 10)
    } else {
      controls.start("hidden")
    }
    
    return () => clearTimeout(timeout)
  }, [controls, inView])

  return (
    <motion.section
      id={id}
      ref={ref}
      animate={controls}
      initial="hidden"
      exit="exit"
      variants={variants}
      className="relative w-full"
      style={{ 
        willChange: prefersReducedMotion ? 'auto' : 'transform, opacity',
      }}
      // Only trigger layout animation if not preferring reduced motion
      layout={!prefersReducedMotion}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection

