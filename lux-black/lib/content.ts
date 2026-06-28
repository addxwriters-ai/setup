/*
 * THE LUX BLACK — Content layer
 *
 * NOTE: This is structured PLACEHOLDER copy for Round 1 layout scaffolding.
 * The live site (theluxblack.com) blocks automated extraction, so values below
 * are stand-ins shaped to the real information architecture. Migrate verbatim
 * content/imagery here in a later round without touching component markup.
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
  established: "EST. 2014",
} as const;

export const CONTACT = {
  phone: "+1 (000) 000-0000",
  email: "concierge@theluxblack.com",
  address: {
    line1: "000 Placeholder Avenue",
    line2: "Suite 00",
    city: "City",
    region: "ST",
    postal: "00000",
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

export const FLEET: Vehicle[] = [
  {
    slug: "obsidian-sedan",
    name: "Mercedes-Benz S-Class",
    klass: "Executive Sedan",
    seats: 3,
    luggage: 3,
    blurb:
      "The benchmark of the executive transfer. Hushed cabin, reclining rear suite, and a presence that needs no announcement.",
  },
  {
    slug: "noir-suv",
    name: "Cadillac Escalade",
    klass: "Luxury SUV",
    seats: 6,
    luggage: 6,
    blurb:
      "Commanding stature for groups and airport runs alike. Captain seating, elevated sightlines, generous hold.",
  },
  {
    slug: "midnight-sprinter",
    name: "Mercedes-Benz Sprinter",
    klass: "Executive Van",
    seats: 12,
    luggage: 12,
    blurb:
      "A private lounge in motion. Conference seating, ambient cabin, and room for the entire party and its cargo.",
  },
  {
    slug: "phantom-saloon",
    name: "Rolls-Royce Ghost",
    klass: "Ultra Luxury",
    seats: 3,
    luggage: 2,
    blurb:
      "Reserved for the singular occasion. The quietest cabin on the road, finished to a standard that speaks for itself.",
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
