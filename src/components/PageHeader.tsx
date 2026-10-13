type PageHeaderProps = {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-6">
      <h1 className="font-pixel text-3xl font-bold md:text-4xl">{title}</h1>
      <p className="mt-1 max-w-prose text-ink-soft">{description}</p>
    </header>
  )
}
