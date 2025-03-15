import type React from "react"
import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"

interface Experience {
  title: string
  company: string
  period: string
  description: string
}

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Led development of scalable web applications using React and Node.js. Implemented CI/CD pipelines and mentored junior developers.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2018 - 2021",
    description:
      "Developed and maintained multiple client projects. Worked with various technologies including React, Vue.js, and Express.",
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    period: "2016 - 2018",
    description:
      "Assisted in the development of responsive websites. Gained experience in HTML, CSS, JavaScript, and PHP.",
  },
  {
    title: "Software Development Intern",
    company: "StartUp Innovators",
    period: "Summer 2015",
    description:
      "Contributed to the development of a mobile app. Learned about agile methodologies and collaborative coding practices.",
  },
]

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            MY JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-indigo-200">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-12 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute left-0 top-0 mt-1 -ml-[25px] w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 ml-6 transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-indigo-600 text-sm mb-2">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

