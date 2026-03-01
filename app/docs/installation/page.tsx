export default function Installation() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-6">Installation</h1>

      <p className="text-gray-300 text-lg mb-8">
        Get NextDeploy up and running on your machine and server.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">CLI Installation</h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
          <h3 className="text-xl font-semibold text-white mb-4">Linux / macOS</h3>
          <p className="text-gray-400 text-sm mb-4">The fastest way to install on Unix-like systems:</p>
          <pre className="bg-slate-950 border border-slate-700 rounded-lg p-4 overflow-x-auto">
            <code className="text-emerald-400">curl -sSf https://nextdeploy.one/install.sh | sh</code>
          </pre>
        </div>

        <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
          <h3 className="text-xl font-semibold text-white mb-4">Windows</h3>
          <p className="text-gray-400 text-sm mb-4">Run this in your PowerShell or Command Prompt:</p>
          <pre className="bg-slate-950 border border-slate-700 rounded-lg p-4 overflow-x-auto">
            <code className="text-emerald-400">curl -sSf https://nextdeploy.one/install.bat | sh</code>
          </pre>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Daemon Installation (Server)</h2>
      <p className="text-gray-300 mb-4">
        On your Ubuntu/Debian server, run the following to install the daemon, Caddy, and setup systemd services:
      </p>

      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">curl -sSf https://nextdeploy.one/daemon.sh | sudo sh</code>
      </pre>

      <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-6 mb-12">
        <h4 className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
          <span>🧠</span> What this script does
        </h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>• Installs Docker automatically if missing</li>
          <li>• Downloads the latest stable <code className="bg-black/40 px-1 rounded">nextdeployd</code> binary</li>
          <li>• Configures systemd for automatic health monitoring and restarts</li>
          <li>• Sets up root-restricted storage for secrets and release history</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Manual Installation</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Download Binaries</h3>
          <p className="text-gray-300 mb-4">You can download platform-specific binaries directly from <a href="https://github.com/Golangcodes/nextdeploy/releases" className="text-emerald-400 hover:text-emerald-300">GitHub Releases</a>.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">macOS (Homebrew)</h3>
          <p className="text-gray-300 mb-4">We also maintain a Homebrew formula:</p>
          <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 overflow-x-auto">
            <code className="text-emerald-400">brew install nextdeploy</code>
          </pre>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Requirements</h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-4">Local Machine</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span>
              <span>SSH Client (OpenSSH)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Git installed in path</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Access to your server's SSH key</span>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-4">Server (VPS)</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Ubuntu 20.04+ or Debian 11+</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Root or Sudo privileges</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Port 80/443 open for Caddy</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Next Steps</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        <a href="/docs/getting-started" className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors font-medium">Quick Start Guide</a>
        <a href="/docs/architecture" className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium border border-slate-700">Deep Dive Architecture</a>
      </div>
    </div>
  )
}
