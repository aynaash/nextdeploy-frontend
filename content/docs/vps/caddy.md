---
title: Caddy & TLS
lede: Caddy fronts your app on port 443. NextDeploy generates and reloads its config on every deploy, and Caddy handles Let's Encrypt automatically — no certbot, no cron jobs.
status: draft
sourceRef: daemon/internal/daemon/caddy_manager.go, shared/caddy/
related:
  - title: DNS Configuration
    href: /docs/dns
  - title: VPS Overview
    href: /docs/vps/overview
---

## Why Caddy

> **TODO** auto-HTTPS, modern defaults, simple Caddyfile, low overhead.

## How config is generated

> **TODO** per-app stanza assembled from `nextdeploy.yml` domain + port, atomic reload.

## HTTPS / Let's Encrypt

> **TODO** ACME flow, where certs are stored, renewal cadence.

## HSTS

> **TODO** enabled by default, preload guidance.

## Reverse proxy semantics

> **TODO** `X-Forwarded-*` headers, host preservation, upstream timeouts.

## Multiple domains / aliases

> **TODO** config patterns for redirects.

## Custom Caddyfile fragments

> **TODO** how / where to inject custom directives without losing them on next deploy.

## Troubleshooting cert issues

> **TODO** DNS not propagated, port 80 blocked, rate limits.
