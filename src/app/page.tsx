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
      <Hero />
      <Career />
      <Projects />
      <Concepts />
      <Tools />
      <PhotoCollage />
      <Contact />
    </>
  );
}
