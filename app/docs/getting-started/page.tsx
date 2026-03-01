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
          <span><strong>Native Execution</strong> - Run Next.js bare-metal, no overhead</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span><strong>Zero lock-in</strong> - No vendor dependencies</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">✓</span>
          <span><strong>Serverless Ready</strong> - Deploy natively to AWS Lambda/S3</span>
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
          <span><strong>A VPS Server</strong> (for Linux targets) OR an <strong>AWS Account</strong> (for Serverless targets)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">•</span>
          <span><strong>SSH access</strong> to your server</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Installation</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">CLI (All Platforms)</h3>
      <p className="text-gray-300 mb-4">Install the NextDeploy toolbelt using our global installer:</p>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">curl -sSf https://nextdeploy.one/install.sh | sh</code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Daemon (Linux Servers Only)</h3>
      <p className="text-gray-300 mb-4">On your VPS, set up the production engine:</p>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">
          {`curl -sSf https://nextdeploy.one/daemon.sh | sh`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Quick Start</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. Initialize Your Project</h3>
      <p className="text-gray-300 mb-4">Navigate to your Next.js project and run:</p>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">
          {`nextdeploy init`}
        </code>
      </pre>

      <p className="text-gray-300 mb-8">This scaffolds your project and generates a <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy.yml</code>.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. Ship It!</h3>
      <p className="text-gray-300 mb-4">The "Magic Button". Point it to your server/target and run:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">
          {`nextdeploy ship`}
        </code>
      </pre>

      <p className="text-gray-300 mb-8">This single command handles the entire lifecycle:
        <ul className="space-y-1 mt-2 text-gray-300">
          <li>• <strong>Build:</strong> Compiles your Next.js app for production.</li>
          <li>• <strong>Pack:</strong> Creates an atomic release artifact.</li>
          <li>• <strong>Transport:</strong> Uploads via secure SSH tunnels.</li>
          <li>• <strong>Activate:</strong> Performs a zero-downtime hot swap.</li>
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
