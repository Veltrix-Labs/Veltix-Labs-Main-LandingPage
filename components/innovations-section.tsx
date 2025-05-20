"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Cpu, Code, Activity, Cog, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InnovationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const innovations = [
    {
      title: "AI & LLM Products",
      description: "Advanced language models and AI-powered solutions that transform how we interact with technology.",
      icon: <Brain className="h-8 w-8 text-blue-400" />,
    },
    {
      title: "Multimodal AI Interfaces",
      description:
        "Unified AI systems that seamlessly understand and respond to text, voice, image, and video — enabling natural, human-like interaction across all digital mediums.",
      icon: <Globe className="h-8 w-8 text-blue-400" />,
    },
    {
      title: "Productivity Systems",
      description:
        "Intelligent workflows and systems designed to maximize efficiency and output for teams and individuals.",
      icon: <Cpu className="h-8 w-8 text-blue-400" />,
    },
    {
      title: "Developer Tools",
      description: "Cutting-edge tools and frameworks that empower developers to build better software, faster.",
      icon: <Code className="h-8 w-8 text-blue-400" />,
    },
    {
      title: "Health & Education Platforms",
      description:
        "Revolutionary platforms that enhance learning experiences and improve health outcomes through technology.",
      icon: <Activity className="h-8 w-8 text-blue-400" />,
    },
    {
      title: "Full-stack Automation",
      description: "End-to-end automation solutions that streamline processes and eliminate repetitive tasks.",
      icon: <Cog className="h-8 w-8 text-blue-400" />,
    },
  ]

  return (
    <div className="section-padding bg-gradient-to-b from-gray-950 to-gray-900 neural-bg">
      <div className="section-container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Innovations</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Pioneering the future through breakthrough technologies and revolutionary products.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovations.map((innovation, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover-card border-t-4 border-t-blue-500 bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <div className="flex items-center mb-2">{innovation.icon}</div>
                    <CardTitle className="text-white">{innovation.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-300">{innovation.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
