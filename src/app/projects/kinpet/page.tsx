import type { Metadata } from "next";
import { KinpetCaseStudy } from "@/components/projects/KinpetCaseStudy";

export const metadata: Metadata = {
  title: "Kinpet",
  description:
    "Кейс Kinpet: увеличение конверсии на 8% в подбор питомца",
};

export default function KinpetProjectPage() {
  return <KinpetCaseStudy />;
}
