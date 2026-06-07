import { ShieldCheck } from 'lucide-react'
import Reveal from './ui/Reveal'
import Eyebrow from './ui/Eyebrow'

interface Node {
  n: string
  t: string
  d: string
}

const nodes: Node[] = [
  { n: '01', t: 'Raise', d: 'You raise a request in natural language or a structured form.' },
  { n: '02', t: 'Classify', d: 'The system classifies, prioritises and routes it automatically.' },
  { n: '03', t: 'Triage', d: 'Your account manager reviews and assigns an approved supplier.' },
  { n: '04', t: 'Deliver', d: 'The supplier accepts, completes the work and uploads evidence.' },
  { n: '05', t: 'Verify', d: 'Your account manager verifies completion against agreed standards.' },
  { n: '06', t: 'Track', d: 'You watch live status throughout the whole process.' },
  { n: '07', t: 'Record', d: 'A clean record is ready for reporting, billing and audit.' },
]

export default function Lifecycle() {
  return (
    <section className="m-section m-section--tint" id="lifecycle">
      <div className="m-wrap">
        <Reveal className="m-head">
          <Eyebrow>The full service lifecycle</Eyebrow>
          <h2 className="m-h2">
            Every request, on one backbone<span className="oc-dot">.</span>
          </h2>
          <p className="m-lead">
            From the moment you ask to the moment it&apos;s signed off — a single, traceable flow.
            No spreadsheets, no parallel email chains, no dropped handovers.
          </p>
        </Reveal>
        <div className="m-flow">
          {nodes.map((node, i) => (
            <Reveal key={node.n} delay={i * 55}>
              <div className="m-flow-node">
                <div className="m-flow-num">{node.n}</div>
                <h4>{node.t}</h4>
                <p>{node.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="m-flow-note">
            <span className="oc-ic">
              <ShieldCheck size={28} strokeWidth={1.75} />
            </span>
            <p>
              <b>Every action is logged.</b> The operational record becomes one source of truth —
              for you, for Occupide, for suppliers and for auditors.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
