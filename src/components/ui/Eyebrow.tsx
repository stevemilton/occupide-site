import type { ReactNode } from 'react'

interface EyebrowProps {
  children: ReactNode
  /** light = cyan accent, for use on dark surfaces */
  light?: boolean
}

export default function Eyebrow({ children, light }: EyebrowProps) {
  return (
    <div className="m-eyebrow" style={light ? { color: 'var(--cyan-400)' } : undefined}>
      {children}
    </div>
  )
}
