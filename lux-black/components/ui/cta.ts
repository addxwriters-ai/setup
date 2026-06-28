/**
 * Shared CTA + interaction class strings (Round 3 polish).
 * Kept as literals so Tailwind's content scan picks them up.
 *
 * Background shifts slowly from obsidian to a stark metallic charcoal — the
 * "heavy" feel is reinforced by the long 700ms ease and the Magnetic wrapper.
 */

// Primary booking/contact buttons. Full-width on mobile, auto from sm up.
export const ctaPrimary =
  "block w-full text-center border border-chrome bg-obsidian px-7 py-4 font-sans text-xs uppercase tracking-[0.18em] text-ivory transition-colors duration-700 ease-out hover:bg-charcoal hover:border-platinum sm:inline-block sm:w-auto";

// Secondary / supporting buttons. Full-width on mobile, auto from sm up.
export const ctaSecondary =
  "block w-full text-center border border-hairline bg-transparent px-7 py-4 font-sans text-xs uppercase tracking-[0.18em] text-ash transition-colors duration-700 ease-out hover:bg-charcoal hover:text-ivory hover:border-hairline-strong sm:inline-block sm:w-auto";

// Card / block hover sheen (pairs with StaggerItem hover scale).
export const cardSheen =
  "edge-sheen relative hover:z-10 hover:bg-onyx/40";

// Smooth opacity fade for nav + footer text links.
export const linkFade =
  "transition-opacity duration-300 ease-out hover:opacity-60";
