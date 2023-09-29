dev:
  bunx --bun vite

build:
  bunx --bun tsc
  bunx --bun vite build

lint:
  bunx --bun eslint . --ext ts,tsx--report-unused-disable-directives --max-warnings 0

install:
  bun install
