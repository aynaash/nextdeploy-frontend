"use client";

const features = [
  {
    title: "The CLI (Command & Control)",
    description:
      "Your local companion. It builds your app, encrypts your secrets, and coordinates with the server via encrypted SSH tunnels.",
  },
  {
    title: "The Daemon (The Brain)",
    description:
      "A lightweight Go process running on your server. It manages the application lifecycle, allocates ports, swaps releases, and monitors health.",
  },
  {
    title: "Caddy (The Gatekeeper)",
    description:
      "A world-class reverse proxy that handles automatic TLS (HTTPS), Gzip/Zstd compression, and smart routing.",
  },
  {
    title: "Native Execution",
    description:
      "No Docker, no virtualization. We run your app directly on the metal (using Bun or Node), maximizing performance and minimizing overhead.",
  },
  {
    title: "Zero-Downtime Hot Swaps",
    description:
      "Daemon-driven architecture ensures that new releases are swapped seamlessly, with automatic rollbacks if health checks fail.",
  },
  {
    title: "Full Control",
    description:
      "You own the server, you own the secrets, you own the logs. Total infrastructure ownership without the complexity.",
  },
];

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
  );
}
