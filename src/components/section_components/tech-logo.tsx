import type React from "react"
import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa"
import { SiTypescript, SiJavascript } from "react-icons/si"

interface TechLogoProps {
  icon: "react" | "node" | "javascript" | "typescript" | "aws" | "docker"
  className?: string
}

const iconComponents = {
  react: FaReact,
  node: FaNodeJs,
  javascript: SiJavascript,
  typescript: SiTypescript,
  aws: FaAws,
  docker: FaDocker,
}

const TechLogo: React.FC<TechLogoProps> = ({ icon, className }) => {
  const IconComponent = iconComponents[icon]
  return <IconComponent className={className} />
}

export default TechLogo

