/**
 * Shared CTA + interaction class strings (Round 3 polish).
 * Kept as literals so Tailwind's content scan picks them up.
 *
 * Background shifts slowly from obsidian to a stark metallic charcoal — the
 * "heavy" feel is reinforced by the long 700ms ease and the Magnetic wrapper.
 */

// Primary booking/contact buttons.
export const ctaPrimary =
  "inline-block border border-chrome bg-obsidian px-7 py-4 text-center font-sans text-xs uppercase tracking-[0.18em] text-ivory transition-colors duration-700 ease-out hover:bg-charcoal hover:border-platinum";

// Secondary / supporting buttons.
export const ctaSecondary =
  "inline-block border border-hairline bg-transparent px-7 py-4 text-center font-sans text-xs uppercase tracking-[0.18em] text-ash transition-colors duration-700 ease-out hover:bg-charcoal hover:text-ivory hover:border-hairline-strong";

// Card / block hover sheen (pairs with StaggerItem hover scale).
export const cardSheen =
  "edge-sheen relative hover:z-10 hover:bg-onyx/40";

// Smooth opacity fade for nav + footer text links.
export const linkFade =
  "transition-opacity duration-300 ease-out hover:opacity-60";
