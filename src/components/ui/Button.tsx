import type { ReactNode, MouseEventHandler } from 'react'

type Variant = 'primary' | 'gradient' | 'secondary' | 'ghost' | 'hero-ghost'
type Size = 'sm' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  href?: string
  type?: 'button' | 'submit'
  className?: string
}

export default function Button({
  variant = 'primary',
  size,
  children,
  leftIcon,
  rightIcon,
  onClick,
  href,
  type = 'button',
  className = '',
}: ButtonProps) {
  const cls = ['oc-btn', `oc-btn--${variant}`, size ? `oc-btn--${size}` : '', className]
    .filter(Boolean)
    .join(' ')
  const inner = (
    <>
      {leftIcon}
      {children}
      {rightIcon}
    </>
  )
  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick}>
        {inner}
      </a>
    )
  }
  return (
    <button className={cls} type={type} onClick={onClick}>
      {inner}
    </button>
  )
}
