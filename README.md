# The BBQ Invitations

One barbecue. Many voices. One new invitation style per day.

A site for the Boston Magic Lab's 2026 end-of-season BBQ — featuring the same invitation written in every style imaginable, from Ernest Hemingway to a kindergarten teacher to the cereal box ingredient list.

**Live site:** [bml-2026.party](https://bml-2026.party)

## Quick Start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:4321`.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server (shows all invitations regardless of date) |
| `pnpm build` | Production build (date-gated) |
| `pnpm preview` | Preview production build locally |
| `pnpm test` | Run tests (vitest) |

## How It Works

Invitations are Astro content collection entries — one Markdown file per invitation. Each has a `date` field. The site rebuilds daily at 9am UTC via GitHub Actions cron. At build time, only invitations with dates up to "today" in Eastern Time are included. In dev mode, all invitations are visible.

## Adding a New Invitation

Create a file in `src/content/invitations/` with a number prefix:

```
src/content/invitations/20-employee-review.md
```

### Frontmatter

```yaml
---
windowTitle: "Kindergarten Teacher"
style: "Kindergarten Teacher"
date: 2026-04-30
type: text
fonts: ["Coming Soon"]
accentColor: "#d44a00"
teaser: "Can I have everybody's eyes up here please?"
thumbnail: "/thumbnails/22-kindergarten.png"
---
```

| Field | Required | Description |
|-------|----------|-------------|
| `windowTitle` | yes | Browser tab title |
| `style` | yes | Display name on cards and headers |
| `date` | yes | Publication date (controls when it appears and sort order) |
| `type` | yes | `text` (Markdown) or `html` (raw HTML) |
| `fonts` | no | Google Font family names (spaces, not `+`), loaded only on this page |
| `accentColor` | no | Hex color for grid card background and page accent |
| `teaser` | yes | One-liner shown on the grid card |
| `thumbnail` | no | Path to image in `public/thumbnails/` |

### Text invitations

Write Markdown below the frontmatter. To override fonts for the invitation body, add a `<style>` block targeting `.inv-text-body`.

### HTML invitations

Set `type: html` and write raw HTML below the frontmatter. Include a `<style>` block for per-invitation styles. **Important:** avoid blank lines between HTML tags — the Markdown parser will treat them as paragraphs.

### Fonts

Per-invitation fonts load only on that page. Use Google Fonts family names with spaces (not `+`):

```yaml
fonts:
  - "DM Serif Display"
  - "Source Serif 4:ital,wght@0,400;0,700;1,400"
```

Base fonts (loaded on every page): Anton, Libre Baskerville, Inconsolata, Space Mono, DM Mono. Don't re-request these in invitation `fonts` arrays.

### Thumbnails

Drop a PNG/JPG into `public/thumbnails/` (resized to 560px wide). Without a thumbnail, the grid card shows the style name as text on the accent color background.

## Project Structure

```
bbq-invitations/
├── .github/workflows/
│   └── deploy.yml              # GitHub Pages deploy (push, daily cron, manual)
├── public/
│   ├── CNAME                   # custom domain: bml-2026.party
│   ├── favicon.svg             # purple flame on black
│   ├── robots.txt              # blocks all crawlers
│   └── thumbnails/             # grid card images
├── src/
│   ├── config.ts               # photosPublished flag, event details, URLs
│   ├── date.ts                 # timezone-safe ET day cutoff (pure, testable)
│   ├── utils.ts                # getPublishedInvitations() date filtering
│   ├── utils.test.ts           # vitest tests for date logic
│   ├── content/
│   │   ├── config.ts           # Zod schema for invitation collection
│   │   └── invitations/        # one .md per invitation (38 total)
│   ├── layouts/
│   │   └── Base.astro          # site shell, design system, nav, fonts
│   └── pages/
│       ├── index.astro         # hero, BBQ info, invitation grid
│       ├── rsvp.astro          # RSVP form (Formspree)
│       └── invitation/
│           └── [slug].astro    # individual invitation page
├── wont-use/                   # retired invitations
├── originals/                  # full-size source images
├── astro.config.mjs
└── package.json
```

## Design System

Black, white, and purple. No gradients, shadows, rounded corners, or cream backgrounds.

| Token | Value |
|-------|-------|
| `--accent` | Per-page via `accentColor` prop (default `#7c3aed`) |
| `--brand` | `#7c3aed` (fixed, used for nav CTA) |
| `--font-display` | Anton |
| `--font-body` | Libre Baskerville |
| `--font-mono` | Inconsolata |

## RSVP

Powered by [Formspree](https://formspree.io). Submissions go to form `mqegryze`.

- **Submissions:** https://formspree.io/forms/mqegryze/submissions

## Post-BBQ

After the event, flip `photosPublished` to `true` in `src/config.ts`. This replaces the RSVP/food-signup section on the main page with a photos CTA, hides the food sign-up nav link, and shows the photos nav link.

## All Invitations

| # | Style | Type | Date |
|---|-------|------|------|
| 01 | Old-Timey Invitation | html | Apr 8 |
| 02 | Fancy New York Ball | html | Apr 10 |
| 03 | Elizabethan Court | html | Apr 11 |
| 04 | New York Times Front Page | text | Apr 12 |
| 05 | People Magazine | text | Apr 13 |
| 06 | Cookbook Recipe | text | Apr 14 |
| 07 | Part of a Complete Breakfast | html | Apr 15 |
| 08 | Eviction Notice | html | Apr 16 |
| 09 | Cher, Come Eat | html | Apr 17 |
| 10 | Circus Broadside | html | Apr 18 |
| 11 | Backyard Realness | html | Apr 19 |
| 12 | One More Thing | text | Apr 20 |
| 13 | Haiku | text | Apr 21 |
| 14 | The Grill Was Good | text | Apr 22 |
| 15 | The Frog | text | Apr 23 |
| 16 | Billions... | text | Apr 24 |
| 17 | Limerick | text | Apr 25 |
| 18 | George | text | Apr 26 |
| 19 | Nine-Year-Old | text | Apr 27 |
| 20 | Performance Review | text | Apr 28 |
| 21 | The Bear | text | Apr 29 |
| 22 | Kindergarten Teacher | text | Apr 30 |
| 23 | Queene of Fairyes | text | May 1 |
| 24 | 45/47 | text | May 2 |
| 25 | And It Was Good | text | May 3 |
| 26 | Kirk | text | May 4 |
| 27 | Performance Review Response | text | May 5 |
| 28 | South Park | text | May 6 |
| 29 | Yearbook | text | May 7 |
| 30 | Gettysburg | text | May 8 |
| 31 | The Emcee | text | May 9 |
| 32 | The Sound and the Fury | text | May 10 |
| 33 | Old Norse Viking | text | May 11 |
| 34 | Lamour | text | May 12 |
| 35 | Tarot Reading | text | May 13 |
| 36 | 1940s Newsreel | text | May 14 |
| 37 | Postmodern Art Critic | text | May 15 |
| 38 | Emoji Only | text | May 16 |

*38 invitations, Apr 8 through May 16. BBQ is May 17.*

---

*Boston Magic Lab · End of Season 2026 · Produced by Felice & the Production Staff*
