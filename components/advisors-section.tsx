"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Lightbulb, Mail } from "lucide-react"
import AdvisorForm from "./advisor-form"

export default function AdvisorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isFormOpen, setIsFormOpen] = useState(false)

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

  const handleDirectEmail = () => {
    window.location.href = "mailto:ramuconnect45@gmail.com?subject=Advisor/Suggestion"
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
            Open to <span className="gradient-text">Suggestions & Advisors</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Encourage innovators, technologists, visionaries to suggest ideas or collaborate in future.
          </motion.p>

          <motion.div variants={itemVariants} className="bg-gray-800/50 p-8 rounded-lg shadow-lg mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-blue-300" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">Have an Idea or Want to Advise?</h3>

            <p className="text-gray-300 mb-6">
              We're always looking for brilliant minds to collaborate with. Whether you have a groundbreaking idea or
              expertise to share, we'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                onClick={() => setIsFormOpen(true)}
              >
                Use Contact Form
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-950/50"
                onClick={handleDirectEmail}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Us Directly
              </Button>
            </div>
          </motion.div>

          {/* Advisor Form Dialog */}
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Share Your Ideas</DialogTitle>
                <DialogDescription>
                  Have a suggestion or want to advise? Fill out this form to compose an email.
                </DialogDescription>
              </DialogHeader>
              <AdvisorForm />
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </div>
  )
}
