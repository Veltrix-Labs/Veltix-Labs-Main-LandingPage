"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Coins, Zap, Clock, Heart, Lightbulb } from "lucide-react"

export default function WhyJoinSection() {
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

  const reasons = [
    {
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      title: "100% Remote & Async",
      description: "Work from anywhere in the world on your own schedule.",
    },
    {
      icon: <Coins className="h-6 w-6 text-blue-400" />,
      title: "Equity-Driven Ownership",
      description: "Be a true owner with meaningful equity in what you build.",
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-400" />,
      title: "Bold Products, Zero Legacy Code",
      description: "Build innovative products from scratch with modern tech stacks.",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-400" />,
      title: "Startup-Scale Freedom & Velocity",
      description: "Move fast and make impactful decisions without bureaucracy.",
    },
    {
      icon: <Heart className="h-6 w-6 text-blue-400" />,
      title: "Work on What You Love",
      description: "Focus on projects that align with your passions and interests.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-blue-400" />,
      title: "Complete Freedom of Thought",
      description: "Your ideas matter and shape products here.",
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
              Why <span className="gradient-text">Join Us</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Be part of a visionary team building the future of technology.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md hover-card border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                </div>
                <p className="text-gray-300">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
