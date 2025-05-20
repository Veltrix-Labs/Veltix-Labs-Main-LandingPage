"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Eye, Target } from "lucide-react"

export default function VisionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="section-padding bg-gradient-to-b from-gray-950 to-gray-900 neural-bg">
      <div className="section-container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Vision & Mission
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg hover-card border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To become the most inventive innovation lab producing next-gen digital ecosystems that shift the tech
                landscape.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg hover-card border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Design, build, and launch powerful AI-driven platforms and products that empower users and redefine the
                future.
              </p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-lg text-gray-400 italic">"We don't follow the future. We create it."</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
