import React from "react"
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
    <div className="flex min-h-screen bg-slate-950">
      <DocsSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
