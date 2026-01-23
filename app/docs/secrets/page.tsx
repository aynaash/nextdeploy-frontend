export default function Secrets() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-6">Secret Management with Doppler</h1>
      
      <p className="text-gray-300 text-lg mb-8">
        NextDeploy is <strong>Doppler-first</strong> for managing secrets. No <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">.env</code> files, no git commits with secrets, just secure, encrypted secret management.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why Doppler?</h2>
      
      <ul className="space-y-2 mb-8 text-gray-300">
        <li className="flex gap-3">
          <span className="text-emerald-400">🔐</span>
          <span><strong>Encrypted</strong> - Secrets encrypted at rest and in transit</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">🌍</span>
          <span><strong>Environment-scoped</strong> - dev, staging, prod configs</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">👥</span>
          <span><strong>Team-friendly</strong> - Share secrets securely</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">🔄</span>
          <span><strong>Auto-sync</strong> - Update secrets without redeploying</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">📊</span>
          <span><strong>Audit logs</strong> - Track who changed what</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Setup</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. Create Doppler Account</h3>
      <p className="text-gray-300 mb-6">Sign up at <a href="https://doppler.com" className="text-emerald-400 hover:text-emerald-300">doppler.com</a> (free tier available).</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. Install Doppler CLI</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# macOS
brew install dopplerhq/cli/doppler

# Linux
curl -Ls https://cli.doppler.com/install.sh | sh

# Windows
scoop install doppler`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">3. Login</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">doppler login</code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">4. Create Project</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">doppler projects create my-app</code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">5. Set Up Environments</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# Development
doppler setup --project my-app --config dev

# Staging
doppler setup --project my-app --config stg

# Production
doppler setup --project my-app --config prd`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Adding Secrets</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Via CLI</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# Switch to production config
doppler setup --project my-app --config prd

# Add secrets
doppler secrets set DATABASE_URL="postgresql://..."
doppler secrets set API_KEY="sk_live_..."
doppler secrets set STRIPE_SECRET="sk_..."`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Via Dashboard</h3>
      
      <ol className="space-y-2 mb-8 text-gray-300 list-decimal list-inside">
        <li>Go to <a href="https://dashboard.doppler.com" className="text-emerald-400 hover:text-emerald-300">dashboard.doppler.com</a></li>
        <li>Select your project</li>
        <li>Select environment (dev/stg/prd)</li>
        <li>Click "Add Secret"</li>
        <li>Enter name and value</li>
      </ol>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Using Secrets Locally</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Development</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# Run Next.js with Doppler
doppler run -- npm run dev

# Or export to shell
eval $(doppler secrets download --no-file --format env-no-quotes)
npm run dev`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Build with Secrets</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">doppler run -- nextdeploy build</code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Using Secrets in Production</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Method 1: Doppler Service Token (Recommended)</h3>

      <ol className="space-y-4 mb-8 text-gray-300 list-decimal list-inside">
        <li>
          <strong className="text-white">Generate service token:</strong>
          <pre className="bg-slate-900 border border-slate-700 rounded-lg p-3 mt-2 overflow-x-auto">
            <code className="text-emerald-400">doppler configs tokens create production --project my-app</code>
          </pre>
        </li>
        <li>
          <strong className="text-white">Add to server:</strong>
          <pre className="bg-slate-900 border border-slate-700 rounded-lg p-3 mt-2 overflow-x-auto">
            <code className="text-emerald-400">ssh deploy@your-server
echo "DOPPLER_TOKEN=dp.st.xxx" | sudo tee -a /etc/environment</code>
          </pre>
        </li>
        <li>
          <strong className="text-white">Update nextdeploy.yml:</strong>
          <pre className="bg-slate-900 border border-slate-700 rounded-lg p-3 mt-2 overflow-x-auto text-sm">
            <code className="text-emerald-400">{`secrets:
  provider: doppler
  project: my-app
  config: prd`}</code>
          </pre>
        </li>
        <li>
          <strong className="text-white">Deploy:</strong>
          <pre className="bg-slate-900 border border-slate-700 rounded-lg p-3 mt-2 overflow-x-auto">
            <code className="text-emerald-400">nextdeploy ship</code>
          </pre>
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Common Secrets</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Database</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`doppler secrets set DATABASE_URL="postgresql://user:pass@host:5432/db"
doppler secrets set REDIS_URL="redis://localhost:6379"`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Authentication</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`doppler secrets set NEXTAUTH_SECRET="your-secret-here"
doppler secrets set NEXTAUTH_URL="https://myapp.com"
doppler secrets set GITHUB_CLIENT_ID="..."
doppler secrets set GITHUB_CLIENT_SECRET="..."`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">APIs</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`doppler secrets set STRIPE_SECRET_KEY="sk_live_..."
doppler secrets set SENDGRID_API_KEY="SG...."
doppler secrets set AWS_ACCESS_KEY_ID="..."
doppler secrets set AWS_SECRET_ACCESS_KEY="..."`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Best Practices</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. Never Commit Secrets</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# .gitignore
.env
.env.*
!.env.example
master.key
*.encrypted`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. Use .env.example</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# .env.example
DATABASE_URL=postgresql://localhost/myapp_dev
API_KEY=your_api_key_here
STRIPE_SECRET=sk_test_...`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">3. Rotate Secrets Regularly</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">
{`# Generate new secret
doppler secrets set API_KEY="new_key_here"

# Restart app to pick up changes
nextdeploy restart`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Troubleshooting</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Secrets not loading</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# Check current config
doppler configure get

# Download secrets to verify
doppler secrets download --no-file`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Invalid token</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# Re-login
doppler login

# Verify setup
doppler setup`}
        </code>
      </pre>
    </div>
  )
}
