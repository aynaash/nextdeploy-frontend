---
title: Auto-Provisioning
lede: Detect bindings your code needs (KV, R2, Hyperdrive, Queues) from build output, prompt once, then create them in your Cloudflare account. Code → infrastructure, no wrangler.toml hand-editing. Killer feature in development.
status: in-progress
sourceRef: shared/nextcore/ (DeriveBindings stub), CLOUDFLARE_PARITY.md, NEXTCOMPILE_ROADMAP.md
related:
  - title: NextCompile
    href: /docs/advanced/nextcompile
  - title: Cloudflare (experimental)
    href: /docs/cloudflare/overview
  - title: Roadmap
    href: /docs/roadmap
---

## The pitch

> **TODO** most CF projects spend the first hour wiring `wrangler.toml` — auto-provisioning kills that step.

## Detection sources

> **TODO** env var patterns, fetch URLs, import statements — what NextCompile scans.

## Prompt flow

> **TODO** CLI shows: "I see KV reads of `NAMESPACE_X` — create it in account `Y`? [Y/n]" with binding name suggestion.

## Idempotent reconcile

> **TODO** re-runs only create what's missing, never deletes without explicit `destroy`.

## What can be auto-provisioned (target)

> **TODO** KV namespace, R2 bucket, Queues, Vectorize index, AI Gateway, Hyperdrive (with secret URL).

## What cannot be auto-provisioned

> **TODO** anything needing external creds (e.g. Postgres URL for Hyperdrive must be supplied).

## Status today

> **TODO** detection stub exists; full prompt flow + apply on roadmap (Phase 1 of NextCompile, ~2 weeks).

## Comparison: AWS path

> **TODO** AWS already provisions Lambda + S3 + CloudFront + ACM today — auto-provisioning brings parity to CF.
