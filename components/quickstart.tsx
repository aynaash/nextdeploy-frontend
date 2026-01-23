'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

const steps = [
  { cmd: 'nextdeploy init', desc: 'Initialize your project' },
  { cmd: 'nextdeploy build', desc: 'Build Docker image' },
  { cmd: 'nextdeploy runimage', desc: 'Test locally' },
  { cmd: 'nextdeploy ship', desc: 'Deploy to VPS' },
]

export default function QuickStart() {
  const [copied, setCopied] = useState(false)

  const copyAll = () => {
    const text = steps.map(s => s.cmd).join('\n')
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Started in 4 Commands
          </h2>
          <p className="text-gray-400 text-lg">
            From zero to deployed in under 5 minutes
          </p>
        </div>

        <div className="relative bg-gradient-to-br from-slate-950/80 to-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
          {/* Terminal header */}
          <div className="flex items-center justify-between px-6 py-5 bg-slate-800/60 border-b border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-4 text-sm text-gray-400 font-medium">nextdeploy</span>
            </div>
            <button
              onClick={copyAll}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-emerald-300 hover:bg-slate-700/50 rounded-lg transition-all duration-200 font-medium"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy all'}
            </button>
          </div>

          {/* Commands */}
          <div className="p-10 font-mono text-sm space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <span className="text-gray-600 select-none flex-shrink-0 group-hover:text-emerald-500 transition-colors">$</span>
                <div className="flex-1">
                  <code className="text-emerald-300 break-all font-medium group-hover:text-emerald-200 transition-colors">{step.cmd}</code>
                  <p className="text-gray-600 text-xs mt-2"># {step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features grid below terminal */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 rounded-xl border border-slate-700/50 hover:border-emerald-600/40 hover:bg-slate-900/30 transition-all duration-300 group">
            <div className="text-4xl font-bold text-emerald-400 mb-3 group-hover:text-emerald-300 transition-colors">~2min</div>
            <p className="text-gray-400 group-hover:text-gray-300 text-sm font-medium transition-colors">Quick setup</p>
          </div>
          <div className="text-center p-6 rounded-xl border border-slate-700/50 hover:border-emerald-600/40 hover:bg-slate-900/30 transition-all duration-300 group">
            <div className="text-4xl font-bold text-emerald-400 mb-3 group-hover:text-emerald-300 transition-colors">0$</div>
            <p className="text-gray-400 group-hover:text-gray-300 text-sm font-medium transition-colors">Zero lock-in</p>
          </div>
          <div className="text-center p-6 rounded-xl border border-slate-700/50 hover:border-emerald-600/40 hover:bg-slate-900/30 transition-all duration-300 group">
            <div className="text-4xl font-bold text-emerald-400 mb-3 group-hover:text-emerald-300 transition-colors">∞</div>
            <p className="text-gray-400 group-hover:text-gray-300 text-sm font-medium transition-colors">Full control</p>
          </div>
        </div>
      </div>
    </section>
  )
}
