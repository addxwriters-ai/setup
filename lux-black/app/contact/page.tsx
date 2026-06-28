import type { Metadata } from "next";
import { ContactView } from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Contact — The Lux Black",
  description: "Reserve a chauffeur or reach our 24/7 concierge desk.",
};

export default function ContactPage() {
  return <ContactView />;
}
