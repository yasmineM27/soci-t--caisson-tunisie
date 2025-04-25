import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  homeLabel?: string
  homeHref?: string
  className?: string
}

export function Breadcrumbs({ items, homeLabel = "Accueil", homeHref = "/", className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Fil d'Ariane" className={`mb-6 ${className}`}>
      <ol className="flex flex-wrap items-center text-sm">
        <li className="flex items-center">
          <Link
            href={homeHref}
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="h-4 w-4 mr-1" />
            <span className="sr-only sm:not-sr-only">{homeLabel}</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            {item.isCurrent ? (
              <span className="font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
