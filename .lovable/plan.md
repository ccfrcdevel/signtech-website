## SignTech Modern Rebuild

A modernized marketing site for SignTech Corporation (Geneva, IL) — family-owned vinyl sign shop since 1989. Keep the warm yellow/black bee heritage but reframe it with current typography, real spacing, and proper image treatment.

### Design tokens
- Palette: cream `#fef9c3` (bg accent), bee yellow `#fbbf24` (primary), ink `#1a1a1a` (foreground/nav), burnt orange `#c2410c` (accent/CTA hover). White surfaces for cards.
- Type: Space Grotesk for headings, DM Sans for body (loaded via Google Fonts).
- Generous radius, soft shadows, restrained motion (fade/translate on scroll).
- New illustrated bee mascot (generated) — flat, clean, friendly — replaces the vintage clip art. Tagline "Let Us BEE Your Source For Signs" kept.

### Routes (TanStack Start file-based)
- `/` — Home: hero (bee mascot + tagline + primary CTA "Get a Quote"), 3-up product grid (Signs / Banners / Lettering), trust strip (since 1989, family-owned, 48hr ship, 100% guarantee), CTA band.
- `/signs` — Signs page: intro + material grid (acrylic, aluminum, coroplast, foamcore, gatorfoam, lexan, posterboard, pvc, real estate, wooden site, magnetic) with sample images.
- `/banners` — Banners page: materials list (vinyl, nylon, poly, tyvek) + use cases (street, table, parade, boulevard, convention) + sample gallery.
- `/lettering` — Lettering page: vehicle, window, boat/RV, pre-spaced, logos, multi-colored vinyl — sample gallery.
- `/magnetics` — Vehicle Magnetics: feature list (durable, washable, removable, etc.) + three tier cards: Basic ($50/pair), Step-up ($60/pair), Professional ($80/pair).
- `/about` — SignTech info: family-owned since 1989, 26+ years experience, quality guarantee, privacy commitment.
- `/quote` — Quote/order info: "Let us design it" / "You design it" / "Questions" sections with phone, email, fax (no form per request).

### Shared components
- `SiteHeader` — sticky, ink background, yellow logo wordmark + nav links (Signs, Banners, Lettering, About, Quote), CTA button.
- `SiteFooter` — contact block (SignTech Corporation, Geneva IL 60134, phone 1-630-373-6340, fax 1-630-761-0765, email info@SignTechCorp.com, web www.SignTechCorp.com), nav, small bee.
- `ProductCard`, `FeatureItem`, `SectionHeading`.

### Imagery
- Generate ~8 images: hero bee mascot, signs hero, banners hero, lettering hero, magnetics hero, plus 3–4 representative product samples per category page (clean modern photography style of vinyl signs, vehicle lettering, banners, magnetic signs).

### Technical
- Update `src/styles.css` tokens (light theme only, Bee Heritage).
- Add Google Fonts link in `__root.tsx` head.
- Per-route `head()` with unique title/description/og.
- Replace placeholder `src/routes/index.tsx`.
- No backend, no forms, no Cloud needed.

### Out of scope
- Contact form (explicitly excluded).
- Auth, database, CMS.
