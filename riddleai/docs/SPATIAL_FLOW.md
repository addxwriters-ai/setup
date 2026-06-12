# RIDDLEAI — Spatial Flow Architecture v1
**Scroll-driven cinematic landing page · getriddle.ai**
Derived from: *RiddleAI Launch Film Creative Bible* (Territory A — The Oracle Problem · Revelation Arc · Mythic VO register)

---

## Governing Concept

The page is the launch film, re-cut for scroll. The four Mythic title cards become the four
sections — scroll position replaces the edit timeline. The Revelation Arc (Chaos → Clarity →
Power) governs pacing: long, still pins early; velocity earned in the middle; absolute stillness
at the end.

**The locked character:** a single glowing probability orb — `71%` — is the persistent element
across all four sections. It is the first thing seen (zero context, per the "non-negotiable
opening" production note) and it survives every transition, morphing in scale and role:
mystery → data point → Edge Score → resolved truth. In Higgsfield, this orb is the
character-locked subject across all generated loops; in the DOM it is a single shared element
that FLIP-morphs between sections so video and UI never disagree about where it is.

---

## Section Architecture

### S1 — THE NUMBER (Hero · "The crowd is never wrong about the present.")
| | |
|---|---|
| **Visual concept** | Probability Pulse (Bible §04-01) |
| **Background loop** | HF-L1 — glowing 71% orb hovering over a defocused institutional facade at dusk (Fed-like building, bokeh). Slow push-in. |
| **Higgsfield spec** | Cinema Studio · 85mm prime, f/1.4 shallow DOF · dolly-in 5% over loop · character lock: ORB · 8s seamless · 3840×2160 |
| **Scroll behavior** | Section pinned ~150vh. Orb stays dead-center (it IS the pin). Title card 1 fades in word-by-weighted-word (Bible §08-04: words land with intention, no typing cursor). Nav and wordmark absent for first viewport — the number earns the brand. |
| **UI overlay** | None except the line and a hairline scroll cue. No header until scroll begins (Tesla drape principle). |
| **Exit transition** | Orb shrinks and locks to top-right corner as a persistent HUD element; background defocuses to black. |

### S2 — THE CROWD (Chaos → Constellation · "They are rarely wrong about the near future.")
| | |
|---|---|
| **Visual concept** | The Constellation (§04-06) + information-overload open (§06, 0:04–0:12) |
| **Background loop** | HF-L2 — camera glides through hundreds of market-nodes pulsing at different brightnesses; a starling-murmuration pass in the far field (the metaphor layer, §05). |
| **Higgsfield spec** | Cinema Studio · 24mm wide · floating dolly glide, slight roll · parallax depth layers · character lock: same ORB visible as the brightest node · 10s seamless |
| **Scroll behavior** | Scrub-driven: scroll velocity drives a chyron/headline cascade (DOM elements, not baked into video) that flies past and *decays* — chaos legible, not loud. As the user keeps scrolling, the cascade thins and the constellation resolves. Title card 2 lands at the stillness point. |
| **UI overlay** | Ghost-market proof strip: three real resolved events with semi-transparent probability curves that moved *before* the headline (Bible §04-05 — retrospective proof beats prospective promise). |
| **Exit transition** | Camera (scroll-scrubbed) dives toward the brightest node — match-cut into S3. |

### S3 — THE CONVERGENCE (Product reveal · "The question is: can you see what they already know?")
| | |
|---|---|
| **Visual concept** | Data Confluence (§08-02) + Edge Score Reveal (§08-03) |
| **Background loop** | HF-L3 — three particle rivers (distinct color/texture per platform: Kalshi / Polymarket / Limitless) converging into one structured stream. Aggregation as physics. |
| **Higgsfield spec** | Cinema Studio · 35mm anamorphic, gentle 30° camera arc · particles resolve into structured data, never random mixing · character lock: ORB rides the convergence point · 8s seamless |
| **Scroll behavior** | Pinned ~250vh, scroll scrubs the convergence. At merge point, the product UI **builds in layers**: consensus pricing → alerts → AI briefing text (weighted word-landing) → finally the Edge Score: counts 0→87, **pauses before landing** — a verdict forming, not a loader (§08-03). The orb morphs into the Edge Score. UI renders last; the score is the product, not the container. |
| **UI overlay** | Interactive market card the user can hover/tilt (amber = high edge, cool blue = low volatility, per §08-01 palette). Feature row: Edge Scores · AI Briefings · Real-time Alerts · One view. |
| **Exit transition** | Hard cut to black. One full beat of empty scroll (the "silence" of §09 Step 1). |

### S4 — THE LOCKUP (End card · "RiddleAI.")
| | |
|---|---|
| **Visual concept** | App Store Ending sequence, executed exactly per Bible §09 |
| **Background loop** | HF-L4 — static frame. **No camera movement** (end-card rule). Near-black with sub-perceptual data-hum grain texture. 6s. |
| **Scroll behavior** | Pinned. Scroll advances the five lockup steps in order: (1) black + silence-beat → (2) wordmark fades in, white on black, no animation on the mark itself → (3) tagline rises: *Prediction market intelligence.* — equal weight → (4) both store badges **appear** simultaneously: no bounce, no entrance choreography → (5) getriddle.ai fades at base. A destination, not a CTA. |
| **Forbidden** | "Available now" / "Download today" language. Badge animation. Anything that performs. |

---

## Cross-Section Systems

- **Scroll engine:** Lenis smooth scroll + GSAP ScrollTrigger; every section pinned, video loops scroll-scrubbed or ambient-looping with scrubbed overlays. Total scroll depth ≈ 900vh.
- **Character lock (web side):** one orb element, FLIP-morphed across section boundaries; its position in each Higgsfield loop is composition-locked to agreed safe coordinates so DOM and video never fight.
- **Pacing law (Bible §07):** nothing moves fast before 20% scroll depth. Velocity peaks mid-S2, decays through S3, S4 is still. Remove the music and the edit still works → remove the video loops and the scroll narrative still works (loops are progressive enhancement with poster-frame fallbacks).
- **Sound (optional, user-initiated):** muted by default; a single restrained toggle enables the sub-threshold data layer — market ticks, low alert chimes. No swells. Resolves to silence at S4.
- **Performance budget:** loops served as AV1/H.265 ≤ 6MB each, poster-first, lazy beyond S1; 60fps interaction floor; `prefers-reduced-motion` collapses to the title-card stills.

## Higgsfield Asset Manifest (to generate after layout approval)

| ID | Lens / physics | Camera | Lock | Duration |
|----|----------------|--------|------|----------|
| HF-L1 | 85mm f/1.4, shallow DOF | 5% dolly-in | Orb, center | 8s loop |
| HF-L2 | 24mm wide | floating glide + micro-roll | Orb = brightest node | 10s loop |
| HF-L3 | 35mm anamorphic | 30° arc | Orb at convergence | 8s loop |
| HF-L4 | 50mm, static | **none** | — | 6s loop |

---
*Status: awaiting spatial flow approval. No core codebase written.*
