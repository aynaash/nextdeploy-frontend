import {
  Zap, Terminal, Server, Shield, Share2, Lock, FileText, Cloud,
  Key, GitBranch, RefreshCw, Package, Cpu, Globe, CheckCircle2,
  ArrowRight, Database, Layers, Gauge
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/copy-button";
import GitHubStarButton from "@/components/github-star-button";

export default function DocsIndex() {
  return (
    <div className="py-12 prose prose-invert max-w-none">

      {/* ─── HERO ─── */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 tracking-wide">v0.1.x Early Access</span>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-400 border border-purple-500/25">MIT License</span>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/25">Open Source</span>
          </div>
          <h1 className="text-5xl font-black text-white m-0 leading-tight tracking-tight">
            NextDeploy <span className="text-emerald-400">Docs</span>
          </h1>
          <p className="text-gray-300 text-xl mt-4 mb-0 max-w-2xl leading-relaxed">
            The self-hosted deployment engine that gives you <strong className="text-white">Vercel-grade power</strong> on infrastructure you own. One CLI. Two targets. Zero vendor lock-in.
          </p>
        </div>
        <GitHubStarButton />
      </div>

      {/* ─── STAT PILLS ─── */}
      <div className="flex flex-wrap gap-4 mb-10">
        {[
          { icon: Zap, label: "Single command deploy", color: "text-emerald-400" },
          { icon: Globe, label: "Custom domains + free SSL", color: "text-blue-400" },
          { icon: RefreshCw, label: "One-command rollback", color: "text-amber-400" },
          { icon: Lock, label: "Secrets never in artifacts", color: "text-purple-400" },
          { icon: Gauge, label: "Zero-downtime atomic swap", color: "text-rose-400" },
        ].map(({ icon: Icon, label, color }) => (
          <div key={label} className={`flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-700 text-sm ${color}`}>
            <Icon className="w-4 h-4" />
            <span className="text-gray-200">{label}</span>
          </div>
        ))}
      </div>

      {/* ─── WHAT CAN IT DO ─── */}
      <div className="grid md:grid-cols-2 gap-5 mb-10">
        <div className="relative p-6 bg-gradient-to-br from-blue-900/20 to-slate-900/50 border border-blue-500/20 rounded-2xl overflow-hidden group hover:border-blue-400/40 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <Server className="w-8 h-8 text-blue-400 mb-3" />
          <h3 className="text-white font-bold text-xl mb-2 m-0">VPS Deployment</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 m-0">
            Ship to any Linux server you own. Automatic Caddy config, Fail2Ban hardening, HSTS, CSP, zero-downtime atomic port swaps, and a full release history with one-command rollback.
          </p>
          <ul className="space-y-1.5 text-sm text-gray-400 list-none p-0 m-0">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> Systemd service supervision via Daemon</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> Caddy auto-HTTPS &amp; reverse proxy</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> Atomic hot-swap with health check guard</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> Release history — instant rollback</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> Fail2Ban + DDoS rate-limiting out of the box</li>
          </ul>
        </div>

        <div className="relative p-6 bg-gradient-to-br from-purple-900/20 to-slate-900/50 border border-purple-500/20 rounded-2xl overflow-hidden group hover:border-purple-400/40 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <Cloud className="w-8 h-8 text-purple-400 mb-3" />
          <h3 className="text-white font-bold text-xl mb-2 m-0">AWS Serverless</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 m-0">
            No servers to manage. NextDeploy orchestrates Lambda, S3, CloudFront, ACM, and Secrets Manager for you. Add your domain — it handles SSL, DNS instructions, and CDN setup automatically.
          </p>
          <ul className="space-y-1.5 text-sm text-gray-400 list-none p-0 m-0">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" /> Lambda compute with Bridge Adapter</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" /> S3 static assets with proper cache headers</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" /> CloudFront CDN + OAC origin security</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" /> Free SSL via ACM + <code className="text-purple-300 bg-slate-800 px-1 rounded text-xs">dns.txt</code> DNS guide</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" /> AWS Secrets Manager + Lambda Extension injection</li>
          </ul>
        </div>
      </div>

      {/* ─── PRE-REQUISITES NOTE ─── */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-10 flex gap-3">
        <div className="text-amber-400 mt-0.5 flex-shrink-0">⚠️</div>
        <div>
          <h4 className="text-amber-400 font-semibold mb-1">Early Access — v0.1.x</h4>
          <p className="text-amber-200/70 text-sm m-0">
            Production-ready for personal and small-team projects. APIs may evolve between minor versions. Always back up secrets and review the changelog before upgrading. Use <code>nextdeploy update</code> to get the latest binary instantly.
          </p>
        </div>
      </div>

      <hr className="border-slate-800 my-10" />

      {/* ─── INSTALLATION ─── */}
      <h2 className="text-3xl font-bold text-white mb-2">Installation</h2>
      <p className="text-gray-400 mb-8 text-base">One command to install. Self-updates automatically.</p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3 flex items-center gap-2">
        <Terminal className="w-5 h-5 text-emerald-400" /> CLI — Your Local Machine
      </h3>
      <p className="text-gray-300 mb-4">The <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400 font-mono">nextdeploy</code> CLI is the only tool you need on your machine. A single static binary, no dependencies.</p>
      <Tabs defaultValue="linux" className="w-full mb-8">
        <TabsList className="bg-slate-900 border border-slate-700">
          <TabsTrigger value="linux">Linux / macOS</TabsTrigger>
          <TabsTrigger value="windows">Windows</TabsTrigger>
          <TabsTrigger value="go">Go (Source)</TabsTrigger>
        </TabsList>
        <TabsContent value="linux" className="mt-2">
          <CodeBlock code="curl -sSf https://nextdeploy.one/install.sh | sh" />
        </TabsContent>
        <TabsContent value="windows" className="mt-2">
          <CodeBlock code={`curl.exe -sSfO https://nextdeploy.one/install.bat && install.bat`} />
        </TabsContent>
        <TabsContent value="go" className="mt-2">
          <CodeBlock code="go install github.com/Golangcodes/nextdeploy/cli@latest" />
        </TabsContent>
      </Tabs>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3 flex items-center gap-2">
        <Server className="w-5 h-5 text-blue-400" /> Daemon — VPS Only
      </h3>
      <p className="text-gray-300 mb-4">
        The daemon (<code className="bg-slate-900 px-2 py-1 rounded text-blue-400 font-mono">nextdeployd</code>) runs on your Linux server as a systemd service. It handles health checks, atomic swaps, release management, and secret hot-reloading. <em className="text-gray-500">Not needed for Serverless.</em>
      </p>
      <Tabs defaultValue="script" className="w-full mb-8">
        <TabsList className="bg-slate-900 border border-slate-700">
          <TabsTrigger value="script">Install Script</TabsTrigger>
          <TabsTrigger value="go">Go (Source)</TabsTrigger>
        </TabsList>
        <TabsContent value="script" className="mt-2">
          <CodeBlock code="curl -sSf https://nextdeploy.one/daemon.sh | sh" />
        </TabsContent>
        <TabsContent value="go" className="mt-2">
          <CodeBlock code="go install github.com/Golangcodes/nextdeploy/daemon/cmd/nextdeployd@main" />
        </TabsContent>
      </Tabs>

      <hr className="border-slate-800 my-10" />

      {/* ─── VPS DEPLOYMENT ─── */}
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <Server className="w-6 h-6 text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold text-white m-0">VPS Deployment</h2>
      </div>
      <p className="text-gray-400 mb-8 text-base">
        Deploy to any Linux server you own or rent. Production-hardened out of the box — zero extra configuration for HTTPS, security headers, or process supervision.
      </p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. Initialize</h3>
      <CodeBlock code="nextdeploy init" className="mb-3" />
      <p className="text-gray-400 text-sm mb-8">
        Creates a <code className="bg-slate-900 px-1.5 py-0.5 rounded text-emerald-400 font-mono text-xs">nextdeploy.yml</code> in your project root with sensible defaults.
      </p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. Configure</h3>
      <CodeBlock
        code={`version: "1.0"
target_type: vps

app:
  name: my-app
  domain: app.example.com  # Caddy gets HTTPS automatically
  port: 3000

servers:
  - name: prod
    host: 1.2.3.4
    port: 22
    username: deploy
    ssh_key: ~/.ssh/id_rsa

secrets:
  provider: local  # Encrypted on-disk, injected at runtime`}
        className="mb-8"
      />

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">3. Prepare Your Server <span className="text-gray-500 font-normal text-sm">(once)</span></h3>
      <p className="text-gray-400 text-sm mb-3">Runs an Ansible playbook that installs and configures everything: Node/Bun runtime, Caddy, Fail2Ban, and the NextDeploy daemon.</p>
      <CodeBlock code="nextdeploy prepare" className="mb-8" />

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">4. Build &amp; Ship</h3>
      <CodeBlock code={`nextdeploy build\nnextdeploy ship`} className="mb-4" />
      <div className="grid sm:grid-cols-3 gap-3 mb-8">
        {[
          { icon: Package, label: "Build", desc: "Standalone Next.js output + artifact packaging" },
          { icon: Share2, label: "Ship", desc: "SFTP upload → Daemon swap → Health verified → Live" },
          { icon: RefreshCw, label: "Rollback", desc: "Atomic revert to any previous release — instant" },
        ].map(({ icon: Icon, label, desc }) => (
          <div key={label} className="p-4 bg-slate-900/30 border border-slate-800 rounded-xl">
            <Icon className="w-5 h-5 text-emerald-400 mb-2" />
            <p className="text-white font-semibold text-sm mb-1 m-0">{label}</p>
            <p className="text-gray-500 text-xs m-0 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Instant Rollback</h3>
      <CodeBlock code="nextdeploy rollback" className="mb-4" />
      <p className="text-gray-400 text-sm mb-8">Reverts to the previous release in seconds. The Daemon keeps your last 5 releases in a ring buffer — no manual backups needed.</p>

      <hr className="border-slate-800 my-10" />

      {/* ─── SERVERLESS DEPLOYMENT ─── */}
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <Cloud className="w-6 h-6 text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold text-white m-0">Cloud Deployment — AWS Serverless</h2>
      </div>
      <p className="text-gray-400 mb-6 text-base">
        No daemons. No servers. NextDeploy orchestrates your entire AWS stack — Lambda, S3, CloudFront, ACM certificates, and Secrets Manager — with a single <code className="text-purple-300 bg-slate-800 px-1.5 py-0.5 rounded text-xs font-mono">nextdeploy ship</code>.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 flex gap-3">
          <Globe className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-emerald-400 font-semibold mb-1 text-sm">Automatic Custom Domains</h4>
            <p className="text-emerald-200/60 text-sm m-0 leading-relaxed">
              Add your domain to the config. NextDeploy requests an ACM certificate, sets up CloudFront, and writes a <code className="text-emerald-300">dns.txt</code> in your project directory with the exact DNS records to add.
            </p>
          </div>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5 flex gap-3">
          <Lock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-blue-400 font-semibold mb-1 text-sm">Zero-Trust Secret Injection</h4>
            <p className="text-blue-200/60 text-sm m-0 leading-relaxed">
              Secrets live in AWS Secrets Manager. Lambda fetches them at cold-start via the AWS Secrets Extension — no SDK code needed in your app. Just <code className="text-blue-300">process.env</code>.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Configure</h3>
      <CodeBlock
        code={`version: "1.0"
target_type: serverless

app:
  name: my-app
  domain: my-app.com     # NextDeploy handles SSL + CloudFront automatically

serverless:
  provider: aws
  region: us-east-1      # ACM certs MUST be us-east-1 for CloudFront`}
        className="mb-8"
      />

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Build &amp; Ship</h3>
      <CodeBlock code={`nextdeploy build\nnextdeploy ship`} className="mb-4" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {[
          { step: "1", icon: Package, title: "Build artifact", desc: "nextdeploy build creates .nextdeploy/app.tar.gz" },
          { step: "2", icon: Lock, title: "Push secrets", desc: "Local secrets synced to AWS Secrets Manager — never in the artifact" },
          { step: "3", icon: Database, title: "Upload to S3", desc: "Static assets with cache headers and correct MIME types" },
          { step: "4", icon: Cpu, title: "Deploy Lambda", desc: "Standalone build zipped and pushed via UpdateFunctionCode" },
          { step: "5", icon: Globe, title: "SSL + DNS guide", desc: "ACM cert requested, dns.txt written with your CNAME records" },
          { step: "6", icon: Zap, title: "Invalidate CDN", desc: "CloudFront /* invalidated so users get fresh assets immediately" },
        ].map(({ step, icon: Icon, title, desc }) => (
          <div key={step} className="flex gap-3 p-4 bg-slate-900/30 border border-slate-800 rounded-xl">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-xs">{step}</span>
            <div>
              <p className="text-white font-semibold text-sm mb-0.5 m-0">{title}</p>
              <p className="text-gray-500 text-xs m-0 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 mb-8 flex gap-3">
        <div className="text-amber-400 flex-shrink-0 mt-0.5">📄</div>
        <div>
          <h4 className="text-amber-400 font-semibold mb-1 text-sm">After shipping with a custom domain</h4>
          <p className="text-amber-200/60 text-sm m-0">
            A <code className="text-amber-300">dns.md</code> file is generated locally in your project root containing comprehensive, <strong>step-by-step UI directions</strong> for your specific provider. Once you add those records and they propagate, run <code className="text-amber-300">nextdeploy ship</code> again to finalize the deployment!
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3 flex items-center gap-2">
        <Shield className="w-5 h-5 text-emerald-400" /> AWS Deployer Permissions
      </h3>
      <p className="text-gray-400 text-sm mb-4">
        To deploy successfully, your AWS IAM User (e.g., <code>CONTEXTAPI</code>) requires specific permissions to orchestrate Lambda, S3, CloudFront, ACM, and Secrets Manager. We recommend attaching the following minimal JSON policy rather than granting full AdministratorAccess:
      </p>

      <div className="mb-8 max-h-96 overflow-y-auto rounded-xl border border-slate-800 bg-slate-900/50 scrollbar-thin scrollbar-thumb-slate-700">
        <CodeBlock
          code={`{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "LambdaDeployAndManage",
            "Effect": "Allow",
            "Action": [
                "lambda:CreateFunction", "lambda:UpdateFunctionCode",
                "lambda:UpdateFunctionConfiguration", "lambda:GetFunction",
                "lambda:GetFunctionConfiguration", "lambda:GetPolicy",
                "lambda:AddPermission", "lambda:RemovePermission",
                "lambda:PublishVersion", "lambda:CreateFunctionUrlConfig",
                "lambda:GetFunctionUrlConfig", "lambda:UpdateFunctionUrlConfig",
                "lambda:ListTags", "lambda:DeleteFunction"
            ],
            "Resource": "arn:aws:lambda:*:*:function:*-*"
        },
        {
            "Sid": "LambdaLayerAccess",
            "Effect": "Allow",
            "Action": ["lambda:GetLayerVersion"],
            "Resource": "arn:aws:lambda:*:177933130628:layer:AWS-Parameters-and-Secrets-Lambda-Extension:*"
        },
        {
            "Sid": "S3AssetManagement",
            "Effect": "Allow",
            "Action": [
                "s3:CreateBucket", "s3:PutBucketPolicy", "s3:GetBucketPolicy",
                "s3:PutBucketPublicAccessBlock", "s3:ListBucket",
                "s3:PutObject", "s3:GetObject", "s3:DeleteObject"
            ],
            "Resource": ["arn:aws:s3:::nextdeploy-*", "arn:aws:s3:::nextdeploy-*/*"]
        },
        {
            "Sid": "CloudFrontManagement",
            "Effect": "Allow",
            "Action": [
                "cloudfront:CreateDistribution", "cloudfront:GetDistribution",
                "cloudfront:GetDistributionConfig", "cloudfront:UpdateDistribution",
                "cloudfront:CreateInvalidation", "cloudfront:ListDistributions"
            ],
            "Resource": "*"
        },
        {
            "Sid": "ACMCertificateManagement",
            "Effect": "Allow",
            "Action": ["acm:RequestCertificate", "acm:ListCertificates", "acm:DescribeCertificate"],
            "Resource": "*"
        },
        {
            "Sid": "SecretsManagement",
            "Effect": "Allow",
            "Action": [
                "secretsmanager:CreateSecret", "secretsmanager:PutSecretValue",
                "secretsmanager:UpdateSecret", "secretsmanager:DescribeSecret",
                "secretsmanager:GetSecretValue"
            ],
            "Resource": "arn:aws:secretsmanager:*:*:secret:nextdeploy/*"
        },
        {
            "Sid": "IAMRoleProvisioning",
            "Effect": "Allow",
            "Action": [
                "iam:CreateRole", "iam:GetRole", "iam:PassRole",
                "iam:AttachRolePolicy", "iam:PutRolePolicy"
            ],
            "Resource": "arn:aws:iam::*:role/nextdeploy-serverless-role"
        }
    ]
}`}
          className="m-0 border-0 bg-transparent!"
        />
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-3">Cloud Rollback</h3>
      <CodeBlock code="nextdeploy rollback" className="mb-4" />
      <p className="text-gray-400 text-sm mb-8">
        NextDeploy versions your Lambda function automatically. Rollback instantly restores the previous version and invalidates the CDN — no manual AWS console needed.
      </p>

      <hr className="border-slate-800 my-10" />

      {/* ─── SECRETS ─── */}
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20">
          <Key className="w-6 h-6 text-rose-400" />
        </div>
        <h2 className="text-3xl font-bold text-white m-0">Secrets Management</h2>
      </div>
      <p className="text-gray-400 mb-6 text-base">
        One CLI. Knows where you are deploying. Sends secrets to the right place automatically.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="p-5 bg-slate-900/40 border border-slate-800 rounded-xl">
          <div className="flex items-center gap-2 mb-3">
            <Server className="w-4 h-4 text-blue-400" />
            <span className="text-white font-semibold text-sm">VPS Target</span>
          </div>
          <p className="text-gray-400 text-sm m-0 leading-relaxed">
            Secrets are stored encrypted on-disk on the VPS (<code className="bg-slate-800 text-blue-300 px-1 rounded text-xs">/opt/nextdeploy/secrets/</code> with <code className="bg-slate-800 text-blue-300 px-1 rounded text-xs">0600</code> permissions). On each deploy, the Daemon injects them as environment variables and hot-reloads the service without downtime.
          </p>
        </div>
        <div className="p-5 bg-slate-900/40 border border-slate-800 rounded-xl">
          <div className="flex items-center gap-2 mb-3">
            <Cloud className="w-4 h-4 text-purple-400" />
            <span className="text-white font-semibold text-sm">Serverless Target</span>
          </div>
          <p className="text-gray-400 text-sm m-0 leading-relaxed">
            Secrets are stored in <strong className="text-gray-200">AWS Secrets Manager</strong> under <code className="bg-slate-800 text-purple-300 px-1 rounded text-xs">nextdeploy/apps/&lt;name&gt;/production</code>. Lambda fetches them at cold-start via the AWS Secrets Extension — available as plain <code className="bg-slate-800 text-purple-300 px-1 rounded text-xs">process.env</code>.
          </p>
        </div>
      </div>

      <CodeBlock code={`# Works the same for VPS and Serverless — NextDeploy routes to the right store
nextdeploy secrets set DATABASE_URL "postgres://user:pass@host/db"
nextdeploy secrets set STRIPE_KEY "sk_live_..."
nextdeploy secrets list
nextdeploy secrets unset OLD_KEY`} className="mb-8" />

      <hr className="border-slate-800 my-10" />

      {/* ─── CLI REFERENCE ─── */}
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
        <Terminal className="w-6 h-6 text-emerald-400" /> CLI Reference
      </h2>
      <div className="space-y-2 mb-8">
        {[
          { cmd: "nextdeploy init", desc: "Scaffold nextdeploy.yml in your project" },
          { cmd: "nextdeploy build", desc: "Build Next.js standalone + create app.tar.gz artifact" },
          { cmd: "nextdeploy build --force", desc: "Force a clean rebuild from scratch" },
          { cmd: "nextdeploy ship", desc: "Deploy to configured target (VPS or AWS Serverless)" },
          { cmd: "nextdeploy prepare", desc: "Provision a VPS — installs Caddy, Daemon, Fail2Ban (VPS only)" },
          { cmd: "nextdeploy rollback", desc: "Revert to the previous release (VPS + Serverless)" },
          { cmd: "nextdeploy status", desc: "Show health, active release, and resource usage" },
          { cmd: "nextdeploy logs", desc: "Tail live application logs from the remote server" },
          { cmd: "nextdeploy secrets set KEY VALUE", desc: "Store a secret — routed to Daemon or AWS Secrets Manager" },
          { cmd: "nextdeploy secrets get KEY", desc: "Read a secret value" },
          { cmd: "nextdeploy secrets list", desc: "List all secret names (values always hidden)" },
          { cmd: "nextdeploy secrets unset KEY", desc: "Permanently remove a secret" },
          { cmd: "nextdeploy update", desc: "Self-update the CLI to the latest release from GitHub" },
        ].map(({ cmd, desc }) => (
          <div key={cmd} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 p-3.5 bg-slate-900/30 border border-slate-800 rounded-xl hover:border-emerald-500/20 transition-colors group">
            <code className="text-emerald-400 font-mono text-sm flex-shrink-0 sm:w-80 whitespace-nowrap">{cmd}</code>
            <span className="flex items-center gap-2 text-gray-400 text-sm">
              <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:block" />
              {desc}
            </span>
          </div>
        ))}
      </div>

      <hr className="border-slate-800 my-10" />

      {/* ─── CONFIG REFERENCE ─── */}
      <h2 className="text-3xl font-bold text-white mb-6">Configuration Reference</h2>
      <p className="text-gray-400 mb-6">Everything lives in <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400 font-mono">nextdeploy.yml</code>. Run <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400 font-mono">nextdeploy init</code> to generate it.</p>

      <Tabs defaultValue="vps" className="w-full mb-10">
        <TabsList className="bg-slate-900 border border-slate-700">
          <TabsTrigger value="vps">VPS Config</TabsTrigger>
          <TabsTrigger value="serverless">Serverless Config</TabsTrigger>
        </TabsList>
        <TabsContent value="vps" className="mt-2">
          <CodeBlock
            code={`version: "1.0"
target_type: vps            # "vps" or "serverless"

app:
  name: my-app              # Used for process naming and secret namespacing
  domain: app.example.com   # Caddy configures HTTPS automatically
  port: 3000
  environment: production

servers:
  - name: prod
    host: 1.2.3.4
    port: 22
    username: deploy
    ssh_key: ~/.ssh/id_rsa

secrets:
  provider: local           # "local" supported now | "doppler" coming soon

logging:
  enabled: true`}
          />
        </TabsContent>
        <TabsContent value="serverless" className="mt-2">
          <CodeBlock
            code={`version: "1.0"
target_type: serverless

app:
  name: my-app
  domain: my-app.com        # Custom domain with auto SSL + dns.txt guide

serverless:
  provider: aws             # "aws" | "cloudflare" / "gcp" / "azure" coming soon
  region: us-east-1         # Must be us-east-1 for CloudFront ACM certs
  s3_bucket: my-app-static  # Bucket for public/ and _next/static/
  cloudfront_id: EXXXX      # Distribution ID (optional — created if omitted)
  lambda_function_name: my-app-handler  # Defaults to app.name`}
          />
        </TabsContent>
      </Tabs>

      <hr className="border-slate-800 my-10" />

      {/* ─── ARCHITECTURE ─── */}
      <h2 className="text-3xl font-bold text-white mb-8">Architecture</h2>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4 flex items-center gap-2">
        <Server className="w-5 h-5 text-blue-400" /> VPS Architecture
      </h3>
      <div className="my-6 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl flex flex-col items-center overflow-x-auto">
        <svg viewBox="0 0 800 320" className="w-full min-w-[600px] max-w-3xl">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orientation="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
            </marker>
            <marker id="arrowhead-small" markerWidth="6" markerHeight="4" refX="0" refY="2" orientation="auto">
              <polygon points="0 0, 6 2, 0 4" fill="#94a3b8" />
            </marker>
          </defs>
          <rect x="30" y="80" width="170" height="160" rx="12" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
          <text x="115" y="65" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">Local Machine</text>
          <rect x="50" y="110" width="130" height="60" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
          <text x="115" y="145" textAnchor="middle" fill="#ecfdf5" fontSize="14" fontWeight="600">nextdeploy CLI</text>
          <path d="M 200 150 L 310 150" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="255" y="140" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="600">SFTP</text>
          <rect x="310" y="40" width="440" height="240" rx="12" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
          <text x="530" y="25" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">Production VPS (Caddy + Fail2Ban)</text>
          <rect x="330" y="110" width="100" height="60" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
          <text x="380" y="145" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="600">Daemon</text>
          <rect x="500" y="50" width="100" height="60" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
          <text x="550" y="85" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="600">Caddy</text>
          <rect x="500" y="200" width="100" height="60" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <text x="550" y="235" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="600">Next.js</text>
          <rect x="660" y="120" width="70" height="50" rx="8" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
          <text x="695" y="150" textAnchor="middle" fill="#f1f5f9" fontSize="11" fontWeight="600">Fail2Ban</text>
          <path d="M 380 170 L 380 230 L 500 230" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 2" markerEnd="url(#arrowhead-small)" />
          <text x="390" y="210" textAnchor="start" fill="#94a3b8" fontSize="10">Supervises</text>
          <path d="M 380 110 L 380 80 L 500 80" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 2" markerEnd="url(#arrowhead-small)" />
          <text x="390" y="68" textAnchor="start" fill="#94a3b8" fontSize="10">Configures</text>
          <path d="M 550 110 L 550 200" stroke="#8b5cf6" strokeWidth="1.5" markerEnd="url(#arrowhead-small)" />
          <text x="558" y="160" textAnchor="start" fill="#8b5cf6" fontSize="10">HTTPS Proxy</text>
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
        <Cloud className="w-5 h-5 text-purple-400" /> Serverless Architecture
      </h3>
      <div className="my-6 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl flex flex-col items-center overflow-x-auto">
        <svg viewBox="0 0 800 280" className="w-full min-w-[600px] max-w-3xl">
          <defs>
            <marker id="arrow-green" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orientation="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
            </marker>
            <marker id="arrow-gray-sl" markerWidth="6" markerHeight="4" refX="0" refY="2" orientation="auto">
              <polygon points="0 0, 6 2, 0 4" fill="#94a3b8" />
            </marker>
          </defs>
          <text x="115" y="30" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">Local</text>
          <rect x="30" y="80" width="170" height="60" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
          <text x="115" y="115" textAnchor="middle" fill="#ecfdf5" fontSize="14" fontWeight="600">nextdeploy CLI</text>
          <path d="M 200 110 L 280 110" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" />
          <text x="240" y="100" textAnchor="middle" fill="#10b981" fontSize="10">Deploy</text>
          <text x="530" y="20" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">AWS Cloud</text>
          <rect x="240" y="40" width="540" height="220" rx="12" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
          <rect x="280" y="80" width="100" height="60" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <text x="330" y="115" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="600">Lambda</text>
          <rect x="430" y="80" width="100" height="60" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
          <text x="480" y="115" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="600">S3</text>
          <rect x="580" y="80" width="120" height="60" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
          <text x="640" y="115" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="600">CloudFront</text>
          <rect x="350" y="190" width="160" height="50" rx="8" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
          <text x="430" y="220" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="600">Secrets Manager</text>
          <path d="M 330 140 L 330 190" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 2" markerEnd="url(#arrow-gray-sl)" />
          <text x="338" y="170" fill="#94a3b8" fontSize="10">Fetch at cold-start</text>
          <path d="M 640 140 L 640 200 L 530 215" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="2 2" markerEnd="url(#arrow-gray-sl)" />
          <path d="M 580 110 L 530 110" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
      </div>

      <hr className="border-slate-800 my-10" />

      {/* ─── COMPONENT OVERVIEW ─── */}
      <h2 className="text-3xl font-bold text-white mb-6">Under the Hood</h2>
      <div className="grid md:grid-cols-3 gap-5 my-6 mb-10">
        <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-emerald-500/20 transition-colors">
          <Terminal className="w-5 h-5 text-emerald-400 mb-3" />
          <h3 className="text-base font-bold text-white mb-3 m-0">The CLI</h3>
          <ul className="space-y-2 text-sm text-gray-400 list-none p-0 m-0">
            <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">▸</span> Next.js config analysis via Bun/Node eval</li>
            <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">▸</span> Build, package &amp; artifact management</li>
            <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">▸</span> Unified secret CLI for VPS + Cloud</li>
            <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">▸</span> SFTP transport (VPS) or AWS SDK (serverless)</li>
            <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">▸</span> Self-update via GitHub Releases API</li>
          </ul>
        </div>

        <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-blue-500/20 transition-colors">
          <Server className="w-5 h-5 text-blue-400 mb-3" />
          <h3 className="text-base font-bold text-white mb-3 m-0">The Daemon (VPS)</h3>
          <ul className="space-y-2 text-sm text-gray-400 list-none p-0 m-0">
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">▸</span> Systemd service supervision</li>
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">▸</span> Unix socket control plane (no HTTP overhead)</li>
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">▸</span> Health check &amp; port arbitration</li>
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">▸</span> Atomic hot-swap with instant rollback</li>
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">▸</span> Release ring buffer — keeps last 5 builds</li>
          </ul>
        </div>

        <div className="p-6 bg-slate-900/40 border border-purple-500/20 rounded-2xl shadow-lg shadow-purple-500/5 hover:border-purple-500/30 transition-colors">
          <Cloud className="w-5 h-5 text-purple-400 mb-3" />
          <h3 className="text-base font-bold text-white mb-3 m-0">Serverless Engine</h3>
          <ul className="space-y-2 text-sm text-gray-400 list-none p-0 m-0">
            <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">▸</span> S3 upload with MIME + cache-control headers</li>
            <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">▸</span> Lambda zip deploy + version management</li>
            <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">▸</span> CloudFront OAC + Lambda URL auth</li>
            <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">▸</span> ACM cert + dns.txt domain workflow</li>
            <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">▸</span> Provider interface — GCP, Cloudflare planned</li>
          </ul>
        </div>
      </div>

      <hr className="border-slate-800 my-10" />

      {/* ─── ROADMAP ─── */}
      <h2 className="text-3xl font-bold text-white mb-2">Roadmap</h2>
      <p className="text-gray-400 mb-6">NextDeploy is growing fast. Here&apos;s what&apos;s live and what&apos;s coming next.</p>
      <div className="grid md:grid-cols-2 gap-3 mb-8">
        {[
          { label: "AWS — Lambda + S3 + CloudFront + ACM + Secrets Manager", status: "✅ Live", color: "border-emerald-500/20 bg-emerald-500/5" },
          { label: "Custom domains with automated SSL and dns.txt guide", status: "✅ Live", color: "border-emerald-500/20 bg-emerald-500/5" },
          { label: "Unified secret CLI for VPS + Serverless", status: "✅ Live", color: "border-emerald-500/20 bg-emerald-500/5" },
          { label: "Serverless rollback via Lambda versions", status: "✅ Live", color: "border-emerald-500/20 bg-emerald-500/5" },
          { label: "Cloudflare Workers + R2 + CDN provider", status: "🔜 Coming soon", color: "border-slate-700 bg-slate-900/30" },
          { label: "GCP Cloud Run + GCS provider", status: "🔜 Coming soon", color: "border-slate-700 bg-slate-900/30" },
          { label: "Azure Functions + Blob Storage provider", status: "🔜 Coming soon", color: "border-slate-700 bg-slate-900/30" },
          { label: "Doppler / 1Password secret provider integration", status: "🔜 Coming soon", color: "border-slate-700 bg-slate-900/30" },
          { label: "Deployment dashboard UI", status: "🔜 Coming soon", color: "border-slate-700 bg-slate-900/30" },
        ].map(({ label, status, color }) => (
          <div key={label} className={`flex justify-between items-center p-4 border rounded-xl ${color}`}>
            <span className="text-gray-300 text-sm">{label}</span>
            <span className="text-xs ml-4 whitespace-nowrap text-gray-400">{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
