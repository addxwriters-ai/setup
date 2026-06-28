import type { Metadata } from "next";
import { ServicesView } from "@/components/services/ServicesView";

export const metadata: Metadata = {
  title: "Services — The Lux Black",
  description:
    "Airport transfers, corporate travel, events, and hourly as-directed chauffeur service.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
