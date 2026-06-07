# Occupide — Marketing Landing Page

A single-page marketing site for **Occupide**, positioned as a *services-first occupier
solutions provider, powered by an AI-optimised operating system*.

Built with **React + TypeScript + Vite**, on the Occupide design system (`src/styles/`,
extracted from the Claude Design handoff bundle). Icons via `lucide-react`.

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
