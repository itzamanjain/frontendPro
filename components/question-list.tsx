// "use client"
// import { useState } from "react"
// import { motion, AnimatePresence } from "motion/react"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Playground from "./playground"
// import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
// import { questions } from "@/lib/Question"

// export default function QuestionList() {
//   const [selectedTags, setSelectedTags] = useState<string[]>([])
//   const [selectedQuestion, setSelectedQuestion] = useState<(typeof questions)[0] | null>(null)
//   const [showQuestionPanel, setShowQuestionPanel] = useState(true)
//   const toggleTag = (tag: string) => {
//     setSelectedTags((prev) =>
//       prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
//     )
//   }
//   const handleSelectQuestion = (question: (typeof questions)[0]) => {
//     setSelectedQuestion(question)
//   }
//   const handleBack = () => {
//     setSelectedQuestion(null)
//   }
//   const handleCollapse = () => {
//     setShowQuestionPanel(!showQuestionPanel)
//   }
//   const filteredQuestions = questions.filter(
//     (question) =>
//       selectedTags.length === 0 || question.tags.some((tag) => selectedTags.includes(tag))
//   )
//   return (
//     <div className="flex w-full min-h-screen ">
//       {/* Collapse Button */}
//       <div className="flex items-start">
//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           {showQuestionPanel ? (
//             <ChevronLeft
//               className="w-8 h-8 cursor-pointer rounded-full bg-primary/10 text-primary p-1.5 hover:bg-primary/20 transition-colors"
//               onClick={handleCollapse}
//             />
//           ) : (
//             <ChevronRight
//               className="w-8 h-8 cursor-pointer rounded-full bg-primary/10 text-primary p-1.5 hover:bg-primary/20 transition-colors"
//               onClick={handleCollapse}
//             />
//           )}
//         </motion.div>
//       </div>
//       {/* Question Panel */}
//       <AnimatePresence mode="wait">
//         {showQuestionPanel && (
//           <motion.div
//             initial={{ x: -20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -20, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="w-2/5 bg-card rounded-lg overflow-hidden shadow-lg border"
//           >
//             <div className="h-full overflow-y-auto max-h-[calc(100vh-2rem)] p-6">
//               {selectedQuestion ? (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="flex items-center gap-2 mb-6">
//                     <Button 
//                       onClick={handleBack} 
//                       variant="ghost" 
//                       className="gap-2 text-muted-foreground hover:text-foreground"
//                     >
//                       <ArrowLeft className="w-4 h-4" />
//                       All Questions
//                     </Button>
//                   </div>
//                   <h2 className="text-2xl font-semibold mb-4 text-foreground">{selectedQuestion.title}</h2>
//                   <pre className="bg-muted/50 p-6 rounded-lg overflow-auto whitespace-pre-wrap text-sm text-foreground/90">
//                     {selectedQuestion.content}
//                   </pre>
//                 </motion.div>
//               ) : (
//                 <div>
//                   <div className="mb-8">
//                     <Badge variant="secondary" className="mb-3 text-xs font-medium">
//                       Browse Topics
//                     </Badge>
//                     <h2 className="text-3xl font-semibold tracking-tight">
//                       Featured Questions
//                     </h2>
//                   </div>
                  
//                   <div className="mb-8">
//                     <div className="flex flex-wrap gap-2">
//                       {["html", "css", "js", "react"].map((tag) => (
//                         <motion.div
//                           key={tag}
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                         >
//                           <Badge
//                             variant={selectedTags.includes(tag) ? "default" : "outline"}
//                             className={`cursor-pointer transition-all duration-200 text-sm px-4 py-1 ${
//                               selectedTags.includes(tag) 
//                                 ? 'bg-primary text-primary-foreground shadow-sm'
//                                 : 'hover:bg-primary/10'
//                             }`}
//                             onClick={() => toggleTag(tag)}
//                           >
//                             {tag.toUpperCase()}
//                           </Badge>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                   <motion.div
//                     className="space-y-4"
//                     initial="hidden"
//                     animate="visible"
//                     variants={{
//                       visible: {
//                         transition: {
//                           staggerChildren: 0.1
//                         }
//                       }
//                     }}
//                   >
//                     {filteredQuestions.map((question) => (
//                       <motion.div
//                         key={question.id}
//                         variants={{
//                           hidden: { opacity: 0, y: 20 },
//                           visible: { opacity: 1, y: 0 }
//                         }}
//                       >
//                         <Card
//                           className="cursor-pointer group card-hover-effect"
//                           onClick={() => handleSelectQuestion(question)}
//                         >
//                           <CardHeader className="p-6">
//                             <CardTitle className="text-xl font-medium leading-tight group-hover:text-primary transition-colors">
//                               {question.title}
//                             </CardTitle>
//                           </CardHeader>
//                           <CardContent className="px-6 pb-6">
//                             <p className="text-muted-foreground mb-4 line-clamp-2">
//                               {question.content}
//                             </p>
//                             <div className="flex flex-wrap gap-2">
//                               {question.tags.map((tag) => (
//                                 <Badge
//                                   key={tag}
//                                   variant="secondary"
//                                   className="text-xs font-medium px-2.5 py-0.5 bg-secondary/50"
//                                 >
//                                   {tag}
//                                 </Badge>
//                               ))}
//                             </div>
//                           </CardContent>
//                         </Card>
//                       </motion.div>
//                     ))}
//                   </motion.div>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {/* Playground Component */}
//       <div className="w-3/5 min-h-screen h-full flex-grow">
//         <Playground  selectedQuestion={selectedQuestion} />
//       </div>
//     </div>
//   )
// }