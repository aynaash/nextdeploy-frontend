---
title: nextdeploy.yml — Full Reference
lede: Every top-level key, every nested field, with type, default, and where it shows up in the deploy pipeline. Sourced from the Go config schema.
status: draft
sourceRef: shared/config/types.go, sample.nextdeploy.yml
related:
  - title: Examples
    href: /docs/config/examples
  - title: CLI Reference
    href: /docs/cli/reference
---

## version

> **TODO** config schema version, currently `"1.0"`, forward-compatibility policy.

## target_type

> **TODO** `"vps"` | `"serverless"` — drives which config sections are required.

## app

> **TODO** `name`, `environment`, `domain`, `port` — string types and constraints.

## repository

> **TODO** git remote tracking — used in `metadata.json` provenance.

## servers (VPS)

> **TODO** array — `name`, `host`, `port`, `username`, `ssh_key`, sudo strategy.

## serverless

> **TODO** `provider`, `region`, `kms_key_id`, lambda config (memory, timeout, env), ISR, image_optimization toggles.

## serverless.cloudflare

> **TODO** `compatibility_date` / `_flags`, custom domains, crons, bindings (R2 / Hyperdrive / Queues / Vectorize / AI / KV / DO), migrations, resources.

## secrets

> **TODO** `files[]` (dotenv paths), `provider` (doppler), `allow_secrets_in_env` (Lambda).

## monitoring

> **TODO** thresholds, Slack / email alert channels.

## backup

> **TODO** S3-compatible storage targets.

## ssl

> **TODO** Let's Encrypt auto-renewal config (VPS).

## webhook

> **TODO** `on_success` / `on_failure` POST hooks.

## CloudProvider (legacy)

> **TODO** AWS / GCP / Azure credentials field — deprecating in favor of `serverless.provider`.

## Validation rules

> **TODO** cross-field validations (e.g. serverless requires region), `nextdeploy validate` command.
