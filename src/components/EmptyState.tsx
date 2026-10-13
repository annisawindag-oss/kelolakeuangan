import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

type EmptyStateProps = {
  icon: LucideIcon
  title: string
  children: ReactNode
}

export default function EmptyState({ icon: Icon, title, children }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-2 border-2 border-dashed border-candy-300 bg-blush px-4 py-8 text-center">
      <Icon aria-hidden="true" className="h-8 w-8 text-candy-600" />
      <p className="font-pixel text-lg">{title}</p>
      <p className="max-w-sm text-sm text-ink-soft">{children}</p>
    </div>
  )
}
