"use client"
import Playground from "@/components/playground"
import { useParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { questions } from "@/lib/Question"
import { useState, useEffect } from "react"


interface Question {
  id: string
  title: string
  content: string
  tags: string[]
  initialCode: {
    html: string
    css: string
    js: string
  }
}
const Page = () => {
  const { id } = useParams()
  console.log("checking type 🔥🔥🔥",typeof id);
  
  const [question, setQuestion] = useState<Question>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

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
    <div className="flex justify-center">
      <div className="w-2/5">
        <div className="transition-all duration-300 ease-in-out">
          <Card className="cursor-pointer group card-hover-effect">
            <CardHeader className="p-6">
              <CardTitle className="text-xl font-medium leading-tight group-hover:text-primary transition-colors">
                {question.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <pre className="text-muted-foreground mb-4 whitespace-pre-wrap">{question.content}</pre>
              <div className="flex flex-wrap gap-2">
                {question.tags?.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs font-medium px-2.5 py-0.5 bg-secondary/50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="w-3/5 min-h-screen h-full flex-grow">
        <Playground selectedQuestion={question} />
      </div>
    </div>
  )
}

export default Page