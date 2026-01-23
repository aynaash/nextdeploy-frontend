export default function VsKamal() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-6">NextDeploy vs Kamal</h1>
      
      <p className="text-gray-300 text-lg mb-8">
        NextDeploy is inspired by <a href="https://kamal-deploy.org/" className="text-emerald-400 hover:text-emerald-300">Kamal</a> (formerly MRSK) but specialized for Next.js deployments.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Similarities</h2>
      
      <p className="text-gray-300 mb-6">Both NextDeploy and Kamal:</p>
      
      <ul className="space-y-2 mb-8 text-gray-300">
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Deploy to your own servers via SSH</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Use Docker for containerization</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Support zero-downtime deployments</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Provide simple CLI interfaces</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Avoid vendor lock-in</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Are open source</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Key Differences</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. Framework Focus</h3>
      
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4 text-white font-semibold">Feature</th>
              <th className="text-left py-3 px-4 text-white font-semibold">NextDeploy</th>
              <th className="text-left py-3 px-4 text-white font-semibold">Kamal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Target</strong></td>
              <td className="py-3 px-4">Next.js only</td>
              <td className="py-3 px-4">Any framework (Rails, Go, etc.)</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Optimization</strong></td>
              <td className="py-3 px-4">Next.js-specific builds</td>
              <td className="py-3 px-4">Generic Docker</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">SSR/ISR</strong></td>
              <td className="py-3 px-4">Native support</td>
              <td className="py-3 px-4">Manual configuration</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><strong className="text-white">API Routes</strong></td>
              <td className="py-3 px-4">Automatic</td>
              <td className="py-3 px-4">Manual routing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-300 mb-8">
        <strong className="text-white">Why it matters:</strong> NextDeploy understands Next.js internals, so it can optimize builds, handle SSR correctly, and configure routing automatically.
      </p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. Secret Management</h3>
      
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4 text-white font-semibold">Feature</th>
              <th className="text-left py-3 px-4 text-white font-semibold">NextDeploy</th>
              <th className="text-left py-3 px-4 text-white font-semibold">Kamal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Primary method</strong></td>
              <td className="py-3 px-4">Doppler (first-class)</td>
              <td className="py-3 px-4">Environment variables</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Encryption</strong></td>
              <td className="py-3 px-4">Built-in ECDH</td>
              <td className="py-3 px-4">Manual</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Rotation</strong></td>
              <td className="py-3 px-4">Automatic</td>
              <td className="py-3 px-4">Manual</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><strong className="text-white">Scoping</strong></td>
              <td className="py-3 px-4">dev/staging/prod</td>
              <td className="py-3 px-4">Manual</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">3. Reverse Proxy</h3>
      
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4 text-white font-semibold">Feature</th>
              <th className="text-left py-3 px-4 text-white font-semibold">NextDeploy</th>
              <th className="text-left py-3 px-4 text-white font-semibold">Kamal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Default</strong></td>
              <td className="py-3 px-4">Caddy</td>
              <td className="py-3 px-4">Traefik</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">HTTPS</strong></td>
              <td className="py-3 px-4">Automatic (Let's Encrypt)</td>
              <td className="py-3 px-4">Automatic</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><strong className="text-white">Config</strong></td>
              <td className="py-3 px-4">Automatic for Next.js</td>
              <td className="py-3 px-4">Manual labels</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-300 mb-8">
        NextDeploy knows Next.js needs static file serving from <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">/_next/static</code>, API routes at <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">/api/*</code>, and SSR for all other routes.
      </p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">4. Monitoring</h3>
      
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4 text-white font-semibold">Feature</th>
              <th className="text-left py-3 px-4 text-white font-semibold">NextDeploy</th>
              <th className="text-left py-3 px-4 text-white font-semibold">Kamal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Health checks</strong></td>
              <td className="py-3 px-4">PM2-like, automatic</td>
              <td className="py-3 px-4">Manual configuration</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Auto-restart</strong></td>
              <td className="py-3 px-4">Built-in</td>
              <td className="py-3 px-4">Via Docker restart policy</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Metrics</strong></td>
              <td className="py-3 px-4">CPU, memory, disk</td>
              <td className="py-3 px-4">Via external tools</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><strong className="text-white">Logs</strong></td>
              <td className="py-3 px-4">Aggregated, searchable</td>
              <td className="py-3 px-4">Docker logs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Complete Comparison Table</h2>
      
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4 text-white font-semibold">Feature</th>
              <th className="text-left py-3 px-4 text-white font-semibold">NextDeploy</th>
              <th className="text-left py-3 px-4 text-white font-semibold">Kamal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Framework</strong></td>
              <td className="py-3 px-4">Next.js only</td>
              <td className="py-3 px-4">Any</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Language</strong></td>
              <td className="py-3 px-4">Go</td>
              <td className="py-3 px-4">Ruby</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Secrets</strong></td>
              <td className="py-3 px-4">Doppler-first</td>
              <td className="py-3 px-4">.env files</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Proxy</strong></td>
              <td className="py-3 px-4">Caddy</td>
              <td className="py-3 px-4">Traefik</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Monitoring</strong></td>
              <td className="py-3 px-4">Built-in</td>
              <td className="py-3 px-4">External</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Zero-downtime</strong></td>
              <td className="py-3 px-4">Blue-green</td>
              <td className="py-3 px-4">Rolling</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Local testing</strong></td>
              <td className="py-3 px-4"><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">runimage</code></td>
              <td className="py-3 px-4">Manual</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><strong className="text-white">Maturity</strong></td>
              <td className="py-3 px-4">New (2026)</td>
              <td className="py-3 px-4">Mature (2022)</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><strong className="text-white">Community</strong></td>
              <td className="py-3 px-4">Growing</td>
              <td className="py-3 px-4">Large (Basecamp)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">When to Use NextDeploy</h2>
      
      <p className="text-gray-300 mb-4">Choose NextDeploy if you:</p>
      
      <ul className="space-y-2 mb-8 text-gray-300">
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span><strong>Only deploy Next.js</strong> apps</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Want <strong>Doppler integration</strong> for secrets</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Need <strong>automatic Next.js optimization</strong></span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Want <strong>PM2-like monitoring</strong> built-in</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Prefer <strong>opinionated, focused tools</strong></span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">When to Use Kamal</h2>
      
      <p className="text-gray-300 mb-4">Choose Kamal if you:</p>
      
      <ul className="space-y-2 mb-8 text-gray-300">
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Deploy <strong>multiple frameworks</strong> (Rails, Go, etc.)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Need <strong>maximum flexibility</strong></span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Want <strong>battle-tested</strong> deployment tool (from Basecamp)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Prefer <strong>generic, framework-agnostic</strong> tools</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Already use <strong>Traefik</strong> for routing</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Philosophy</h2>

      <h3 className="text-xl font-semibold text-emerald-400 mt-8 mb-3">Kamal</h3>
      <blockquote className="border-l-4 border-emerald-600 pl-4 py-2 text-gray-300 italic mb-6">
        "Deploy web apps anywhere from bare metal to cloud VMs using Docker"
        <br />
        <span className="text-sm font-normal">Approach: Framework-agnostic, maximum flexibility</span>
      </blockquote>

      <h3 className="text-xl font-semibold text-emerald-400 mt-8 mb-3">NextDeploy</h3>
      <blockquote className="border-l-4 border-emerald-600 pl-4 py-2 text-gray-300 italic">
        "Deploy Next.js your way. No lock-in. Full control."
        <br />
        <span className="text-sm font-normal">Approach: Next.js-specific, opinionated simplicity</span>
      </blockquote>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Summary</h2>
      
      <p className="text-gray-300">
        Both tools are excellent. NextDeploy is specialized for Next.js with built-in optimizations and Doppler integration, while Kamal is more flexible for any framework. Choose based on your specific needs.
      </p>
    </div>
  )
}
