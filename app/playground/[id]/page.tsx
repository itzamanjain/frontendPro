"use client"
import Playground from "@/components/playground"
import { useParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { questions } from "@/lib/Question"
import { useState, useEffect } from "react"
import Image from "next/image"
import QuestionCard from "@/components/QuestionCard"

interface Question {
  id: string
  title: string
  content: string
  sampleUrl:string
  tags: string[]
  initialCode: {
    html: string
    css: string
    js: string
  }
}

const Page = () => {
  const { id } = useParams()
  const [question, setQuestion] = useState<Question>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    try {
      const foundQuestion = questions.find((q) => q.id.toString() === id) as Question | undefined
      if (!foundQuestion) {
        setError("Question not found")
      }
      setQuestion(foundQuestion)
    } catch (err) {
      setError("Error finding question")
    } finally {
      setIsLoading(false)
    }
  }, [id])

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">{error}</div>
  }

  if (!question) {
    return <div className="flex justify-center items-center min-h-screen">Question not found</div>
  }

  return (
    <div className="flex justify-center relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-4 z-10 h-12 w-6 rounded-r-lg bg-[#f3eeee] hover:bg-[#dfdcdc] border-none text-black"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </Button>

      <div className={`transition-all duration-300 ease-in-out ${isCollapsed ? "w-0 overflow-hidden" : "w-[32%]"}`}>
        <QuestionCard question={question} />
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-full" : "w-[68%]"
        } min-h-screen h-full flex-grow bg-[#f8f6f6]`}
      >
        <Playground selectedQuestion={question} />
      </div>
    </div>
  )
}

export default Page