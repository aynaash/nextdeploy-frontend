export default function CLIReference() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-6">CLI Reference</h1>

      <p className="text-gray-300 text-lg mb-8">
        Complete command reference for the NextDeploy CLI.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Global Flags</h2>

      <p className="text-gray-300 mb-4">All commands support these flags:</p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4 text-white font-semibold">Flag</th>
              <th className="text-left py-3 px-4 text-white font-semibold">Short</th>
              <th className="text-left py-3 px-4 text-white font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">--config</code></td>
              <td className="py-3 px-4"><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">-c</code></td>
              <td className="py-3 px-4">Path to config file (default: <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy.yml</code>)</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">--verbose</code></td>
              <td className="py-3 px-4"><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">-v</code></td>
              <td className="py-3 px-4">Enable verbose logging</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">--help</code></td>
              <td className="py-3 px-4"><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">-h</code></td>
              <td className="py-3 px-4">Show help for command</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">--version</code></td>
              <td className="py-3 px-4"></td>
              <td className="py-3 px-4">Show version information</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Core Commands</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">nextdeploy init</h3>
      <p className="text-gray-300 mb-4">Initialize a Next.js project for deployment.</p>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 overflow-x-auto">
        <code className="text-emerald-400">nextdeploy init [flags]</code>
      </pre>

      <p className="text-gray-300 mb-4"><strong className="text-white">What it does:</strong></p>
      <ul className="space-y-2 mb-6 text-gray-300">
        <li>• Creates <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy.yml</code> configuration</li>
        <li>• Analyzes Next.js Route Plan</li>
        <li>• Prepares <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">release/</code> execution environment</li>
      </ul>

      <p className="text-gray-300 mb-4"><strong className="text-white">Example:</strong></p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">
          {`nextdeploy init
nextdeploy init --template minimal`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">nextdeploy build</h3>
      <p className="text-gray-300 mb-4">Build a native deployment bundle for your application.</p>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 overflow-x-auto">
        <code className="text-emerald-400">nextdeploy build [flags]</code>
      </pre>

      <p className="text-gray-300 mb-4"><strong className="text-white">What it does:</strong></p>
      <ul className="space-y-2 mb-6 text-gray-300">
        <li>• Builds deployment bundle with smart tagging</li>
        <li>• Tags with git commit hash</li>
        <li>• Optionally pushes to registry</li>
      </ul>

      <p className="text-gray-300 mb-4"><strong className="text-white">Common flags:</strong></p>
      <ul className="space-y-2 mb-6 text-gray-300">
        <li><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">--no-cache</code> - Build without cache</li>
        <li><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">--push</code> - Push to registry after build</li>
      </ul>

      <p className="text-gray-300 mb-4"><strong className="text-white">Examples:</strong></p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">
          {`# Basic build
nextdeploy build

# Build and push
nextdeploy build --push

# Production build (no cache)
NODE_ENV=production nextdeploy build --no-cache`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">nextdeploy ship</h3>
      <p className="text-gray-300 mb-4">Deploy your application to a server.</p>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 overflow-x-auto">
        <code className="text-emerald-400">nextdeploy ship [flags]</code>
      </pre>

      <p className="text-gray-300 mb-4"><strong className="text-white">What it does:</strong></p>
      <ol className="space-y-2 mb-6 text-gray-300 list-decimal list-inside">
        <li>Verifies server connectivity</li>
        <li>Transfers configuration files</li>
        <li>Synchronizes release bundle</li>
        <li>Executes zero-downtime port swap</li>
        <li>Verifies deployment</li>
      </ol>

      <p className="text-gray-300 mb-4"><strong className="text-white">Common flags:</strong></p>
      <ul className="space-y-2 mb-6 text-gray-300">
        <li><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">--serve</code> - Configure Caddy for HTTPS</li>
        <li><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">--bluegreen</code> - Use blue-green deployment</li>
        <li><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">--dry-run</code> - Simulate deployment</li>
      </ul>

      <p className="text-gray-300 mb-4"><strong className="text-white">Examples:</strong></p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">
          {`# Basic deployment
nextdeploy ship

# With HTTPS setup
nextdeploy ship --serve

# Blue-green deployment
nextdeploy ship --bluegreen`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">nextdeploy logs</h3>
      <p className="text-gray-300 mb-4">View application logs.</p>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 overflow-x-auto">
        <code className="text-emerald-400">nextdeploy logs [flags]</code>
      </pre>

      <p className="text-gray-300 mb-4"><strong className="text-white">Common flags:</strong></p>
      <ul className="space-y-2 mb-6 text-gray-300">
        <li><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">--follow</code> - Follow log output in real-time</li>
        <li><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">--tail N</code> - Show last N lines</li>
        <li><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">--since TIME</code> - Show logs since timestamp</li>
      </ul>

      <p className="text-gray-300 mb-4"><strong className="text-white">Examples:</strong></p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">
          {`# View last 100 lines
nextdeploy logs

# Follow logs in real-time
nextdeploy logs --follow

# Last 50 lines
nextdeploy logs --tail 50`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">nextdeploy status</h3>
      <p className="text-gray-300 mb-4">Check deployment status.</p>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">
          {`Application: myapp
Status: running
Uptime: 2d 5h 32m
Health: healthy
CPU: 12%
Memory: 256MB / 1GB`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Other Commands</h2>

      <ul className="space-y-3 mb-8 text-gray-300">
        <li><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy restart</code> - Gracefully restart the application</li>
        <li><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy stop</code> - Stop the application</li>
        <li><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy start</code> - Start the application</li>
        <li><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy rollback [version]</code> - Rollback to previous version</li>
        <li><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy validate</code> - Validate configuration</li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Complete Deployment Workflow</h2>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
          {`# 1. Initialize
nextdeploy init

# 2. Configure
vim nextdeploy.yml

# 3. Build
nextdeploy build

# 4. Deploy
nextdeploy ship --serve

# 5. Check status
nextdeploy status

# 6. View logs
nextdeploy logs --follow`}
        </code>
      </pre>
    </div>
  )
}
