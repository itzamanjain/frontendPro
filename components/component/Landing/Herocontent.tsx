import Image from "next/image";
import { HeroGeometric } from "./Hero";

function HeroContent() {
  return (
    <>
      <div className="">
        <HeroGeometric
          badge="Follw Me on X"
          title1="Your All in One"
          title2="Coding Companion"
        />
      </div>
    </>
  );
}

export { HeroContent };
