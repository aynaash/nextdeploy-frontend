---
title: CLI Reference
lede: Every nextdeploy subcommand. Each command also has a {cmd} explain variant with deeper context, gotchas, and examples.
status: draft
sourceRef: cli/cmd/*.go (Cobra commands)
related:
  - title: YAML Reference
    href: /docs/config/reference
  - title: Self-Update
    href: /docs/cli/self-update
---

## Setup

> **TODO** `init`, `prepare`, `creds` — short blurb + flags table per command.

## Build & deploy

> **TODO** `build`, `ship`, `deploy`, `plan` — flags, side effects, exit codes.

## Operate

> **TODO** `status`, `logs`, `secrets`, `rollback`, `destroy` — flags, examples.

## Inspect & debug

> **TODO** `inspect` (bundle audit), `explain` (per-command), `generate-ci`.

## Maintain

> **TODO** `update` (CLI self-update), `upgrade-daemon` (remote).

## Global flags

> **TODO** `--config`, `--verbose`, `--json`, `--no-color` — apply to all commands.

## Exit codes

> **TODO** standard meaning of `0` / `1` / `2` / `64+`, machine-readable error mode.

## Environment variables

> **TODO** `NEXTDEPLOY_*` env vars CLI honors (creds, config path, etc.).

## Shell completion

> **TODO** bash / zsh / fish completion install instructions.
