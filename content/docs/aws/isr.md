---
title: Incremental Static Regeneration (ISR)
lede: ISR routes are detected and classified by build metadata. A separate revalidation Lambda + SQS queue handle on-demand and time-based regeneration.
status: draft
sourceRef: cli/internal/serverless/aws_isr.go (and related), shared/nextcore/ (route classification)
related:
  - title: CloudFront
    href: /docs/aws/cloudfront
  - title: Build Metadata
    href: /docs/concepts/metadata
  - title: Roadmap
    href: /docs/roadmap
---

## Status today

> **TODO** detection: yes; revalidation Lambda + SQS provisioned; selective CDN invalidation: roadmap.

## How ISR routes are detected

> **TODO** parsed from Next.js manifests during build, recorded in `metadata.json`.

## Revalidation Lambda

> **TODO** separate function, triggered by SQS messages, refreshes ISR HTML.

## SQS queue + DLQ

> **TODO** producer: app code via `revalidatePath` / `revalidateTag`, consumer: revalidation Lambda.

## On-demand revalidation

> **TODO** `revalidatePath` / `revalidateTag` from your code — how it routes to the queue.

## Time-based revalidation

> **TODO** `revalidate: N` seconds — interaction with CloudFront TTLs.

## Limitations today

> **TODO** no per-route CloudFront cache invalidation yet (whole-cache nuke), DLQ unconfigured.

## On the roadmap

> **TODO** targeted CDN invalidation, cross-region cache coherency.
