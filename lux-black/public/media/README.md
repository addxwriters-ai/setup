# Hero media assets

The Round 2 hero (`components/home/HeroMedia.tsx`) expects the compressed
**Kling AI loop** to live here:

| File              | Required | Purpose                                  |
| ----------------- | -------- | ---------------------------------------- |
| `hero-loop.mp4`   | yes      | Primary background loop (H.264)          |
| `hero-loop.webm`  | optional | Smaller/modern codec, tried first        |
| `hero-poster.jpg` | optional | First-frame poster shown before playback |

Guidance for a restrained, cinematic feel:
- Keep it dark and slow — it sits under a `bg-true-black/55` overlay.
- ~6–12s seamless loop, 1080p, target < 3–4 MB (mp4) for fast first paint.
- No hard cuts; the parallax adds the motion, the loop should be near-static.

Until these files are added, the hero renders as solid **obsidian** — the
typography stays fully legible, so the page is never broken by a missing asset.
