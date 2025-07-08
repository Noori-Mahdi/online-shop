'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const Breadcrumb = () => {
  const pathname = usePathname() // e.g. "/store"
  const searchParams = useSearchParams()

  const breadcrumbItems = []

  const basePath = pathname.replace('/', '') // "store"
  if (basePath) {
    breadcrumbItems.push({ label: basePath, href: `/${basePath}` })
  }

  const category = searchParams.get('category')
  if (category) {
    breadcrumbItems.push({ label: 'category', href: '#' })
    breadcrumbItems.push({ label: category, href: '#' })
  }

  return (
    <nav className="py-3">
      {breadcrumbItems.map((item, index) => (
        <span key={index} className="inline-flex items-center">
          <Link
            href={item.href}
            className="text-gray-700 font-medium hover:text-blue-800 hover:scale-105  hover:tracking-wide transition-all duration-300 ease-out"
          >
            {item.label}
          </Link>
          {index < breadcrumbItems.length - 1 && (
            <span className="mx-2 text-gray-400 select-none">{'>'}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumb
