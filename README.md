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
src/content/invitations/20-nine-year-old.md
```

### Frontmatter

```yaml
---
title: "Kindergarten Teacher"
style: "Kindergarten Teacher"
date: 2026-04-26
type: text
fonts: ["Patrick Hand"]
accentColor: "#e8175d"
teaser: "Dear families! We are SO EXCITED to tell you about a VERY SPECIAL EVENT!"
thumbnail: "/thumbnails/19-kindergarten.png"
---
```

| Field | Required | Description |
|-------|----------|-------------|
| `title` | yes | Page `<title>` |
| `style` | yes | Display name on cards and headers |
| `date` | yes | Publication date (controls when it appears and sort order) |
| `type` | yes | `text` (Markdown) or `html` (raw HTML) |
| `fonts` | no | Google Font family names, loaded only on this page |
| `accentColor` | no | Hex color for grid card background and page accent |
| `teaser` | no | One-liner shown on the grid card |
| `thumbnail` | no | Path to image in `public/thumbnails/` |

### Text invitations

Write Markdown below the frontmatter. To override fonts for the invitation body, add a `<style>` block targeting `.inv-text-body`.

### HTML invitations

Set `type: html` and write raw HTML below the frontmatter. Include a `<style>` block for per-invitation styles. **Important:** avoid blank lines between HTML tags — the Markdown parser will treat them as paragraphs.

### Fonts

Per-invitation fonts load only on that page. Use Google Fonts family names as they appear in the URL:

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
│   ├── robots.txt              # blocks all crawlers
│   └── thumbnails/             # grid card images
├── src/
│   ├── config.ts               # photosPublished flag, event details, URLs
│   ├── date.ts                 # timezone-safe ET day cutoff (pure, testable)
│   ├── utils.ts                # getPublishedInvitations() date filtering
│   ├── utils.test.ts           # vitest tests for date logic
│   ├── content/
│   │   ├── config.ts           # Zod schema for invitation collection
│   │   └── invitations/        # one .md per invitation
│   ├── layouts/
│   │   └── Base.astro          # site shell, design system, nav, fonts
│   └── pages/
│       ├── index.astro         # hero, BBQ info, invitation grid
│       ├── rsvp.astro          # RSVP form (Formspree)
│       └── invitation/
│           └── [slug].astro    # individual invitation page
├── unpublished/                # invitations awaiting dates
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

## Published Invitations

| # | Style | Type | Date |
|---|-------|------|------|
| 01 | Old-Timey Invitation | html | Apr 8 |
| 02 | Fancy New York Ball | html | Apr 10 |
| 03 | Elizabethan Court | html | Apr 11 |
| 04 | New York Times Front Page | text | Apr 12 |
| 05 | People Magazine | text | Apr 13 |
| 06 | Cookbook Recipe | text | Apr 14 |
| 07 | Cereal Box Ingredient List | html | Apr 15 |
| 08 | Eviction Notice | html | Apr 16 |
| 09 | Mexican/Cajun Restaurant Menu | html | Apr 17 |
| 10 | Circus Broadside | html | Apr 18 |
| 11 | Voguing Ball | html | Apr 19 |
| 12 | Steve Jobs Keynote | text | Apr 20 |
| 13 | Ernest Hemingway | text | Apr 21 |
| 14 | Carl Sagan | text | Apr 22 |
| 15 | George Carlin | text | Apr 23 |
| 17 | Kermit the Frog | text | Apr 24 |
| 18 | Fozzie Bear | text | Apr 25 |
| 19 | Kindergarten Teacher | text | Apr 26 |

*18 published, 20 in `unpublished/`, 6 in `wont-use/`.*

---

*Boston Magic Lab · End of Season 2026 · Produced by Felice & the Production Staff*
