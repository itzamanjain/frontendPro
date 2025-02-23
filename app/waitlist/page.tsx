import React from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { CheckCircle, Zap, Calendar, LinkIcon } from "lucide-react"

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="flex justify-center mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-21%20152336-ZTKTdOI2XPV5RYWNbvX3QGCsAjbHja.png"
            alt="Recap AI Logo"
            width={200}
            height={50}
            priority
          />
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Automate Your Meeting Notes in Seconds</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Tired of long meetings & messy notes? Recap AI automatically records, transcribes, and summarizes your
            meetings—whether on Zoom, Google Meet, Slack, or even in-person meetings.
          </p>
        </div>

        {/* Waitlist Form */}
        <Card className="max-w-md mx-auto p-6 mb-12 border-orange-500/20">
          <form className="space-y-4">
            <h2 className="text-2xl font-semibold text-center mb-4">Join the Waitlist</h2>
            <Input name="email" type="email" placeholder="Enter your email" className="w-full" required />
            <Button type="submit" className="w-full bg-[#FF4500] hover:bg-[#FF4500]/90">
              🚀 Get Early Access
            </Button>
            <p className="text-sm text-muted-foreground text-center">Be the first to try Recap AI when we launch!</p>
          </form>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <Zap className="h-6 w-6 text-[#FF4500]" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">AI-Powered Summaries</h3>
              <p className="text-muted-foreground">
                Get concise meeting notes instantly with our advanced AI technology.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <Calendar className="h-6 w-6 text-[#FF4500]" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Works Everywhere</h3>
              <p className="text-muted-foreground">Support for virtual & in-person meetings across all platforms.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <CheckCircle className="h-6 w-6 text-[#FF4500]" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Action Items Detection</h3>
              <p className="text-muted-foreground">AI highlights key takeaways & tasks automatically.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <LinkIcon className="h-6 w-6 text-[#FF4500]" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Seamless Integrations</h3>
              <p className="text-muted-foreground">Syncs with Slack, Notion, Trello & more.</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="text-center mt-16">
          <p className="text-lg">
            <span className="font-semibold">Just $10/month/user</span>{" "}
            <span className="text-muted-foreground">(Cheaper than Otter & Fireflies!)</span>
          </p>
          <Button variant="link" className="mt-4 text-[#FF4500] hover:text-[#FF4500]/90">
            Book a Quick Demo →
          </Button>
        </div>
      </div>
    </div>
  )
}

export default page