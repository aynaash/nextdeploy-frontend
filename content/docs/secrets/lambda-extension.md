---
title: Lambda Secrets Extension
lede: Secrets reach your Lambda via the AWS Parameters & Secrets Lambda Extension layer — fetched from Secrets Manager at cold start over the localhost loopback, never set as environment variables (by default).
status: draft
sourceRef: cli/internal/serverless/aws.go (bridge.js secret fetch), aws_secrets.go
related:
  - title: AWS Lambda
    href: /docs/aws/lambda
  - title: Secrets Overview
    href: /docs/secrets/overview
---

## Why not env vars by default

> **TODO** `/proc/[pid]/environ` inspection, log leakage, surface area for downstream subprocesses.

## Extension layer pinning

> **TODO** AWS-managed layer, ARN account `177933130628`, version pinned in code.

## Cold-start fetch

> **TODO** `bridge.js` calls `localhost:2773` concurrently with node spawn, secrets ready by first request.

## IAM requirements

> **TODO** `lambda:GetLayerVersion` + `secretsmanager:GetSecretValue` scoped to your secret ARN.

## Hard fail when Extension is unavailable

> **TODO** deploy refuses with actionable error rather than silently falling back to env vars.

## Opting in to env-var injection

> **TODO** `allow_secrets_in_env: true` (when and why — generally don't).

## Caching & rotation

> **TODO** Extension caches per cold container; how rotation propagates.

## Cost

> **TODO** Extension layer cold-start latency cost vs Secrets Manager API call cost.
