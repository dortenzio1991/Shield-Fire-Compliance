# Shield Fire Compliance

Marketing website for **Shield Fire Compliance** — an independent, third-party
fire-protection inspection company.

> **Verified compliance. Zero conflict.**
> _An independent check, not a fire company._

Shield performs independent inspections of sprinkler and standpipe systems under
FDNY Certificates of Fitness — and never performs the repairs it recommends.
That independence is the entire pitch, and it drives every design decision here:
the mono "on the record" data motif, the gold check, and the never-a-background
gold accent discipline.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**, `src/` directory
- **Tailwind CSS v3** with a custom theme (`tailwind.config.ts`)
- **Framer Motion** for subtle, reduced-motion-aware entrance animations
- **lucide-react** for icons
- Fonts via **`next/font/google`**, exposed as CSS variables

## Run & build

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build (passes with no TS/lint errors)
npm run start    # serve the production build
npm run lint     # ESLint
```

## Design tokens

Defined in [`tailwind.config.ts`](tailwind.config.ts). Gold is an **accent
only** — the check, CTAs, small highlights, and mono eyebrow labels — never a
background wash.

| Token        | Hex       | Tailwind class      | Usage                                             |
| ------------ | --------- | ------------------- | ------------------------------------------------- |
| Brand Navy   | `#15233F` | `navy`              | Primary — wordmark, shield, headlines, dark UI    |
| Deep Navy    | `#0B1730` | `deep-navy`         | Dark section backgrounds, app tiles, footer       |
| Verify Gold  | `#E0A33B` | `gold`              | Accent only — check, CTAs, highlights, eyebrows   |
| Paper        | `#F7F9FB` | `paper`             | Default page surface, light lockups               |
| Slate        | `#5B6472` | `slate`             | Body text, captions, secondary labels             |
| Hairline     | `#DCE0E8` | `hairline`          | Borders, dividers, table rules                    |

### CTA contrast

- **Primary** (`.btn-primary`): Verify Gold fill + Deep Navy text — WCAG AA.
- **Secondary solid** (`.btn-navy`): Brand Navy fill + Paper text.
- **Ghost** (`.btn-ghost`) and **on-dark** (`.btn-on-dark`) for lighter actions.

## Typography

Wired up in [`src/lib/fonts.ts`](src/lib/fonts.ts) and applied via CSS variables.

| Role              | Font            | Variable          | Tailwind    |
| ----------------- | --------------- | ----------------- | ----------- |
| Display / headings| Space Grotesk   | `--font-display`  | `font-display` |
| Body / text       | Hanken Grotesk  | `--font-body`     | `font-body` |
| Labels & data     | IBM Plex Mono   | `--font-mono`     | `font-mono` |

The mono "data readout" (e.g. `S-12 · 2026-06-30 · 09:42 · PASS`) is a signature
of the brand — used for eyebrow labels, section indices, timestamps, and record
metadata throughout.

## Logo

`src/components/Logo.tsx` — an inline SVG shield whose face is a checkmark
(shield = Brand Navy, check = Verify Gold), plus the **SHIELD** wordmark and a
**Fire Compliance** mono subline.

- `Logo` — full lockup with `variant="light"` / `variant="dark"`.
- `ShieldMark` — icon-only variant (used for the CTA band, mobile, and favicon).
- Favicon: [`src/app/icon.svg`](src/app/icon.svg).

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx            # root layout: fonts, metadata/OG, header + footer
│  ├─ page.tsx              # homepage (composes the sections below)
│  ├─ globals.css           # base styles + component utilities (.btn, .card, .eyebrow)
│  ├─ icon.svg              # favicon (shield mark)
│  ├─ sitemap.ts / robots.ts
│  ├─ how-it-works/ services/ pricing/ about/ book/ client-login/
├─ components/
│  ├─ Header.tsx  Footer.tsx  Logo.tsx  RecordCard.tsx
│  ├─ BookingForm.tsx  LoginForm.tsx     # client components w/ validation
│  ├─ motion/Reveal.tsx                  # reduced-motion-aware reveal helpers
│  ├─ ui/ (Container, Eyebrow, PageHero)
│  └─ sections/ (Hero, Problem, Idea, HowItWorks, Services,
│                 VerifiedRecord, Pricing, Trust, CtaBand)
└─ lib/ (site.ts, fonts.ts, cn.ts)
```

## Accessibility & SEO

- Semantic landmarks, ordered headings, `focus-visible` rings, WCAG AA contrast.
- `prefers-reduced-motion` respected in all Framer Motion helpers and smooth scroll.
- Per-page `metadata` with Open Graph + Twitter tags; `sitemap.xml` and
  `robots.txt` generated; `/client-login` is `noindex`.

## Notes

- The booking and login forms validate on the client and show a success state.
  The submit handlers are **stubbed** (see the `// TODO` in
  `BookingForm.tsx` / `LoginForm.tsx`) — wire them to a real endpoint / CRM /
  auth provider before launch.
- The original static HTML draft is preserved under `_old-mockup/` for reference
  and is not part of the app.
