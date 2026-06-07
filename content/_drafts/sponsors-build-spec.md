# Build Spec — Sponsors Page (Data-Driven Wisconsin 2026)

**For:** RJ
**Goal:** Rebuild `/pages/sponsors.html` as a tiered sponsor page using our byte-scale level names, with special-designation badges shown **below** each sponsor's logo.
**Match:** The current site's look & feel (the existing GitHub Pages design). Use the accompanying `sponsors-mockup.html` as the visual + structural reference — it is a *mockup*, not final code. Swap its placeholder tokens/nav for the real site's CSS and header.

---

## 1. Page structure (top → bottom)

1. **Page header** — `Our Sponsors` + one-line thank-you lede.
2. **Zettabyte** (Platinum) tier.
3. **Exabyte** (Gold) tier.
4. **Petabyte** (Silver) tier.
5. **Hosting Sponsors** section (appears **below** the paid tiers).
6. **"Interested in Sponsoring?"** CTA → `mailto:Organizers@datadrivenwi.org`.

> Each tier is its own `<section>` with a heading (just the byte name — `Zettabyte`, no Platinum/Gold/Silver label), a brand-gradient rule beneath the heading, then a responsive logo grid. **Show all three tiers even when empty** — Exabyte and Petabyte currently have no confirmed sponsors and render as placeholder slots.

---

## 2. Tier reference (authoritative — from the 2026 Sponsorship Doc)

| Level | (Legacy equiv.) | Price | Heading size | Logo size | Grid density |
|---|---|---|---|---|---|
| **Zettabyte** | Platinum | $6,500 | Largest (2.2rem) | Largest (120px) | ~3 across |
| **Exabyte** | Gold | $3,500 | Medium (1.8rem) | Medium (92px) | ~3 across |
| **Petabyte** | Silver | $1,000 | Smaller (1.5rem) | Smaller (70px) | ~4 across |
| **Hosting** | — | — | 1.7rem | Large (104px) | ~2 across |

The byte names are the **only** labels shown on the page — Platinum/Gold/Silver are listed here only as a reference for matching against the Sponsorship Doc and are **not displayed**.

Both the **heading text size** and the **logo size** step down by tier so higher levels read as more prominent. Petabyte is intentionally kept readable, not tiny. Heading sizes are set per tier via `section.tier[data-accent="…"] .tier-head h2` and logo sizes via `.sponsor.<tier> .logo { height: … }` — both in the mockup CSS. Adjust the numbers there to taste.

---

## 3. Current sponsor data (place these now)

| Sponsor | Section | Badges (below logo) |
|---|---|---|
| **Xorbix Technologies** | Zettabyte | `Networking Dinner Host` |
| **MSOE** (Milwaukee School of Engineering) | Hosting | *(none — hosting conveyed by the section)* |
| **Direct Supply** | Hosting | `Student Attendee Support` |

> **Zettabyte** has one confirmed sponsor (Xorbix). **Exabyte** and **Petabyte** have **no confirmed sponsors yet** — show the section headings with placeholder cards (delete or fill as sponsors confirm). The Hosting section names MSOE and Direct Supply as venue hosts, so no separate "Venue Host" badge is needed; Direct Supply additionally carries a Student Attendee Support badge. **Re-verify the confirmed list with Randy before publishing.**

---

## 4. Special-designation badges

Badges are small pills shown **directly below the sponsor logo**, inside a `.badges` container. A sponsor can carry more than one. Keep the label text short. The table below lists all available badge types; **only Dinner and Student are in use right now** — the others (`keynote`, `reception`, `host`) are defined and ready for when those slots fill.

| Badge class | Label | Color family | Active now? | When to use |
|---|---|---|---|---|
| `dinner` | Networking Dinner Host | amber | **Yes — Xorbix** | Sponsor underwriting the networking dinner |
| `student` | Student Attendee Support | teal | **Yes — Direct Supply** | Sponsor funding discounted student attendance |
| `keynote` | Keynote Speaker | purple | Not yet | Sponsor underwriting/introducing the keynote |
| `reception` | Networking Reception | blue | Not yet | Sponsor of the late-afternoon reception |
| `host` | Venue Host | gray | Not used | Optional — only if you want an explicit host pill (the Hosting section already conveys this) |

Badge styling lives in the mockup CSS under `/* special-designation badges */`. Each pill = light background + darker same-family text + a small inline SVG icon. Adjust labels/colors to taste, but keep them **below** the logo and visually subordinate to it.

---

## 5. Logos & links

- Real logos go in `/images/sponsors/`. The mockup uses dashed **placeholders** (`.logo .ph`) — replace each with `<img src="/images/sponsors/FILENAME" alt="Sponsor Name">`.
- **Every logo links to the sponsor's website.** Each logo is wrapped in `<a href="#" aria-label="…">`. Replace each `#` with the sponsor's URL (Randy will supply the list). For new-tab behavior use `target="_blank" rel="noopener"`. Example:
  ```html
  <div class="logo">
    <a href="https://xorbix.com" target="_blank" rel="noopener" aria-label="Xorbix Technologies website">
      <img src="/images/sponsors/xorbix.png" alt="Xorbix Technologies">
    </a>
  </div>
  ```
- The current site's logos render too small. Fix by sizing the **container** (`.sponsor.<tier> .logo { height: … }`) and letting the image scale with `max-width:100%; max-height:100%; object-fit:contain;` — don't hard-set image pixel widths. This keeps mixed aspect ratios (wide wordmarks vs. square marks) visually balanced.
- Prefer transparent-background PNG or SVG. If a logo is dark-on-transparent, it will read fine on the white cards.
- Watch filenames: current repo has spaces and a stray `)` in `Xorbix Logo - Complete Transparent (Black Text)).png`. Rename to hyphenated, paren-free names (e.g. `xorbix.png`, `direct-supply.png`, `msoe.png`) to avoid URL-encoding issues.

---

## 6. Visual / brand notes

- Keep the existing **site nav, header, and footer** — the mockup's nav is a stand-in only.
- Pull the **real** brand colors, fonts, and container width from the live stylesheet; the mockup's `:root` tokens are approximations of the teal→blue brand and should be replaced with the site's actual values.
- Cards: white background, subtle border + shadow, rounded corners, gentle hover lift. Match whatever card treatment the rest of the site uses for consistency.
- Responsive: grids use `repeat(auto-fit, minmax(…, 1fr))` so they collapse cleanly to 1–2 columns on mobile. Verify on a phone width.
- Accessibility: every logo needs descriptive `alt` text; badge pills should have readable contrast (the chosen text shades already do).

---

## 7. Acceptance checklist

- [ ] Sections in order: Zettabyte → Exabyte → Petabyte → Hosting → CTA.
- [ ] Headings show byte names only — **no** Platinum/Gold/Silver labels anywhere.
- [ ] Both heading size and logo size step down by tier; Petabyte still readable.
- [ ] All three tiers shown even where empty; Exabyte/Petabyte render placeholder cards.
- [ ] Every logo wrapped in a link to the sponsor's website (real URLs in, no leftover `#`).
- [ ] Xorbix shows a **Networking Dinner Host** badge under its logo.
- [ ] Direct Supply shows a **Student Attendee Support** badge (no Venue Host badge).
- [ ] MSOE shows no badge (hosting conveyed by the section).
- [ ] Real logos in `/images/sponsors/`, sized via container, filenames cleaned.
- [ ] Site's real nav/header/footer + brand CSS applied (mockup placeholders removed).
- [ ] Mobile layout checked.
- [ ] Confirmed sponsor list re-verified with Randy before publish.
