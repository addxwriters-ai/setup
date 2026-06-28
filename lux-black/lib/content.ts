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
    // No suite number was present in the extracted data. Em-dash is an
    // editorial placeholder — replace with the real suite before publishing.
    suite: "Suite —",
    city: "Jersey City",
    region: "NJ",
    postal: "07302",
  },
  hours: "Reservations · 24 hours, 7 days",
} as const;

// Compliance / corporate registration block for the footer.
// NONE of these identifiers were present in the extracted data — they are
// structural placeholders pending official details from the business.
export const COMPLIANCE = {
  entity: "The Lux Black LLC", // verify legal entity name
  registration: "Reg. No. —", // pending: state filing / entity number
  jurisdiction: "Registered in New Jersey, USA", // verify
  taxId: "EIN —", // pending
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

// Offering names per the Phase 4 brief (elevated framing of the live site's
// service lines: Corporate / Airport / Chauffeur / Hourly).
export const SERVICES: Service[] = [
  {
    slug: "ma-corporate",
    index: "01",
    title: "M&A Season Corporate Transport",
    summary:
      "Dedicated fleet and standby chauffeurs for deal teams through earnings and M&A season — discreet, billable, and on call around the clock.",
    details: [
      "Dedicated deal-team accounts",
      "Standby & multi-stop coverage",
      "Consolidated corporate billing",
    ],
  },
  {
    slug: "airport-transfers",
    index: "02",
    title: "Airport Transfers",
    summary:
      "Flight-tracked arrivals and departures across EWR, JFK, LGA and TEB, with meet-and-greet at the terminal.",
    details: [
      "Real-time flight monitoring",
      "Complimentary wait time",
      "Curbside or terminal greeting",
    ],
  },
  {
    slug: "chauffeur-protocols",
    index: "03",
    title: "Executive Chauffeur Protocols",
    summary:
      "Vetted, trained chauffeurs operating to a fixed standard of privacy, punctuality, and presentation on every assignment.",
    details: [
      "NDA-bound chauffeurs",
      "Fixed service protocol",
      "Privacy guaranteed",
    ],
  },
  {
    slug: "hourly",
    index: "04",
    title: "Hourly & As-Directed",
    summary:
      "A chauffeur and vehicle at your disposal, for the hour or for the day, anywhere across the tri-state area.",
    details: [
      "Flexible itinerary",
      "Region-wide coverage",
      "Business or leisure",
    ],
  },
];

export const STATS: { value: string; label: string }[] = [
  { value: "2018", label: "Serving since" },
  { value: "24/7", label: "Concierge desk" },
  { value: "100%", label: "Vetted chauffeurs" },
  { value: "5★", label: "Standard, every ride" },
];
