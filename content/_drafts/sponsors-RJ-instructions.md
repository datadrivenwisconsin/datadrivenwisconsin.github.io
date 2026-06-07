# How to Use These Files — Sponsors Page (RJ)

Hi RJ — Randy here (via some AI-assisted drafting). This folder has three files for the sponsors page rebuild. This doc explains what each one is and gives you a copy-paste recipe for adding sponsors as they confirm.

## The files

| File | What it is | Who edits it |
|---|---|---|
| `sponsors-mockup.html` | A working, standalone HTML page showing the target layout. Open it in a browser to see it. | You (it becomes the page) |
| `sponsors-build-spec.md` | The full spec: structure, tier rules, badges, asset conventions, acceptance checklist. | Reference |
| `sponsor-data-brief.md` | The current confirmed sponsor list + a blank template. The single source of truth for *who* goes on the page. | Randy keeps current |

## How to approach the build

You're vibe-coding this (Claude Code / Codex — either is fine). Suggested flow:

1. Open `sponsors-mockup.html` in a browser to see the goal.
2. Read `sponsors-build-spec.md` once, top to bottom — especially the tier reference, badges, and acceptance checklist.
3. Port the mockup into the real site: replace the mockup's stand-in nav/header/footer with the site's actual ones, and swap the mockup's `:root` color/font tokens for the real values from the live stylesheet. **The mockup colors and fonts are approximations** — pull the real ones so the page matches the rest of `datadrivenwi.org`.
4. Drop in real logos and the website links (see below).
5. Walk the acceptance checklist at the end of the spec.

If you want, you can hand the whole mockup file to your AI tool and say "port this into our site's existing layout and stylesheet" — it's structured to make that easy.

## The layout in one breath

Header → **Zettabyte** → **Exabyte** → **Petabyte** → **Hosting Sponsors** → "Interested in Sponsoring?" CTA. Headings and logos get smaller as you go down the tiers. Special roles (dinner host, student support, etc.) show as small pills **below** the relevant logo.

## Adding or changing a sponsor — copy-paste recipe

Each sponsor is one `.sponsor` block. To add one, copy an existing block in the right tier and change three things: the **tier class**, the **logo**, and the **link**.

**Plain sponsor (no special role):**
```html
<div class="sponsor exa">
  <div class="logo">
    <a href="https://SPONSOR-URL.com" target="_blank" rel="noopener" aria-label="Sponsor Name website">
      <img src="/images/sponsors/sponsor-name.png" alt="Sponsor Name">
    </a>
  </div>
</div>
```

**Sponsor with a special-role badge:**
```html
<div class="sponsor zetta">
  <div class="logo">
    <a href="https://SPONSOR-URL.com" target="_blank" rel="noopener" aria-label="Sponsor Name website">
      <img src="/images/sponsors/sponsor-name.png" alt="Sponsor Name">
    </a>
  </div>
  <div class="badges">
    <span class="badge dinner">Networking Dinner Host</span>
  </div>
</div>
```

- Tier class = `zetta` (Zettabyte), `exa` (Exabyte), `peta` (Petabyte), or `host` (Hosting). It controls logo size.
- Place the block inside the matching tier's `<div class="grid …">`.
- Delete the dashed placeholder cards in Exabyte/Petabyte as you fill them. If a tier ends up empty and you'd rather hide it, you can comment out the whole `<section>` — but Randy currently wants all three shown.

## Badge cheat-sheet

Put a badge inside a `<div class="badges">` under the logo. Available classes (icon SVG already in the markup — copy from an existing badge):

| Class | Label text | In use now |
|---|---|---|
| `dinner` | Networking Dinner Host | Yes (Xorbix) |
| `student` | Student Attendee Support | Yes (Direct Supply) |
| `keynote` | Keynote Speaker | When it fills |
| `reception` | Networking Reception | When it fills |
| `host` | Venue Host | Optional |

A sponsor can have more than one badge — just add multiple `<span class="badge …">` lines.

## Logos & links

- Real logos live in `/images/sponsors/`. Use transparent PNG or SVG where possible.
- **Rename files to remove spaces and parentheses** — the current repo has e.g. `Xorbix Logo - Complete Transparent (Black Text)).png`, which causes URL headaches. Use `xorbix.png`, `direct-supply.png`, `msoe.png`, etc.
- Size logos by the **container**, not the image: the `.sponsor.<tier> .logo { height: … }` rules already do this. Let images use `max-width:100%; max-height:100%; object-fit:contain;` so wide and square logos both sit nicely.
- Randy will give you the **website URL for each sponsor** — drop each into the matching `<a href="…">`. Every logo should be clickable.

## Questions

Anything ambiguous, ask Randy. For the confirmed sponsor list and roles, `sponsor-data-brief.md` is the source of truth — build from that, not from memory.
