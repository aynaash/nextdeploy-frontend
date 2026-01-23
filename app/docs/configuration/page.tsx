export default function Configuration() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-6">Configuration Guide</h1>
      
      <p className="text-gray-300 text-lg mb-8">
        Complete reference for <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy.yml</code> configuration.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">File Structure</h2>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`version: "1.0"
app: { }
docker: { }
deployment: { }
database: { }
monitoring: { }
backup: { }
ssl: { }`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">App Configuration</h2>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`app:
  name: my-app              # Unique app name
  environment: production   # development | staging | production
  domain: app.example.com   # Your domain
  port: 3000               # Internal app port`}
        </code>
      </pre>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4 text-white font-semibold">Field</th>
              <th className="text-left py-3 px-4 text-white font-semibold">Type</th>
              <th className="text-left py-3 px-4 text-white font-semibold">Required</th>
              <th className="text-left py-3 px-4 text-white font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">name</code></td>
              <td className="py-3 px-4">string</td>
              <td className="py-3 px-4"><span className="text-emerald-400">✓</span></td>
              <td className="py-3 px-4">Unique identifier for your app</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">environment</code></td>
              <td className="py-3 px-4">string</td>
              <td className="py-3 px-4"><span className="text-emerald-400">✓</span></td>
              <td className="py-3 px-4">Deployment environment</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">domain</code></td>
              <td className="py-3 px-4">string</td>
              <td className="py-3 px-4"><span className="text-gray-400">⚠️</span></td>
              <td className="py-3 px-4">Required for HTTPS setup</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">port</code></td>
              <td className="py-3 px-4">number</td>
              <td className="py-3 px-4"><span className="text-emerald-400">✓</span></td>
              <td className="py-3 px-4">Port your Next.js app listens on</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Docker Configuration</h2>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`docker:
  image: username/my-app    # Image name
  registry: ghcr.io         # ghcr.io | docker.io | ECR
  push: true                # Auto-push after build
  target: production        # Build target (multi-stage)
  platform: linux/amd64     # Target platform
  alwaysPull: true          # Always pull base images`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Registry Options</h3>

      <h4 className="text-lg font-semibold text-emerald-400 mt-6 mb-3">GitHub Container Registry (ghcr.io)</h4>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`docker:
  registry: ghcr.io
  username: your-github-username
  # Use GitHub Personal Access Token in Doppler`}
        </code>
      </pre>

      <h4 className="text-lg font-semibold text-emerald-400 mt-6 mb-3">AWS ECR</h4>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`docker:
  registry: 123456789.dkr.ecr.us-east-1.amazonaws.com
  # AWS credentials in Doppler or environment`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Deployment Configuration</h2>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`deployment:
  server:
    host: 192.0.2.123           # VPS IP address
    user: deploy                # SSH user
    ssh_key: ~/.ssh/id_rsa      # Path to SSH key
    use_sudo: false             # Use sudo for Docker commands
  
  container:
    name: my-app                # Container name
    restart: always             # always | on-failure | unless-stopped
    healthcheck:
      path: /api/health         # Health check endpoint
      interval: 30s             # Check interval
      timeout: 5s               # Timeout per check
      retries: 3                # Retries before restart`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Container Restart Policies</h3>
      
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4 text-white font-semibold">Policy</th>
              <th className="text-left py-3 px-4 text-white font-semibold">Behavior</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">always</code></td>
              <td className="py-3 px-4">Always restart, even after manual stop</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">on-failure</code></td>
              <td className="py-3 px-4">Restart only on failure (non-zero exit)</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-4"><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">unless-stopped</code></td>
              <td className="py-3 px-4">Restart unless manually stopped</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">no</code></td>
              <td className="py-3 px-4">Never restart automatically</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Environment-Specific Configs</h2>
      
      <p className="text-gray-300 mb-4">Create multiple config files:</p>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`nextdeploy.yml           # Default (development)
nextdeploy.staging.yml   # Staging
nextdeploy.prod.yml      # Production`}
        </code>
      </pre>

      <p className="text-gray-300 mb-8">Use with:</p>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">nextdeploy build --config nextdeploy.prod.yml</code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Validation</h2>
      
      <p className="text-gray-300 mb-4">Validate your configuration:</p>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">nextdeploy validate</code>
      </pre>
    </div>
  )
}
