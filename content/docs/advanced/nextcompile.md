---
title: NextCompile (Cloudflare runtime)
lede: The 13-phase Go compiler that turns a Next.js standalone build into an ESM Cloudflare Worker — vendored RSC runtime, Server Actions, middleware, image optimization. Active development; see roadmap for what works.
status: in-progress
sourceRef: shared/nextcompile/ (Go pipeline + JS runtime in runtime_src/), NEXTCOMPILE_ROADMAP.md
related:
  - title: Cloudflare (experimental)
    href: /docs/cloudflare/overview
  - title: Auto-Provisioning
    href: /docs/advanced/auto-provisioning
  - title: Roadmap
    href: /docs/roadmap
---

## Why a compiler instead of a bridge

> **TODO** Workers cannot spawn Node — must compile to ESM with workerd-friendly imports.

## The 13-phase pipeline

> **TODO** list each phase — detect, scan, vendor RSC, derive bindings, elide dead routes, emit manifest, etc.

## Runtime modules (runtime_src/)

> **TODO** `dispatcher.mjs`, `context.mjs`, `rsc.mjs`, `actions.mjs`, `cache.mjs`, `image.mjs` — what each owns.

## Working today

> **TODO** API routes, `/public` from R2, Server Actions (CSRF + JSON), pure-server RSC pages, image optimization, basic revalidate.

## Not working yet

> **TODO** `"use client"` components in RSC pages, Suspense streaming, `scheduled()` exports, full middleware semantics, Hyperdrive injection.

## Phased roadmap

> **TODO** auto-provisioning (priority 1), client-reference manifests, layout composition, HTML shell streaming, error boundaries, parallel routes, PPR.

## Trying it

> **TODO** how to opt in for experimentation, expected sharp edges.

## Contributing

> **TODO** where the bar is — `runtime_src` changes need parity tests against fixture apps.
