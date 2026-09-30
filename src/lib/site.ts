export const site = {
  name: "Shield Fire Compliance",
  shortName: "Shield",
  tagline: "Verified compliance. Zero conflict.",
  promise: "An independent inspector, not a fire company.",
  url: "https://www.shieldfirecompliance.com",
  email: "inspections@shieldfirecompliance.com",
  phone: "(929) 412-1143",
  phoneHref: "tel:+19294121143",
  coverage: "Brooklyn · Queens · Manhattan",
  // FDNY Certificate of Fitness numbers (S-12 sprinkler, S-13 standpipe).
  s12: "93607281",
  s13: "93635076",
  description:
    "Monthly fire sprinkler and standpipe inspections in Brooklyn, Queens, and Manhattan by an FDNY Certificate of Fitness holder. Photo-verified report after every visit, no repairs sold. From $99 per month.",
} as const;

export const nav = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;
