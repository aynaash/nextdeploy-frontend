---
title: AWS Lambda
lede: NextDeploy provisions and updates a complete AWS stack — Lambda + S3 + CloudFront + ACM + Secrets Manager — directly from the CLI. No CDK, no Terraform, no platform.
status: draft
sourceRef: cli/internal/serverless/aws_lambda.go, aws_s3.go, aws_cloudfront.go, aws_acm.go, aws_secrets.go
related:
  - title: CloudFront
    href: /docs/aws/cloudfront
  - title: Lambda Bridge
    href: /docs/aws/lambda-bridge
  - title: Lambda Extension (secrets)
    href: /docs/secrets/lambda-extension
  - title: ISR
    href: /docs/aws/isr
---

## What gets provisioned

> **TODO** main Lambda (Node 20), image-optimization Lambda, ISR revalidation Lambda, SQS + DLQ, S3 bucket + OAC, CloudFront distribution, ACM cert.

## Reconciliation model

> **TODO** no state file — discovers resources by tag, idempotent apply, resumable.

## IAM permissions required

> **TODO** minimum policy for first deploy, narrower policy for steady-state updates.

## Region & multi-region

> **TODO** single region per deploy, ACM must be `us-east-1`, multi-region is manual today.

## Lambda configuration knobs

> **TODO** memory, timeout, env, layers — exposed in `nextdeploy.yml` under `serverless.lambda`.

## The bridge.js handler

> **TODO** embedded shim, spawns `node server.js`, proxies events — see Lambda Bridge page for details.

## Cold start characteristics

> **TODO** roughly 3–5 s, factors that affect it, provisioned concurrency option.

## Deploy from CI

> **TODO** AWS creds in CI, what the deploy command does headless.
