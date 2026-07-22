# SignTech Corporation — Marketing Site

A modernized marketing website for SignTech Corporation, a family-owned vinyl sign shop in Geneva, IL since 1989.

## Stack

- **Framework**: TanStack Start (React 19, file-based routing with SSR)
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Build**: Vite via `@lovable.dev/vite-tanstack-config`
- **Runtime**: Bun

## Running the app

```bash
bun run dev
```

Serves on `http://localhost:5000`. The workflow "Start application" runs this automatically.

## Routes

| Path | Page |
|------|------|
| `/` | Home — hero, product grid, trust strip, CTA band |
| `/signs` | Signs — materials and sample gallery |
| `/banners` | Banners — materials, use cases, gallery |
| `/lettering` | Lettering — vehicle, window, boat/RV, vinyl graphics |
| `/magnetics` | Vehicle Magnetics — feature list and pricing tiers |
| `/about` | About — family history, guarantee, privacy |
| `/quote` | Quote — contact info and ordering options |

## Project structure

```
src/
  assets/       — Brand images and product photos
  components/   — SiteHeader, SiteFooter, shadcn/ui primitives
  routes/       — File-based TanStack Start routes
  styles.css    — Design tokens (cream/honey/ink/ember palette)
  router.tsx    — Router setup
  server.ts     — SSR entry point
```

## Design tokens (Bee Heritage palette)

- Cream `#fef9c3` — background accent
- Honey `#fbbf24` — primary / CTA band
- Ink `#1a1a1a` — foreground / nav
- Ember `#c2410c` — accent / CTA hover

## Notes

- No backend, no database, no auth — pure frontend marketing site.
- No contact form by design; the Quote page lists phone, email, and fax only.
- Originally built in Lovable; imported to Replit for continued development.

## User preferences

- Keep the existing project structure and stack.
- No contact form — quote/contact info is phone/email/fax only.
