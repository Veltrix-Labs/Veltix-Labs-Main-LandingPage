"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Check, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    resume: null,
    coverLetter: "",
  })
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type === "application/pdf") {
      setFormData((prev) => ({ ...prev, resume: file }))
    } else {
      setErrorMessage("Please upload a PDF file")
      setFormState("error")
      setTimeout(() => setFormState("idle"), 3000)
    }
  }

  const handleRoleChange = (value) => {
    setFormData((prev) => ({ ...prev, role: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.email || !formData.role || !formData.coverLetter) {
      setErrorMessage("Please fill in all required fields")
      setFormState("error")
      return
    }

    if (!formData.resume) {
      setErrorMessage("Please upload your resume")
      setFormState("error")
      return
    }

    setFormState("submitting")

    // In a real application, you would send this data to your server
    // For this demo, we'll simulate a successful submission
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate sending email
      console.log("Sending application email to veltrixlabsfornextgen@gmail.com")
      console.log("Subject: Application - " + formData.role + " - " + formData.name)
      console.log("From: " + formData.email)
      console.log("Cover Letter: " + formData.coverLetter)
      console.log("Resume attached: " + formData.resume?.name)

      setFormState("success")

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          role: "",
          resume: null,
          coverLetter: "",
        })
        setFormState("idle")
      }, 3000)
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.")
      setFormState("error")
    }
  }

  return (
    <div className="w-full">
      {formState === "success" ? (
        <Alert className="bg-green-50 dark:bg-green-900/20 border-green-500">
          <Check className="h-4 w-4 text-green-500" />
          <AlertTitle>Application Submitted!</AlertTitle>
          <AlertDescription>
            Thank you for your interest in joining Veltrix Labs. We'll review your application and get back to you soon.
          </AlertDescription>
        </Alert>
      ) : formState === "error" ? (
        <Alert className="bg-red-50 dark:bg-red-900/20 border-red-500 mb-4">
          <AlertCircle className="h-4 w-4 text-red-500" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      ) : null}

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
              disabled={formState === "submitting"}
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
              disabled={formState === "submitting"}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Select onValueChange={handleRoleChange} value={formData.role} disabled={formState === "submitting"}>
            <SelectTrigger>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Full Stack Engineer">Full Stack Engineer</SelectItem>
              <SelectItem value="AI/ML Engineer">AI/ML Engineer</SelectItem>
              <SelectItem value="UI/UX Designer">UI/UX Designer</SelectItem>
              <SelectItem value="DevOps Engineer">DevOps Engineer</SelectItem>
              <SelectItem value="Creative Researcher">Creative Researcher</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="resume">Resume (PDF)</Label>
          <div className="flex items-center gap-4">
            <Input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
              disabled={formState === "submitting"}
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById("resume")?.click()}
              className="w-full"
              disabled={formState === "submitting"}
            >
              <Upload className="mr-2 h-4 w-4" />
              {formData.resume ? formData.resume.name : "Upload Resume"}
            </Button>
          </div>
          <p className="text-xs text-gray-500">PDF format only, max 5MB</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="coverLetter">Cover Letter</Label>
          <Textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleInputChange}
            placeholder="Tell us why you're interested in this role and what you bring to the table..."
            rows={5}
            disabled={formState === "submitting"}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
          disabled={formState === "submitting"}
        >
          {formState === "submitting" ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </span>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </div>
  )
}
