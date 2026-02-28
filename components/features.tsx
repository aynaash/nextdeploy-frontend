'use client'

const features = [
  {
    title: 'Native AWS Serverless',
    description: 'Deploy to Lambda, S3, and CloudFront natively. Intelligent payload splitting with zero vendor lock-in.'
  },
  {
    title: 'Zero-Downtime Hot Swaps',
    description: 'Advanced Release/Symlink architecture on VPS. Seamless traffic shifting with zero 502 errors.'
  },
  {
    title: 'Native Log Streaming',
    description: 'Stream systemd journal logs in real-time. Filter by specific request paths and routes.'
  },
  {
    title: 'Instant Rollbacks',
    description: 'Shift the /current symlink back to any previous release instantly if something goes wrong.'
  },
  {
    title: 'Caddy Orchestration',
    description: 'Native Caddy integration for automatic SSL and high-performance reverse proxying.'
  },
  {
    title: 'Zero-Touch CI/CD',
    description: 'Generate optimized GitHub Actions pipelines with a single command for automated shipping.'
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
