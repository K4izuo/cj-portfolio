import { useCallback, useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { PenLine, Monitor, ShoppingBag, Megaphone, Instagram, Linkedin, Github, ChevronDown } from "lucide-react"
import ServiceCard from "../components/section_components/service-card"
import ProjectCard from "../components/section_components/project-card"
import TechStack from "../components/section_components/tech-stack"
import ContactForm from "@/components/section_components/contact-form"
import TestimonialsSection from "@/components/section_components/testimonial-card"
import EducationExperienceSection from "@/components/section_components/education-experience"
import AboutMe from "@/components/section_components/about-me"
import ScrollProgress from "../components/section_components/scroll-progress"
import "../styles/modern-scrollbar.css"
import "../styles/animations.css"
import { motion, useScroll, useTransform } from "framer-motion"
import AnimatedSection from "../components/section_components/animated-section"
import Header from "../components/section_components/header"
import FloatingTechLogos from "../components/section_components/floating-tech-logos"

// Constants moved outside component to prevent recreation on renders
const techLogos = [
  { icon: "devicon-react-original", style: { top: "10%", left: "5%" } },
  { icon: "devicon-typescript-plain", style: { top: "20%", right: "10%" } },
  { icon: "devicon-nodejs-plain", style: { bottom: "15%", left: "8%" } },
  { icon: "devicon-python-plain", style: { bottom: "25%", right: "15%" } },
  { icon: "devicon-javascript-plain", style: { top: "40%", left: "15%" } },
  { icon: "devicon-tailwindcss-plain", style: { top: "60%", right: "5%" } },
]

const socialIcons = [
  {
    Icon: Instagram,
    href: "https://www.instagram.com/_crisjustine/?igsh=YXNqcjloMHF5ZTV6",
    delay: 0,
  },
  {
    Icon: Linkedin,
    href: "#",
    delay: 0.1,
  },
  {
    Icon: Github,
    href: "https://github.com/K4izuo",
    delay: 0.2,
  },
]

const servicesData = [
  {
    Icon: PenLine,
    title: "Copywriting",
    description: "Crafting compelling content that engages your audience and drives results.",
    color: "gray-800",
  },
  {
    Icon: ShoppingBag,
    title: "E-commerce",
    description: "Building powerful online stores that convert visitors into customers.",
    color: "gray-800",
  },
  {
    Icon: Monitor,
    title: "Web Design",
    description: "Creating beautiful, responsive websites that work on all devices.",
    color: "gray-800",
  },
  {
    Icon: Megaphone,
    title: "Marketing",
    description: "Developing strategies that help your business grow and succeed.",
    color: "gray-800",
  },
]

// All sections for navigation, defined once
const SECTIONS = ["home", "about", "services", "projects", "contact"]

// Custom hook for scroll management
function useScrollManager() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY
    setIsScrolled(scrollPosition > 50)

    // Get header height for offset calculation
    const headerHeight = document.querySelector("header")?.offsetHeight || 0
    const offset = headerHeight + 100 // Additional offset for better detection

    // Find the current active section
    for (const section of SECTIONS) {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= offset && rect.bottom >= offset) {
          setActiveSection(section)
          break
        }
      }
    }
  }, [])

  // Optimized scroll to section function
  const scrollToSection = useCallback((sectionId: string) => {
    // Remove the # if it's included in the sectionId
    const id = sectionId.startsWith("#") ? sectionId.substring(1) : sectionId

    // Check if we're already on this section to prevent additional scrolling
    if (activeSection === id) return

    const element = document.getElementById(id)

    if (element) {
      // Get the header height for offset calculation
      const headerHeight = document.querySelector("header")?.offsetHeight || 0
      
      // Calculate the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top

      // Calculate the absolute position by adding current scroll position
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20

      // Smooth scroll to the element with offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [activeSection])

  return { isScrolled, activeSection, handleScroll, scrollToSection }
}

// Custom hook for header height management
function useHeaderHeight() {
  const setHeaderHeight = useCallback(() => {
    const header = document.querySelector("header")
    if (header) {
      const headerHeight = header.offsetHeight
      document.documentElement.style.setProperty("--header-height", `${headerHeight}px`)

      // Apply scroll margin to all sections
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => {
        (section as HTMLElement).style.scrollMarginTop = `${headerHeight + 16}px`
      })
    }
  }, [])

  return { setHeaderHeight }
}

export default function MainPortfolio() {
  // Scroll animations
  const { scrollYProgress } = useScroll()
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  
  // Custom hooks for scroll and header management
  const { isScrolled, activeSection, handleScroll, scrollToSection } = useScrollManager()
  const { setHeaderHeight } = useHeaderHeight()

  // Initialize scroll position and setup listeners
  useEffect(() => {
    // Prevent scroll restoration and reset scroll position
    window.history.scrollRestoration = "manual"
    window.scrollTo(0, 0)

    // Initial scroll check
    handleScroll()
    
    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Set header height and update on resize
  useEffect(() => {
    setHeaderHeight()
    window.addEventListener("resize", setHeaderHeight)
    return () => window.removeEventListener("resize", setHeaderHeight)
  }, [setHeaderHeight])

  // Memoize the hero section for performance
  const HeroSection = useMemo(() => (
    <AnimatedSection id="home">
      <motion.section
        className="relative min-h-screen flex items-center justify-center"
        style={{ scrollMarginTop: "80px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 md:px-20 pt-20 md:pt-0">
          <div className="flex flex-col lg:flex-row gap-8 items-center pt-8 md:pt-0">
            {/* Hero Content */}
            <motion.div
              className="space-y-8 md:space-y-6 mt-10 md:mt-0 lg:ml-[136px] text-center lg:text-left w-full lg:w-1/2"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 0.5,
                    staggerChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h1
                className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-gray-900 whitespace-nowrap flex items-center gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hello, I'm CJ{" "}
                <motion.span
                  className="inline-block"
                  animate={{ rotate: [0, 14, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                >
                  👋
                </motion.span>
              </motion.h1>
              <motion.div
                className="flex items-center gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="w-14 mt-1 h-0.5 bg-gray-900"></div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800">Software Engineer</h2>
              </motion.div>
              <motion.p
                className="text-gray-600 max-w-md text-sm sm:text-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                I'm a Software Engineer based in Philippines, and I'm very passionate and dedicated to my work.
              </motion.p>
              <motion.div
                className="flex gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <Button 
                  variant="default" 
                  className="bg-gray-800 text-white hover:bg-gray-700 rounded-md px-6"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Info
                </Button>
                <a 
                  className="inline-flex items-center justify-center border border-gray-800 text-gray-800 hover:bg-gray-100 rounded-md px-6 py-2 text-sm font-medium"
                  href="/resume.pdf"
                  download
                >
                  Download CV
                </a>
              </motion.div>
              {/* Mobile/Tablet Social Icons */}
              <motion.div
                className="flex lg:hidden gap-6 justify-center mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {socialIcons.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 1, y: 0 }}
                    animate={{
                      opacity: isScrolled ? 0 : 1,
                      y: isScrolled ? 20 : 0,
                      transition: {
                        duration: 0.4,
                        delay: isScrolled ? item.delay : 0,
                      },
                    }}
                  >
                    <item.Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="relative mt-6 w-full lg:w-1/2 h-[400px] lg:h-[500px] flex items-center justify-center lg:justify-end"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <motion.div
                  className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] mx-auto lg:mr-0"
                  style={{
                    scale: imageScale,
                    opacity: imageOpacity,
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 opacity-10 blur-2xl" />
                  <div className="absolute inset-0 flex items-center justify-center" />
                  {/* Add width and height to prevent layout shift */}
                  <img
                    src="/images/profile4.png"
                    alt="Profile"
                    className="relative z-10 w-full h-full rounded-full object-cover object-center border-4 border-white shadow-xl"
                    width={400}
                    height={400}
                    loading="eager"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-0 right-0 flex flex-col items-center justify-center">
            <motion.div
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection("about")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-sm text-gray-600">Scroll down</span>
              <ChevronDown className="w-4 h-4 text-gray-600 animate-bounce" />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </AnimatedSection>
  ), [isScrolled, imageScale, imageOpacity, scrollToSection]);

  // Memoize the services section
  const ServicesSection = useMemo(() => (
    <AnimatedSection id="services">
      <section className="py-[70px] md:py-20 lg:py-[92px] bg-gray-50">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-12">
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block">
              SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">What I do</h2>
            <div className="w-16 h-1 bg-gray-800 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-gray-600">Need a custom service?</span>
              <Button 
                className="bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  ), [scrollToSection]);

  // Memoize the projects section
  const ProjectsSection = useMemo(() => (
    <AnimatedSection id="projects">
      <section className="py-[70px] md:py-20 lg:py-[92px] bg-gray-50">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-12 mt-0 lg:mt-[8px]">
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block">
              MY WORK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
            <div className="w-16 h-1 bg-gray-800 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore some of my recent projects that showcase my expertise in web development, design, and
              problem-solving abilities.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <ProjectCard />
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-gray-600">Want to see more?</span>
              <Button className="bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  ), []);

  // Sidebar with social icons
  const SocialSidebar = useMemo(() => (
    <div className="hidden lg:flex mt-4 flex-col gap-6 fixed left-[118px] top-1/2 -translate-y-1/2 z-20">
      {socialIcons.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 1, x: 0 }}
          animate={{
            opacity: isScrolled ? 0 : 1,
            x: isScrolled ? -20 : 0,
            transition: {
              duration: 0.4,
              delay: isScrolled ? item.delay : 0.3 + item.delay,
              ease: "easeInOut",
            },
          }}
        >
          <item.Icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  ), [isScrolled]);

  return (
    <motion.div 
      className="min-h-screen font-['Poppins', sans-serif]" 
      initial="hidden" 
      animate="visible"
      // Use will-change sparingly for performance
      style={{ willChange: "opacity" }}
    >
      <ScrollProgress />
      <Header 
        isScrolled={isScrolled} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />

      <FloatingTechLogos logos={techLogos} />
      
      {/* Main content sections */}
      {HeroSection}
      
      <AnimatedSection id="about">
        <AboutMe />
      </AnimatedSection>
      
      <AnimatedSection id="experience">
        <EducationExperienceSection />
      </AnimatedSection>
      
      {ServicesSection}
      
      <AnimatedSection id="testimonials">
        <section className="py-[70px] md:py-20 lg:py-[92px] bg-white">
          <div className="container mx-auto px-4 lg:px-20">
            <TestimonialsSection />
          </div>
        </section>
      </AnimatedSection>
      
      {ProjectsSection}
      
      <AnimatedSection id="tech-stack">
        <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="text-center mb-12">
              <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                SKILLS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Tech Stack</h2>
              <div className="w-16 h-1 bg-gray-800 mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Here are the technologies and tools I specialize in. I'm always eager to learn and adapt to new
                technologies as they emerge.
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <TechStack />
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      <AnimatedSection id="contact">
        <section className="py-[91px] md:py-20 lg:py-[97px] bg-white">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="text-center mb-12">
              <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact Me</h2>
              <div className="w-16 h-1 bg-gray-800 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have a question or want to work together? Feel free to reach out. I'm always open to discussing new
                projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Footer with reduced motion */}
      <motion.footer
        className="border-t"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 lg:px-20">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Cris Justine. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" to="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" to="#">
              Privacy
            </Link>
          </nav>
        </div>
      </motion.footer>
      
      {/* Social sidebar */}
      {SocialSidebar}
    </motion.div>
  )
}
