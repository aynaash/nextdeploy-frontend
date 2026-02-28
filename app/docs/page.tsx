import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function DocsIndex() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-white mb-6">NextDeploy: The Ultimate "Zero to Production" Engine</h1>

      <p className="text-gray-300 text-lg mb-8">
        NextDeploy is a lightning-fast, zero-configuration deployment engine built explicitly for <strong>Next.js</strong>. It bridges the gap between your local development environment and production—whether that means a native Linux VPS or a globally distributed Serverless AWS architecture.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">🚀 The Core Philosophy</h2>
      <p className="text-gray-300 mb-6">
        Docker is heavy. SSH pipelines are brittle. Vercel is expensive.
        NextDeploy believes in <strong>Native Execution</strong>. By utilizing Go, <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">systemd</code>, Caddy, and CloudFront natively, we orchestrate your fullstack Next.js applications using the bare-metal primitives of the web, guaranteeing maximum performance with zero overhead.
      </p>

      <hr className="border-slate-800 my-10" />

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">🏰 Our Main Moat: Fullstack Next.js on AWS (Serverless)</h2>
      <p className="text-gray-300 mb-4">
        While NextDeploy offers incredible zero-downtime VPS deployments, our true competitive advantage is our ability to natively deploy <strong>Fullstack Next.js to AWS Serverless</strong> without Vendor Lock-in.
      </p>

      <p className="text-gray-300 mb-4">When you configure NextDeploy for <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">target_type: "serverless"</code>:</p>
      <ol className="list-decimal pl-6 space-y-2 mb-6 text-gray-300">
        <li><strong>Intelligent Payload Splitting:</strong> The CLI natively analyzes your <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">.nextdeploy/metadata.json</code> Route Plan.</li>
        <li><strong>CDN Static Offloading:</strong> All <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">/_next/static/*</code> assets and <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">public/</code> files are zipped and securely synced directly to an <strong>Amazon S3 Bucket</strong>, fronted by <strong>CloudFront</strong> with <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">immutable</code> Edge caching.</li>
        <li><strong>The Lambda Web Adapter:</strong> Your Next.js Node/Bun process is packaged alongside the AWS Lambda Web Adapter. This allows your standard Next.js SSR server, API routes, and Middleware to run unmodified inside an <strong>AWS Lambda Function</strong>.</li>
        <li><strong>Zero-Config Routing:</strong> NextDeploy automatically wires CloudFront to route static requests to S3 and dynamic/API requests to Lambda.</li>
      </ol>

      <p className="text-emerald-400 font-semibold mb-8">
        The Result: You get Vercel-like globally distributed auto-scaling and edge caching, all deployed directly into your AWS account where it costs pennies, entirely automated via the NextDeploy CLI.
      </p>

      <hr className="border-slate-800 my-10" />

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">💻 Getting Started (The Developer Experience)</h2>
      <p className="text-gray-300 mb-8">NextDeploy is designed to be frictionless.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. Initialization</h3>
      <p className="text-gray-300 mb-4">Run this once in your Next.js project directory:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-2 overflow-x-auto text-sm">
        <code className="text-emerald-400">nextdeploy init</code>
      </pre>
      <p className="text-sm text-gray-400 italic mb-8">NextDeploy will instantly analyze your Next.js project, identifying your Router Type (App/Pages), Output Mode, and static/dynamic route counts. It scaffolds a nextdeploy.yml configuration file.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. Configure Your Target</h3>
      <p className="text-gray-300 mb-4">Edit your <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeploy.yml</code>:</p>

      <p className="text-gray-300 mb-2 font-semibold">For VPS:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 overflow-x-auto text-sm">
        <code className="text-emerald-400">
          {`version: 1.0
target_type: "vps"
servers:
  - host: 192.168.1.100
    ssh_key: "~/.ssh/id_rsa"`}
        </code>
      </pre>

      <p className="text-gray-300 mb-2 font-semibold">For Serverless (AWS):</p>
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

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">3. Server Preparation (VPS Only)</h3>
      <p className="text-gray-300 mb-4">If deploying to a VPS, run:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-2 overflow-x-auto text-sm">
        <code className="text-emerald-400">nextdeploy prepare</code>
      </pre>
      <p className="text-sm text-gray-400 italic mb-8">NextDeploy securely connects via Trust-On-First-Use (TOFU) SSH, installs Node.js/Bun, configures Caddy, and installs the nextdeployd daemon.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">4. Continuous Integration (Zero-Touch)</h3>
      <p className="text-gray-300 mb-4">Don't want to deploy from your laptop?</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-2 overflow-x-auto text-sm">
        <code className="text-emerald-400">nextdeploy generate-ci</code>
      </pre>
      <p className="text-sm text-gray-400 italic mb-8">This generates a .github/workflows/nextdeploy.yml GitHub Action. Simply add your SSH Key to GitHub Secrets, push to main, and NextDeploy handles the rest automatically in the cloud.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">5. Deployment (The Act of Shipping)</h3>
      <p className="text-gray-300 mb-4">When you are ready, or when your CI/CD pipeline triggers:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-2 overflow-x-auto text-sm">
        <code className="text-emerald-400">
          {`nextdeploy build
nextdeploy deploy`}
        </code>
      </pre>
      <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-300">
        <li>The CLI analyzes your route plan.</li>
        <li><strong>If VPS:</strong> It uploads your bundle, and <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">nextdeployd</code> extracts it to a new <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">release/</code> directory, orchestrating a zero-downtime port swap and Caddy reload.</li>
        <li><strong>If Serverless:</strong> It executes the AWS S3 Sync and Lambda Web Adapter wrap, deploying your fullstack app infinitely scalable.</li>
      </ul>

      <hr className="border-slate-800 my-10" />

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">🛠 Advanced Features</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Zero-Downtime Hot Swaps (VPS)</h3>
      <p className="text-gray-300 mb-6">
        NextDeploy uses a release/symlink architecture. Every deployment is a new timestamped folder. The daemon dynamically spins up the new process on a vacant port, health-checks it, and instantly points Caddy to the new port before seamlessly draining the old process. You experience 0 seconds of 502 Bad Gateway errors.
      </p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Instant Rollbacks</h3>
      <p className="text-gray-300 mb-4">Because old releases are kept on disk:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-2 overflow-x-auto text-sm">
        <code className="text-emerald-400">nextdeploy rollback</code>
      </pre>
      <p className="text-sm text-gray-400 italic mb-6">Instantly shifts the /current symlink to the previous release and reloads Caddy.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Native Log Streaming</h3>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-2 overflow-x-auto text-sm">
        <code className="text-emerald-400">nextdeploy logs --route /api/webhook</code>
      </pre>
      <p className="text-sm text-gray-400 italic mb-8">Streams native systemd journal logs, with the ability to filter by specific Next.js request paths.</p>
    </div>
  )
}
