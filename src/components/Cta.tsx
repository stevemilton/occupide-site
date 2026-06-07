import { Calendar } from 'lucide-react'
import Button from './ui/Button'
import Reveal from './ui/Reveal'

export default function Cta({ onContact }: { onContact: () => void }) {
  return (
    <section className="m-cta">
      <div className="m-cta-glow m-cta-glow--1" />
      <div className="m-cta-glow m-cta-glow--2" />
      <Reveal className="m-cta-in">
        <h2 className="m-cta-title">
          Ready to love
          <br />
          where you work<span className="oc-dot">?</span>
        </h2>
        <p className="m-cta-sub">
          Book a discovery call — we&apos;ll visit your space, understand your requirements and
          build a bespoke workspace-services package tailored to your demise.
        </p>
        <Button
          variant="gradient"
          size="lg"
          leftIcon={<Calendar size={20} strokeWidth={1.75} />}
          onClick={onContact}
        >
          Book a discovery call
        </Button>
      </Reveal>
    </section>
  )
}
