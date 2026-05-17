import FadeContent from "@/components/FadeContent";
import { Hero } from "@/components/sections/Hero";
import { Career } from "@/components/sections/Career";
import { Projects } from "@/components/sections/Projects";
import { Concepts } from "@/components/sections/Concepts";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <FadeContent blur={true} duration={800} delay={100} initialOpacity={0}>
        <Hero />
      </FadeContent>
      <FadeContent blur={true} duration={800} delay={200} initialOpacity={0}>
        <Career />
      </FadeContent>
      <FadeContent blur={true} duration={800} delay={300} initialOpacity={0}>
        <Projects />
      </FadeContent>
      <FadeContent blur={true} duration={800} delay={400} initialOpacity={0}>
        <Concepts />
      </FadeContent>
      <FadeContent blur={true} duration={800} delay={500} initialOpacity={0}>
        <Contact />
      </FadeContent>
    </>
  );
}
