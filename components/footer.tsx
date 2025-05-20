"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Image src="/images/veltrix-logo.png" alt="Veltrix Labs Logo" width={60} height={60} className="mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-8"
          >
            <h3 className="text-xl font-bold mb-2">Veltrix Labs</h3>
            <p className="text-gray-400">
              Next-generation innovations from one lab.
              <br />
              Accelerate. Create. Dominate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center mb-8"
          >
            <Mail className="h-5 w-5 text-blue-400 mr-2" />
            <a
              href="mailto:veltrixlabsforfuture@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              veltrixlabsforfuture@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-gray-500"
          >
            <p>© {currentYear} Veltrix Labs. All Rights Reserved.</p>
            <p className="mt-1">Built with 🔥 and 💡 by our minds.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
