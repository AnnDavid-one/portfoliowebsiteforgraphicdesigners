# HARDCODE — Graphic Designer Portfolio Demo

A single-page pitch site to send to graphic designers, showing what a
HARDCODE-built portfolio site could look like. Static, no backend, no
uploads — built to sell the idea, not to be a live product.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (hero entrance animation)

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Before you send this to anyone

1. **Swap the placeholder images.** Everything in `public/images/` is an
   abstract SVG placeholder — replace `project-01.svg` through
   `project-06.svg` (and `hero-mark.svg`) with real photos (`.jpg`/`.png`/
   `.webp` work fine with `next/image`). Update the `image` paths in
   `lib/data.ts` to match. Keep new images close to a 4:5 ratio so the grid
   in `PortfolioShowcase.tsx` doesn't need layout changes.
2. **Update the mock case studies** in `lib/data.ts` — titles, clients,
   disciplines — to whatever you want to show, or leave them as
   placeholders if you're pitching this as a template rather than real work.
3. **Replace the social links** in `lib/data.ts` (`socialLinks`) — they're
   currently `#` placeholders.
4. **Check the contact details** in `components/CTASection.tsx` and
   `components/Footer.tsx` — they're pulled from your real HARDCODE contact
   info, so just confirm they're current before this goes out.
5. **Pricing tiers** live in `lib/data.ts` (`tiers`) — currently show
   "Contact for pricing" as the CTA text instead of numbers. Swap in real
   prices there if you decide to display them.

## A heads-up on dependencies

`npm audit` will flag Next.js 14.2.x for a batch of advisories — most cover
attack surfaces this static site doesn't use (custom servers, Server
Actions, i18n middleware, WebSocket upgrades). It's low-risk for a page
like this, but worth running `npm audit` and updating Next.js before using
this as a base for something with real user data or backend logic later.

## Deploying

Push to a GitHub repo and import it in Vercel, or run `vercel` from this
folder if you have the CLI installed. No environment variables are needed.
