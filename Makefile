.PHONY: install
install:
	pnpm install

.PHONY: build
build:
	pnpm run build

.PHONY: dev
dev:
	pnpm run dev

.PHONY: lint
lint:
	pnpm lint:fix
