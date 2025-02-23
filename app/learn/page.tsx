"use client"

import type React from "react"

import { useState } from "react"

interface Course {
  id: number
  title: string
  description: string
  level: string
  duration: string
  lessons: number
  image: string
  category: string
}

interface CourseContent {
  id: number
  title: string
  content: React.ReactNode
}

const CourseView = ({ course, onBack }: { course: Course; onBack: () => void }) => {
  const [currentLesson, setCurrentLesson] = useState(1)

  // Sample course content - in a real app, this would come from your backend
  const getLessonsForCourse = (courseId: number): CourseContent[] => {
    switch (courseId) {
      case 1: // HTML & CSS Fundamentals
        return [
          {
            id: 1,
            title: "Introduction to HTML",
            content: (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Getting Started with HTML</h3>
                <p className="text-gray-300">Learn the basic structure of HTML documents and essential elements.</p>
                <div className="bg-gray-800 p-4 rounded-md space-y-2">
                  <p className="text-gray-200">Key topics covered:</p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Document structure and DOCTYPE</li>
                    <li>HTML elements and attributes</li>
                    <li>Semantic HTML5 elements</li>
                    <li>Text formatting and links</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            id: 2,
            title: "CSS Basics",
            content: (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">CSS Fundamentals</h3>
                <p className="text-gray-300">Master the basics of styling with CSS selectors and properties.</p>
                <div className="bg-gray-800 p-4 rounded-md space-y-2">
                  <p className="text-gray-200">In this lesson:</p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>CSS selectors and specificity</li>
                    <li>Box model and layout</li>
                    <li>Colors and typography</li>
                    <li>Responsive design basics</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            id: 3,
            title: "Flexbox Layout",
            content: (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Modern Layouts with Flexbox</h3>
                <p className="text-gray-300">Create flexible and responsive layouts using CSS Flexbox.</p>
                <div className="bg-gray-800 p-4 rounded-md space-y-2">
                  <p className="text-gray-200">Topics covered:</p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Flex container properties</li>
                    <li>Flex item properties</li>
                    <li>Alignment and justification</li>
                    <li>Building common layout patterns</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            id: 4,
            title: "CSS Grid",
            content: (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Grid Layout System</h3>
                <p className="text-gray-300">Master two-dimensional layouts with CSS Grid.</p>
                <div className="bg-gray-800 p-4 rounded-md space-y-2">
                  <p className="text-gray-200">You will learn:</p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Grid container and items</li>
                    <li>Grid template areas</li>
                    <li>Grid positioning</li>
                    <li>Responsive grid layouts</li>
                  </ul>
                </div>
              </div>
            ),
          },
        ]
      case 2: // JavaScript Essentials
        return [
          {
            id: 1,
            title: "JavaScript Basics",
            content: (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Introduction to JavaScript</h3>
                <p className="text-gray-300">Learn the fundamentals of JavaScript programming.</p>
                <div className="bg-gray-800 p-4 rounded-md space-y-2">
                  <p className="text-gray-200">Core concepts:</p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Variables and data types</li>
                    <li>Operators and control flow</li>
                    <li>Functions and scope</li>
                    <li>Arrays and objects</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            id: 2,
            title: "DOM Manipulation",
            content: (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Working with the DOM</h3>
                <p className="text-gray-300">Understand how to interact with web pages using JavaScript.</p>
                <div className="bg-gray-800 p-4 rounded-md space-y-2">
                  <p className="text-gray-200">You will learn:</p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Selecting DOM elements</li>
                    <li>Modifying content and attributes</li>
                    <li>Event handling</li>
                    <li>Creating and removing elements</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            id: 3,
            title: "Async JavaScript",
            content: (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Asynchronous Programming</h3>
                <p className="text-gray-300">Master promises, async/await, and handling asynchronous operations.</p>
                <div className="bg-gray-800 p-4 rounded-md space-y-2">
                  <p className="text-gray-200">Topics covered:</p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Callbacks and promises</li>
                    <li>Async/await syntax</li>
                    <li>Error handling</li>
                    <li>Fetch API and AJAX</li>
                  </ul>
                </div>
              </div>
            ),
          },
        ]
      case 3: // React Development
        return [
          {
            id: 1,
            title: "React Fundamentals",
            content: (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Getting Started with React</h3>
                <p className="text-gray-300">Learn the core concepts of React development.</p>
                <div className="bg-gray-800 p-4 rounded-md space-y-2">
                  <p className="text-gray-200">Key concepts:</p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Components and JSX</li>
                    <li>Props and state</li>
                    <li>Component lifecycle</li>
                    <li>Event handling in React</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            id: 2,
            title: "Hooks in React",
            content: (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">React Hooks</h3>
                <p className="text-gray-300">Master the use of hooks for state and side effects.</p>
                <div className="bg-gray-800 p-4 rounded-md space-y-2">
                  <p className="text-gray-200">You will learn:</p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>useState and useEffect</li>
                    <li>Context and useContext</li>
                    <li>Custom hooks</li>
                    <li>Performance optimization</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            id: 3,
            title: "State Management",
            content: (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Managing Application State</h3>
                <p className="text-gray-300">Learn different approaches to state management in React.</p>
                <div className="bg-gray-800 p-4 rounded-md space-y-2">
                  <p className="text-gray-200">Topics covered:</p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Context API patterns</li>
                    <li>Redux fundamentals</li>
                    <li>State management best practices</li>
                    <li>Performance considerations</li>
                  </ul>
                </div>
              </div>
            ),
          },
        ]
      default:
        return []
    }
  }

  const lessons = getLessonsForCourse(course.id)

  return (
    <div className="min-h-screen bg-gray-900 rounded-lg p-6">
      <button onClick={onBack} className="mb-6 flex items-center text-indigo-400 hover:text-indigo-300">
        <span>← Back to Courses</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Lesson sidebar */}
        <div className="md:col-span-1 space-y-2">
          <h2 className="text-xl font-bold mb-4 text-white">{course.title}</h2>
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => setCurrentLesson(lesson.id)}
              className={`w-full text-left p-3 rounded-md transition-colors ${
                currentLesson === lesson.id ? "bg-indigo-900 text-indigo-200" : "hover:bg-gray-800 text-gray-300"
              }`}
            >
              {lesson.title}
            </button>
          ))}
        </div>

        {/* Lesson content */}
        <div className="md:col-span-3">
          <div className="bg-gray-900 p-6 rounded-lg">
            {lessons.find((lesson) => lesson.id === currentLesson)?.content}

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setCurrentLesson((curr) => Math.max(1, curr - 1))}
                disabled={currentLesson === 1}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 disabled:bg-gray-700 disabled:text-gray-500"
              >
                Previous Lesson
              </button>
              <button
                onClick={() => setCurrentLesson((curr) => Math.min(course.lessons, curr + 1))}
                disabled={currentLesson === course.lessons}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 disabled:bg-gray-700 disabled:text-gray-500"
              >
                Next Lesson
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LearnPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const courses: Course[] = [
    {
      id: 1,
      title: "HTML & CSS Fundamentals",
      description: "Master the basics of web development with HTML5 and CSS3",
      level: "Beginner",
      duration: "4 weeks",
      lessons: 24,
      image: "🎨",
      category: "Frontend Basics",
    },
    {
      id: 2,
      title: "JavaScript Essentials",
      description: "Learn modern JavaScript from scratch to advanced concepts",
      level: "Intermediate",
      duration: "6 weeks",
      lessons: 36,
      image: "📜",
      category: "JavaScript",
    },
    {
      id: 3,
      title: "React Development",
      description: "Build modern web applications with React",
      level: "Advanced",
      duration: "8 weeks",
      lessons: 48,
      image: "⚛️",
      category: "Frameworks",
    },
  ]

  const categories = ["All", "Frontend Basics", "JavaScript", "Frameworks", "Backend"]

  const filteredCourses =
    selectedCategory === "All" ? courses : courses.filter((course) => course.category === selectedCategory)

  if (selectedCourse) {
    return <CourseView course={selectedCourse} onBack={() => setSelectedCourse(null)} />
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Learning Paths</h1>
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md border transition-colors ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-900 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedCourse(course)}
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{course.image}</div>
                <h2 className="text-xl font-semibold text-white mb-2">{course.title}</h2>
                <p className="text-gray-300 mb-4">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm">{course.level}</span>
                  <span className="text-gray-400 text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{course.lessons} lessons</span>
                  <button
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedCourse(course)
                    }}
                  >
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
