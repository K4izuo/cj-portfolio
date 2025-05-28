import type React from "react"
import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15,
    restDelta: 0.001,
    mass: 0.1,
  })

  // Color transitions based on scroll progress
  const progressColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "linear-gradient(90deg, #1f2937 0%, #4b5563 100%)",
      "linear-gradient(90deg, #1f2937 0%, #6366f1 100%)",
      "linear-gradient(90deg, #4f46e5 0%, #8b5cf6 100%)",
      "linear-gradient(90deg, #7c3aed 0%, #ec4899 100%)",
      "linear-gradient(90deg, #db2777 0%, #ef4444 100%)",
      "linear-gradient(90deg, #dc2626 0%, #1f2937 100%)",
    ],
  )

  // Glow intensity increases with scroll progress
  const glowIntensity = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px 0px 0px rgba(31, 41, 55, 0.3)", "0px 0px 12px rgba(31, 41, 55, 0.8)"],
  )

  // Pulse effect
  const [isPulsing, setIsPulsing] = useState(false)

  // Detect scroll direction
  const [scrollDir, setScrollDir] = useState<"up" | "down" | null>(null)
  const prevScroll = useRef(0)

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      // Update pulse state on significant scroll events
      if (value === 0 || value === 1 || Math.abs(value - prevScroll.current) > 0.08) {
        setIsPulsing(true)
        setTimeout(() => setIsPulsing(false), 500)
      }

      // Detect scroll direction
      if (value > prevScroll.current) {
        setScrollDir("down")
      } else if (value < prevScroll.current) {
        setScrollDir("up")
      }

      prevScroll.current = value
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
        style={{
          scaleX,
          background: progressColor,
          boxShadow: glowIntensity,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          height: isPulsing ? "3px" : "1px",
        }}
        transition={{
          opacity: { delay: 0.5, duration: 0.3 },
          height: { duration: 0.2 },
        }}
      />

      {/* Particle effect following the progress */}
      <motion.div
        className="fixed top-0 h-2 w-2 rounded-full bg-white z-50 pointer-events-none"
        style={{
          left: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]),
          boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.6)",
        }}
        animate={{
          y: [0, scrollDir === "down" ? 5 : -5, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Edge indicators that appear when near top/bottom */}
      <motion.div
        className="fixed top-0 right-0 h-8 w-8 z-50 pointer-events-none"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 0.5, 0]),
          background: "radial-gradient(circle, rgba(107,114,128,0.5) 0%, rgba(107,114,128,0) 70%)",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 h-8 w-8 z-50 pointer-events-none"
        style={{
          opacity: useTransform(scrollYProgress, [0.9, 0.95, 1], [0, 0.5, 1]),
          background: "radial-gradient(circle, rgba(107,114,128,0.5) 0%, rgba(107,114,128,0) 70%)",
        }}
      />
    </>
  )
}

export default ScrollProgress
