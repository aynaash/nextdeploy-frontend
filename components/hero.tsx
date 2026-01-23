'use client'

import { Terminal, Github, Zap, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo badge */}
        <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-900/20 backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-500/60 transition-all">
          <Zap className="w-5 h-5 text-emerald-400" />
          <span className="text-emerald-100 font-semibold text-sm">Self-Hosted Next.js Deployment</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-100 via-green-200 to-emerald-100 bg-clip-text text-transparent leading-tight">
          Deploy Next.js
          <br />
          Your Way
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Take control of your infrastructure. No vendor lock-in. Pure Docker. Full transparency.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Open Source</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Zero Vendor Lock-in</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>2-Minute Setup</span>
          </div>
        </div>

        {/* Install command box */}
        <div className="mb-12 max-w-2xl mx-auto group">
          <p className="text-sm text-gray-500 mb-3 font-medium">Install in seconds</p>
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-emerald-600/20 hover:border-emerald-600/40 rounded-xl p-6 font-mono text-left transition-all duration-300 shadow-lg hover:shadow-emerald-500/10">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-gray-400">$ install</span>
            </div>
            <code className="text-emerald-300 text-sm md:text-base break-all leading-relaxed">
              curl https://webi.sh/nextdeploy | sh
            </code>
          </div>
        </div>




      </div>
    </section>
  )
}
