"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function CareersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("engineering")

  // Google Form URL - Updated with the provided link
  const googleFormUrl = "https://forms.gle/39biYbeTuxBiRzcq9"

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

  const careers = {
    engineering: [
      {
        title: "Full Stack Engineer",
        skills: "React, Node.js, TypeScript, MongoDB, TailwindCSS",
        equity: "0.5–2%",
        remote: true,
      },
      {
        title: "AI/ML Engineer",
        skills: "Python, Transformers, LLMs, APIs, LangChain",
        equity: "0.5–2%",
        remote: true,
      },
      {
        title: "DevOps Engineer",
        skills: "CI/CD, Docker, GitHub Actions, Vercel/AWS",
        equity: "0.3–1%",
        remote: true,
      },
    ],
    design: [
      {
        title: "UI/UX Designer",
        skills: "Figma, Web Design Systems, Microinteractions",
        equity: "0.3–1.5%",
        remote: true,
      },
    ],
    research: [
      {
        title: "Creative Researcher",
        skills: "AI tools, tech trends, product analysis",
        equity: "0.3–1%",
        remote: true,
      },
    ],
  }

  const handleApplyClick = () => {
    window.open(googleFormUrl, "_blank")
  }

  return (
    <div className="section-padding bg-gradient-to-b from-gray-950 to-gray-900 neural-bg">
      <div className="section-container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Careers</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Join our team of visionaries and innovators. Equity-based roles for those who want to build the future.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10">
            <Tabs defaultValue="engineering" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-800">
                  <TabsTrigger value="engineering">Engineering</TabsTrigger>
                  <TabsTrigger value="design">Design</TabsTrigger>
                  <TabsTrigger value="research">Research</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="engineering" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {careers.engineering.map((job, index) => (
                    <JobCard key={index} job={job} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="design" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {careers.design.map((job, index) => (
                    <JobCard key={index} job={job} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="research" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {careers.research.map((job, index) => (
                    <JobCard key={index} job={job} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mt-10">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
              onClick={handleApplyClick}
            >
              <ExternalLink className="w-4 h-4 mr-2" /> Apply Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

function JobCard({ job }) {
  return (
    <Card className="hover-card h-full bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">{job.title}</CardTitle>
        <CardDescription>
          <div className="mt-2 flex items-center">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-200">
              {job.equity} Equity
            </span>
            {job.remote && (
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-200">
                Remote
              </span>
            )}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="text-sm font-medium text-gray-400 mb-2">Core Skills:</h4>
        <p className="text-gray-300 mb-4">{job.skills}</p>
      </CardContent>
    </Card>
  )
}
