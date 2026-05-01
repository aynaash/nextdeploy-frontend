---
title: Build Metadata
lede: Every nextdeploy build emits .nextdeploy/metadata.json — a static analysis of your Next.js output. It drives every downstream decision — what to upload, what to invalidate, what secrets to validate.
status: draft
sourceRef: shared/nextcore/*.go (GenerateMetadata, DetectVersions, ScanCompiledServer, EmitManifest)
related:
  - title: How It Works
    href: /docs/concepts/how-it-works
  - title: NextCompile
    href: /docs/advanced/nextcompile
---

## When metadata is generated

> **TODO** after `next build`, before tarball — git commit captured here.

## Schema overview

> **TODO** top-level keys (build, routes, integrations, assets, git, runtime, features).

## Route classification

> **TODO** how static / SSR / ISR / API / middleware are detected, manifest sources used.

## Integration detection

> **TODO** Stripe, Cloudinary, Google Analytics, YouTube, Google Fonts — detected from build output, not source.

## Server Actions detection

> **TODO** `"use server"` directive scan, action manifest emission.

## Git provenance

> **TODO** commit hash, dirty state, branch, build timestamp.

## Cloudflare-specific fields

> **TODO** crons, DO classes, bindings, compatibility flags (when `target_type=serverless` + Cloudflare).

## metadata.lock

> **TODO** incremental build tracking — what changed since last build.

## Inspecting metadata

> **TODO** `jq` examples, common questions metadata answers.
