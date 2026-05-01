import React from "react"
import DocsFooter from '@/components/docs-footer'
import DocsSidebar from '@/components/docs-sidebar'

export const metadata = {
  title: 'NextDeploy Documentation',
  description: 'Complete documentation for NextDeploy - self-hosted Next.js deployment platform',
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-950 lg:flex">
      <DocsSidebar />
      <main className="flex-1 min-w-0 relative">
        <div className="py-8 sm:py-10 px-4 sm:px-6 lg:px-12 max-w-4xl">
          {children}
          <DocsFooter />
        </div>
      </main>
    </div>
  )
}
