import { motion } from "framer-motion"

const TechStack: React.FC = () => {
  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "Docker",
    "AWS",
    "Git",
    "Tailwind CSS",
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech}
          className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-lg font-semibold text-gray-800">{tech}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default TechStack

