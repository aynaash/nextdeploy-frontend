---
title: The Daemon (nextdeployd)
lede: A small Go service that runs on your VPS and owns server-side state — app processes, releases, secrets, health, and logs. The CLI talks to it over a Unix socket using ECDSA-signed JSON commands.
status: draft
sourceRef: daemon/cmd/nextdeployd/main.go, daemon/internal/daemon/
related:
  - title: systemd Hardening
    href: /docs/vps/systemd-hardening
  - title: Audit Log
    href: /docs/operations/audit-log
  - title: Rollback
    href: /docs/vps/rollback
---

## Responsibilities

> **TODO** process supervision, atomic swap, secret injection, health monitoring, audit logging, Caddy config generation.

## Control plane: Unix socket

> **TODO** `/run/nextdeployd/`, signature-verified JSON commands, command types (ship / rollback / secrets / status / logs / destroy / stop / setupCaddy).

## Process management

> **TODO** spawns app via systemd unit, restart-on-fail backoff, exit-code monitoring.

## Release ring buffer

> **TODO** `/opt/nextdeploy/apps/{app}/releases/1..5/`, symlink to current, oldest pruned on new ship.

## Secret injection

> **TODO** merges 3 sources, writes `EnvironmentFile` (not env vars on cmdline) — invisible in `/proc/[pid]/environ`.

## Health monitor

> **TODO** 30-second polling loop, systemd unit status, auto-restart.

## Metrics endpoint

> **TODO** expvar at `:4000/debug/vars` — goroutines, uptime, command counts; how to scrape.

## Audit log

> **TODO** `/var/log/nextdeployd/audit.log`, JSON-line format.

## Updating the daemon

> **TODO** `nextdeploy upgrade-daemon` — version check, restart.

## Troubleshooting

> **TODO** `systemctl status nextdeployd`, `journalctl -u nextdeployd`, common failure modes.
