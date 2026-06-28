# The Lux Black

Ultra-luxury, continuous-motion chauffeur service website.

> **3-Round Build System — currently ROUND 1 (Structure).**
> Round 1 is intentionally static: layout, grid rhythm, and typographic
> hierarchy only. **No animation, transition, hover, or scroll code.** The
> `motion` library is installed and reserved as the exclusive physics engine
> for a later round.

## Stack

| Concern    | Choice                                   |
| ---------- | ---------------------------------------- |
| Framework  | Next.js 16 (App Router) + React 19       |
| Styling    | Tailwind CSS v4 (CSS-first `@theme`)     |
| Animation  | [`motion`](https://motion.dev) — _installed, unused in Round 1_ |
| Fonts      | Fraunces (serif display) + Inter (sans)  |

## Design tokens

Tailwind v4 is configured CSS-first; the design token system lives in
[`app/globals.css`](./app/globals.css) under `@theme`:

- **Surfaces** — `obsidian`, `true-black`, `onyx`, `graphite` (dark-mode base)
- **Metallic accents** — `chrome`, `platinum`, `steel`, plus a static
  `.text-metallic` gradient text fill
- **Type** — `font-serif` (Fraunces) paired with `font-sans` (Inter)
- **Tracking** — editorial letter-spacing scale

## Structure

```
app/
  layout.tsx        Root shell (Header + Footer)
  globals.css       Tailwind v4 @theme design tokens
  page.tsx          Home
  fleet/page.tsx    Fleet
  services/page.tsx Services
  contact/page.tsx  Contact
components/
  layout/           Header, Footer, Container
  home/             Home sections (Hero, Stats, previews, CTA)
  ui/               Shared primitives (SectionLabel, PageHeader)
lib/
  content.ts        Placeholder copy/data — flagged for migration
```

## Content migration

`lib/content.ts` holds **placeholder** copy. The live site
(theluxblack.com) blocks automated extraction, so real copy, specs, and
imagery should be dropped into this single module in a later round — no
component markup needs to change.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```
