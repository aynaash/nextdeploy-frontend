---
title: KV, Vectorize & AI
lede: Three smaller bindings grouped together — KV (eventually-consistent edge cache), Vectorize (vector search), AI Gateway (proxied LLM calls with caching and analytics).
status: in-progress
sourceRef: cli/internal/serverless/cloudflare_{kv,vectorize,ai}.go
related:
  - title: Bindings
    href: /docs/cloudflare/bindings
  - title: Auto-Provisioning
    href: /docs/advanced/auto-provisioning
---

## KV: when to use

> **TODO** eventually-consistent global key/value, low write rate, high read rate. Examples — feature flags, configuration, session lookup.

## KV: declaring & reading

> **TODO** YAML shape (namespace name + binding), `env.MY_KV.get/put/list`, TTL semantics, eventual consistency caveats.

## Vectorize: when to use

> **TODO** semantic search, RAG retrieval, similarity over embeddings. NOT a relational store.

## Vectorize: declaring an index

> **TODO** YAML shape — index name, dimensions, metric (cosine / dot / euclidean), preset embedding model (or BYO).

## Vectorize: writing & querying

> **TODO** code example — `env.INDEX.upsert([...])`, `query(vector, { topK, filter })`. Pairing with Workers AI for embeddings.

## AI Gateway: what it gives you

> **TODO** central proxy for OpenAI / Anthropic / etc. — caching, rate limit, logging, fallback routing. NextDeploy wires the binding.

## AI Gateway: declaring

> **TODO** YAML shape — gateway slug, default provider, cache TTL, retry config.

## AI Gateway: using from code

> **TODO** code example — `env.AI_GATEWAY.run(...)` or fetch through the gateway URL exposed via binding.

## Pricing summary

> **TODO** KV (per read / write / storage), Vectorize (per dim-vector stored + queries), AI Gateway (free; underlying model usage billed by provider).
