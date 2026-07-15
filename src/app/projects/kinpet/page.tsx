import type { Metadata } from "next";
import { KinpetCaseStudy } from "@/components/projects/KinpetCaseStudy";

export const metadata: Metadata = {
  title: "Kinpet",
  description:
    "Кейс Kinpet: как мы повысили конверсию в подбор питомца на 8%",
};

export default function KinpetProjectPage() {
  return <KinpetCaseStudy />;
}
