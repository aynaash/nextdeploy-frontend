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
        <li className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>A Linux VPS (Ubuntu/Debian) or AWS Account</span>
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
          <li>• <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy.yml</code> - Primary configuration</li>
          <li>• <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">.nextdeploy/</code> - Auto-generated route metadata cache</li>
        </ul>
      </p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Step 2: Configure Your Deployment</h3>

      <p className="text-gray-300 mb-4">Edit <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy.yml</code> for your target environment:</p>

      <p className="text-gray-300 mb-2 font-semibold">For AWS Serverless:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
          {`version: 1.0
target_type: "serverless"
serverless:
  provider: "aws"
  region: "us-east-1"
  s3_bucket: "my-nextjs-assets"`}
        </code>
      </pre>

      <p className="text-gray-300 mb-2 font-semibold">For Linux VPS:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
          {`version: 1.0
target_type: "vps"
servers:
  - host: 192.168.1.100
    ssh_key: "~/.ssh/id_rsa"`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Step 3: Server Preparation (VPS Only)</h3>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">nextdeploy prepare</code>
      </pre>

      <p className="text-gray-300 mb-8">NextDeploy will securely connect to your server, install dependencies, and configure the background daemon automatically.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Step 4: Continuous Integration (Zero-Touch)</h3>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">nextdeploy generate-ci</code>
      </pre>

      <p className="text-gray-300 mb-8">This generates a GitHub Actions workflow. Add your secrets to GitHub and NextDeploy handles everything on Git Push.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Step 5: Deploy Manually</h3>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">
          {`nextdeploy build
nextdeploy deploy`}
        </code>
      </pre>

      <p className="text-gray-300 mb-8">The CLI analyzes your Route Plan and executes a Zero-Downtime port swap (VPS) or S3 static synchronization (AWS).</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Step 6: Instant Rollbacks</h3>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">
          {`nextdeploy rollback`}
        </code>
      </pre>

      <p className="text-gray-300 mb-8">Because NextDeploy uses a Symlink architecture on VPS targets, rollbacks occur instantly without rebuilds.</p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">What Happens During Deployment</h2>

      <ol className="space-y-3 text-gray-300 list-decimal list-inside mb-8">
        <li>Project analyzed to determine Next.js Output Mode</li>
        <li><strong>VPS:</strong> Bundle transferred, extracted to isolated release directory</li>
        <li><strong>VPS:</strong> Dynamic port allocated, Next.js server booted via systemd</li>
        <li><strong>VPS:</strong> Symlink updated to point to new release</li>
        <li><strong>VPS:</strong> Caddy config dynamically rewritten and reloaded without dropping traffic</li>
        <li><strong>AWS:</strong> Static assets intelligently pushed to S3/CloudFront</li>
        <li><strong>AWS:</strong> Lambda Web Adapter attached for Next.js SSR backend</li>
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
