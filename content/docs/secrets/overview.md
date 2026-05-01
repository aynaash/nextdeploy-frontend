---
title: Secret Management
lede: Secrets are encrypted locally, merged from three sources, and pushed to your target — Lambda Secrets Manager + Extension layer for serverless, EnvironmentFile for VPS. Never logged, never on the process command line.
status: draft
sourceRef: shared/secrets/, cli/cmd/secrets.go, daemon/internal/daemon/secrets_handler.go
related:
  - title: Encryption
    href: /docs/secrets/encryption
  - title: Doppler
    href: /docs/secrets/doppler
  - title: Lambda Extension
    href: /docs/secrets/lambda-extension
---

## Three-tier merge order

> **TODO** `.env` (lowest) → `secrets.files` entries in `nextdeploy.yml` → `.nextdeploy/.env` (highest). Why this order, conflict resolution.

## Setting secrets

> **TODO** `nextdeploy secrets set KEY=VALUE`, `nextdeploy secrets list`, `nextdeploy secrets unset`.

## Bulk import

> **TODO** `nextdeploy secrets load` — from file, from Doppler.

## Cross-referencing with metadata

> **TODO** NextDeploy warns pre-deploy if Stripe / Cloudinary / etc. detected but matching secret missing.

## VPS path: EnvironmentFile

> **TODO** systemd `EnvironmentFile=`, why this avoids `/proc/[pid]/environ` leakage.

## Lambda path: Secrets Manager + Extension

> **TODO** see Lambda Extension page — fetched at cold start, not in env vars.

## Rotation

> **TODO** how to rotate, what re-deploys / restarts are needed.

## Known limitations

> **TODO** whole-blob writes can clobber concurrent edits (CAS retry limited to 5), `.nextdeploy/.env` not encrypted at rest.
