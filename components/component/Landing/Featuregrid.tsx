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

const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

const features = [
  {
    title: "Secure & Private",
    description:
      "Your data is encrypted and protected with the latest security protocols, ensuring maximum safety.",
    icon: "",
  },
  {
    title: "Mobile-Friendly",
    description:
      "Enjoy seamless access on the go with our fully optimized mobile experience across all devices.",
    icon: "",
  },
  {
    title: "Customizable Settings",
    description:
      "Tailor the platform to your preferences with advanced settings and personalization options.",
    icon: "",
  },
  {
    title: "Advanced Analytics",
    description:
      "Make data-driven decisions with our powerful analytics and insights dashboard.",
    icon: "",
  },
  {
    title: "Premium Support",
    description:
      "Get priority access to our support team with our premium plan, ensuring your issues are resolved quickly.",
    icon: "",
  },
  {
    title: "Available in Every Country",
    description:
      "Access our platform from anywhere in the world with our globally distributed network and localized support in multiple languages.",
    icon: <SkeletonFour />,
  },
];

export default function Bento() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-4xl font-bold flex flex-col items-center gap-2 text-center bg-gradient-to-r from-[#f7f7f7] to-[#2e2e2e] bg-clip-text text-transparent">
              Features & Benefits
            </h2>
            <span className="text-sm max-w-xl text-center font-semibold text-gray-400">
              Simplify crypto investing, trading, and portfolio management with
              cutting-edge tools designed for everyone—from beginners to pros.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group overflow-hidden bg-black/20 backdrop-blur-sm rounded-3xl p-8 hover:bg-black/30 transition-all duration-300 border border-neutral-800"
            >
              <h1 className="text-lg font-semibold mb-2">{feature.title}</h1>
              <p className="text-sm text-gray-400">{feature.description}</p>
              <div className="mb-4">{feature.icon}</div>
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
