---
title: Self-Update
lede: The CLI is a single static binary that can update itself from GitHub Releases. The daemon updates separately via nextdeploy upgrade-daemon.
status: draft
sourceRef: shared/updater/updater.go, cli/cmd/update.go
related:
  - title: Installation
    href: /docs/getting-started/installation
  - title: CLI Reference
    href: /docs/cli/reference
---

## nextdeploy update

> **TODO** flow — fetch latest release manifest → download binary → verify checksum (Ed25519) → atomic replace.

## Background version check

> **TODO** non-blocking goroutine on every CLI invocation, surface notice in stderr only.

## Channel selection

> **TODO** stable vs preview (if applicable), pinning a specific version.

## Daemon upgrades

> **TODO** `nextdeploy upgrade-daemon` — pulls new daemon binary to remote, restarts systemd unit.

## Rollback an update

> **TODO** binary backup location, manual revert.

## Air-gapped installs

> **TODO** manual download + checksum verification flow.

## Disabling auto-checks

> **TODO** env var or config to opt out of background checks.
