---
title: Queues
lede: Cloudflare Queues let one Worker push messages and another consume them — durable, batched, with retry semantics. NextDeploy provisions queues and wires producer / consumer bindings into your worker.
status: in-progress
sourceRef: cli/internal/serverless/cloudflare_queues.go
related:
  - title: Bindings
    href: /docs/cloudflare/bindings
  - title: Durable Objects
    href: /docs/cloudflare/durable-objects
---

## When to use Queues

> **TODO** decoupling slow work from the request path (emails, webhooks, image post-processing), fan-out, retry-on-failure semantics.

## Producer vs consumer bindings

> **TODO** producer is a binding the worker calls `.send()` on; consumer is a `queue()` handler in the worker. Both need declaration.

## queue() handler — current limitation

> **TODO** Tier A blocker — NextCompile does not yet emit a `queue()` export from your handler. Workaround — separate worker for the consumer until this lands.

## Declaring in nextdeploy.yml

> **TODO** YAML shape — queue name, max batch, max delay, dead-letter queue (optional).

## Dead-letter queues

> **TODO** failed messages after N retries land in DLQ. How to declare, how to inspect.

## Batching & wait time

> **TODO** tuning `max_batch_size` and `max_batch_timeout` for throughput vs latency.

## Producing from a request handler

> **TODO** code example — `env.MY_QUEUE.send({ ... })`, `.sendBatch([...])`, content-type semantics.

## Consuming

> **TODO** the `queue()` export shape, ack vs retry, batch handling.

## Pricing

> **TODO** per-million operations, free tier, DLQ counted separately.
