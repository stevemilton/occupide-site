import { useEffect, useState } from 'react'
import { X, Send, Check } from 'lucide-react'
import Button from './ui/Button'
import Eyebrow from './ui/Eyebrow'

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (open) setSent(false)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="m-scrim" onClick={onClose} role="dialog" aria-modal="true">
      <div className="m-modal" onClick={(e) => e.stopPropagation()}>
        <button className="m-modal-x" onClick={onClose} aria-label="Close">
          <X size={20} strokeWidth={1.75} />
        </button>
        {!sent ? (
          <>
            <Eyebrow>Book a discovery call</Eyebrow>
            <h3 className="m-modal-title">
              Let&apos;s talk about your space<span className="oc-dot">.</span>
            </h3>
            <form
              className="m-form"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <div className="m-form-row">
                <div className="oc-field">
                  <label className="oc-label" htmlFor="cf-name">
                    Your name
                  </label>
                  <input id="cf-name" className="oc-input" placeholder="Priya Shah" />
                </div>
                <div className="oc-field">
                  <label className="oc-label" htmlFor="cf-company">
                    Company
                  </label>
                  <input id="cf-company" className="oc-input" placeholder="Helio Studios" />
                </div>
              </div>
              <div className="oc-field">
                <label className="oc-label" htmlFor="cf-email">
                  Work email
                </label>
                <input
                  id="cf-email"
                  type="email"
                  className="oc-input"
                  placeholder="you@company.com"
                />
              </div>
              <div className="oc-field">
                <label className="oc-label" htmlFor="cf-demise">
                  Tell us about your demise
                </label>
                <textarea
                  id="cf-demise"
                  className="oc-textarea"
                  rows={3}
                  placeholder="Floor, size, current pain points…"
                />
              </div>
              <Button
                variant="gradient"
                type="submit"
                leftIcon={<Send size={18} strokeWidth={1.75} />}
              >
                Request a call
              </Button>
            </form>
          </>
        ) : (
          <div className="m-sent">
            <span className="m-sent-ic">
              <Check size={30} strokeWidth={2} color="#fff" />
            </span>
            <h3 className="m-modal-title">
              Thanks — we&apos;ll be in touch<span className="oc-dot">.</span>
            </h3>
            <p>Isabel from our team will email you within one working day to arrange a visit.</p>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
