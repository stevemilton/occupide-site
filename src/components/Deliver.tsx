import Reveal from './ui/Reveal'
import Eyebrow from './ui/Eyebrow'

interface Step {
  n: string
  t: string
  d: string
}

const steps: Step[] = [
  {
    n: '01',
    t: 'Dedicated Account Manager',
    d: 'Your single point of contact owns your relationship end-to-end — they know your space, your team and your preferences.',
  },
  {
    n: '02',
    t: 'Our Online Portal',
    d: 'Order services, log requests, track real-time status and access invoices and reports — all from one clean dashboard, 24/7.',
  },
  {
    n: '03',
    t: '24/7 Help Desk',
    d: "Urgent issues don't wait for office hours. Our help desk is staffed by humans, round the clock.",
  },
  {
    n: '04',
    t: 'Monthly Performance Reports',
    d: 'Clear reporting on delivery, open requests, response times and spend. You always know how we are performing.',
  },
]

export default function Deliver() {
  return (
    <section className="m-section m-section--dark" id="deliver">
      <div className="m-deliver-glow" />
      <div className="m-wrap">
        <Reveal className="m-head m-head--dark">
          <Eyebrow light>How we deliver</Eyebrow>
          <h2 className="m-h2" style={{ color: '#fff' }}>
            Seamless from day one<span className="oc-dot">.</span>
          </h2>
          <p className="m-lead" style={{ color: 'rgba(255,255,255,.7)' }}>
            It&apos;s not just what we do — it&apos;s how we do it. Every client gets a structured
            delivery model built around ease and transparency.
          </p>
        </Reveal>
        <div className="m-steps">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className="m-step">
                <div className="m-step-n">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
