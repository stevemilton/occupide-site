import { MessageSquareText, Sparkles, DatabaseZap, ShieldCheck } from 'lucide-react'
import type { ReactNode } from 'react'
import Reveal from './ui/Reveal'
import Eyebrow from './ui/Eyebrow'

interface Pillar {
  icon: ReactNode
  tint: string
  color: string
  t: string
  d: ReactNode
}

const pillars: Pillar[] = [
  {
    icon: <MessageSquareText size={24} strokeWidth={1.75} />,
    tint: 'rgba(123,47,255,.18)',
    color: 'var(--violet-300)',
    t: 'AI as the interface',
    d: 'Describe what you need in normal language. The system classifies, asks clarifying questions and routes it to the right person — and reads supplier docs, helpdesk emails and completion photos the same way.',
  },
  {
    icon: <Sparkles size={24} strokeWidth={1.75} />,
    tint: 'rgba(0,229,255,.14)',
    color: 'var(--cyan-400)',
    t: 'AI as account-manager support',
    d: 'Recommends suitable suppliers, watches SLA exposure, drafts your monthly performance report, and flags anomalies — underperformance, repeat failures, spend moving against budget.',
  },
  {
    icon: <DatabaseZap size={24} strokeWidth={1.75} />,
    tint: 'rgba(255,45,120,.14)',
    color: 'var(--magenta-400)',
    t: 'AI as a data asset',
    d: (
      <>
        Every request, update, photo and invoice line is captured in structured form — the
        foundation for benchmarking, predictive maintenance and ESG. <b>Occupide&apos;s moat.</b>
      </>
    ),
  },
]

export default function OperatingSystem() {
  return (
    <section className="m-section m-section--dark" id="os">
      <div className="m-os-glow" />
      <div className="m-wrap">
        <Reveal className="m-head m-head--dark">
          <Eyebrow light>The operating system underneath</Eyebrow>
          <h2 className="m-h2" style={{ color: '#fff' }}>
            A premium service, run on an AI-optimised OS<span className="oc-dot">.</span>
          </h2>
          <p className="m-lead" style={{ color: 'rgba(255,255,255,.7)' }}>
            Occupide is service-first, not platform-first — technology is the enabler, service is
            the product. Underneath every request sits one operating system that uses AI in three
            places where it creates real operational value. Not a general-purpose chatbot.
          </p>
        </Reveal>
        <div className="m-os-grid">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 70}>
              <div className="m-os-card">
                <div className="m-os-tile" style={{ background: p.tint, color: p.color }}>
                  {p.icon}
                </div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={210}>
          <div className="m-os-boundary">
            <span className="oc-ic">
              <ShieldCheck size={30} strokeWidth={1.75} />
            </span>
            <p>
              <b>AI recommends, classifies, drafts and assists. People and fixed rules decide.</b>{' '}
              Decisions that carry legal or financial weight — approving payments, validating
              compliance, authorising safety-critical work — always stay with people. The result is
              an auditable system of record, not a tool that merely sounds plausible.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
