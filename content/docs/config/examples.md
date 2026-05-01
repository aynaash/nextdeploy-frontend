---
title: Configuration Examples
lede: Copy-paste-friendly nextdeploy.yml snippets for common setups. Each example shows the minimum required and the most useful optional fields.
status: draft
sourceRef: sample.nextdeploy.yml
related:
  - title: YAML Reference
    href: /docs/config/reference
  - title: CI/CD
    href: /docs/operations/ci-cd
---

## Minimal VPS deploy

> **TODO** one server, one app, default Caddy + HTTPS.

## Multi-server VPS (round-robin or staging+prod)

> **TODO** `servers` array with name labels, `--server` flag usage.

## Minimal AWS serverless

> **TODO** `us-east-1`, default Lambda config, no CF domain config.

## AWS with custom domain + ACM

> **TODO** `serverless` block + ACM cert validation flow.

## AWS with ISR enabled

> **TODO** `serverless.isr` settings, queue config.

## AWS with image optimization

> **TODO** `image_optimization` on / off, `remotePatterns`.

## Cloudflare Workers (experimental)

> **TODO** minimum bindings + `compatibility_date`.

## Cloudflare with Hyperdrive + Postgres

> **TODO** Hyperdrive config, secret URL, binding wiring.

## Doppler-driven secrets

> **TODO** `secrets.provider: doppler` block.

## Webhook notifications

> **TODO** `on_success` Slack hook example.

## CI deploy config

> **TODO** env-driven values, headless deploy flags.
