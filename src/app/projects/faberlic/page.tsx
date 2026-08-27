import type { Metadata } from "next";
import { FaberlicCaseStudy } from "@/components/projects/FaberlicCaseStudy";

export const metadata: Metadata = {
  title: "Faberlic",
  description:
    "Кейс Faberlic: приложение для оформления заказов и управления бизнесом",
};

export default function FaberlicProjectPage() {
  return <FaberlicCaseStudy />;
}
