"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lightbulb, Zap, Code } from "lucide-react"

export default function AboutSection() {
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
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="gradient-text">Veltrix Labs</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-xl mb-12 text-gray-300">
            A bold internal innovation lab crafting the future.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="prose prose-lg dark:prose-invert max-w-none mb-12 text-gray-300"
          >
            <p>
              Veltrix Labs is not just a company — it's an in-house innovation force building breakthrough digital
              products. We don't serve clients. We create revolutionary platforms, systems, and tools powered by
              emerging tech.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 p-6 rounded-lg shadow-md hover-card border border-gray-700"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-blue-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Innovative</h3>
              <p className="text-gray-300">
                Pushing boundaries with cutting-edge technology and forward-thinking solutions.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 p-6 rounded-lg shadow-md hover-card border border-gray-700"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Disruptive</h3>
              <p className="text-gray-300">
                Challenging the status quo to create revolutionary products that redefine industries.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 p-6 rounded-lg shadow-md hover-card border border-gray-700"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                  <Code className="w-6 h-6 text-blue-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Technical</h3>
              <p className="text-gray-300">
                Building with deep technical expertise and a passion for excellence in engineering.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
