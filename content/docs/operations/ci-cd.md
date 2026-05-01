---
title: CI/CD
lede: Run nextdeploy from your CI of choice. Single binary, no Node, no Docker required. Use nextdeploy generate-ci to scaffold a working GitHub Actions workflow.
status: draft
sourceRef: cli/cmd/generate_ci.go
related:
  - title: CLI Reference
    href: /docs/cli/reference
  - title: Config Examples
    href: /docs/config/examples
---

## nextdeploy generate-ci

> **TODO** creates `.github/workflows/deploy.yml` — what it includes (install, creds, build, deploy).

## Required CI secrets

> **TODO** AWS keys (serverless) or SSH key (VPS), NextDeploy signing key.

## Caching the CLI binary

> **TODO** fast install — cache the binary, skip re-download per run.

## Branch → environment mapping

> **TODO** patterns — `main` → prod, `staging` → staging, PR → preview (manual today).

## Idempotent re-runs

> **TODO** safe to retry; reconciliation is idempotent on serverless, atomic on VPS.

## GitLab CI / CircleCI / others

> **TODO** equivalent step list (no scaffolder yet — patterns to copy).

## Self-hosted runners with sudo

> **TODO** when SSH user needs sudo for `prepare` / `upgrade-daemon`.

## Post-deploy smoke tests

> **TODO** pattern — hit `/health` after ship, fail the job on bad status.
