"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Clock, EyeOff, Eye, PlayCircle, PauseCircle } from "lucide-react"

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

const QuestionCard = ({ question }: { question: Question }) => {
    const [timerRunning, setTimerRunning] = useState(false)
    const [timeLeft, setTimeLeft] = useState(20 * 60) // 20 minutes in seconds
    const [showHints, setShowHints] = useState(false)

    const startTimer = () => {
        setTimerRunning(true)
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer)
                    setTimerRunning(false)
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)
    }

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
    }

    return (
        <Card className="h-[680px] bg-gradient-to-br border-none from-gray-900 to-gray-800 text-gray-50 shadow-xl flex flex-col">
            <CardHeader className="p-4 flex flex-row justify-between items-center flex-shrink-0">
                <CardTitle className="text-xl font-bold text-white">{question.title}</CardTitle>
                <div className="flex mr-6 items-center space-x-2">
                <Button
                        
                        size="sm"
                        onClick={startTimer}
                        disabled={timerRunning}
                        className="text-blue-400 border-none"
                    >
                            {timerRunning ? <PauseCircle /> : <PlayCircle />}
                    
                    {/* <Clock className="w-5 h-5 text-red-400" /> */}
                    <span className="text-sm text-blue-400 font-medium">{timerRunning ? formatTime(timeLeft) : "20:00"} {timerRunning ? "Remaining" : "Start"}</span>
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4 overflow-y-auto flex-grow">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap bg-gray-700 p-4 rounded-md">{question.content}</pre>
                <Image height={300} width={600} alt="sample output" src="/dashboard.png" className="rounded-lg shadow-md" />
                <div className="flex flex-wrap gap-2">
                    {question.tags?.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-blue-600 text-white px-2.5 py-0.5">
                            {tag}
                        </Badge>
                    ))}
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowHints(!showHints)}
                    className="text-blue-400  hover:text-blue-300"
                >
                    {showHints ? <Eye className="mr-2 h-4 w-4" /> : <EyeOff className="mr-2 h-4 w-4" />}
                    {showHints ? "Hide Hints" : "Show Hints"}
                </Button>
                {showHints && (
                    <div className="p-4 bg-gray-700 text-gray-300">
                        <h3 className="font-bold mb-2">Hints:</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Practice, practice, practice</li>
                            <li>Break down the problem into smaller steps</li>
                            <li>Consider edge cases in your solution</li>
                        </ul>
                    </div>
                )}
                
                
                <div className="text-sm text-gray-400">
                    Submission Details: <span className="font-medium text-white">Due in 2 days</span>
                </div>
            </CardContent>
            
        </Card>
    )
}

export default QuestionCard