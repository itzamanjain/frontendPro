"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Clock, EyeOff, Eye, PlayCircle, PauseCircle, MessageSquare, ThumbsUp } from "lucide-react";

interface Question {
  id: string;
  title: string;
  content: string;
  sampleUrl: string;
  tags: string[];
  successRate?: number;
  difficulty?: string;
  onlineUsers?: string;
  upvotes?: string;
  comments?: string;
  expectedTime?: string;
  submissions?: number;
}

const QuestionCard = ({ question }: { question: Question }) => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const [showHints, setShowHints] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Cleanup function to clear interval when component unmounts
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startTimer = () => {
    if (timerRunning) {
      // Stop the timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    } else {
      // Start the timer
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            if (timerRef.current) {
              clearInterval(timerRef.current);
            }
            setTimerRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    setTimerRunning(!timerRunning);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // Reset timer when it reaches 0
  useEffect(() => {
    if (timeLeft === 0) {
      setTimerRunning(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  }, [timeLeft]);

  return (
    <Card className="h-[100vh] bg-[#262626] border-none text-gray-50 rounded-none flex flex-col">
      <CardHeader className="p-4 ml-4 border-b border-gray-700">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">#{question.id}.</span>
              <CardTitle className="text-xl font-normal">{question.title}</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30">
                {question.difficulty}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{question.upvotes || "39"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>{question.comments || "55"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span>{question.onlineUsers || "45"} Online</span>
                </div>
              </div>
            </div>
          </div>
          <Button
            size="sm"
            onClick={startTimer}
            className="bg-blue-500/20 mr-4 text-blue-400 hover:bg-blue-500/30 border-none"
          >
            {timerRunning ? <PauseCircle className="mr-2 h-4 w-4" /> : <PlayCircle className="mr-2 h-4 w-4" />}
            <span className="text-sm font-medium">
              {formatTime(timeLeft)} {timerRunning ? "Remaining" : "Start"}
            </span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6 overflow-auto space-y-6">
        <div className="prose prose-invert max-w-none">
          <div className="whitespace-pre-wrap text-gray-300">{question.content}</div>
          <h2 className="mb-2">Sample Output</h2>
          <Image height={300} width={600} alt="sample output" src={question.sampleUrl} className="rounded-lg shadow-md" />
        </div>
        <div className="space-y-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowHints(!showHints)}
            className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            {showHints ? <Eye className="mr-2 h-4 w-4" /> : <EyeOff className="mr-2 h-4 w-4" />}
            {showHints ? "Hide Hints" : "Show Hints"}
          </Button>
          {showHints && (
            <div className="p-4 bg-gray-700/30 rounded-lg text-gray-300">
              <h3 className="font-medium mb-2">Hints:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Consider using backtracking to generate all possible sequences</li>
                <li>Start with the largest possible numbers to get lexicographically largest sequence</li>
                <li>Keep track of used numbers and their positions to validate distance constraints</li>
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;