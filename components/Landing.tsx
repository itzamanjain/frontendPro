import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Layout, Zap, Trophy } from "lucide-react"
import type React from "react" // Import React

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
    
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-primary to-primary-foreground text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Master Frontend Development</h1>
            <p className="text-xl md:text-2xl mb-8">
              Practice, learn, and excel with our interactive coding challenges
            </p>
            <Button asChild size="lg">
              <Link href="/problems">Start Coding Now</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="py-16 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Code className="w-12 h-12 mb-4 text-primary" />}
                title="Interactive Coding"
                description="Write, run, and see your code in action with our live preview feature"
              />
              <FeatureCard
                icon={<Layout className="w-12 h-12 mb-4 text-primary" />}
                title="Responsive Design"
                description="Learn to create websites that look great on any device"
              />
              <FeatureCard
                icon={<Zap className="w-12 h-12 mb-4 text-primary" />}
                title="Instant Feedback"
                description="Get immediate results and improve your skills faster"
              />
            </div>
          </div>
        </section>

        <section id="challenges" className="py-16 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Our Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ChallengeCard
                title="Responsive Navbar"
                description="Create a navigation bar that adapts to different screen sizes"
                tags={["HTML", "CSS", "JavaScript"]}
              />
              <ChallengeCard
                title="Interactive Modal"
                description="Build a modal dialog with open/close functionality"
                tags={["HTML", "CSS", "JavaScript"]}
              />
              <ChallengeCard
                title="Dynamic Form Validation"
                description="Implement client-side form validation using JavaScript"
                tags={["HTML", "JavaScript"]}
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Frontend Skills?</h2>
            <p className="text-xl mb-8">
              Join thousands of developers who are leveling up their careers with our challenges
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/playground">Get Started for Free</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-background py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">FrontendChallenge</h3>
            <p className="text-muted-foreground">© 2023 All rights reserved</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="text-center">
      <CardHeader>
        <div className="flex justify-center">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function ChallengeCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="w-5 h-5 mr-2 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

