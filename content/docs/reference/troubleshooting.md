---
title: Troubleshooting
lede: Symptoms first, then causes and fixes. Grouped by where the failure surfaces — local build, ship/deploy, runtime.
status: draft
sourceRef: cli/cmd/, daemon/internal/daemon/, common error strings
related:
  - title: Limitations
    href: /docs/reference/limitations
  - title: FAQ
    href: /docs/reference/faq
---

## next build fails before NextDeploy runs

> **TODO** output mode validation — app must be standalone; how to fix `next.config`.

## metadata.json missing fields

> **TODO** usually means an unsupported Next.js version — supported range.

## SSH connection refused / wrong key

> **TODO** permissions on key file, agent forwarding, Host entries.

## Daemon not responding on ship

> **TODO** `systemctl status nextdeployd`, `/run/nextdeployd/` socket perms, signature verify failures in journal.

## Caddy: "stuck" provisioning cert

> **TODO** DNS not propagated, port 80 firewall, Let's Encrypt rate limit.

## Lambda cold-start error: "process exited"

> **TODO** usually OOM (raise memory) or missing env (check Secrets Extension layer).

## Lambda secrets not present

> **TODO** IAM permission missing on `secretsmanager:GetSecretValue` or layer not attached.

## CloudFront 502 / 504

> **TODO** origin timeout — Lambda exceeded its timeout, increase or fix slow code path.

## CloudFront serving stale assets after deploy

> **TODO** invalidation behavior, what NextDeploy invalidates vs what it doesn't.

## ACM cert "pending validation" forever

> **TODO** CNAME records typo, wildcard quoting, CAA record blocking.

## Rollback restored old code but not old data

> **TODO** rollback is code-only — DB migrations / external state need separate handling.

## Cloudflare worker: bindings missing

> **TODO** `compatibility_date`, workerd condition mismatch, manual binding config required today.

## Where to ask for help

> **TODO** GitHub issues link, expected info to include (version, target, command output).
