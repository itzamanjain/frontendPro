"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Clock, EyeOff, Eye, PlayCircle, PauseCircle } from "lucide-react";

interface Question {
  id: string;
  title: string;
  content: string;
  sampleUrl: string;
  tags: string[];
  successRate?: number;
  difficulty?: string;
  expectedTime?: string;
  submissions?: number;
}

const QuestionCard = ({ question }: { question: Question }) => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const [showHints, setShowHints] = useState(false);

  const startTimer = () => {
    setTimerRunning(true);
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setTimerRunning(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <Card className="h-[680px] bg-[#193549] border-none  text-gray-50 rounded-none flex flex-col">
      <CardHeader className="p-4 z-10 flex flex-row justify-between items-center flex-shrink-0">
        <div className="">
          <CardTitle className="text-xl font-normal font-serif  text-white">{question.title}</CardTitle>
          <div className="flex items-center space-x-2 mt-2">
            <Badge className="bg-green-600 font-normal text-white px-2.5 py-0.5">{question.difficulty}</Badge>
            <Badge className="bg-yellow-600 font-medium text-white px-2.5 py-0.5">Success Rate: {question.successRate}%</Badge>
          </div>
        </div>
        <div className="flex mr-6 items-center space-x-2">
          <Button size="sm" onClick={startTimer} disabled={timerRunning} className="text-blue-400 border-none">
            {timerRunning ? <PauseCircle /> : <PlayCircle />}
            <span className="text-sm text-blue-400 font-medium">
              {timerRunning ? formatTime(timeLeft) : "20:00"} {timerRunning ? "Remaining" : "Start"}
            </span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 overflow-y-auto flex-grow">
      
        <pre className="text-md text-gray-300 whitespace-pre-wrap">{question.content}</pre>
        <h2>Sample Output</h2>
        <Image height={300} width={600} alt="sample output" src={question.sampleUrl} className="rounded-lg shadow-md" />
        <div className="flex flex-wrap gap-2">
          {question.tags?.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-blue-600 font-normal text-white px-2.5 py-0.5">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
          <span>Expected Time: <span className="text-white font-medium">{question.expectedTime}</span></span>
          <span>Submissions: <span className="text-white font-medium">{question.submissions}</span></span>
        </div>
        <Button variant="outline" size="sm" onClick={() => setShowHints(!showHints)} className="text-black">
          {showHints ? <Eye className="mr-2 h-4 w-4" /> : <EyeOff className="mr-2 h-4 w-4" />}
          {showHints ? "Hide Hints" : "Show Hints"}
        </Button>
        {showHints && (
          <div className="p-4 text-gray-300">
            <h3 className="font-bold mb-2">Hints:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Practice, practice, practice</li>
              <li>Break down the problem into smaller steps</li>
              <li>Consider edge cases in your solution</li>
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
