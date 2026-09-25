export type Project = {
  id: string;
  title: string;
  client: string;
  discipline: string;
  year: string;
  image: string;
  description: string;
  span?: string;
  tag?: string;
};

// Placeholder case studies. Swap `image` paths and copy with the designer's
// real work once you're building their actual site — this is just the demo.
export const projects: Project[] = [
  {
    id: "p1",
    title: "Kite & Coal",
    client: "Independent record label",
    discipline: "Brand identity",
    year: "2025",
    image: "/images/kiteandcool.jpg",
    description:
      "A visual identity built around contrast.. sharp type against soft, hand-set textures.",
  },
  {
    id: "p2",
    title: "Marrow Studio",
    client: "Architecture practice",
    discipline: "Web & print",
    year: "2024",
    image: "/images/marrow.jpg",
    description:
      "A restrained grid system that carries across the studio's site, signage, and stationery.",
  },
  {
    id: "p3",
    title: "Loose Thread",
    client: "Textile designer",
    discipline: "Packaging",
    year: "2024",
    image: "/images/boxpackagingmockup.jpg",
    description:
      "Packaging that reads as part of the product line, not a box it happens to ship in.",
  },
  {
    id: "p4",
    title: "Semilac",
    client: "Beauty & lifestyle brand",
    discipline: "Editorial & print",
    year: "2023",
    image: "/images/aleksandra-tanasienko-oQi_UdQDkzw-unsplash.jpg",
    description:
      "A bold print lookbook layout designed to make both photography and typography command the page.",
  },
  {
    id: "p5",
    title: "Nightjar",
    client: "Boutique hotel group",
    discipline: "Brand identity",
    year: "2023",
    image: "/images/hotebrandingmockup.jpg",
    description:
      "An identity quiet enough for a hotel lobby and distinct enough to remember after.",
  },
  {
    id: "p6",
    title: "Overtone",
    client: "Music production duo",
    discipline: "Motion & type",
    year: "2022",
    image: "/images/typographyposter.jpg",
    description:
      "A type system designed to move, built first for animation, then adapted to print.",
  },
];

export type Tier = {
  id: string;
  name: string;
  forWhom: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};

export const tiers: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    forWhom: "For getting a first real site live",
    price: "$20",
    features: [
      "3–4 pages: Home, Portfolio, About, Contact",
      "1 round of revisions",
      "1–2 week turnaround",
      "Mobile-responsive build",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    forWhom: "For designers ready to be found",
    price: "$100",
    features: [
      "6–8 pages, including individual case studies",
      "2 rounds of revisions",
      "Priority turnaround",
      "Domain & hosting setup included",
    ],
    highlighted: true,
  },
  {
    id: "elite",
    name: "Elite",
    forWhom: "For a fully bespoke site and ongoing support",
    price: "$200",
    features: [
      "Fully custom design, not adapted from a template",
      "Unlimited revisions during build",
      "3 months of updates & support included",
      "Self-serve dashboard to update your own work",
    ],
  },
];

export type SocialLink = {
  label: string;
  href: string;
};

// Placeholder handles — swap for HARDCODE's real profiles before sending
// this to anyone.
export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "WhatsApp", href: "#" },
  { label: "Facebook", href: "#" },
];
