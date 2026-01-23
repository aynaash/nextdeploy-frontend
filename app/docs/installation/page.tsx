export default function Installation() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-6">Installation</h1>
      
      <p className="text-gray-300 text-lg mb-8">
        Get NextDeploy up and running on your machine.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Install the CLI</h2>
      
      <p className="text-gray-300 mb-4">The fastest way to install NextDeploy CLI is using webi:</p>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">curl https://webi.sh/nextdeploy | sh</code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Verify Installation</h3>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">nextdeploy --version</code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Install Daemon (Server)</h2>
      
      <p className="text-gray-300 mb-4">On your VPS server, install the NextDeploy daemon:</p>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`ssh deploy@your-server-ip

# Install daemon
curl https://webi.sh/nextdeployd | sh

# Enable and start daemon
sudo systemctl enable nextdeployd
sudo systemctl start nextdeployd

# Verify
sudo systemctl status nextdeployd`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Requirements</h2>
      
      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Local Machine</h3>
      
      <ul className="space-y-2 mb-8 text-gray-300">
        <li className="flex gap-3">
          <span className="text-emerald-400">•</span>
          <span><strong>Docker</strong> - For building images</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">•</span>
          <span><strong>Node.js</strong> (optional) - For local development</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">•</span>
          <span><strong>Git</strong> - For version control</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Server (VPS)</h3>
      
      <ul className="space-y-2 mb-8 text-gray-300">
        <li className="flex gap-3">
          <span className="text-emerald-400">•</span>
          <span><strong>Linux server</strong> - Ubuntu 20.04+ or Debian 10+</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">•</span>
          <span><strong>Docker</strong> - Installed via daemon setup</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">•</span>
          <span><strong>SSH access</strong> - Key-based authentication</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">•</span>
          <span><strong>Open ports</strong> - 80, 443 (for HTTPS)</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Alternative Installation Methods</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Download Binary</h3>
      
      <p className="text-gray-300 mb-4">Download directly from <a href="#" className="text-emerald-400 hover:text-emerald-300">GitHub Releases</a>:</p>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# Download
curl -L https://github.com/aynaash/nextdeploy/releases/latest/download/nextdeploy-Linux-x86_64 -o nextdeploy

# Make executable
chmod +x nextdeploy

# Move to PATH
sudo mv nextdeploy /usr/local/bin/

# Verify
nextdeploy --version`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Install via Package Manager</h3>

      <p className="text-gray-300 mb-4"><strong className="text-white">Homebrew (macOS/Linux):</strong></p>
      
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">brew install nextdeploy</code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Next Steps</h2>
      
      <ol className="space-y-3 text-gray-300 list-decimal list-inside mb-8">
        <li><a href="/docs/getting-started" className="text-emerald-400 hover:text-emerald-300">Getting Started</a> - Deploy your first app</li>
        <li><a href="/docs/configuration" className="text-emerald-400 hover:text-emerald-300">Configuration</a> - Configure your deployment</li>
        <li><a href="/docs/cli-reference" className="text-emerald-400 hover:text-emerald-300">CLI Reference</a> - Learn all commands</li>
      </ol>
    </div>
  )
}
