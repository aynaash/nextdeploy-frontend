---
title: Image Optimization
lede: A dedicated Lambda handles /_next/image resizing using a WASM resizer (provided.al2023). Resized variants are cached at CloudFront.
status: draft
sourceRef: cli/internal/serverless/aws_image_lambda.go
related:
  - title: AWS Lambda
    href: /docs/aws/lambda
  - title: CloudFront
    href: /docs/aws/cloudfront
---

## Why a separate Lambda

> **TODO** isolates image work from main runtime, avoids 250 MB bundle bloat from sharp.

## Resizer implementation

> **TODO** WASM-based, CPU / memory profile, supported formats.

## CloudFront cache key

> **TODO** how query strings are handled (size, quality, format), known caveat to verify.

## Supported next/image features

> **TODO** sizes, quality, formats (AVIF / WebP), `remotePatterns` from `next.config.js`.

## External image origins

> **TODO** `remotePatterns` config, what NextDeploy detects from build output.

## Disabling image optimization

> **TODO** `unoptimized: true` in next.config or full bypass via passthrough policy.
