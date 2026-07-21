export const site = {
  name: "Shield Fire Compliance",
  shortName: "Shield",
  tagline: "Verified compliance. Zero conflict.",
  promise: "An independent check, not a fire company.",
  url: "https://www.shieldfirecompliance.com",
  email: "inspections@shieldfirecompliance.com",
  phone: "(212) 555-0148",
  phoneHref: "tel:+12125550148",
  coverage: "New York City · FDNY jurisdiction",
  description:
    "Independent, third-party inspection of sprinkler and standpipe systems under FDNY Certificates of Fitness. We inspect. We never repair. Every report is geo-tagged, timestamped, and filed the same day.",
} as const;

export const nav = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;
