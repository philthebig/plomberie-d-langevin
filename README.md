# Plomberie D.Langevin

Bilingual (FR default / EN toggle) marketing landing site for **Plomberie D.Langevin**, a local plumbing business in the Maniwaki / Outaouais area (819).

Phone (click-to-call everywhere): [819-449-0778](tel:+18194490778)

## Stack

- Next.js App Router (TypeScript)
- Tailwind CSS
- Client-side locale state (no i18n framework)
- Deployable on Vercel as a standard Next.js app

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). French is the default language. Use the **FR | EN** control in the header to switch all visible copy.

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Import this GitHub repository in [Vercel](https://vercel.com/new).
2. Framework preset: Next.js (defaults are fine).
3. Optional: set `NEXT_PUBLIC_SITE_URL` to the production origin (for example `https://example.com`) so Open Graph, JSON-LD, and sitemap URLs are absolute. If unset, Vercel’s deployment URL is used.

## Content notes

Facts used on the site are limited to what was provided:

- Business name, phone number, grayscale logo, and a soft Maniwaki / Outaouais (819) service-area framing
- **No** street address, hours, reviews, or 24/7 claims
- Urgent-need copy invites people to call without promising round-the-clock service
- The services list is marked **à confirmer / to be confirmed** with the owner

The official grayscale lockup lives in `public/logo.png` (header, footer, hero) and is also used for the favicon (`app/icon.png`) and social image (`public/og.png`). Navy (`#0B3D91`) is used for typography, navigation, and headers. Warm amber (`bg-amber-500` / `hover:bg-amber-600`) is reserved for primary click-to-call buttons.
