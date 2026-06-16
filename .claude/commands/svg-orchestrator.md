# /svg-orchestrator — SVG Generation Orchestrator · Pixeloria

Generates SVG illustration sets for demo sites in batches with checkpoint/resume.
Each demo site needs 4 files: `hero.svg` (900×560) + `gallery-1/2/3.svg` (520×360).

---

## Usage

```
/svg-orchestrator                    # Generate all missing SVGs
/svg-orchestrator status             # Show which SVGs exist vs missing
/svg-orchestrator site <name>        # Generate for one site only
```

---

## Demo sites inventory

| Slug (FR) | Slug (EN) | Theme |
|-----------|-----------|-------|
| `artisan-batiment` | `contractors` | Orange #F97316, dark warm |
| `agence-immobiliere` | `real-estate` | Blue #3B82F6, premium |
| `commerce-local` | `local-shops` | Green #22C55E, friendly |
| `conciergerie` | `hospitality-concierge` | Gold #D97706, luxury |
| `entreprise-renovation` | `renovation-companies` | Slate #64748B, industrial |
| `independant` | `freelancers-consultants` | Purple #8B5CF6, modern |
| `default` | — | Violet #7A5CFF, generic |

SVG root: `public/images/exemples/`

---

## Phase 1 — Status scan

Run this before generating anything:

```bash
for site in artisan-batiment agence-immobiliere commerce-local conciergerie entreprise-renovation independant default contractors real-estate local-shops hospitality-concierge renovation-companies freelancers-consultants; do
  dir="public/images/exemples/$site"
  count=$(ls "$dir"/*.svg 2>/dev/null | wc -l)
  echo "$site: $count/4 SVGs"
done
```

---

## Phase 2 — Batch strategy (anti-session-limit)

**Rule:** Maximum 2 sites (8 files) per background agent. Sequential batches.

Launch pattern for a full generation run:
```
Batch A (parallel): artisan-batiment + contractors   → Agent 1
Batch B (parallel): agence-immobiliere + real-estate → Agent 2
...
```

Wait for each batch to complete before launching the next.

---

## Phase 3 — SVG design specs

### hero.svg (900×560)
- Dark gradient background matching site theme
- Large headline text (site name / tagline)
- Decorative UI mockup or illustration relevant to the industry
- Subtle grid or pattern overlay
- Brand accent color prominently used

### gallery-1.svg (520×360) — "Before" state or showcase item 1
### gallery-2.svg (520×360) — "Process" or showcase item 2
### gallery-3.svg (520×360) — "After/delivery" state or showcase item 3

All SVGs must:
- Have `role="img"` and `aria-label` attributes
- Use `<defs>` with `<linearGradient>` for backgrounds
- Be self-contained (no external references)
- Be > 20 lines (real illustrations, not placeholders)

---

## Phase 4 — Agent prompt template

Use this prompt for each batch agent:

```
Generate SVG illustrations for [SITE_1] and [SITE_2] demo sites.

Root path: /home/user/Pixeloria-agence-web/public/images/exemples/

For each site, create 4 files:
- [site]/hero.svg       (900×560) — hero illustration
- [site]/gallery-1.svg  (520×360) — first gallery image
- [site]/gallery-2.svg  (520×360) — second gallery image
- [site]/gallery-3.svg  (520×360) — third gallery image

Theme colors:
- [SITE_1]: [primary color, bg color, accent]
- [SITE_2]: [primary color, bg color, accent]

Requirements:
- Dark gradient backgrounds using <linearGradient> in <defs>
- Industry-relevant illustration (not generic)
- role="img" + aria-label on root <svg>
- Self-contained SVG (no external refs)
- Each file > 20 lines
- Write all 8 files, confirm each with its line count
```

---

## Checkpoint pattern

After each batch completes, verify:
```bash
ls public/images/exemples/[site]/*.svg | wc -l   # should be 4
wc -l public/images/exemples/[site]/*.svg         # each should be > 20 lines
```

If any file is missing or < 20 lines → it's a placeholder, regenerate it.
