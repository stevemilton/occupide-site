import type { CSSProperties, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

/* Capture-safe entrance: content is fully visible by default; only a subtle
   transform-rise plays where the animation clock runs. */
export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const style = { '--rd': `${delay}ms` } as CSSProperties
  return (
    <div className={`reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}
