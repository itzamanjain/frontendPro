import Image from "next/image";
import { HeroGeometric } from "./Hero";

function HeroContent() {
  return (
    <>
      <div className="">
        <HeroGeometric
          badge="Built for Developers"
          title1="Level Up"
          title2="Your Frontend Skills"
        />
      </div>
    </>
  );
}

export { HeroContent };

