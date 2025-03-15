import type React from "react"
import { useEffect } from "react"
import { motion, useAnimation, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimatedSectionProps {
  children: React.ReactNode
  id: string
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "-100px 0px",
  })

  const variants: Variants = {
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
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
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
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection

