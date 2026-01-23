'use client'

const features = [
  {
    title: 'Docker Native',
    description: 'Optimized Docker builds for Next.js with smart caching and production-ready configurations.'
  },
  {
    title: 'SSH Deploy',
    description: 'Deploy to any VPS via SSH. Works with DigitalOcean, Hetzner, AWS, and more.'
  },
  {
    title: 'Secure Secrets',
    description: 'First-class secret management with Doppler integration. No .env files exposed.'
  },
  {
    title: 'Monitoring Built-in',
    description: 'Auto-restart, health checks, and metrics monitoring out of the box.'
  },
  {
    title: 'CLI First',
    description: 'Simple, powerful commands. Full transparency. No black boxes or hidden magic.'
  },
  {
    title: 'Open Source',
    description: 'Apache 2.0 licensed. Community-driven. Contribute and improve together.'
  }
]

export default function Features() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why NextDeploy?
          </h2>
          <p className="text-gray-400 text-lg">
            Built by developers, for developers who want full control
          </p>
        </div>
        
        <div className="space-y-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-r from-slate-900/50 to-slate-800/30 border border-slate-800/60 hover:border-emerald-600/50 hover:from-slate-900/70 hover:to-slate-800/50 rounded-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-emerald-500 flex-shrink-0 group-hover:w-2 group-hover:h-2 transition-all" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
