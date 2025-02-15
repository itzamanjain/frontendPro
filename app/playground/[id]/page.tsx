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
  sampleUrl?:string
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
      <div 
        className={`transition-all   duration-300 ease-in-out ${
          isCollapsed ? 'w-0 overflow-hidden' : 'w-2/5'
        }`}
      >
        <QuestionCard question={question} />
      </div>
      
      

      <div 
        className={`transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-full' : 'w-3/5'
        } min-h-screen h-full flex-grow`}
      > 
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2/5 top-4 z-10 transform -translate-x-1/2"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight className="h-8 w-8" /> : <ChevronLeft className="h-8 w-8" />}
      </Button>
        <Playground selectedQuestion={question} />
      </div>
    </div>
  )
}

export default Page