import type { Metadata } from "next";
import { KinpetCaseStudy } from "@/components/projects/KinpetCaseStudy";

export const metadata: Metadata = {
  title: "Kinpet — Саша",
  description:
    "Кейс Kinpet: как мы повысили конверсию в подбор питомца на 25%",
};

export default function KinpetProjectPage() {
  return <KinpetCaseStudy />;
}
