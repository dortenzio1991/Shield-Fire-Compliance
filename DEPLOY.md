# Deploying Shield Fire Compliance

This is a standard Next.js (App Router) app. The smoothest host is **Vercel**
(made by the Next.js team, free tier is enough to launch). These steps take you
from the GitHub repo to a live site on your own domain.

---

## 1. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your **GitHub**
   account (`dortenzio1991`).
2. **Add New… → Project**, then import
   `dortenzio1991/Shield-Fire-Compliance`.
3. Vercel auto-detects Next.js — no build settings to change. Framework:
   `Next.js`, build command `next build`, output handled automatically.
4. Click **Deploy**. In ~1 minute you'll get a live URL like
   `shield-fire-compliance.vercel.app`.

After this, **every `git push` to `main` auto-deploys.** Pull requests get their
own preview URLs.

```bash
git add -A && git commit -m "your message" && git push
```

---

## 2. Connect a custom domain

1. Buy the domain (e.g. `shieldfirecompliance.com`) from any registrar —
   Cloudflare, Namecheap, Google Domains, etc.
2. In the Vercel project: **Settings → Domains → Add**, enter the domain.
3. Vercel shows the DNS records to add. Two common options:
   - **A record** `@ → 76.76.21.21`
   - **CNAME** `www → cname.vercel-dns.com`
   Add these at your registrar's DNS panel. SSL/HTTPS is issued automatically.
4. Propagation is usually minutes, occasionally up to a few hours.

### After the domain is live — update the site URL

The canonical URL lives in one place: [`src/lib/site.ts`](src/lib/site.ts).
It drives the sitemap, robots.txt, canonical tags, and Open Graph metadata.

```ts
// src/lib/site.ts
url: "https://shieldfirecompliance.com",   // ← set to your real domain
```

Commit and push; Vercel redeploys. Then confirm:

- `https://yourdomain.com/robots.txt` → should list your domain's sitemap
- `https://yourdomain.com/sitemap.xml` → URLs should use your real domain

---

## 3. Turn on Analytics

Vercel Analytics is already wired into the app (`<Analytics />` in
[`src/app/layout.tsx`](src/app/layout.tsx)). To activate it:

1. In the Vercel project → **Analytics** tab → **Enable**.
2. That's it — page-view data starts flowing after the next deploy. It's a
   no-op in local dev, so it won't affect `npm run dev`.

For richer product analytics later, you can add
[Vercel Web Analytics](https://vercel.com/docs/analytics) events or a tool like
Plausible / PostHog.

---

## 4. Submit to Google (get indexed)

1. Open [Google Search Console](https://search.google.com/search-console),
   add your domain as a property, and verify (Vercel supports the DNS TXT or
   HTML-tag method).
2. **Sitemaps → Add** `https://yourdomain.com/sitemap.xml`.

---

## Pre-launch checklist

Before pointing customers at the site:

- [ ] `src/lib/site.ts` — real domain, phone, and email (currently placeholders)
- [ ] Booking form (`src/components/BookingForm.tsx`) wired to a real inbox/CRM
      (see the `// TODO` — it currently validates and shows success but does not
      send anywhere)
- [ ] Login form (`src/components/LoginForm.tsx`) wired to real auth, **or** the
      "Client login" link hidden until the portal exists
- [ ] Pricing figures confirmed accurate (`$249` / `$179` in
      `src/components/sections/Pricing.tsx`)
- [ ] Open Graph share image added (metadata tags exist; the image does not yet)
- [ ] Privacy Policy / Terms pages (the forms collect names, emails, addresses)
- [ ] Favicon checked across browsers

## Local commands

```bash
npm install      # install dependencies
npm run dev      # local dev server → http://localhost:3000
npm run build    # production build (must pass before deploy)
npm run start    # serve the production build locally
npm run lint     # ESLint
```
