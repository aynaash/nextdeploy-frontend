export default function FirstDeployment() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-6">Your First Deployment</h1>
      
      <p className="text-gray-300 text-lg mb-8">
        Learn how to deploy your first Next.js application with NextDeploy in just a few steps.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Prerequisites</h2>
      
      <p className="text-gray-300 mb-4">Make sure you have:</p>
      
      <ul className="space-y-2 mb-8 text-gray-300">
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>NextDeploy CLI installed</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>A Next.js project ready to deploy</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Docker installed locally</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>A VPS with SSH access</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span>Doppler account for secrets (optional)</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step-by-Step Guide</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Step 1: Initialize Your Project</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">
{`cd your-nextjs-project
nextdeploy init`}
        </code>
      </pre>

      <p className="text-gray-300 mb-8">This creates:
        <ul className="space-y-1 mt-2 text-gray-300">
          <li>• <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy.yml</code> - Configuration file</li>
          <li>• <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">Dockerfile</code> - Docker image definition</li>
          <li>• <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">.dockerignore</code> - Files to exclude from Docker build</li>
        </ul>
      </p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Step 2: Configure Your Deployment</h3>
      
      <p className="text-gray-300 mb-4">Edit <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy.yml</code> with your VPS details:</p>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`version: "1.0"

app:
  name: my-app
  domain: myapp.com          # Your domain
  port: 3000

docker:
  image: username/my-app     # Your Docker image name
  registry: ghcr.io          # Your registry

deployment:
  server:
    host: 192.0.2.123        # Your VPS IP
    user: deploy
    ssh_key: ~/.ssh/id_rsa`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Step 3: Build Your Image</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">nextdeploy build</code>
      </pre>

      <p className="text-gray-300 mb-8">This builds a Docker image optimized for your Next.js app and tags it with your git commit hash.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Step 4: Test Locally (Optional)</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">nextdeploy runimage</code>
      </pre>

      <p className="text-gray-300 mb-8">Test your production build locally before deploying to the server.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Step 5: Deploy!</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">nextdeploy ship --serve</code>
      </pre>

      <p className="text-gray-300 mb-8">The <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">--serve</code> flag sets up Caddy for automatic HTTPS with Let's Encrypt.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Step 6: Check Status</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">
{`nextdeploy status        # Overall status
nextdeploy logs --follow  # View logs in real-time`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">What Happens During Deployment</h2>
      
      <ol className="space-y-3 text-gray-300 list-decimal list-inside mb-8">
        <li>SSH connection to your server is verified</li>
        <li>Configuration files are transferred</li>
        <li>Docker image is pulled to your server</li>
        <li>Container is started with health checks enabled</li>
        <li>Caddy reverse proxy is configured (if using --serve)</li>
        <li>Health check is performed to confirm deployment</li>
      </ol>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Common Issues</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">SSH Connection Failed</h3>
      
      <p className="text-gray-300 mb-4">Make sure your SSH key is properly configured:</p>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">ssh -i ~/.ssh/id_rsa deploy@192.0.2.123</code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Port Already in Use</h3>
      
      <p className="text-gray-300 mb-4">If port 3000 is already in use, change it in <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy.yml</code>:</p>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`app:
  port: 8080`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Next Steps</h2>
      
      <ul className="space-y-3 text-gray-300 list-decimal list-inside mb-8">
        <li><a href="/docs/secrets" className="text-emerald-400 hover:text-emerald-300">Set up secrets</a> with Doppler</li>
        <li><a href="/docs/configuration" className="text-emerald-400 hover:text-emerald-300">Learn advanced configuration</a></li>
        <li><a href="/docs/cli-reference" className="text-emerald-400 hover:text-emerald-300">Explore all CLI commands</a></li>
      </ul>
    </div>
  )
}
