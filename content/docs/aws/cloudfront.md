---
title: CloudFront
lede: The CDN in front of your Lambda + S3. NextDeploy configures CloudFront with two origins (compute and assets), per-route cache policies, and Origin Access Control on the S3 bucket.
status: draft
sourceRef: cli/internal/serverless/aws_cloudfront.go, dist-config.json
related:
  - title: AWS Lambda
    href: /docs/aws/lambda
  - title: Image Optimization
    href: /docs/aws/image-optimization
  - title: DNS Configuration
    href: /docs/dns
---

## Distribution layout

> **TODO** two origins (Lambda Function URL + S3 with OAC), default behavior + ordered behaviors.

## Cache policies per route type

> **TODO** static assets cached aggressively, API / SSR no-cache, ISR with TTL, `/_next/image` policy.

## Origin Access Control (OAC)

> **TODO** why OAC over OAI, S3 bucket policy locked to distribution.

## Custom domain & alternate names

> **TODO** CNAMEs config, SNI, IPv6.

## Invalidations

> **TODO** when NextDeploy invalidates, paths invalidated, cost considerations.

## Logging

> **TODO** access logs to S3 (optional), real-time log subscription pattern.

## Known caveat: query strings on /_next/image

> **TODO** see REVIEW.md — current cache key excludes query string in some configs.
