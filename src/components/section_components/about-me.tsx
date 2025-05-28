import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, UserPlus, Award, BookOpen, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

const AboutMe: React.FC = () => {
  const stats = [
    {
      icon: BookOpen,
      value: "5+",
      label: "Years of Experience",
      description: "In Software Development",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Briefcase,
      value: "50+",
      label: "Projects Completed",
      description: "Across Various Industries",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Award,
      value: "15+",
      label: "Awards Received",
      description: "For Excellence in Development",
      gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
      icon: GraduationCap,
      value: "100%",
      label: "Client Satisfaction",
      description: "Based on Client Reviews",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
  ]

  const expertise = [
    { name: "Graphic Design", level: 95 },
    { name: "UI/UX Design", level: 90 },
    { name: "Brand Identity", level: 85 },
    { name: "Web Developer", level: 98 },
  ]

  return (
    // py-20 md:py-36 lg:py-44
    <section className="py-[114px] md:py-20 lg:py-[108px] bg-gradient-to-b from-white to-gray-50"> 
      <div className="container mx-auto px-4 lg:px-20">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block"
          >
            WHO AM I
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-gray-800 mx-auto"
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Image */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="relative">
                  <div className="relative z-10">
                    <img src="/images/profile3.jpg" alt="Profile" className="w-full h-auto rounded-lg shadow-lg" />
                  </div>
                  <div className="absolute top-2 -left-2 w-full h-full border-2 border-gray-800 rounded-lg z-0"></div>
                  <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-gray-100 rounded-full z-0"></div>
                </div>

                {/* Personal Info Card - Moved below image on mobile/tablet, beside image on desktop */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-6 p-6 bg-white rounded-lg border border-gray-100 shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-800">Age:</span>
                      <span className="text-gray-700">22</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-800">From:</span>
                      <span className="text-gray-700">Tanjay City, Philippines</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-8 space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold"
                >
                  Hello, I'm <span className="text-indigo-700">Cris Justine Oracion</span>
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  I'm a passionate Full Stack Engineer with 7 years of experience, dedicated to bringing creative
                  visions to life through visual storytelling.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3 justify-center lg:justify-start"
                >
                  <Button
                    size="default"
                    className="bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 transform hover:translate-y-[-2px] flex items-center shadow-lg"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                  <Button
                    size="default"
                    variant="outline"
                    className="border-2 border-gray-800 text-gray-800 hover:bg-gray-100 transition-all duration-300 transform hover:translate-y-[-2px] flex items-center shadow-sm"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Hire Me
                  </Button>
                </motion.div>
              </div>

              {/* Expertise Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold flex items-center gap-2 mb-6 justify-center lg:justify-start"
                >
                  <CheckCircle2 className="w-5 h-5 text-gray-800" />
                  My Expertise
                </motion.h4>
                <div className="grid gap-6 max-w-2xl mx-auto lg:mx-0">
                  {expertise.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 * index }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-gray-800 to-gray-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 * index }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto lg:mx-0">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      className={`p-4 text-center transition-all duration-300 border-0 shadow-md bg-gradient-to-br ${stat.gradient}`}
                    >
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                        <stat.icon className="w-8 h-8 mx-auto mb-3 text-gray-800" />
                        <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                        <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                        <div className="text-xs text-gray-600 mt-1">{stat.description}</div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

