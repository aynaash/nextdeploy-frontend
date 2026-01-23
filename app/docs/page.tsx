import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function DocsIndex() {
  return (
    <div className="py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">NextDeploy Documentation</h1>
        <p className="text-xl text-gray-400">
          Complete guide to deploying Next.js applications with NextDeploy
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Link href="/docs/getting-started">
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-emerald-600/50 hover:bg-slate-900/70 transition-all cursor-pointer group">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
              Getting Started
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Deploy your first Next.js app in under 5 minutes
            </p>
            <div className="flex items-center text-emerald-400 text-sm font-medium">
              Start Tutorial <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

        <Link href="/docs/cli-reference">
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-emerald-600/50 hover:bg-slate-900/70 transition-all cursor-pointer group">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
              CLI Reference
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Complete guide to all NextDeploy commands
            </p>
            <div className="flex items-center text-emerald-400 text-sm font-medium">
              View Reference <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

        <Link href="/docs/configuration">
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-emerald-600/50 hover:bg-slate-900/70 transition-all cursor-pointer group">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
              Configuration
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Configure your deployment settings and environments
            </p>
            <div className="flex items-center text-emerald-400 text-sm font-medium">
              Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

        <Link href="/docs/troubleshooting">
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-emerald-600/50 hover:bg-slate-900/70 transition-all cursor-pointer group">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
              Troubleshooting
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Solutions to common issues and problems
            </p>
            <div className="flex items-center text-emerald-400 text-sm font-medium">
              View Guide <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </div>

      <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Popular Topics</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: 'Installation', href: '/docs/installation' },
            { label: 'Secret Management', href: '/docs/secrets' },
            { label: 'Blue-Green Deployments', href: '/docs/first-deployment' },
            { label: 'Monitoring', href: '/docs/configuration' },
            { label: 'CI/CD Integration', href: '/docs/cli-reference' },
            { label: 'Comparisons', href: '/docs/vs-kamal' },
          ].map((topic) => (
            <Link key={topic.href} href={topic.href}>
              <div className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800/80 transition-colors text-gray-300 hover:text-white text-sm">
                {topic.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
