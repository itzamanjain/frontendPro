import React from "react";
import {
  IconLink,
  IconUsers,
  IconBriefcase,
  IconPalette,
  IconTools,
  IconChartBar,
  IconArrowRight,
  IconCrown,
  IconShieldCheck,
  IconDeviceMobile,
  IconSettings,
} from "@tabler/icons-react";
import Link from "next/link";
import { Globe } from "../ui/cobe";
import { Code, BookOpen, MessageSquare, Target, Trophy, Timer, Boxes, Brain, Users } from "lucide-react";


const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

const features = [
  {
    title: "Real Interview Questions",
    description: "Practice with challenges inspired by actual frontend interviews from top tech companies",
    icon: <Target className="w-6 h-6" />,
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "Interactive Editor",
    description: "Code in a fully-featured editor with live preview and error checking",
    icon: <Code className="w-6 h-6" />,
    className: "md:row-span-2",
  },
  {
    title: "Learning Resources",
    description: "Access curated guides on frontend patterns and best practices",
    icon: <BookOpen className="w-6 h-6" />,
    className: "",
  },
  {
    title: "Community Solutions",
    description: "Learn from peers by exploring different approaches to the same problem",
    icon: <Users className="w-6 h-6" />,
    className: "lg:col-span-2",
  },
  {
    title: "Progress Tracking",
    description: "Monitor your improvement with detailed performance analytics",
    icon: <Trophy className="w-6 h-6" />,
    className: "",
  },
  {
    title: "Timed Challenges",
    description: "Practice under realistic interview conditions with timed coding sessions",
    icon: <Timer className="w-6 h-6" />,
    className: "md:col-span-2",
  },
];
export default function Bento() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-4xl font-bold flex flex-col items-center gap-2 text-center text-white bg-clip-text text-transparent">
              Features & Benefits
            </h2>
            <span className="text-sm max-w-xl text-center  text-gray-400">
              Discover the tools and resources to enhance your frontend development skills.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group overflow-hidden bg-black/20 backdrop-blur-sm rounded-xl p-8 hover:bg-black/30 transition-all duration-300 border border-neutral-800"
            >
              <div className="flex gap-2">
              <div className="mb-4">{feature.icon}</div>
              <h1 className="text-lg font-semibold mb-2">{feature.title}</h1>
              </div>
              <p className="text-sm text-gray-400">{feature.description}</p>
              
              <div
                className="md:bottom-[-29rem] left-[50%] group-hover:opacity-100 opacity-0 z-[-1] absolute 
                bg-gradient-to-t from-[#A6B5FC] to-[#FDA6B1]/20 blur-[6em] rounded-xl transition-all 
                translate-x-[-50%] duration-700 ease-out w-[10rem] md:w-[30rem] h-[20rem] 
                md:h-[30rem] rotate-[54deg]"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
