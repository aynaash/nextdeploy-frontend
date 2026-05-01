---
title: How It Works
lede: NextDeploy is not a transport layer. It builds a complete picture of your app at build time and uses that intelligence to deploy correctly to VPS or AWS — without a platform in the middle.
status: draft
sourceRef: shared/nextcore/, cli/cmd/build.go, cli/cmd/ship.go
related:
  - title: Build Metadata
    href: /docs/concepts/metadata
  - title: Architecture
    href: /docs/concepts/architecture
---

## The intelligence layer

> **TODO** why metadata-driven matters, contrast with rsync/dockerfile-style deploys.

## Build → metadata → deploy

> **TODO** end-to-end pipeline diagram and step-by-step (`next build`, scan, classify, emit, upload, swap).

## What gets detected

> **TODO** route classification (static / SSR / ISR / API / middleware), integration detection (Stripe, Cloudinary, GA, YouTube), Server Actions, I18n.

## Why it matters

> **TODO** pre-deploy validation, secret cross-referencing, targeted CDN invalidation, deployment provenance.

## Self-hosted philosophy

> **TODO** your VPS, your AWS account, your data — no vendor lock-in, no monthly platform bill.
