/** Shape of public/content.json — the single, cPanel-editable content source. */

export type NavItem = { label: string; href: string };
export type CtaLink = { label: string; href: string };
export type Segment = { text: string; metallic: boolean };

export type Brand = {
  name: string;
  mark: string;
  tagline: string;
  established: string;
};

export type Hero = {
  eyebrow: string;
  heading: Segment[];
  intro: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
};

export type Stat = { value: string; label: string };

export type Service = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  details: string[];
};

export type ServicesBlock = {
  eyebrow: string;
  index: string;
  heading: string;
  previewCta: string;
  intro: string;
  items: Service[];
};

export type Vehicle = {
  slug: string;
  name: string;
  klass: string;
  seats: number;
  luggage: number;
  blurb: string;
  video: string;
};

export type FleetBlock = {
  eyebrow: string;
  index: string;
  heading: string;
  previewCta: string;
  intro: string;
  items: Vehicle[];
};

export type Experience = { index: string; label: string; body: Segment[] };

export type ClosingCta = {
  heading: Segment[];
  body: string;
  primary: CtaLink;
};

export type Contact = {
  phone: string;
  email: string;
  address: {
    line1: string;
    suite: string;
    city: string;
    region: string;
    postal: string;
  };
  hours: string;
  page: { eyebrow: string; index: string; title: string; intro: string };
  form: { name: string; email: string; details: string; submit: string };
  labels: { concierge: string; office: string; hours: string };
};

export type Compliance = {
  entity: string;
  registration: string;
  jurisdiction: string;
  taxId: string;
};

export type Footer = {
  exploreLabel: string;
  conciergeLabel: string;
  officeLabel: string;
  rights: string;
  complianceLabels: {
    entity: string;
    registration: string;
    taxId: string;
    jurisdiction: string;
  };
};

export type SiteContent = {
  brand: Brand;
  nav: NavItem[];
  media: { heroVideo: string };
  hero: Hero;
  stats: Stat[];
  services: ServicesBlock;
  fleet: FleetBlock;
  experience: Experience;
  closingCta: ClosingCta;
  contact: Contact;
  compliance: Compliance;
  footer: Footer;
};
