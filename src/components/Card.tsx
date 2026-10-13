import type { ReactNode } from 'react'

type CardProps = {
  title?: string
  children: ReactNode
  className?: string
}

export default function Card({ title, children, className = '' }: CardProps) {
  return (
    <section className={`border-2 border-ink bg-paper p-4 shadow-pixel ${className}`}>
      {title && <h2 className="mb-3 font-pixel text-xl">{title}</h2>}
      {children}
    </section>
  )
}
