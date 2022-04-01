ifneq (,$(wildcard ./.env))
    include .env
    export
endif

.PHONY: help # List available tasks
help:
	@echo ""
	@echo "List of tasks available:"
	@echo ""
	@grep '^.PHONY: .* #' Makefile | sed 's/\.PHONY: \(.*\) # \(.*\)/- \1: \2/' | expand -t20
	@echo ""

.PHONY: clean # clean
clean:
	npx gatsby clean

.PHONY: build # build
build:
	npx gatsby build

.PHONY: dev # dev
dev:
	npx gatsby develop
