---
title: Bindings Overview
lede: Bindings are how a Worker reaches Cloudflare resources — KV, R2, Hyperdrive, Queues, Vectorize, AI, Durable Objects. NextDeploy declares them in nextdeploy.yml and (eventually) auto-detects them from your code.
status: in-progress
sourceRef: shared/config/types.go (CloudflareConfig.Bindings), cli/internal/serverless/cloudflare_*.go
related:
  - title: R2
    href: /docs/cloudflare/r2
  - title: Hyperdrive
    href: /docs/cloudflare/hyperdrive
  - title: Queues
    href: /docs/cloudflare/queues
  - title: Durable Objects
    href: /docs/cloudflare/durable-objects
  - title: KV / Vectorize / AI
    href: /docs/cloudflare/kv-vectorize-ai
  - title: Auto-Provisioning
    href: /docs/advanced/auto-provisioning
---

## What is a binding

> **TODO** Workers don't speak HTTP to Cloudflare resources — they speak via injected globals (`env.MY_KV`, `env.MY_R2`). A binding wires a name in code to a real resource.

## Declaring bindings in nextdeploy.yml

> **TODO** YAML shape — `serverless.cloudflare.bindings` block with sub-blocks per type. Minimal example for each type.

## Binding name conventions

> **TODO** UPPER_SNAKE_CASE, what the runtime accepts, naming clashes to avoid.

## Bindings that NextDeploy auto-creates

> **TODO** R2, KV, Queues, Vectorize, AI Gateway — created on first deploy if missing. Auto-provisioning is on the roadmap (currently you list them; they get created if absent).

## Bindings you must pre-create

> **TODO** Hyperdrive (needs DB URL secret first), Durable Objects (must come from your worker code).

## Per-environment bindings

> **TODO** how to swap binding targets between dev / staging / prod (different account or different namespace).

## Inspecting active bindings

> **TODO** `nextdeploy plan` shows declared vs live, mismatch warnings, drift detection.

## Removing a binding

> **TODO** declarative model — drop from yaml + `nextdeploy deploy` updates the worker. Resource itself is NOT deleted (use `nextdeploy destroy` or wrangler for that).
