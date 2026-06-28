/*
 * THE LUX BLACK — Content layer
 *
 * Round 1 data layer. The live site (theluxblack.com) blocks automated
 * extraction (HTTP 403), so verified facts below were reconstructed from
 * search-engine–indexed snippets — see docs/content-source.md for provenance
 * and the fields still needing manual verbatim capture. Long-form marketing
 * copy remains placeholder until that pass. Migrate here without touching
 * component markup.
 */

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/fleet" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const BRAND = {
  name: "The Lux Black",
  mark: "LUX BLACK",
  tagline: "Private Chauffeur, Perfected",
  established: "EST. 2018",
} as const;

export const CONTACT = {
  // Verified from indexed live pages (docs/content-source.md). Email TBC.
  phone: "+1 (201) 238-3716",
  email: "concierge@theluxblack.com", // verify
  address: {
    line1: "356 Wayne Street",
    line2: "",
    city: "Jersey City",
    region: "NJ",
    postal: "07302",
  },
  hours: "Reservations · 24 hours, 7 days",
} as const;

export type Vehicle = {
  slug: string;
  name: string;
  klass: string;
  seats: number;
  luggage: number;
  blurb: string;
};

// Models verified from indexed pages; seat/luggage counts are standard-spec
// estimates pending confirmation (see docs/content-source.md).
export const FLEET: Vehicle[] = [
  {
    slug: "e-class-sedan",
    name: "Mercedes-Benz E-Class",
    klass: "Executive Sedan",
    seats: 3,
    luggage: 3,
    blurb:
      "The everyday standard for the discerning traveler. A sleek, hushed cabin for airport runs and city meetings alike.",
  },
  {
    slug: "s-class-sedan",
    name: "Mercedes-Benz S-Class",
    klass: "Luxury Sedan",
    seats: 3,
    luggage: 3,
    blurb:
      "The flagship saloon. Reclining rear suite, immaculate finish, and a presence that needs no announcement.",
  },
  {
    slug: "escalade-suv",
    name: "Cadillac Escalade",
    klass: "Luxury SUV",
    seats: 6,
    luggage: 6,
    blurb:
      "Commanding stature for groups and luggage-heavy transfers. Captain seating, elevated sightlines, generous hold.",
  },
];

export type Service = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  details: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "airport",
    index: "01",
    title: "Airport Transfers",
    summary:
      "Flight-tracked arrivals and departures with meet-and-greet at the gate.",
    details: [
      "Real-time flight monitoring",
      "Complimentary wait time",
      "Curbside or terminal greeting",
    ],
  },
  {
    slug: "corporate",
    index: "02",
    title: "Corporate Travel",
    summary:
      "Discreet, punctual transport for executives, boards, and visiting clients.",
    details: [
      "Dedicated account management",
      "Multi-stop itineraries",
      "Consolidated billing",
    ],
  },
  {
    slug: "events",
    index: "03",
    title: "Events & Galas",
    summary:
      "Red-carpet arrivals and coordinated logistics for the evening that matters.",
    details: [
      "Synchronized arrival timing",
      "On-call standby service",
      "Group coordination",
    ],
  },
  {
    slug: "hourly",
    index: "04",
    title: "Hourly & As-Directed",
    summary:
      "A chauffeur and vehicle at your disposal, for the hour or for the day.",
    details: [
      "Flexible itinerary",
      "City-wide coverage",
      "Privacy guaranteed",
    ],
  },
];

export const STATS: { value: string; label: string }[] = [
  { value: "11", label: "Years in service" },
  { value: "24/7", label: "Concierge desk" },
  { value: "100%", label: "Vetted chauffeurs" },
  { value: "5★", label: "Standard, every ride" },
];
