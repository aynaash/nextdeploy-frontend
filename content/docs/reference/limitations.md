---
title: Known Limitations
lede: Honest list of what NextDeploy does not do today. Severity ranges from "usually fine" to "don't deploy this until it's fixed".
status: draft
sourceRef: REVIEW.md (C1–C24), CLOUDFLARE_PARITY.md, NEXTCOMPILE_ROADMAP.md
related:
  - title: Roadmap
    href: /docs/roadmap
  - title: Troubleshooting
    href: /docs/reference/troubleshooting
---

## Lambda 250 MB unzipped limit

> **TODO** apps with sharp / Prisma / Puppeteer often exceed; mitigations.

## No edge runtime today

> **TODO** Next.js middleware runs at the edge in Vercel — currently routes to single Lambda origin.

## Single region per deploy

> **TODO** one Lambda + one CloudFront — multi-region is manual today.

## ISR: detection without selective invalidation

> **TODO** cache invalidation today is whole-distro, not per-route.

## AWS-only for serverless production

> **TODO** Cloudflare in active development, GCP / Azure not started.

## Architectural debt (REVIEW.md)

> **TODO** one giant `AWSProvider` struct, fragile string-matched AWS errors, large functions.

## Secret management caveats

> **TODO** whole-blob writes can clobber concurrent edits, `.nextdeploy/.env` not encrypted at rest, no KMS CMK.

## CloudFront /_next/image cache key

> **TODO** query strings excluded in some configs — variants may collide.

## ISR provisioned twice per deploy

> **TODO** wasted API calls; DLQ unconfigured.

## Cloudflare blockers (Tier A)

> **TODO** `scheduled()` exports, DO re-exports, `queue()` handler, workerd esbuild conditions, middleware detection, streaming SSR, Hyperdrive injection.

## NextCompile gaps

> **TODO** `"use client"` components, Suspense streaming, layout composition, error boundaries — see NextCompile page.

## Self-update on Windows

> **TODO** atomic replace caveats — file locking under PowerShell.
