---
title: Security Model
lede: Defense in depth — Unix-socket-only daemon control plane with ECDSA-signed commands, hardened systemd units, encrypted secret storage, and Lambda-Extension-based secret injection (not env vars by default).
status: draft
sourceRef: shared/crypto.go, daemon/internal/daemon/, shared/secrets/
related:
  - title: systemd Hardening
    href: /docs/vps/systemd-hardening
  - title: Audit Log
    href: /docs/operations/audit-log
  - title: Secrets Encryption
    href: /docs/secrets/encryption
---

## Threat model

> **TODO** what NextDeploy protects against, what it does not (host compromise, AWS credential theft).

## CLI ⇄ daemon: signed commands

> **TODO** ECDSA signing, signature verification, why Unix socket (no TCP exposure).

## Rate limiting & IP allowlists

> **TODO** 10 req/s default, configurable, audit on rejection.

## Process isolation (systemd)

> **TODO** `User=app-deploy`, `ProtectSystem=strict`, `PrivateTmp`, `NoNewPrivileges`.

## Secret encryption at rest

> **TODO** ECDH + AES-256-GCM for local secrets, Ed25519 for signatures.

## Secrets in transit (Lambda)

> **TODO** Secrets Manager + Extension layer — secrets never appear in env vars unless `allow_secrets_in_env: true`.

## WAF (Coraza + OWASP CRS)

> **TODO** where it sits, what rulesets are loaded, customization.

## Fail2Ban

> **TODO** SSH brute-force protection on prepared VPS.

## HSTS & TLS

> **TODO** auto-enabled via Caddy on VPS, ACM on CloudFront.

## Audit log

> **TODO** every command logged JSON-line — who, what, when, result.

## Known limitations

> **TODO** see REVIEW.md C1–C24, especially secret blob writes and KMS CMK absence.
