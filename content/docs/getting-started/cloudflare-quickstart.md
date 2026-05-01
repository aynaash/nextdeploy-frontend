---
title: Cloudflare Quickstart
lede: Five-minute path to deploying a Next.js app to Cloudflare Workers — single CLI, single nextdeploy.yml. For full coverage of bindings and runtime details, see the Cloudflare section.
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

> **TODO** Cloudflare account, API token (Workers + R2 + DNS scopes if using custom domain), a domain on Cloudflare or willingness to use `*.workers.dev`.

## 1. Add Cloudflare credentials

> **TODO** `nextdeploy creds --provider cloudflare` — paste API token, account ID picked automatically or prompt.

## 2. Initialize for Cloudflare

> **TODO** `nextdeploy init --target=serverless --provider=cloudflare` — generates `nextdeploy.yml` with `cloudflare` block + sensible compatibility date.

## 3. Plan

> **TODO** `nextdeploy plan` — what bindings will be created, what's missing, drift if anything pre-exists.

## 4. Deploy

> **TODO** `nextdeploy deploy` — NextCompile build → R2 asset upload → bindings reconcile → worker deploy → routes / domain.

## 5. Tail logs

> **TODO** `nextdeploy logs --follow` — wraps wrangler tail style.

## 6. Iterate

> **TODO** subsequent deploys upload only changed assets, re-deploy worker, reconcile bindings.

## What if your app isn't supported yet?

> **TODO** point at limitations / roadmap. Same `nextdeploy.yml` can target AWS — switch `target_type` / provider.
