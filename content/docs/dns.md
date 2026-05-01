---
title: DNS Configuration
lede: Pointing your domain at NextDeploy depends on the target. VPS — an A record to your server IP. Serverless — ACM cert validation by CNAME, then a CNAME or ALIAS to CloudFront.
status: draft
sourceRef: cli/internal/serverless/aws_acm.go, cloudflare_dns.go, dns.md
related:
  - title: Caddy & TLS
    href: /docs/vps/caddy
  - title: CloudFront
    href: /docs/aws/cloudfront
---

## VPS: A record

> **TODO** apex / subdomain A record to server IP, propagation, AAAA for IPv6.

## Serverless (AWS): cert validation

> **TODO** ACM emits CNAME challenge — what to add at your registrar.

## Serverless (AWS): traffic record

> **TODO** CNAME to CloudFront for subdomains, ALIAS / Route53 for apex.

## CNAME apex limitation

> **TODO** RFC 1034 — why a raw CNAME on the apex breaks email / other records, ALIAS / ANAME workarounds.

## Route53 path

> **TODO** auto-create alias record if NextDeploy has Route53 IAM, hosted zone discovery.

## Cloudflare DNS

> **TODO** declarative records via `CFResources.DNS` in `nextdeploy.yml`, current limitations.

## Verifying propagation

> **TODO** `dig +trace`, online checkers, cache TTL.

## Common pitfalls

> **TODO** missing CAA records blocking ACM, proxy-mode CF in front of CloudFront, stale wildcards.
