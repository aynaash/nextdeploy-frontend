---
title: VPS Deployment
lede: Deploy to any Linux server you own or rent. Atomic port swap, zero-downtime, Caddy reverse proxy, hardened systemd units, last-5-releases ring buffer for instant rollback.
status: draft
sourceRef: cli/cmd/{prepare,build,ship,rollback}.go, daemon/
related:
  - title: VPS Quickstart
    href: /docs/getting-started/vps-quickstart
  - title: Daemon
    href: /docs/vps/daemon
  - title: Rollback
    href: /docs/vps/rollback
---

## When to choose VPS

> **TODO** predictable cost, full Next.js compatibility, no Lambda 250 MB limit, single-machine simplicity.

## Lifecycle

> **TODO** init → prepare → build → ship → status / logs → rollback if needed.

## What gets installed on the server

> **TODO** `nextdeployd` (systemd), Caddy, Fail2Ban, `/opt/nextdeploy` directory layout.

## Atomic port swap

> **TODO** how zero-downtime works — bring up new release on alt port, health-check, swap, drain old.

## Multiple apps on one server

> **TODO** each app gets its own systemd unit, port, user, release directory.

## Server requirements

> **TODO** min RAM, distro support (Debian / Ubuntu / RHEL), root SSH access for `prepare`.
