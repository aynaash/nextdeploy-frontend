---
title: AWS Quickstart
lede: Deploy a Next.js app to your own AWS account — Lambda + CloudFront + S3 + ACM, fully provisioned on first deploy. No platform in the middle.
status: draft
sourceRef: cli/cmd/deploy.go, cli/internal/serverless/aws*.go
related:
  - title: AWS Lambda
    href: /docs/aws/lambda
  - title: CloudFront
    href: /docs/aws/cloudfront
  - title: DNS Configuration
    href: /docs/dns
---

## Prerequisites

> **TODO** AWS account with admin (initial), an IAM user/role NextDeploy can use, a domain you control.

## 1. Configure AWS credentials

> **TODO** `nextdeploy creds` — how it stores them, env var fallback, IAM permissions required.

## 2. Initialize for serverless

> **TODO** `nextdeploy init --target=serverless` — fields it adds (region, `provider: aws`).

## 3. Plan

> **TODO** `nextdeploy plan` — dry-run output, what will be created.

## 4. Deploy

> **TODO** `nextdeploy deploy` — phases: build, upload, Lambda create, CloudFront, ACM, DNS guidance.

## 5. ACM cert validation

> **TODO** CNAME records to create, how to verify, what to do while it propagates.

## 6. Verify

> **TODO** CloudFront URL first, then custom domain after DNS.

## Cost expectations

> **TODO** rough numbers for low-traffic personal site, what dominates cost (Lambda invocations, CF egress).
