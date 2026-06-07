# Occupide — Marketing Landing Page

A single-page marketing site for **Occupide**, positioned as a *services-first occupier
solutions provider, powered by an AI-optimised operating system*.

Built with **React + TypeScript + Vite**, on the Occupide design system (`src/styles/`,
extracted from the Claude Design handoff bundle). Icons via `lucide-react`.

Deployed to GitHub Pages from `main` via Actions — **https://stevemilton.github.io/occupide-site/**.

## Password protection

The published site is gated by a shared password. GitHub Pages has no server, so the page is
**encrypted at rest** with [StatiCrypt](https://github.com/robinmoisson/staticrypt): the app is
bundled into a single self-contained `index.html` (`vite-plugin-singlefile`) and then AES-encrypted
— visitors must enter the password to decrypt and view anything.

- The password lives **only** in the repo secret `SITE_PASSWORD` (Settings → Secrets → Actions),
  never in source. The CI `encrypt` step reads it as `STATICRYPT_PASSWORD`.
- To change it: `gh secret set SITE_PASSWORD --body "newpass" --repo stevemilton/occupide-site`,
  then re-run the workflow (push, or `gh workflow run deploy.yml`).
- Caveat: this is a *shared-password gate*, not per-user auth. The encrypted payload is public, so a
  weak password is brute-forceable offline. For real access control, host behind Cloudflare Access
  or a Worker with auth instead.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build → dist/
npm run preview  # serve the built output
```

## Structure

```
src/
├── main.tsx                 # entry
├── App.tsx                  # section composition + contact-modal state
├── index.css                # imports the design-system CSS + site.css
├── styles/
│   ├── colors_and_type.css  # design-system foundations (tokens, type)
│   ├── components.css        # buttons, inputs, cards, badges, tiles
│   └── site.css             # marketing-site styles + AI-OS / lifecycle sections
├── assets/occupide-logo.png
└── components/
    ├── ui/                  # Button, Reveal, Eyebrow primitives
    ├── Header.tsx / Hero.tsx
    ├── Situation.tsx        # the problem ("who manages your space?")
    ├── Solution.tsx         # three delivery models (On Schedule / Demand / Station)
    ├── Services.tsx         # eight operational service categories
    ├── OperatingSystem.tsx  # NEW — the AI-optimised OS: AI in 3 places + control boundary
    ├── Lifecycle.tsx        # NEW — the 7-step request lifecycle on one backbone
    ├── Deliver.tsx          # the four delivery pillars (AM, portal, help desk, reports)
    ├── Team.tsx / Cta.tsx / Footer.tsx
    └── ContactModal.tsx     # "Book a discovery call" form → success state
```

## Design notes

- **Voice & narrative** follow the Occupide design system: warm, service-first; the signature
  magenta full stop; British English; ALL-CAPS eyebrows; the *"Love where you work."* tagline.
- **Service + AI-OS co-lead.** The hero leads on the human service promise, with the
  `OperatingSystem` and `Lifecycle` sections carrying the platform story drawn from the
  *Occupide Platform Proposal* deck ("service-first, not platform-first"; AI as interface /
  AM support / data asset; "AI recommends, people decide").
- **Surfaces alternate** light → tint → dark for rhythm; hero/CTA use the dark gradient with
  radial violet/magenta glows; the CTA uses the brand gradient.
- **Capture-safe reveals** — content is fully visible by default; only a subtle transform-rise
  plays. Respects `prefers-reduced-motion`.
- Fully responsive (breakpoints at 1080 / 980 / 560px).
