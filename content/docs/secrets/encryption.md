---
title: Encryption
lede: Local secrets use ECDH key agreement and AES-256-GCM authenticated encryption. Daemon commands are signed with ECDSA. Updates are verified with Ed25519.
status: draft
sourceRef: shared/crypto.go, shared/secrets/
related:
  - title: Security Model
    href: /docs/concepts/security
  - title: Secrets Overview
    href: /docs/secrets/overview
---

## Key generation

> **TODO** how the per-machine key is created, where it is stored, file permissions.

## AES-256-GCM for secret payloads

> **TODO** nonce handling, AAD (associated data), integrity guarantee.

## ECDH for agent–daemon key agreement

> **TODO** how the shared key is derived for command authentication.

## ECDSA command signing

> **TODO** every daemon command signed by CLI key, verified server-side.

## Ed25519 for release verification

> **TODO** binary checksums for `nextdeploy update`.

## Threats addressed

> **TODO** casual disk inspection, replay attacks on socket, MITM on socket.

## Threats not addressed

> **TODO** host root compromise, AWS credential theft, KMS CMK absence (uses default key).
