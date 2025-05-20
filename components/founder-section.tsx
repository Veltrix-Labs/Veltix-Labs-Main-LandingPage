"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Linkedin, Github, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FounderSection() {
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
            Founder <span className="gradient-text">Section</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 rounded-lg shadow-lg overflow-hidden border border-gray-700"
          >
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-cyan-500 p-6 flex flex-col justify-center items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-4">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Ramu R"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Ramu R</h3>
                <p className="text-blue-100 text-center">Founder & Visionary</p>

                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://linkedin.com/in/ramu-r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-200 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/ramu-r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-200 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/ramu_r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-200 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="md:w-2/3 p-8">
                <h4 className="text-2xl font-bold mb-4 text-white">Vision-led and product-obsessed.</h4>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Ramu is a visionary entrepreneur with a passion for building innovative products that push the
                  boundaries of what's possible. With a background in technology and a keen eye for design, he leads
                  Veltrix Labs with a clear vision for the future.
                </p>

                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 mb-6">
                  "The future belongs to those who build it. At Veltrix Labs, we're not just predicting the future—we're
                  creating it."
                </blockquote>

                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-950/50 dark:text-blue-400 dark:border-blue-400"
                  onClick={() => (window.location.href = "mailto:veltrixlabsfornextgen@gmail.com")}
                >
                  Connect with Ramu
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
