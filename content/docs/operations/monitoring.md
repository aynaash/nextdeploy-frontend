---
title: Monitoring
lede: Surface app health and deploy state without bolting on a third-party APM. Status, structured logs, daemon metrics, and webhook hooks for the events that matter.
status: draft
sourceRef: cli/cmd/{status,logs}.go, daemon/internal/daemon/{health_monitor,metrics}.go
related:
  - title: Audit Log
    href: /docs/operations/audit-log
  - title: Daemon
    href: /docs/vps/daemon
---

## nextdeploy status

> **TODO** PID, memory, uptime, current release, health check result.

## nextdeploy logs --follow / --tail

> **TODO** streaming vs last-N, JSON vs human format.

## Daemon health monitor

> **TODO** 30-second polling loop, systemd unit status, auto-restart trigger.

## Daemon metrics endpoint

> **TODO** `:4000/debug/vars` (expvar) — goroutines, uptime, command counts; how to scrape.

## Webhook hooks

> **TODO** `webhook.on_success` / `on_failure` config, payload shape, retry behavior.

## External monitoring integration

> **TODO** patterns for piping logs to Datadog / Loki / CloudWatch.

## Lambda monitoring (CloudWatch)

> **TODO** log groups, default metrics, where to look for cold starts.

## CloudFront metrics

> **TODO** request count, error rate, cache hit ratio — where to find them.
