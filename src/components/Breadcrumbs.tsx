import Link from 'next/link'

export type Crumb = {
  label: string
  /** Omit on the final crumb, which represents the current page. */
  href?: string
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label='Breadcrumb' className='mb-8'>
      <ol className='flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-light text-muted-foreground'>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li
              key={`${item.label}-${index}`}
              className='flex items-center gap-x-2'
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className='transition-colors hover:text-foreground'
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={isLast ? 'text-foreground' : undefined}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span aria-hidden='true' className='text-muted-foreground/50'>
                  /
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
