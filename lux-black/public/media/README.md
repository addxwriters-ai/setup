# Media assets (cPanel-editable)

All copy and media paths live in **`public/content.json`** and can be edited
directly via the cPanel File Manager after deployment — the site re-fetches the
JSON on the client, so changes appear without a rebuild.

## Video files

| File              | Used by                     | Notes                                  |
| ----------------- | --------------------------- | -------------------------------------- |
| `hero-loop.mp4`   | Hero backdrop (`media.heroVideo`) | Dark, slow, seamless loop (H.264).     |
| Fleet loops       | Each `fleet.items[].video`  | Per-vehicle loops.                     |

**Current state:** the fleet cards reuse `hero-loop.mp4` as a placeholder so the
video architecture is live. Drop real per-vehicle clips into this folder (e.g.
`fleet/e-class.mp4`) and point each `fleet.items[].video` path at them in
`content.json`.

Guidance: keep clips dark and slow (they sit under a dark overlay / on obsidian),
~6–12s seamless loops, 1080p, target < 3–4 MB each for fast first paint.
Until a referenced file exists, its container shows solid graphite/obsidian —
the layout never breaks on a missing asset.
