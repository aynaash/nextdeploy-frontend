---
title: Audit Log
lede: Every command the daemon executes is appended to a JSON-line audit log. One entry per command — who, what, when, result, args.
status: draft
sourceRef: daemon/internal/daemon/audit.go, command_handler.go
related:
  - title: Security Model
    href: /docs/concepts/security
  - title: Monitoring
    href: /docs/operations/monitoring
---

## Location & format

> **TODO** `/var/log/nextdeployd/audit.log`, JSON-line, one entry per command.

## Entry fields

> **TODO** `timestamp`, `command_type`, `client_identity` (IP or `"unix-socket"`), `result` (success / fail), `error_details`, `args` (sanitized).

## What gets logged

> **TODO** all 8 command types — ship, rollback, secrets, status, logs, destroy, stop, setupCaddy.

## What does NOT get logged

> **TODO** secret values, full request bodies, anything classified as sensitive.

## Rotation

> **TODO** NOT rotated by daemon — use logrotate or external log management.

## Querying

> **TODO** `jq` examples for common questions (failed deploys this week, who restarted X).

## Shipping to SIEM

> **TODO** simple Filebeat / Vector / Fluent Bit config.
