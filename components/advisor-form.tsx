"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail } from "lucide-react"

export default function AdvisorForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = `Advisor/Suggestion - ${formData.topic}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    const mailtoLink = `mailto:ramuconnect45@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open email client
    window.location.href = mailtoLink
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="topic">Topic</Label>
          <Input
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleInputChange}
            placeholder="e.g., AI Innovation, Partnership Opportunity, etc."
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Your Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Share your ideas, suggestions, or how you'd like to collaborate with us..."
            rows={5}
            required
          />
        </div>

        <div className="text-sm text-gray-400 mb-4">
          <p>Clicking "Send Message" will open your email client with your message</p>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
        >
          <Mail className="mr-2 h-4 w-4" />
          Send Message
        </Button>
      </form>
    </div>
  )
}
