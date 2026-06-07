import Reveal from './ui/Reveal'
import Eyebrow from './ui/Eyebrow'

interface Person {
  initials: string
  n: string
  r: string
  d: string
}

const team: Person[] = [
  {
    initials: 'AL',
    n: 'Andreas Liesche',
    r: 'Partner',
    d: '28 years of operational experience and a proven track record of exceptional service.',
  },
  {
    initials: 'IM',
    n: 'Isabel Moody',
    r: 'Head of Workspace Services',
    d: 'Specialist in operations, tenant liaison, contractor management and logistics.',
  },
  {
    initials: 'CT',
    n: 'Courtenay Tom',
    r: 'Senior Workspace Manager',
    d: 'Specialist in commercial facilities, supply-chain management and customer service.',
  },
  {
    initials: 'TW',
    n: 'Talia White',
    r: 'Senior Workspace Manager',
    d: 'Specialist in commercial facilities, supply-chain management and customer service.',
  },
]

const grads = [
  'var(--grad-brand)',
  'var(--grad-cool)',
  'linear-gradient(120deg,#FF2D78,#FFD600)',
  'linear-gradient(120deg,#7B2FFF,#00E5FF)',
]

export default function Team() {
  return (
    <section className="m-section" id="team">
      <div className="m-wrap">
        <Reveal className="m-head">
          <Eyebrow>The team</Eyebrow>
          <h2 className="m-h2">
            Experienced. Dedicated. At your service<span className="oc-dot">.</span>
          </h2>
          <p className="m-lead">
            A London-based team of property professionals with hands-on experience across some of
            the city&apos;s most prestigious commercial addresses.
          </p>
        </Reveal>
        <div className="m-team-grid">
          {team.map((t, i) => (
            <Reveal key={t.n} delay={i * 60}>
              <div className="m-person">
                <div className="m-person-av" style={{ background: grads[i] }}>
                  {t.initials}
                </div>
                <div className="m-person-n">{t.n}</div>
                <div className="m-person-r">{t.r}</div>
                <p className="m-person-d">{t.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
