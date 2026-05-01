---
title: Cloudflare Quickstart
lede: Deploy a Next.js app to Cloudflare Workers in five minutes. Currently experimental — works for API routes, static, and basic RSC. See limitations before going to production.
status: in-progress
sourceRef: cli/cmd/init.go, cli/cmd/deploy.go, cli/internal/serverless/cloudflare*.go
related:
  - title: Cloudflare Overview
    href: /docs/cloudflare/overview
  - title: Workers Runtime
    href: /docs/cloudflare/workers
  - title: Bindings
    href: /docs/cloudflare/bindings
---

## Prerequisites

> **TODO** Cloudflare account, an API token with Workers + R2 (+ DNS if using custom domain), a domain on Cloudflare (or workers.dev for testing).

## 1. Configure Cloudflare credentials

> **TODO** `nextdeploy creds --provider cloudflare` — token format, scopes required, where it's stored.

## 2. Initialize for Cloudflare

> **TODO** `nextdeploy init --target=serverless --provider=cloudflare` — fields it adds (account_id, compatibility_date, default bindings).

## 3. Plan

> **TODO** `nextdeploy plan` — discovered bindings, resources to create, compatibility flags applied.

## 4. Deploy

> **TODO** `nextdeploy deploy` — phases: build (NextCompile), upload R2 assets, create bindings, push worker, configure routes / custom domain.

## 5. Verify

> **TODO** workers.dev URL first, custom domain after DNS propagation, `nextdeploy logs` for tail-style live logs.

## 6. Iterate

> **TODO** subsequent deploys are faster — only changed assets re-upload, worker re-deployed, bindings reconciled.

## Common first-deploy issues

> **TODO** API token scope missing, compatibility flag mismatch, R2 bucket name collision, secret not found at runtime.

## What if my app uses features that don't work yet?

> **TODO** redirect to limitations / roadmap; alternative — deploy to AWS via the same nextdeploy config.
