---
title: Rollback (VPS)
lede: The daemon keeps the last 5 releases on disk. Rolling back is a symlink swap and a systemctl restart — usually under 2 seconds.
status: draft
sourceRef: daemon/internal/daemon/command_handler.go (handleRollback), cli/cmd/rollback.go
related:
  - title: Daemon
    href: /docs/vps/daemon
---

## Ring buffer layout

> **TODO** `/opt/nextdeploy/apps/{app}/releases/1..5/`, current symlink, retention.

## Rollback by step

> **TODO** `nextdeploy rollback --steps 1` — moves to previous release.

## Rollback by commit

> **TODO** `nextdeploy rollback --to <commit>` — looks up release matching commit hash from metadata.

## What happens during rollback

> **TODO** symlink swap → `systemctl restart` → health check → audit log entry.

## When rollback won't help

> **TODO** database migrations, external state changes, secret rotations applied since.

## Inspecting available releases

> **TODO** how to list current ring buffer contents (CLI cmd or `ssh ls`).

## Forward roll (un-rollback)

> **TODO** rolling forward to a release that's still in the ring.
