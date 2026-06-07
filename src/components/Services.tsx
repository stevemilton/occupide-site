import {
  ConciergeBell,
  Wrench,
  Coffee,
  Package,
  Sparkles,
  PartyPopper,
  ClipboardCheck,
  Leaf,
  ArrowUpRight,
} from 'lucide-react'
import type { ReactNode } from 'react'
import Reveal from './ui/Reveal'
import Eyebrow from './ui/Eyebrow'

interface Svc {
  icon: ReactNode
  t: string
}

const svc: Svc[] = [
  { icon: <ConciergeBell size={24} strokeWidth={1.75} />, t: 'Concierge, Reception & Helpdesk' },
  { icon: <Wrench size={24} strokeWidth={1.75} />, t: 'Maintenance & Repairs' },
  { icon: <Coffee size={24} strokeWidth={1.75} />, t: 'Food, Beverage & Consumables' },
  { icon: <Package size={24} strokeWidth={1.75} />, t: 'Move-in/out & Fit-out' },
  { icon: <Sparkles size={24} strokeWidth={1.75} />, t: 'Cleaning & Facilities' },
  { icon: <PartyPopper size={24} strokeWidth={1.75} />, t: 'Events & Community' },
  { icon: <ClipboardCheck size={24} strokeWidth={1.75} />, t: 'Inspections & Servicing' },
  { icon: <Leaf size={24} strokeWidth={1.75} />, t: 'Compliance & Sustainability' },
]

export default function Services() {
  return (
    <section className="m-section" id="services">
      <div className="m-wrap">
        <Reveal className="m-head">
          <Eyebrow>Operational services</Eyebrow>
          <h2 className="m-h2">
            Every service your workspace needs<span className="oc-dot">.</span>
          </h2>
          <p className="m-lead">
            Any combination of services, tailored to suit you and your demise — all delivered by
            one dedicated team.
          </p>
        </Reveal>
        <div className="m-svc-grid">
          {svc.map((s, i) => (
            <Reveal key={s.t} delay={(i % 4) * 60}>
              <div className="m-svc">
                <span className="m-svc-ic">{s.icon}</span>
                <span className="m-svc-t">{s.t}</span>
                <span className="m-svc-arrow">
                  <ArrowUpRight size={18} strokeWidth={1.75} />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
