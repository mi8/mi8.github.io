# mi8.be Website

Static website for mi8 SRL — an AI agents consultancy based in Belgium.

## Stack

- **Astro** static site generator
- Deployed to **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`)
- Custom domain: `www.mi8.be` (CNAME in `public/`)
- Zero-JS by default (only inline theme toggle script)
- Modern CSS with custom properties for light/dark theming

## Commands

```bash
bun install        # Install dependencies
bun run dev        # Start dev server (localhost:4321)
bun run build      # Build to dist/
bun run preview    # Preview built site
```

## Project Structure

```
src/
  pages/
    index.astro           # Main landing page
    blog/
      index.astro         # Blog listing
      [slug].astro        # Individual blog posts
  layouts/
    Layout.astro          # Base HTML layout (head, fonts, theme init)
    BlogPost.astro        # Blog post layout (nav, article, footer)
  components/
    ThemeToggle.astro     # Light/dark theme toggle button
  content/
    config.ts             # Content collection schema
    blog/                 # Markdown blog posts
  styles/
    global.css            # All styles (CSS custom properties, light/dark themes)
public/
  CNAME                   # GitHub Pages custom domain
  favicon.ico
  logo_dark.svg
  logo_dark.png
  logo_light.png
```

## Design

- Light and dark theme with system preference detection + manual toggle
- Cyberpunk-inspired aesthetic: neon cyan accent (`#00e5ff`), grid motifs, glow effects
- Fonts: Inter (body), JetBrains Mono (monospace accents)

## Adding Blog Posts

Create a new `.md` file in `src/content/blog/` with frontmatter:

```markdown
---
title: "Post Title"
description: "Short description for cards and meta."
pubDate: 2026-03-01
---

Post content here...
```
