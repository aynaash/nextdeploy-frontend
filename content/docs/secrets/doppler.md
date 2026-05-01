---
title: Doppler Integration
lede: Pull secrets from Doppler in bulk and merge them into your local secret store, then deploy as usual.
status: draft
sourceRef: shared/secrets/ (Doppler client), cli/cmd/secrets.go
related:
  - title: Secrets Overview
    href: /docs/secrets/overview
---

## Auth setup

> **TODO** Doppler service token, where to put it (env var or creds store).

## nextdeploy secrets load --provider doppler

> **TODO** flags, project / config selection, dry-run output.

## Merge semantics

> **TODO** Doppler values land in tier-2 (`secrets.files`) by default — overridable.

## Sync vs one-shot

> **TODO** `load` is one-shot — re-run before deploy if values changed.

## Filtering / namespacing

> **TODO** pattern filters, prefix stripping.

## CI usage

> **TODO** service token in CI, idempotent re-loads.
