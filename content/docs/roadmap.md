---
title: Roadmap
lede: What's next, in rough priority order. Items marked experimental are in active development; items marked planned are scoped but not started.
status: draft
sourceRef: NEXTCOMPILE_ROADMAP.md, CLOUDFLARE_PARITY.md, CODE_QUALITY.md
related:
  - title: NextCompile
    href: /docs/advanced/nextcompile
  - title: Auto-Provisioning
    href: /docs/advanced/auto-provisioning
  - title: Limitations
    href: /docs/reference/limitations
---

## Now (in flight)

> **TODO** Cloudflare auto-provisioning (~2 weeks), client-reference-manifest threading for RSC pages with `"use client"`.

## Next (priority)

> **TODO** NextCompile phases 2–4 — layout composition, HTML shell streaming via `react-dom/server.edge`, error / loading / not-found boundaries.

## Selective CDN invalidation

> **TODO** per-route CloudFront invalidation driven by `metadata.json` route classification.

## Per-route CloudFront behaviors

> **TODO** eliminate Lambda invocations on static routes entirely.

## Cloudflare Tier A blockers

> **TODO** `scheduled()` exports, DO re-exports, `queue()` handler, workerd conditions, middleware detection, Hyperdrive injection.

## Cloudflare Tier B

> **TODO** R2 asset upload, secret sync batching, build-ID injection, WebSocket upgrade, image optimization parity, incremental cache.

## Multi-region serverless

> **TODO** one CLI command to deploy to N regions with origin failover.

## Parallel & intercepting routes

> **TODO** NextCompile Phase 6, optional based on demand.

## PPR (Partial Pre-Rendering)

> **TODO** experimental Next feature, ~2 weeks once Next stabilizes the protocol.

## GCP / Azure providers

> **TODO** provider interface is ready; awaiting demand.

## Architecture cleanup

> **TODO** CODE_QUALITY items — split `AWSProvider`, replace string-matched AWS errors, smaller functions.

## Not on the roadmap (intentionally)

> **TODO** multi-tenant SaaS mode, hosted control plane, paid tier — NextDeploy stays a self-hosted tool.
