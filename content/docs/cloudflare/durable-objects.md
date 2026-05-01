---
title: Durable Objects
lede: Durable Objects (DOs) give Workers stateful, single-instance coordination — counters, rate limiters, websocket rooms, transactional storage. NextDeploy declares classes and migrations.
status: in-progress
sourceRef: cli/internal/serverless/cloudflare_do.go, shared/nextcompile/ (DO export wiring)
related:
  - title: Bindings
    href: /docs/cloudflare/bindings
  - title: Workers Runtime
    href: /docs/cloudflare/workers
---

## What a Durable Object is

> **TODO** singleton-ish actor — exactly one instance per ID, globally consistent storage, can hold WebSockets. Mental model — a tiny per-key server.

## When to reach for one

> **TODO** rate limit per user, real-time room state, leader election, transactional counter — anywhere "one writer at a time" matters.

## Status today

> **TODO** Tier A blocker — NextCompile does not yet re-export DO classes from your worker entry. Workaround patterns until lands.

## Declaring DO classes

> **TODO** YAML shape — list of class names, the binding name, which migration tag they live in.

## Migrations

> **TODO** every change to DO class set is a migration (`new_classes`, `renamed_classes`, `deleted_classes`). NextDeploy tracks them.

## Storage API

> **TODO** transactional KV inside the DO — `state.storage.get/put/transaction()`. Memory limits.

## WebSockets

> **TODO** DOs can hibernate and resume — the right place for long-lived sockets.

## Custom in/out methods

> **TODO** RPC vs fetch — current Workers convention.

## Pricing

> **TODO** request count + duration + storage + transactions, free tier.
