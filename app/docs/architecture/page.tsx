import { Zap, Terminal, Server, Shield, Activity, Share2 } from "lucide-react";

export default function ArchitecturePage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Technical Architecture</h1>
            <p className="text-gray-300 text-lg mb-8">
                NextDeploy is a beautifully coordinated dance between three core components: the CLI, the Daemon, and the Caddy reverse proxy.
            </p>

            <div className="my-12 p-8 bg-slate-900/50 border border-slate-800 rounded-2xl flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-8 text-emerald-400">System Overview</h3>
                <svg viewBox="0 0 800 400" className="w-full max-w-3xl">
                    {/* Defs for gradients */}
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.2 }} />
                            <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 0.2 }} />
                        </linearGradient>
                    </defs>

                    {/* Local Environment */}
                    <rect x="50" y="100" width="200" height="200" rx="12" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
                    <text x="150" y="80" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="600">Local Environment</text>

                    <rect x="75" y="150" width="150" height="80" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
                    <text x="150" y="195" textAnchor="middle" fill="#ecfdf5" fontSize="16" fontWeight="600">nextdeploy CLI</text>

                    {/* Connection */}
                    <path d="M 225 190 L 375 190" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <text x="300" y="180" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="600">SSH Tunnel (SFTP)</text>

                    {/* Production VPS */}
                    <rect x="375" y="50" width="375" height="300" rx="12" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
                    <text x="562" y="30" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="600">Production VPS</text>

                    {/* Daemon */}
                    <rect x="400" y="150" width="120" height="80" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                    <text x="460" y="195" textAnchor="middle" fill="#f1f5f9" fontSize="16" fontWeight="600">Daemon</text>

                    {/* App */}
                    <rect x="580" y="240" width="120" height="80" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                    <text x="640" y="285" textAnchor="middle" fill="#f1f5f9" fontSize="14" fontWeight="600">Next.js App</text>

                    {/* Caddy */}
                    <rect x="580" y="70" width="120" height="80" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
                    <text x="640" y="115" textAnchor="middle" fill="#f1f5f9" fontSize="16" fontWeight="600">Caddy Proxy</text>

                    {/* Internal Flows */}
                    <path d="M 460 230 L 460 280 L 580 280" stroke="#94a3b8" strokeWidth="2" strokeDasharray="2 2" markerEnd="url(#arrowhead-small)" />
                    <text x="470" y="260" textAnchor="start" fill="#94a3b8" fontSize="10">Manages</text>

                    <path d="M 460 150 L 460 110 L 580 110" stroke="#94a3b8" strokeWidth="2" strokeDasharray="2 2" markerEnd="url(#arrowhead-small)" />
                    <text x="470" y="130" textAnchor="start" fill="#94a3b8" fontSize="10">Configures</text>

                    <path d="M 640 150 L 640 240" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowhead-small)" />
                    <text x="650" y="200" textAnchor="start" fill="#8b5cf6" fontSize="12">Proxies HTTP</text>

                    {/* Arrowheads */}
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orientation="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                        </marker>
                        <marker id="arrowhead-small" markerWidth="6" markerHeight="4" refX="0" refY="2" orientation="auto">
                            <polygon points="0 0, 6 2, 0 4" fill="#94a3b8" />
                        </marker>
                    </defs>
                </svg>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Lifecycle of a Deployment</h2>
            <p className="text-gray-300 mb-6">
                When you run <code className="bg-slate-900 border border-emerald-500/30 px-2 py-0.5 rounded text-emerald-400">nextdeploy ship</code>, the following sequence occurs:
            </p>

            <div className="space-y-6">
                {[
                    { icon: Terminal, title: "Local Build", desc: "The CLI runs your custom build command and collects the output." },
                    { icon: Zap, title: "Artifact Packaging", desc: "A compressed tarball is created containing compiled server code, static assets, and metadata." },
                    { icon: Share2, title: "Transport", desc: "The tarball is securely uploaded to the VPS over an encrypted SSH connection (SFTP)." },
                    { icon: Activity, title: "Daemon Trigger", desc: "The CLI communicates with the NextDeploy Daemon via a root-protected Unix socket." },
                    { icon: Shield, title: "Atomic Swap", desc: "The Daemon unpacks the release, allocates a fresh port, and injects secrets." },
                    { icon: Server, title: "Health Check & Reload", desc: "Once the app responds, the Daemon updates Caddy and reloads the proxy." }
                ].map((step, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-slate-900/30 border border-slate-800 rounded-xl">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                            <step.icon className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                            <p className="text-gray-400 text-sm">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Component Responsibility</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-emerald-400" />
                        The CLI (Go)
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>• State management in <code className="bg-black/40 px-1 rounded">.nextdeploy/</code></li>
                        <li>• Automatic project & package manager discovery</li>
                        <li>• Encrypted secret handling & SSH authentication</li>
                    </ul>
                </div>

                <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Server className="w-5 h-5 text-blue-400" />
                        The Daemon (Go)
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Root-isolated process supervision via systemd</li>
                        <li>• Unix socket server for secure local control</li>
                        <li>• Automated health monitoring & release pruning</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">File System Layout</h2>
            <pre className="bg-slate-950 border border-slate-800 rounded-xl p-6 overflow-x-auto text-sm">
                <code className="text-emerald-300">
                    {`/opt/nextdeploy/
├── bin/            # Binaries (nextdeployd)
├── secrets/        # Root-restricted secret store (JSON)
└── apps/
    └── <app-name>/
        ├── current # Symlink to the active release
        └── releases/
            ├── 1772322955/
            └── 1772321401/`}
                </code>
            </pre>
        </div>
    );
}
