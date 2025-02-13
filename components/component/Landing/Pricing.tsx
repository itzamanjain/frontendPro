"use client";

import { Pricing } from "../ui/pricing";

const demoPlans = [
  {
    name: "FREE",
    price: "0",
    yearlyPrice: "0",
    period: "forever",
    features: [
      "10 practice problems",
      "Basic code editor",
      "Community solutions",
      "Public discussion access",
      "Basic progress tracking",
    ],
    description: "Perfect for beginners exploring frontend interviews",
    buttonText: "Get Started",
    href: "/problems",
    isPopular: false,
  },
  {
    name: "PRO",
    price: "29",
    yearlyPrice: "19",
    period: "per month",
    features: [
      "200+ practice problems",
      "Advanced code editor",
      "Official solution guides",
      "Interview-timer mode",
      "Performance analytics",
      "Premium learning resources",
      "Problem difficulty filters",
    ],
    description: "For developers serious about interview prep",
    buttonText: "Start Pro Plan",
    href: "/sign-up",
    isPopular: true,
  },
  {
    name: "TEAM",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [
      "Everything in Pro",
      "Team dashboard",
      "Mock interviews",
      "Custom problem sets",
      "Priority support",
      "Learning path creator",
      "Progress reports",
      "Team analytics",
    ],
    description: "Ideal for bootcamps and coding schools",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];

function PricingBasic() {
  return (
    <div className=" rounded-lg max-w-7xl mx-auto flex justify-center items-center">
      <Pricing
        plans={demoPlans}
        title="Simple, Transparent Pricing"
        description="Choose the plan that works for you All plans include access to our platform"
      />
    </div>
  );
}

export { PricingBasic };
