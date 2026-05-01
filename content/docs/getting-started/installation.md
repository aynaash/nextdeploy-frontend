---
title: Installation
lede: Install the CLI on your machine and (for VPS targets) the daemon on your server. Single static Go binaries — no Node, no runtime dependencies.
status: draft
sourceRef: install.sh, daemon.sh, scripts/, shared/updater/
related:
  - title: VPS Quickstart
    href: /docs/getting-started/vps-quickstart
  - title: AWS Quickstart
    href: /docs/getting-started/aws-quickstart
  - title: Self-update mechanism
    href: /docs/cli/self-update
---

## CLI: Linux & macOS

> **TODO** `curl install.sh | sh` — what it downloads, where it lands, PATH setup.

## CLI: Windows

> **TODO** `install.bat` steps, PATH on Windows.

## CLI: Go install (from source)

> **TODO** `go install github.com/aynaash/NextDeploy/cli@latest`, Go version requirement.

## Daemon: VPS install script

> **TODO** `curl daemon.sh | sh` — systemd unit creation, `/run/nextdeployd/`, `/var/log/nextdeployd/`, expected user.

## Daemon: Go install

> **TODO** `go install ...nextdeployd@main`, manual systemd setup.

## Verify install

> **TODO** `nextdeploy --version`, `nextdeployd --version`, `systemctl status nextdeployd`.

## Updating

> **TODO** `nextdeploy update` (CLI), `nextdeploy upgrade-daemon` (remote), background self-check behavior.

## Uninstall

> **TODO** remove binary, stop systemd unit, clean `/opt/nextdeploy` state.
