import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

interface HeaderProps {
  isScrolled: boolean
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

const Header: React.FC<HeaderProps> = ({ isScrolled, activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNavClick = (section: string) => {
    const sectionId = `#${section.toLowerCase()}`
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  const navItems = ["Home", "About", "Services", "Projects", "Contact"]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-20 py-5 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-medium text-gray-900"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("home")
          }}
        >
          Cris Justine
        </a>
        <nav className="hidden z-50 md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.toLowerCase())
              }}
              className={`text-gray-800 hover:text-gray-600 transition-colors ${
                activeSection === item.toLowerCase() ? "font-medium" : ""
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-gray-800" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          className="md:hidden fixed inset-x-0 top-[72px] bg-white border-t border-gray-100 shadow-sm z-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4 shadow-sm">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.toLowerCase())
                }}
                className={`text-gray-800 hover:text-gray-600 transition-colors ${
                  activeSection === item.toLowerCase() ? "font-medium" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  )
}

export default Header

