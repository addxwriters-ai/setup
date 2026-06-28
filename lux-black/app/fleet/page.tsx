import type { Metadata } from "next";
import { FleetView } from "@/components/fleet/FleetView";

export const metadata: Metadata = {
  title: "The Fleet — The Lux Black",
  description:
    "Executive sedans, luxury SUVs, executive vans, and ultra-luxury saloons.",
};

export default function FleetPage() {
  return <FleetView />;
}
