export default function Troubleshooting() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-6">Troubleshooting Guide</h1>

      <p className="text-gray-300 text-lg mb-8">
        Common issues and solutions when using NextDeploy's Native Execution engine.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Connection Issues</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">SSH connection failed</h3>

      <p className="text-emerald-400 font-semibold mb-3">Error:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 overflow-x-auto text-sm">
        <code className="text-emerald-400">Error: SSH connection failed: Permission denied (publickey)</code>
      </pre>

      <p className="text-emerald-400 font-semibold mb-3">Solution:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
          {`# Test SSH connection directly
ssh -i ~/.ssh/id_rsa deploy@YOUR_SERVER_IP

# Generate new SSH key if needed
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy key to server
ssh-copy-id -i ~/.ssh/id_rsa deploy@YOUR_SERVER_IP

# Update nextdeploy.yml with correct key path`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Runtime & Deployment Issues</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">NextDeploy Daemon Not Responding</h3>

      <p className="text-emerald-400 font-semibold mb-3">Error:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 overflow-x-auto text-sm">
        <code className="text-emerald-400">Connection refused to NextDeploy Daemon on port 8443</code>
      </pre>

      <p className="text-emerald-400 font-semibold mb-3">Solution:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
          {`# 1. SSH into your VPS
ssh deploy@YOUR_SERVER_IP

# 2. Check the daemon status
sudo systemctl status nextdeployd

# 3. Restart the daemon if necessary
sudo systemctl restart nextdeployd

# 4. Alternatively, replay the prepare step locally
nextdeploy prepare`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Application crashes on startup</h3>

      <p className="text-gray-300 mb-4"><strong className="text-white">Symptoms:</strong></p>
      <ul className="space-y-2 mb-8 text-gray-300 list-disc list-inside">
        <li>Systemd service enters a failed state</li>
        <li>Health checks fail during deployment</li>
        <li>502 Bad Gateway from Caddy</li>
      </ul>

      <p className="text-emerald-400 font-semibold mb-3">Debug steps:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
          {`# 1. Check systemd native logs via NextDeploy CLI
nextdeploy logs --tail 100

# 2. Re-run locally to ensure build succeeds
bun run build && bun run start

# 3. SSH in to check raw application logs
ssh deploy@SERVER journalctl -u nextdeploy-myapp.service -n 50 --no-pager

# 4. Check for missing runtime environment variables
doppler run -- nextdeploy deploy`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Port already in use</h3>

      <p className="text-emerald-400 font-semibold mb-3">Error:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 overflow-x-auto text-sm">
        <code className="text-emerald-400">Error: listen EADDRINUSE: address already in use :::3000</code>
      </pre>

      <p className="text-emerald-400 font-semibold mb-3">Solution:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
          {`# NextDeploy usually handles port swapping, but if a rogue process exists:

# 1. SSH into the server
ssh deploy@SERVER

# 2. Find the rogue process
sudo lsof -i :3000

# 3. Kill the process
sudo kill -9 PID`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Secret Management Issues (Doppler)</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Doppler token invalid</h3>

      <p className="text-emerald-400 font-semibold mb-3">Error:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 overflow-x-auto text-sm">
        <code className="text-emerald-400">Error: invalid Doppler token</code>
      </pre>

      <p className="text-emerald-400 font-semibold mb-3">Solution:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
          {`# Re-login to Doppler
doppler login

# Verify setup
doppler setup

# Check token
doppler configure get token`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Secrets not loading</h3>

      <p className="text-emerald-400 font-semibold mb-3">Error:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 overflow-x-auto text-sm">
        <code className="text-emerald-400">Error: DATABASE_URL is not defined</code>
      </pre>

      <p className="text-emerald-400 font-semibold mb-3">Solution:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
          {`# Verify secrets exist in Doppler
doppler secrets

# Force NextDeploy to re-sync environmental variables
nextdeploy deploy --sync-secrets`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Need Help?</h2>

      <ul className="space-y-3 text-gray-300 mb-8">
        <li className="flex gap-3">
          <span className="text-emerald-400">•</span>
          <span><a href="https://github.com/aynaash/nextdeploy/issues" className="text-emerald-400 hover:text-emerald-300">Report bugs</a> - GitHub Issues</span>
        </li>
        <li className="flex gap-3">
          <span className="text-emerald-400">•</span>
          <span><a href="https://github.com/aynaash/nextdeploy/discussions" className="text-emerald-400 hover:text-emerald-300">Ask questions</a> - GitHub Discussions</span>
        </li>
      </ul>
    </div>
  )
}
