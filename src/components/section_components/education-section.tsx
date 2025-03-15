import { motion } from "framer-motion"
import { Book } from "lucide-react"

const educationData = [
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

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block">
            EDUCATION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Academic Journey</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-8 flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Book className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                <p className="text-gray-600 mb-1">{item.institution}</p>
                <p className="text-sm text-gray-500 mb-2">{item.year}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

