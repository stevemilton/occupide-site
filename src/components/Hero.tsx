import { Calendar, ArrowDown, Cpu, Database, ShieldCheck } from 'lucide-react'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import Eyebrow from './ui/Eyebrow'

const stats: [string, string][] = [
  ['1', 'Point of contact'],
  ['10+', "Years' experience"],
  ['50+', 'Services available'],
  ['24/7', 'Help desk & support'],
]

const chips = [
  { icon: <Cpu size={15} strokeWidth={2} />, label: 'AI-optimised operating system' },
  { icon: <Database size={15} strokeWidth={2} />, label: 'One source of truth' },
  { icon: <ShieldCheck size={15} strokeWidth={2} />, label: 'Human-verified' },
]

export default function Hero({ onContact }: { onContact: () => void }) {
  return (
    <section className="m-hero" id="top">
      <div className="m-hero-glow m-hero-glow--1" />
      <div className="m-hero-glow m-hero-glow--2" />
      <div className="m-hero-in">
        <Reveal>
          <Eyebrow light>Services-first occupier solutions</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="m-hero-title">
            Love where
            <br />
            you work<span className="oc-dot">.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="m-hero-sub">
            Fully-managed workspace services for busy commercial occupiers — run on an
            AI-optimised operating system. The landlord manages the building; we manage your
            space, so your team can focus on the business.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="m-hero-chips">
            {chips.map((c) => (
              <span className="m-hero-chip" key={c.label}>
                <span className="oc-ic">{c.icon}</span>
                {c.label}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div className="m-hero-cta">
            <Button
              variant="gradient"
              size="lg"
              leftIcon={<Calendar size={20} strokeWidth={1.75} />}
              onClick={onContact}
            >
              Book a discovery call
            </Button>
            <Button
              variant="hero-ghost"
              size="lg"
              href="#solution"
              rightIcon={<ArrowDown size={20} strokeWidth={1.75} />}
            >
              See how it works
            </Button>
          </div>
        </Reveal>
        <Reveal delay={380}>
          <div className="m-hero-stats">
            {stats.map(([v, l]) => (
              <div className="m-stat" key={l}>
                <div className="m-stat-v">{v}</div>
                <div className="m-stat-l">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
