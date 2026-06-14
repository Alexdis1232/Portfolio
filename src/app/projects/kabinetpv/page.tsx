import type { Metadata } from "next";
import { KabinetPvCaseStudy } from "@/components/projects/KabinetPvCaseStudy";

export const metadata: Metadata = {
  title: "Кабинет ПВ — Саша",
  description:
    "Кейс Кабинет ПВ: как редизайн сценария снял нагрузку сотрудникам на 75%",
};

export default function KabinetPvProjectPage() {
  return <KabinetPvCaseStudy />;
}
