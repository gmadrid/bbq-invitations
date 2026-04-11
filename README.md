# The BBQ Invitations

One barbecue. Many voices. One new invitation style per day.

A site for the Boston Magic Lab's 2026 end-of-season BBQ — featuring the same invitation written in every style imaginable, from Ernest Hemingway to a kindergarten teacher to the cereal box ingredient list.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Deploy to GitHub Pages

1. Create a new GitHub repo
2. Push this code to the `main` branch
3. Go to **Settings → Pages → Source** and set it to **GitHub Actions**
4. Update `astro.config.mjs`:
   ```js
   site: 'https://yourusername.github.io',
   base: '/your-repo-name',   // omit if using a custom domain
   ```
5. Push — the Actions workflow deploys automatically on every push to `main`

### Custom Domain

1. Buy a domain (Cloudflare Registrar is ~$10/year and has no markup)
2. Add a `CNAME` file to `public/` containing just your domain:
   ```
   bbqinvitations.com
   ```
3. In your DNS, add a CNAME record pointing to `yourusername.github.io`
4. In GitHub: **Settings → Pages → Custom domain**, enter your domain
5. Remove the `base` field from `astro.config.mjs`, keep `site`

## Adding a New Invitation

Create a new file in `src/content/invitations/`. Name it with a number prefix so they sort correctly:

```
src/content/invitations/07-shakespeare.md
```

### Frontmatter fields

```yaml
---
title: "Shakespeare"               # page <title>
style: "William Shakespeare"       # display name on cards and headers
date: 2026-05-07                   # controls sort order and display date
type: text                         # "text" for markdown, "html" for raw HTML
fonts: ["IM Fell English:ital@0;1"] # Google Font names (optional)
accentColor: "#5c3a00"             # hex color for grid card + accent
teaser: "A sonnet. Obviously."     # one-liner shown on the grid card
thumbnail: "/thumbnails/07.jpg"    # optional image for grid card
---
```

### Text invitations

Just write Markdown below the frontmatter. Standard formatting works: `**bold**`, `*italic*`, `---` for rules, `##` for headings, `>` for blockquotes.

### HTML invitations

Set `type: html` and write raw HTML below the frontmatter. The HTML renders directly on the page — no iframe needed. Include a `<style>` block at the top for per-invitation styles. Keep class names specific to avoid collisions with site styles.

```html
---
type: html
fonts: ["Bebas Neue", "Barlow Condensed:wght@300;700"]
---

<style>
  .my-inv-wrap { background: #000; color: #fff; }
</style>

<div class="my-inv-wrap">
  ...
</div>
```

### Thumbnail images

Drop a JPG or PNG into `public/thumbnails/` and reference it in frontmatter:

```yaml
thumbnail: "/thumbnails/07-shakespeare.jpg"
```

Without a thumbnail, the grid card shows the style name as text on the accent color background. That works fine — add images whenever you want.

## RSVP Form

The RSVP form is powered by [Formspree](https://formspree.io). Submissions go to:

- **View submissions:** https://formspree.io/forms/mqegryze/submissions
- **Form endpoint:** `https://formspree.io/f/mqegryze`

The form is built with the site's design system in `src/pages/rsvp.astro`.

## Project Structure

```
bbq-invitations/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages auto-deploy
├── public/
│   └── thumbnails/             # grid card images (optional)
├── src/
│   ├── content/
│   │   ├── config.ts           # content collection schema
│   │   └── invitations/        # one .md file per invitation
│   │       ├── 01-old-timey.md
│   │       ├── 02-hemingway.md
│   │       └── ...
│   ├── layouts/
│   │   └── Base.astro          # site shell, font loading, nav
│   └── pages/
│       ├── index.astro         # main page with BBQ info + grid
│       ├── rsvp.astro          # RSVP page
│       └── invitation/
│           └── [slug].astro    # dynamic invitation page
├── astro.config.mjs
└── package.json
```

## Fonts

Per-invitation fonts load only on that invitation's page via the `fonts` frontmatter field. Use Google Fonts family names exactly as they appear in the URL:

```yaml
fonts:
  - "IM Fell English:ital@0;1"
  - "UnifrakturMaguntia"
  - "Cormorant Garamond:ital,wght@0,300;1,400"
```

The site uses Lora + Cormorant Garamond as its base fonts, loaded globally.

## Invitations in This Collection

| # | Style | Type |
|---|-------|------|
| 01 | Old-Timey Magic Poster | text |
| 02 | Ernest Hemingway | text |
| 03 | New York Times Front Page | text |
| 04 | Fancy New York Ball | html |
| 05 | Carl Sagan | text |
| 06 | George Carlin | text |
| 07 | William Shakespeare | text |
| 08 | Old Testament | text |
| 09 | Old Norse Viking | text |
| 10 | Captain Kirk | text |
| 11 | Circus Broadside | html |
| 12 | Voguing Ball | html |
| 13 | Elizabethan Court | html |
| 14 | Postmodern Art Critic | text |
| 15 | Steve Jobs Keynote | text |
| 16 | People Magazine | text |
| 17 | Kermit the Frog | text |
| 18 | Fozzie Bear | text |
| 19 | Nine-Year-Old | text |
| 20 | Manager's Self-Review Response | text |
| 21 | Employee Performance Review | text |
| 22 | Overwrought Emcee | text |
| 23 | Haiku | text |
| 24 | Limerick | text |
| 25 | Gettysburg Address | text |
| 26 | South Park | text |
| 27 | Sound and the Fury | text |
| 28 | e.e. cummings | text |
| 29 | Yearbook Signing | text |
| 30 | Cookbook Recipe | text |
| 31 | Kindergarten Teacher | text |
| 32 | Robin Williams | text |
| 33 | Donald Trump | text |
| 34 | Joe Rogan | text |
| 35 | NYT Eviction Notice | html |
| 36 | Mexican/Cajun Menu | html |
| 37 | Cereal Box | html |
| 38 | Tarot Reading | text |
| 39 | 1940s Newsreel | text |
| 40 | Emoji Only | text |
| 41 | ASCII Art | text |
| 42 | Bad High School French | text |
| 43 | Crosby & Hope | text |
| 44 | Road to Morocco (Song) | text |
| 45 | Queen of Fairies | text |
| 46 | Fairy Queen (Short) | text |
| 47 | Shakespeare Sonnet | text |

---

*Boston Magic Lab · End of Season 2026 · Produced by Felice & the Founders*
