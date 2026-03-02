const features = [
  {
    title: "Native Execution",
    description: "No Docker, no overhead. Runs your Next.js app directly with Node/Bun via systemd.",
  },
  {
    title: "Zero-Downtime Deploys",
    description: "Daemon-managed port swaps with automatic rollback if health checks fail.",
  },
  {
    title: "VPS & Serverless",
    description: "Deploy to any Linux VPS (Hetzner, DigitalOcean, AWS) or natively to AWS Lambda + S3.",
  },
  {
    title: "Encrypted Secrets",
    description: "Remote secret management from your local CLI — never touch .env files on the server again.",
  },
  {
    title: "Live Logs & Status",
    description: "Real-time log streaming and PID/memory tracking streamed via SSH from the daemon.",
  },
  {
    title: "Full Ownership",
    description: "Your server, your secrets, your logs. Zero vendor lock-in, total transparency.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">
            Why NextDeploy?
          </h2>
          <p className="text-gray-400">
            Built for developers who want full control without the complexity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-5 bg-slate-900/60 border border-slate-800 hover:border-emerald-600/40 rounded-xl transition-all duration-200 group"
            >
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
                <div>
                  <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center flex flex-wrap gap-4 justify-center">
          <a
            href="/docs"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all"
          >
            Read the Docs →
          </a>
          <a
            href="https://github.com/Golangcodes/nextdeploy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-all"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
