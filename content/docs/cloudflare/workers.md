---
title: Workers Runtime
lede: How NextDeploy compiles your Next.js app into an ESM Cloudflare Worker. Powered by NextCompile — a 13-phase Go pipeline that vendors RSC, threads Server Actions, and emits a workerd-compatible bundle.
status: in-progress
sourceRef: shared/nextcompile/, cli/internal/serverless/cloudflare_adapter.go
related:
  - title: NextCompile (full reference)
    href: /docs/advanced/nextcompile
  - title: Bindings
    href: /docs/cloudflare/bindings
  - title: Lambda Bridge (AWS counterpart)
    href: /docs/aws/lambda-bridge
---

## Why a compiler instead of a Node bridge

> **TODO** Workers cannot spawn child processes — must compile to ESM with workerd-friendly imports. Trade-off — ergonomic loss vs cold-start free, edge-by-default execution.

## The 13-phase pipeline

> **TODO** detect → scan → vendor RSC → derive bindings → elide dead routes → emit manifest → ... — see NextCompile page for full breakdown.

## workerd compatibility surface

> **TODO** `nodejs_compat` flag, what Node APIs are polyfilled, what isn't, common pitfalls.

## Compatibility date & flags

> **TODO** how `compatibility_date` is selected, when to override flags, current pinned defaults in nextdeploy.yml init.

## Bundle size & limits

> **TODO** Workers free tier 1 MB, paid 10 MB — typical Next app size after NextCompile, what blows up the bundle.

## Cold start (or lack thereof)

> **TODO** Workers don't cold-start the way Lambda does — but isolate startup is non-zero on V8. Real-world numbers.

## Logs & observability

> **TODO** `nextdeploy logs` (wraps wrangler tail), `console.log` semantics, custom log forwarding to R2 / external.

## Limitations vs AWS Lambda path

> **TODO** RSC client components, Suspense streaming, `scheduled()` handlers — see Roadmap. AWS path supports more today via the Node bridge.
