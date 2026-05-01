---
title: Architecture
lede: Two main deployment shapes — VPS (CLI ⇄ daemon over Unix socket, systemd-managed app) and Serverless (CLI provisions Lambda + CloudFront + S3 directly via AWS SDK). Both share the same build intelligence layer.
status: draft
sourceRef: cli/, daemon/, shared/, internal/packaging/
related:
  - title: How It Works
    href: /docs/concepts/how-it-works
  - title: Security Model
    href: /docs/concepts/security
  - title: Daemon
    href: /docs/vps/daemon
---

## Component map

> **TODO** CLI, daemon, `shared/nextcore` (build intel), `shared/nextcompile` (CF runtime), provider implementations.

## VPS data flow

> **TODO** diagram: local build → SSH → daemon socket → atomic swap → systemd unit → Caddy → user.

## Serverless data flow

> **TODO** diagram: local build → S3 assets + Lambda zip → CloudFront origins → ACM cert → user.

## Provider interface

> **TODO** `cli/internal/serverless/provider.go` — `Plan` / `Deploy` / `Rollback` / `Destroy` contract.

## State model

> **TODO** no central state file — VPS daemon owns server state; serverless reconciles by tag discovery.

## Trust boundaries

> **TODO** CLI ⇄ daemon (ECDSA over UNIX socket), CLI ⇄ AWS (SDK + IAM), Lambda ⇄ Secrets Manager (Extension layer).
