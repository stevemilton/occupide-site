import { CalendarClock, Zap, UserRound } from 'lucide-react'
import type { ReactNode } from 'react'
import Reveal from './ui/Reveal'
import Eyebrow from './ui/Eyebrow'

interface Model {
  feat?: boolean
  idx: string
  icon: ReactNode
  name: string
  price: string
  accent: string
  tag: string
  tagColor: string
  d: string
}

const models: Model[] = [
  {
    feat: true,
    idx: '01 / Schedule',
    icon: <CalendarClock size={19} strokeWidth={1.75} />,
    name: 'On Schedule',
    price: 'Annual programme',
    accent: 'var(--violet-300)',
    tag: '◆ Best value',
    tagColor: 'var(--amber-400)',
    d: 'Agree your services for the year ahead and benefit from pre-negotiated, reduced rates. Services run automatically — no need to raise a request each time.',
  },
  {
    idx: '02 / Demand',
    icon: <Zap size={19} strokeWidth={1.75} />,
    name: 'On Demand',
    price: 'Per request',
    accent: 'var(--cyan-700)',
    tag: 'No commitment',
    tagColor: 'var(--fg-muted)',
    d: 'Order exactly what you need, when you need it. No annual commitment and no minimum spend — billed at our standard rates.',
  },
  {
    idx: '03 / Station',
    icon: <UserRound size={19} strokeWidth={1.75} />,
    name: 'On Station',
    price: 'Fixed monthly fee',
    accent: 'var(--magenta-600)',
    tag: 'Fully managed',
    tagColor: 'var(--fg-muted)',
    d: 'A named Occupide team member placed within your demise — employed, trained and fully managed by us. The most seamless option we offer.',
  },
]

export default function Solution() {
  return (
    <section className="m-section m-section--tint" id="solution">
      <div className="m-wrap">
        <Reveal className="m-head">
          <Eyebrow>The solution</Eyebrow>
          <h2 className="m-h2">
            Simple, transparent pricing<span className="oc-dot">.</span>
          </h2>
          <p className="m-lead">
            Both operational and advisory services are available across three delivery models —
            each priced to match the level of commitment and flexibility you need.
          </p>
        </Reveal>
        <Reveal className="m-models">
          {models.map((m) => (
            <div className={'m-model' + (m.feat ? ' feat' : '')} key={m.name}>
              <div className="m-model-top">
                <span className="m-model-idx">{m.idx}</span>
                <span style={{ color: m.accent, display: 'inline-flex' }}>{m.icon}</span>
              </div>
              <div className="m-model-name">{m.name}</div>
              <div className="m-model-price" style={{ color: m.accent }}>
                {m.price}
              </div>
              <p className="m-model-desc">{m.d}</p>
              <div className="m-model-foot">
                <span className="m-model-tag" style={{ color: m.tagColor }}>
                  {m.tag}
                </span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
