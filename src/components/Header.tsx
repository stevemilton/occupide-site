import { useEffect, useState } from 'react'
import { Calendar } from 'lucide-react'
import Button from './ui/Button'
import logo from '../assets/occupide-logo.png'

const links = [
  { label: 'The situation', id: '#situation' },
  { label: 'Solution', id: '#solution' },
  { label: 'Services', id: '#services' },
  { label: 'The OS', id: '#os' },
  { label: 'How we deliver', id: '#deliver' },
  { label: 'Team', id: '#team' },
]

export default function Header({ onContact }: { onContact: () => void }) {
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={'m-header' + (solid ? ' is-solid' : '')}>
      <div className="m-header-in">
        <a href="#top" className="m-logo">
          <img src={logo} alt="Occupide" />
        </a>
        <nav className="m-nav">
          {links.map((l) => (
            <a key={l.id} href={l.id}>
              {l.label}
            </a>
          ))}
        </nav>
        <Button
          variant={solid ? 'primary' : 'gradient'}
          leftIcon={<Calendar size={18} strokeWidth={1.75} />}
          onClick={onContact}
        >
          Book a discovery call
        </Button>
      </div>
    </header>
  )
}
