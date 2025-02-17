"use client"

import LandingPage from "@/components/Landing"
import Landing from "@/components/Landing"
import Bento from "@/components/component/Landing/Featuregrid";
import { HeroContent } from "@/components/component/Landing/Herocontent";
import { PricingBasic } from "@/components/component/Landing/Pricing";
import { TestimonialsDemo } from "@/components/component/Landing/Testomonial";
import { Trusted } from "@/components/component/Landing/TrustedBy";
import { CardFooter } from "@/components/component/ui/card";
import Footer from '@/components/component/Landing/Footer'

export default function Home() {

  return (
    <div className="bg-black">
      <HeroContent />
      <Trusted />
      <Bento/>
      <TestimonialsDemo/>
      <PricingBasic/>
      <Footer />
    </div>
  )
}

