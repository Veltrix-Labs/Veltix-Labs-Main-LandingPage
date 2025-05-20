"use client"

import { PinIcon } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ImportantBanner() {
  return (
    <Alert className="bg-blue-900/50 border-blue-500 rounded-md my-8">
      <div className="flex items-start">
        <PinIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
        <AlertDescription className="text-blue-100">
          <p className="font-semibold mb-2">📌 Note Before You Apply:</p>
          <p className="mb-2">We are not hiring job seekers looking for a 9–5 role.</p>
          <p>
            We are looking for passionate creators, builders, and innovators who want to grow with us, contribute
            meaningfully, and be a core part of Veltrix Labs' journey. If you're excited about solving real-world
            problems and building futuristic products, you're in the right place.
          </p>
        </AlertDescription>
      </div>
    </Alert>
  )
}
