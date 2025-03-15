import type React from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"

interface ServiceCardProps {
  Icon: LucideIcon
  title: string
  description: string
  color?: string
  delay?: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description, color = "gray-800", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Main Card */}
      <Card className="relative z-10 p-6 bg-white border-2 border-gray-100 rounded-xl transition-all duration-300 hover:-translate-y-2">
        <div className="relative z-10 space-y-4">
          <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center">
            <Icon className={`w-7 h-7 text-${color}`} />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </Card>

      {/* Decorative Elements */}
      <div className="absolute top-2 -right-2 w-full h-full border-2 border-gray-800 rounded-xl z-0 transition-all duration-300 group-hover:-translate-y-2"></div>
      <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-gray-50 rounded-full z-0 transition-all duration-300 group-hover:-translate-y-2"></div>
    </motion.div>
  )
}

export default ServiceCard

