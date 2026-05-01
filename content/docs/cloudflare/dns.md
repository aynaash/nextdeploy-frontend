---
title: Cloudflare DNS
lede: Manage DNS records and zone settings declaratively in nextdeploy.yml. NextDeploy applies them on every deploy alongside Worker routes and custom domains.
status: in-progress
sourceRef: cli/internal/serverless/cloudflare_dns.go, shared/config/types.go (CFResources.DNS)
related:
  - title: Cloudflare Quickstart
    href: /docs/cloudflare/quickstart
  - title: DNS (general)
    href: /docs/dns
---

## Why declarative DNS

> **TODO** keep records in source control, deploy them with the app, no dashboard drift.

## Declaring records

> **TODO** YAML shape under `serverless.cloudflare.resources.dns` — type (A / AAAA / CNAME / TXT / MX), name, content, proxied, TTL.

## Custom domain for Workers

> **TODO** `custom_domains` list — NextDeploy adds the route, DNS, and SSL automatically.

## Zone settings

> **TODO** declaring zone-level toggles (always-use-https, min TLS, ssl mode, http3) when NextDeploy owns the zone.

## CNAME apex

> **TODO** Cloudflare CNAME flattening makes apex CNAMEs work — the AWS apex caveat does not apply here.

## Records NextDeploy creates automatically

> **TODO** custom domain routes auto-create matching DNS — what to expect, how to override.

## Drift detection

> **TODO** `nextdeploy plan` flags records that exist in CF but not in yaml (and vice versa).

## Limitations today

> **TODO** zone-level analytics / page rules not in scope; some edge of API not yet wired (see CLOUDFLARE_PARITY.md).
