import FadeContent from "@/components/FadeContent";
import { Hero } from "@/components/sections/Hero";
import { PhotoCollage } from "@/components/sections/PhotoCollage";
import { Career } from "@/components/sections/Career";
import { Projects } from "@/components/sections/Projects";
import { Concepts } from "@/components/sections/Concepts";
import { Tools } from "@/components/sections/Tools";
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
      <Concepts />
      <FadeContent blur={true} duration={800} delay={500} initialOpacity={0}>
        <Tools />
      </FadeContent>
      <PhotoCollage />
      <Contact />
    </>
  );
}
