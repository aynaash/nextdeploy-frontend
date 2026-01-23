export default function Troubleshooting() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-6">Troubleshooting Guide</h1>
      
      <p className="text-gray-300 text-lg mb-8">
        Common issues and solutions when using NextDeploy.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Installation Issues</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Docker not found</h3>
      
      <p className="text-emerald-400 font-semibold mb-3">Error:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 overflow-x-auto text-sm">
        <code className="text-emerald-400">Error: docker is not installed or not functioning</code>
      </pre>

      <p className="text-emerald-400 font-semibold mb-3">Solution:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# Check Docker installation
docker --version

# Start Docker (macOS/Windows)
open -a Docker

# Start Docker (Linux)
sudo systemctl start docker

# Verify Docker is running
docker ps`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Permission denied (Docker)</h3>
      
      <p className="text-emerald-400 font-semibold mb-3">Error:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 overflow-x-auto text-sm">
        <code className="text-emerald-400">permission denied while trying to connect to the Docker daemon socket</code>
      </pre>

      <p className="text-emerald-400 font-semibold mb-3">Solution:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# Add user to docker group (Linux)
sudo usermod -aG docker $USER

# Log out and back in, or run:
newgrp docker

# Verify
docker ps`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Build Issues</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Build fails with "no Dockerfile found"</h3>
      
      <p className="text-emerald-400 font-semibold mb-3">Error:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 overflow-x-auto text-sm">
        <code className="text-emerald-400">Error: no Dockerfile found in current directory</code>
      </pre>

      <p className="text-emerald-400 font-semibold mb-3">Solution:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# Initialize project first
nextdeploy init

# Or create Dockerfile manually`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Out of disk space</h3>
      
      <p className="text-emerald-400 font-semibold mb-3">Error:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 overflow-x-auto text-sm">
        <code className="text-emerald-400">Error: no space left on device</code>
      </pre>

      <p className="text-emerald-400 font-semibold mb-3">Solution:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# Clean up Docker
docker system prune -a

# Remove unused images
docker image prune -a

# Check disk space
df -h`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Deployment Issues</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">SSH connection failed</h3>
      
      <p className="text-emerald-400 font-semibold mb-3">Error:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 overflow-x-auto text-sm">
        <code className="text-emerald-400">Error: SSH connection failed: Permission denied (publickey)</code>
      </pre>

      <p className="text-emerald-400 font-semibold mb-3">Solution:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# Test SSH connection
ssh -i ~/.ssh/id_rsa deploy@YOUR_SERVER_IP

# Generate new SSH key if needed
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy key to server
ssh-copy-id -i ~/.ssh/id_rsa deploy@YOUR_SERVER_IP

# Update nextdeploy.yml with correct key path`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Container fails to start</h3>
      
      <p className="text-emerald-400 font-semibold mb-3">Error:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 overflow-x-auto text-sm">
        <code className="text-emerald-400">Error: container exited with code 1</code>
      </pre>

      <p className="text-emerald-400 font-semibold mb-3">Solution:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# Check container logs on server
ssh deploy@YOUR_SERVER docker logs CONTAINER_NAME

# Test locally first
nextdeploy runimage

# Common issues:
# 1. Port already in use
# 2. Missing environment variables
# 3. Database connection failed`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Port already in use</h3>
      
      <p className="text-emerald-400 font-semibold mb-3">Error:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 overflow-x-auto text-sm">
        <code className="text-emerald-400">Error: bind: address already in use</code>
      </pre>

      <p className="text-emerald-400 font-semibold mb-3">Solution:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# Find process using port
sudo lsof -i :3000

# Kill the process
sudo kill -9 PID

# Or use different port in nextdeploy.yml
deployment:
  container:
    ports:
      - "8080:3000"`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Image pull failed</h3>
      
      <p className="text-emerald-400 font-semibold mb-3">Error:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 overflow-x-auto text-sm">
        <code className="text-emerald-400">Error: failed to pull image: unauthorized</code>
      </pre>

      <p className="text-emerald-400 font-semibold mb-3">Solution:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# Login to registry
docker login ghcr.io

# Or use credentials flag
nextdeploy ship --credentials

# For ECR, provision user
nextdeploy build --provision-ecr-user`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Secret Management Issues</h2>

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
{`# Verify secrets exist
doppler secrets

# Check environment
doppler configure get

# Run with Doppler
doppler run -- nextdeploy build`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Runtime Issues</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Application crashes on startup</h3>
      
      <p className="text-gray-300 mb-4"><strong className="text-white">Symptoms:</strong></p>
      <ul className="space-y-2 mb-8 text-gray-300 list-disc list-inside">
        <li>Container starts then immediately exits</li>
        <li>Health checks fail</li>
        <li>502 Bad Gateway</li>
      </ul>

      <p className="text-emerald-400 font-semibold mb-3">Debug steps:</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`# 1. Check logs
nextdeploy logs --tail 100

# 2. Test locally
nextdeploy runimage

# 3. Check environment variables
ssh deploy@SERVER docker exec CONTAINER env

# 4. Check database connection
ssh deploy@SERVER docker exec CONTAINER nc -zv db-host 5432`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Health check always failing</h3>
      
      <p className="text-emerald-400 font-semibold mb-3">Solution:</p>

      <p className="text-gray-300 mb-4"><strong className="text-white">1. Create health endpoint</strong> (<code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">app/api/health/route.ts</code>):</p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`export async function GET() {
  return Response.json({ status: 'ok' });
}`}
        </code>
      </pre>

      <p className="text-gray-300 mb-4"><strong className="text-white">2. Update nextdeploy.yml:</strong></p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 overflow-x-auto text-sm">
        <code className="text-emerald-400">
{`deployment:
  container:
    healthcheck:
      path: /api/health
      interval: 30s
      timeout: 5s
      retries: 3`}
        </code>
      </pre>

      <p className="text-gray-300 mb-4"><strong className="text-white">3. Test endpoint:</strong></p>
      <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-8 overflow-x-auto">
        <code className="text-emerald-400">curl http://localhost:3000/api/health</code>
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
        <li className="flex gap-3">
          <span className="text-emerald-400">•</span>
          <span><a href="/docs" className="text-emerald-400 hover:text-emerald-300">Read the docs</a> - Full documentation</span>
        </li>
      </ul>
    </div>
  )
}
