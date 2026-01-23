'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const docCategories = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Getting Started', href: '/docs/getting-started' },
      { title: 'Installation', href: '/docs/installation' },
    ]
  },
  {
    title: 'Configuration',
    items: [
      { title: 'Configuration Guide', href: '/docs/configuration' },
      { title: 'Secret Management', href: '/docs/secrets' },
      { title: 'First Deployment', href: '/docs/first-deployment' },
    ]
  },
  {
    title: 'Reference',
    items: [
      { title: 'CLI Reference', href: '/docs/cli-reference' },
      { title: 'Troubleshooting', href: '/docs/troubleshooting' },
    ]
  },
  {
    title: 'Comparisons',
    items: [
      { title: 'vs Kamal', href: '/docs/vs-kamal' },
    ]
  }
]

export default function DocsSidebar() {
  const pathname = usePathname()
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Getting Started'])

  const toggleCategory = (title: string) => {
    setExpandedCategories(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    )
  }

  const isActive = (href: string) => pathname === href

  return (
    <aside className="w-64 bg-slate-900/50 border-r border-slate-800 p-6 sticky top-0 h-screen overflow-y-auto">
      <Link href="/" className="block mb-8">
        <div className="text-xl font-bold text-white">NextDeploy</div>
        <div className="text-xs text-gray-400 mt-1">Documentation</div>
      </Link>

      <nav className="space-y-4">
        {docCategories.map((category) => (
          <div key={category.title}>
            <button
              onClick={() => toggleCategory(category.title)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {category.title}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  expandedCategories.includes(category.title) ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedCategories.includes(category.title) && (
              <div className="ml-2 space-y-1 mt-2">
                {category.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 rounded text-sm transition-colors ${
                      isActive(item.href)
                        ? 'bg-emerald-600/20 text-emerald-400 font-medium'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-slate-800/50'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
