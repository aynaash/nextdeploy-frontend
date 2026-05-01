---
title: systemd Hardening
lede: Every NextDeploy app runs under a systemd unit configured for minimal attack surface — dedicated user, read-only filesystem, isolated /tmp, no privilege escalation.
status: draft
sourceRef: daemon/internal/daemon/process_manager.go, generated unit templates
related:
  - title: Security Model
    href: /docs/concepts/security
  - title: Daemon
    href: /docs/vps/daemon
---

## Generated unit example

> **TODO** show a real unit file (sanitized) — `User`, `ExecStart`, `EnvironmentFile`, hardening directives.

## User= (per-app deploy user)

> **TODO** why dedicated user vs `DynamicUser=`, how it interacts with file ownership.

## ProtectSystem=strict

> **TODO** what becomes read-only, `ReadWritePaths` exceptions for app data dirs.

## PrivateTmp=yes

> **TODO** isolated `/tmp` namespace, why it matters for secrets / temp files.

## NoNewPrivileges=yes

> **TODO** blocks `setuid` escalation.

## ProtectKernelTunables / Modules

> **TODO** if enabled, what it blocks.

## CapabilityBoundingSet

> **TODO** capabilities dropped.

## Customizing hardening

> **TODO** config knobs (if any), or overlay drop-in approach.

## Verifying with systemd-analyze

> **TODO** `systemd-analyze security <unit>` — expected score, what to ignore.
