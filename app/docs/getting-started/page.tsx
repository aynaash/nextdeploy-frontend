export default function GettingStarted() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-6">Getting Started with NextDeploy</h1>
      
      <p className="text-gray-300 text-lg mb-8">
        Welcome to NextDeploy! This guide will help you deploy your first Next.js application in under 5 minutes.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">What is NextDeploy?</h2>
      <p className="text-gray-300 mb-4">
        NextDeploy is a self-hosted deployment platform built exclusively for Next.js applications. Think of it as your own personal Vercel, but with:
      </p>
      
      <ul className="space-y-2 mb-8 text-gray-300">
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span><strong>Full control</strong> - Deploy to any VPS you own</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span><strong>Zero lock-in</strong> - No vendor dependencies</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span><strong>Transparent</strong> - See every step of the deployment</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span><strong>Cost-effective</strong> - Pay only for your VPS ($5-20/month)</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Prerequisites</h2>
      <p className="text-gray-300 mb-4">Before you begin, make sure you have:</p>
      
      <ul className="space-y-2 mb-8 text-gray-300">
        <li className="flex gap-3">
          <span className="text-emerald-400">•</span>
          <span><strong>A Next.js project</strong> (any version)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">•</span>
          <span><strong>Docker installed</strong> on your local machine</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">•</span>
          <span><strong>A VPS server</strong> (DigitalOcean, Hetzner, AWS, etc.)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">•</span>
          <span><strong>SSH access</strong> to your server</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Installation</h2>
      
      <h3 className="text-xl font-semibold text-white mt-8 mb-3">CLI (All Platforms)</h3>
      <p className="text-gray-300 mb-4">Install the NextDeploy CLI using webi:</p>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">curl https://webi.sh/nextdeploy | sh</code>
      </pre>

      <p className="text-gray-300 mb-8">Or download directly from <a href="#" className="text-emerald-400 hover:text-emerald-300">GitHub Releases</a>.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Daemon (Linux Servers Only)</h3>
      <p className="text-gray-300 mb-4">On your VPS, install the daemon:</p>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">
{`curl https://webi.sh/nextdeployd | sh
sudo systemctl enable nextdeployd
sudo systemctl start nextdeployd`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Quick Start</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. Initialize Your Project</h3>
      <p className="text-gray-300 mb-4">Navigate to your Next.js project and run:</p>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">
{`cd my-nextjs-app
nextdeploy init`}
        </code>
      </pre>

      <p className="text-gray-300 mb-8">This creates:
        <ul className="space-y-1 mt-2 text-gray-300">
          <li>• <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy.yml</code> - Configuration file</li>
          <li>• <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">Dockerfile</code> - Optimized for Next.js</li>
        </ul>
      </p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. Configure Deployment</h3>
      <p className="text-gray-300 mb-4">Edit <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy.yml</code>:</p>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`version: "1.0"

app:
  name: my-app
  environment: production
  domain: myapp.com
  port: 3000

docker:
  image: username/my-app
  registry: ghcr.io
  push: true

deployment:
  server:
    host: 192.0.2.123  # Your VPS IP
    user: deploy
    ssh_key: ~/.ssh/id_rsa`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">3. Build Your Image</h3>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">nextdeploy build</code>
      </pre>

      <p className="text-gray-300 mb-8">This will:
        <ul className="space-y-1 mt-2 text-gray-300">
          <li>• Build an optimized Docker image</li>
          <li>• Tag it with your git commit hash</li>
          <li>• Optionally push to your registry</li>
        </ul>
      </p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">4. Deploy to Your Server</h3>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">nextdeploy ship</code>
      </pre>

      <p className="text-gray-300 mb-8">This will:
        <ul className="space-y-1 mt-2 text-gray-300">
          <li>• Transfer necessary files to your server</li>
          <li>• Pull the Docker image</li>
          <li>• Deploy the container</li>
          <li>• Verify the deployment</li>
        </ul>
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Next Steps</h2>
      <ul className="space-y-2 text-gray-300 mb-8">
        <li className="flex gap-3">
          <span className="text-emerald-400">→</span>
          <a href="/docs/configuration" className="text-emerald-400 hover:text-emerald-300">Configuration Guide</a> - Detailed config options
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">→</span>
          <a href="/docs/secrets" className="text-emerald-400 hover:text-emerald-300">Secret Management</a> - Using Doppler for secrets
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">→</span>
          <a href="/docs/cli-reference" className="text-emerald-400 hover:text-emerald-300">CLI Reference</a> - All commands explained
        </li>
      </ul>
    </div>
  )
}
