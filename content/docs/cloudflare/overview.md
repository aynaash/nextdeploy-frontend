---
title: Cloudflare Workers
lede: Deploy Next.js to your own Cloudflare account — Workers + R2 + Hyperdrive + Queues + Vectorize + AI + KV + Durable Objects, all wired up from a single nextdeploy.yml. Currently experimental — see status table below.
status: in-progress
sourceRef: cli/internal/serverless/cloudflare*.go (12 files), shared/nextcompile/, CLOUDFLARE_PARITY.md, NEXTCOMPILE_ROADMAP.md
related:
  - title: Cloudflare Quickstart
    href: /docs/getting-started/cloudflare-quickstart
  - title: NextCompile (runtime)
    href: /docs/advanced/nextcompile
  - title: Auto-Provisioning
    href: /docs/advanced/auto-provisioning
  - title: Roadmap
    href: /docs/roadmap
---

## Why Cloudflare

> **TODO** global edge by default, generous free tier, integrated data products (R2 / Hyperdrive / Queues / Vectorize / AI), no cold start.

## When to choose Cloudflare over AWS

> **TODO** edge-first traffic, want native data primitives, comfortable with Workers compatibility surface, willing to live with current limitations.

## What works today

> **TODO** API routes, `/public` from R2, passthrough middleware, Server Actions (CSRF + JSON), pure-server RSC pages, image optimization, basic revalidate.

## What does NOT work yet

> **TODO** RSC pages with `"use client"` components, Suspense streaming, `scheduled()` exports, Hyperdrive binding injection, full middleware semantics — see CLOUDFLARE_PARITY.md.

## Cost shape

> **TODO** Workers pricing (requests + duration), R2 (storage + class A/B operations), Hyperdrive (per query), Queues (per operation). Compare to AWS for typical app.

## Architecture at a glance

> **TODO** diagram — local build → NextCompile → ESM worker → wrangler-style upload → R2 (assets) → Workers runtime + bindings → user.

## How NextDeploy compares to wrangler

> **TODO** wrangler is the underlying tool — NextDeploy adds metadata-driven detection, auto-provisioning, secret management, and unified config across VPS / AWS / Cloudflare.

## Where to go next

> **TODO** quickstart for first deploy, workers page for compile internals, bindings page to see what you can wire up.
