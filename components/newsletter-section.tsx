"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  return (
    <div className="section-padding bg-gradient-to-b from-gray-950 to-gray-900 neural-bg">
      <div className="section-container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg text-center border border-gray-700"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Stay Updated on Our <span className="gradient-text">Journey</span>
            </h2>

            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for updates on our launches and tech revelations.
            </p>

            {isSubmitted ? (
              <div className="flex items-center justify-center space-x-2 text-green-400">
                <Check className="h-5 w-5" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-gray-700 border-gray-600 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="h-4 w-4 mr-2" /> Subscribe
                    </span>
                  )}
                </Button>
              </form>
            )}

            <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
