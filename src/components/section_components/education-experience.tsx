import type React from "react"
import { Book, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

interface Education {
  degree: string
  institution: string
  year: string
  description: string
}

interface Experience {
  title: string
  company: string
  period: string
  description: string
}

const educationData: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Example",
    year: "2018 - 2022",
    description: "Focused on software engineering and web development. Graduated with honors.",
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    institution: "Tech Academy",
    year: "2022",
    description: "Intensive 12-week program covering modern web technologies and best practices.",
  },
  {
    degree: "Machine Learning Specialization",
    institution: "Online Learning Platform",
    year: "2023",
    description: "Completed a series of courses on machine learning and artificial intelligence.",
  },
]

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
]

const EducationExperienceSection: React.FC = () => {
  return (
    <section id="education-experience" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            MY JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Experience</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Book className="w-6 h-6 mr-2 text-indigo-600" />
              Education
            </h3>
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-indigo-200 last:border-l-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute left-0 top-0 mt-1 -ml-2.5 w-5 h-5 rounded-full bg-indigo-500"></div>
                  <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
                    <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                    <p className="text-indigo-600 text-sm mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-3">{edu.year}</p>
                    <p className="text-gray-600 text-sm">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-indigo-600" />
              Experience
            </h3>
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-indigo-200 last:border-l-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute left-0 top-0 mt-1 -ml-2.5 w-5 h-5 rounded-full bg-indigo-500"></div>
                  <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
                    <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
                    <p className="text-indigo-600 text-sm mb-2">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationExperienceSection

