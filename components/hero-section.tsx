"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Neural network animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Neural network nodes
    const nodes: {
      x: number
      y: number
      vx: number
      vy: number
      connections: number[]
    }[] = []

    // Create nodes
    const createNodes = () => {
      const nodeCount = Math.min(Math.floor(window.innerWidth / 100), 15)

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: [],
        })
      }

      // Create connections
      for (let i = 0; i < nodes.length; i++) {
        const connectionCount = Math.floor(Math.random() * 3) + 1
        for (let j = 0; j < connectionCount; j++) {
          let target
          do {
            target = Math.floor(Math.random() * nodes.length)
          } while (target === i)

          nodes[i].connections.push(target)
        }
      }
    }

    createNodes()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1

        // Draw connections
        for (const targetIndex of node.connections) {
          const target = nodes[targetIndex]

          // Calculate distance
          const dx = target.x - node.x
          const dy = target.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only draw if within range
          if (distance < canvas.width / 3) {
            // Calculate opacity based on distance
            const opacity = 1 - distance / (canvas.width / 3)

            // Draw line
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(target.x, target.y)
            ctx.strokeStyle = `rgba(0, 153, 255, ${opacity * 0.15})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 153, 255, 0.6)"
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 dark:from-gray-950 dark:to-black">
      {/* Neural network animation */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/images/veltrix-logo.png"
            alt="Veltrix Labs Logo"
            width={120}
            height={120}
            className="mx-auto mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-full"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="gradient-text">Veltrix Labs</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
        >
          Next-generation innovations from one lab.
          <br />
          <span className="font-semibold">Accelerate. Create. Dominate.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
            onClick={() => scrollToSection("careers")}
          >
            Join the Revolution
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-blue-500 text-blue-500 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50"
            onClick={() => scrollToSection("about")}
          >
            Explore Our Mission
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ArrowDown className="w-6 h-6 text-primary cursor-pointer" onClick={() => scrollToSection("about")} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
