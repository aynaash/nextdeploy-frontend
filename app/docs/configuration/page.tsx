export default function Configuration() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-6">Configuration Guide</h1>

      <p className="text-gray-300 text-lg mb-8">
        Complete reference for <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy.yml</code> configuration.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Core Target Configuration</h2>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
          {`version: 1.0
target_type: "vps" # Choose "vps" or "serverless"
app:
  name: my-app
  environment: production
  domain: app.example.com`}
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

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">AWS Serverless Target</h2>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
          {`target_type: "serverless"
serverless:
  provider: "aws"
  region: "us-east-1"
  s3_bucket: "my-nextjs-assets"`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Required Environment Variables</h3>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
          {`AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Linux VPS Target</h2>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
          {`target_type: "vps"
servers:
  - host: 192.168.1.100         # VPS IP address
    ssh_key: "~/.ssh/id_rsa"    # Path to local SSH Config Key`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Symlink Architecture Options</h3>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
          {`deployment:
  keep_releases: 5     # Number of old deployments to keep on disk for rollbacks`}
        </code>
      </pre>

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
