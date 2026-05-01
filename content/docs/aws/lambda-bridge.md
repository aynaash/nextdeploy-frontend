---
title: The Lambda Bridge (bridge.js)
lede: A small Node handler that translates Lambda Function URL events into HTTP requests for the Next.js standalone server. Embedded into every deploy — no separate dependency.
status: draft
sourceRef: cli/internal/serverless/aws.go (embedded raw string)
related:
  - title: AWS Lambda
    href: /docs/aws/lambda
  - title: Lambda Extension (secrets)
    href: /docs/secrets/lambda-extension
  - title: NextCompile
    href: /docs/advanced/nextcompile
---

## Why a bridge instead of OpenNext-style compile

> **TODO** pragmatic tradeoff — full Next.js compatibility vs faster cold start.

## Cold start sequence

> **TODO** spawn `node server.js` → bind `127.0.0.1:3000` → fetch secrets via Extension → first request.

## Warm requests

> **TODO** reuse spawned process, HTTP keep-alive to localhost.

## Event translation

> **TODO** Function URL envelope → HTTP request → response with base64 body where binary.

## Failure handling

> **TODO** process crash → Lambda reports error → AWS spins fresh container.

## Streaming

> **TODO** Function URL response streaming support — what works today.

## Resource cost

> **TODO** memory pressure (Node + your app), why default 1024 MB.

## Future: native compile (NextCompile)

> **TODO** eventual replacement for users who want pure-JS handler — see NextCompile page.
