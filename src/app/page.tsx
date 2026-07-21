import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Idea } from "@/components/sections/Idea";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { VerifiedRecord } from "@/components/sections/VerifiedRecord";
import { Pricing } from "@/components/sections/Pricing";
import { Trust } from "@/components/sections/Trust";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Idea />
      <HowItWorks />
      <Services />
      <VerifiedRecord />
      <Pricing />
      <Trust />
      <CtaBand />
    </>
  );
}
