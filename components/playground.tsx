"use client"

import { useState, useEffect } from "react"
import { cobalt2 } from "@codesandbox/sandpack-themes";
import { Sandpack } from "@codesandbox/sandpack-react"
import ReactMarkdown from "react-markdown"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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

interface PlaygroundProps {
  isFullWidth?: boolean
  selectedQuestion?: Question | null
} 

const defaultHtmlCode = `<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <div class="container">
        <h1>Hello World!</h1>
        <p>Welcome to the interactive playground!</p>
        <button id="colorButton">Change Color</button>
    </div>
</body>
</html>`

const defaultCssCode = `body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

.container {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

button {
    padding: 8px 16px;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0051a2;
}`

const defaultJsCode = `document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeead'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('h1').style.color = randomColor;
});`

export default function Playground({ isFullWidth, selectedQuestion }: PlaygroundProps) {
  const [htmlCode, setHtmlCode] = useState(selectedQuestion?.initialCode.html || defaultHtmlCode)
  const [cssCode, setCssCode] = useState(selectedQuestion?.initialCode.css || defaultCssCode)
  const [jsCode, setJsCode] = useState(selectedQuestion?.initialCode.js || defaultJsCode)
  // const [questionContent, setQuestionContent] = useState(selectedQuestion?.content || "")

  useEffect(() => {
    if (selectedQuestion) {
      setHtmlCode(selectedQuestion?.initialCode.html)
      setCssCode(selectedQuestion?.initialCode.css)
      setJsCode(selectedQuestion?.initialCode.js)
      // setQuestionContent(selectedQuestion?.content)
      console.log("selected question code ",htmlCode,cssCode,jsCode);
      
    }
  }, [selectedQuestion])

  return (
    
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full  rounded-lg">
          {/* <h2 className="text-2xl font-semibold mb-4">Preview</h2> */}
          <Sandpack
            template="static"
            theme={cobalt2}
            
            files={{
              "/index.html": htmlCode,
              "/style.css": cssCode,
              "/script.js": jsCode
            }}
            options={{
              showNavigator: false,
              wrapContent:true,
              // showConsole:true,
              editorWidthPercentage:60,
              showTabs: true,
              editorHeight: 580,
              showLineNumbers: true
            }}
          />
        </div>
      </div>
  
  )
}