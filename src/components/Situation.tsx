import { Unplug, TimerOff, Hourglass, ShieldQuestion } from 'lucide-react'
import type { ReactNode } from 'react'
import Reveal from './ui/Reveal'
import Eyebrow from './ui/Eyebrow'

interface Item {
  icon: ReactNode
  t: string
  d: string
}

const items: Item[] = [
  {
    icon: <Unplug size={22} strokeWidth={1.75} />,
    t: 'Fragmented suppliers',
    d: 'Multiple contracts, contacts and deadlines to juggle — all on top of your actual job.',
  },
  {
    icon: <TimerOff size={22} strokeWidth={1.75} />,
    t: 'Slow response times',
    d: 'Maintenance issues linger longer than necessary, with nobody taking ownership.',
  },
  {
    icon: <Hourglass size={22} strokeWidth={1.75} />,
    t: 'Wasted time',
    d: 'Valuable hours spent chasing contractors, ordering deliveries and managing reactive works.',
  },
  {
    icon: <ShieldQuestion size={22} strokeWidth={1.75} />,
    t: 'No dedicated support',
    d: 'The landlord manages the building. But who actually manages your space?',
  },
]

export default function Situation() {
  return (
    <section className="m-section" id="situation">
      <div className="m-wrap">
        <Reveal className="m-head">
          <Eyebrow>The situation</Eyebrow>
          <h2 className="m-h2">
            Get the most out of your team<span className="oc-dot">.</span>
          </h2>
          <p className="m-lead">
            Managing your own office space is a constant distraction. Fragmented supply chains,
            slow responses and reactive firefighting eat into productivity — and nobody is
            accountable.
          </p>
        </Reveal>
        <div className="m-prob-grid">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 70}>
              <div className="m-prob">
                <span className="m-prob-ic">{it.icon}</span>
                <h3>{it.t}</h3>
                <p>{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
