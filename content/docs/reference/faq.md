---
title: FAQ
lede: Common questions, in order of how often they come up. If your question isn't here, open a GitHub issue.
status: draft
---

## Is this Vercel-compatible?

> **TODO** standalone output, App Router + Pages, RSC support today (depends on target), what we don't support.

## Why Go for the CLI?

> **TODO** single static binary, no Node runtime on dev / ops machines, fast startup.

## Is it production-ready?

> **TODO** v0.1.x — works for personal / small-team, API may shift between minor versions, back up secrets, read changelogs.

## How does it compare to Kamal / Coolify / OpenNext / SST?

> **TODO** positioning vs each (transport vs intelligence layer; self-hosted vs platform; full Next vs subset).

## Can I use Postgres / Redis on the same VPS?

> **TODO** yes — daemon doesn't manage DBs, but you can deploy them and reference them via env vars.

## Multi-tenancy on one VPS?

> **TODO** multiple apps OK, each with own systemd unit + port + user.

## Does it support pnpm / yarn / npm / bun?

> **TODO** package manager auto-detected from lockfile.

## How big are deploys?

> **TODO** tarball size depends on standalone output; `nextdeploy inspect` helps audit.

## How does rollback work with database migrations?

> **TODO** rollback is code-only — pair with reversible migrations or freeze schema.

## Why not Terraform / CDK?

> **TODO** state-file friction, deploy speed, single-tool ergonomics — reconcile-by-tag is good enough today.

## Is the daemon required?

> **TODO** VPS only — serverless never installs anything on a server.

## Can I bring my own AWS resources?

> **TODO** partial — discovery-by-tag means you can pre-create with matching tags.

## License?

> **TODO** see `LICENSE` in repo.
