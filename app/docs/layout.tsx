import React from "react"
import DocsFooter from '@/components/docs-footer'

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
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <main className="flex-1 py-12 px-6 sm:px-12 md:px-24 max-w-5xl mx-auto w-full relative">
        {children}
        <DocsFooter />
      </main>
    </div>
  )
}
