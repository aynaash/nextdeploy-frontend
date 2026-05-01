---
title: VPS Quickstart
lede: Deploy a Next.js app to your own Linux server in five minutes. Zero-downtime atomic swaps, automatic HTTPS via Caddy, hardened systemd unit.
status: draft
sourceRef: cli/cmd/init.go, cli/cmd/prepare.go, cli/cmd/build.go, cli/cmd/ship.go
related:
  - title: VPS Overview
    href: /docs/vps/overview
  - title: Daemon
    href: /docs/vps/daemon
  - title: Caddy & TLS
    href: /docs/vps/caddy
---

## Prerequisites

> **TODO** a Linux VPS with root SSH access, a domain pointed at the server IP, Node.js for the build (local).

## 1. Initialize project

> **TODO** `nextdeploy init` — what files it writes, `target_type: vps` default.

## 2. Configure servers

> **TODO** edit `nextdeploy.yml`: `host`, `ssh_key`, `username`, `port` — minimal example.

## 3. Prepare the server

> **TODO** `nextdeploy prepare` — what it does (SSH hardening, daemon install, Caddy, fail2ban).

## 4. Build

> **TODO** `nextdeploy build` — runs `next build`, validates standalone output, generates `metadata.json`.

## 5. Ship

> **TODO** `nextdeploy ship` — uploads bundle, daemon performs atomic port swap.

## 6. Verify

> **TODO** `nextdeploy status`, `nextdeploy logs --follow`, hit your domain.

## Common first-deploy issues

> **TODO** cert pending DNS propagation, port 80/443 firewall, SSH key permissions.
