"use client";

import { useState } from "react";
import {
  Terminal,
  Github,
  Zap,
  ArrowRight,
  Server,
  Monitor,
  Copy,
  Check,
} from "lucide-react";
import { join } from "path/win32";

const installOptions = [
  {
    id: "cli-unix",
    name: "Mac/Linux CLI",
    icon: Terminal,
    cmd: "curl -sSf https://nextdeploy.one/install.sh | sh",
    desc: "Install CLI tool for developers",
  },
  {
    id: "cli-win",
    name: "Windows CLI",
    icon: Monitor,
    cmd: "curl -sSf https://nextdeploy.one/install.bat | sh",
    desc: "Install CLI tool on Windows",
  },
  {
    id: "daemon",
    name: "Ubuntu Server",
    icon: Server,
    cmd: "curl -sSf https://nextdeploy.one/daemon.sh | sh",
    desc: "Install NextDeploy Daemon",
  },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(installOptions[0]);

  const copyCmd = () => {
    navigator.clipboard.writeText(activeTab.cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo badge */}
        <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 mt-20 rounded-full bg-emerald-900/20 backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-500/60 transition-all">
          <Zap className="w-5 h-5 text-emerald-400" />
          <span className="text-emerald-100 font-semibold text-sm">
            Native. Transparent. Fast.
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-100 via-green-200 to-emerald-100 bg-clip-text text-transparent leading-tight">
          Next.js Deployment
          <br />
          Without the Black Box.
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          The high-performance, developer-first deployment engine.
          Transform any VPS into a premium hosting platform with
          <strong> total ownership</strong> and <strong>zero-downtime</strong> updates.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Zero-Virtualization Overhead</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Atomic Release Swaps</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Encrypted Secret Injection</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-12">
          <a
            href="#install"
            className="px-8 py-3 w-full sm:w-auto rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            Start Shipping
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/docs"
            className="px-8 py-3 w-full sm:w-auto rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 hover:border-slate-600 transition-all duration-200 flex items-center justify-center gap-2"
          >
            View Documentation
          </a>
        </div>

        {/* Install command box */}
        <div
          id="install"
          className="mb-12 max-w-2xl mx-auto group scroll-mt-24"
        >
          <p className="text-sm text-gray-500 mb-3 font-medium">
            Install in seconds
          </p>
          <div className="relative bg-gradient-to-br from-slate-950/80 to-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl text-left">
            {/* Tabs header */}
            <div className="flex border-b border-slate-700/50 bg-slate-900/80 overflow-x-auto">
              {installOptions.map((option) => {
                const Icon = option.icon;
                const isActive = activeTab.id === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => setActiveTab(option)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${isActive
                      ? "text-emerald-400 border-emerald-500 bg-slate-800/50"
                      : "text-gray-400 border-transparent hover:text-gray-200 hover:bg-slate-800/30"
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    {option.name}
                  </button>
                );
              })}
            </div>

            {/* Terminal header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-800/40 border-b border-slate-700/50">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-4 text-sm text-gray-400 font-medium">
                  install.sh
                </span>
              </div>
              <button
                onClick={copyCmd}
                className="flex items-center gap-2 px-4 py-1.5 text-sm text-gray-400 hover:text-emerald-300 hover:bg-slate-700/50 rounded-lg transition-all duration-200 font-medium"
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Code Execution Block */}
            <div className="p-8 md:p-10 font-mono text-sm">
              <div className="flex flex-col gap-4 group">
                <div className="flex items-start gap-4">
                  <span className="text-gray-600 select-none flex-shrink-0 mt-1">
                    $
                  </span>
                  <div className="flex-1">
                    <code className="text-emerald-300 break-all text-base font-medium">
                      {activeTab.cmd}
                    </code>
                    <div className="text-gray-500 mt-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500/50"></span>
                      {activeTab.desc}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Badge */}
          <div className="mt-8 text-center bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 inline-block mx-auto flex items-center justify-center gap-3 text-emerald-300 text-sm">
            <Zap className="w-4 h-4 shrink-0" />
            <p>
              Deploy to <strong>AWS Serverless</strong> natively with S3 static
              offloading and Lambda Web Adapter orchestration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
