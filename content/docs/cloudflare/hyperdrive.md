---
title: Hyperdrive (Postgres)
lede: Hyperdrive gives Workers a low-latency connection pool to your Postgres. NextDeploy declares the config, wires up the binding, and injects the connection string at deploy time. Currently a Tier A blocker — see status.
status: in-progress
sourceRef: cli/internal/serverless/cloudflare_hyperdrive.go, CLOUDFLARE_PARITY.md
related:
  - title: Bindings
    href: /docs/cloudflare/bindings
  - title: Secrets Overview
    href: /docs/secrets/overview
---

## What Hyperdrive solves

> **TODO** Workers run anywhere — opening Postgres connections cold from each ISO is slow. Hyperdrive is a managed proxy / pool that keeps warm connections globally.

## Status today

> **TODO** binding declaration works; auto-injection of the connection string into the worker is a Tier A blocker — for now you supply it manually as a secret and reference it in code.

## Declaring in nextdeploy.yml

> **TODO** YAML shape — name, origin (your Postgres URL via secret), caching, max connections.

## Connection string as a secret

> **TODO** put your Postgres URL in `nextdeploy secrets set DB_URL=...`. Hyperdrive resolves it server-side; your code only sees the binding.

## Caching reads

> **TODO** Hyperdrive cache layer for read-heavy workloads, TTL config, when NOT to cache (mutating tables).

## Using from your app

> **TODO** code example with `pg` (or compatible driver) talking to `env.HYPERDRIVE.connectionString`. Latency expectations.

## Limitations

> **TODO** TCP only (no TLS termination yet in some cases), max connection limits, no DDL via Hyperdrive (apply migrations directly).

## Pricing

> **TODO** per-query pricing, free tier numbers.
