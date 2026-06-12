# ADDX Upsell — Framer Integration Kit

Since addxstudio.com runs on Framer, these are **native Framer code components** —
no embeds, no iframes, no external hosting. They render inside your existing site,
inherit your page scroll, and expose every brand decision as a property control.

## Install (per component, ~30 seconds)

1. In your Framer project: **Assets panel → Code → Create Code File**
2. Name it after the component (e.g. `AddxHero`), paste the file contents, save
3. Drag the component from Assets onto the page
4. Set width to **fill (1fr)** and height to **auto** (the components size themselves)

`framer-motion` and `framer` imports resolve natively inside Framer — nothing to install.

## Components

| File | What it is | Placement |
|------|-----------|-----------|
| `AddxHero.tsx` | Animated hero: staggered headline reveal, scroll-reactive 3D grid, parallax exit | Top of page, full-bleed |
| `AddxEcosystemLeak.tsx` | Scroll-scrubbed continuity diagram (sticky pin, 3 beats: signal → leak → sealed) | After hero |
| `AddxPackages.tsx` | Two-tier interactive pricing matrix with 3D tilt | After leak section |
| `AddxStatusBadge.tsx` | Pulsing "System Status: Active" chip | Inside your existing navbar |

Use your **existing Framer navbar and footer** — only add the status badge. The
"Book a Build" CTA should be your site's existing button style linking to `#packages`
or your booking page, so the page stays 100% on-brand.

## Matching your brand theme

Every component exposes the same token set in the properties panel:

- **Background / Panel / Accent / Text / Muted / Border** — color controls
- **Display font / Body font** — set these to the exact font names your Framer
  project already uses (Framer serves them; the components just reference the family)

Defaults are already matched to the live addxstudio.com theme: near-black base
`#02060C` with deep blue glow, cyan accent `#4FC4F8`, azure CTA `#2E7EF7`, white
sans headlines in sentence case with **italic serif accent words** (wrap a word in
`*asterisks*` in any headline control to style it). Set the serif accent font to
the serif your Framer project uses (defaults to Instrument Serif).

## Higgsfield loops

When Cinema Studio renders are ready, place them in Framer as a background video
layer behind `AddxHero` (Framer's native video supports loop/muted/inline), or ask
us to wire a scroll-scrubbed playhead variant.

## Note on the `/addx-upsell` Next.js app

The Next.js app in the parent folder is the standalone reference implementation of
the same page (useful for a dedicated funnel domain or A/B test off-platform). The
Framer kit is the integration path for addxstudio.com itself.
