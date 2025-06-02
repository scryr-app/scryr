
default:
	@just --list


[working-directory: 'scryr-diagram']
setup:
	deno install -A --unstable npm:vite

[working-directory: 'scryr-diagram']
vite-dev:
	deno run -A --unstable npm:vite

[working-directory: 'scryr-diagram']
vite-build:
	deno run -A --unstable npm:vite build

[working-directory: 'scryr-diagram']
vite-preview:
	deno run -A --unstable npm:vite preview

[working-directory: 'scryr-diagram']
lint:
	deno lint

[working-directory: 'scryr-diagram']
format:
	deno fmt


fix:
	just format
	just lint

[working-directory: 'scryr-diagram']
test:
	deno test

[working-directory: 'scryr-diagram']
check:
	deno check src/main.tsx

[working-directory: 'scryr-diagram']
clean:
	rm -rf dist
	rm -rf .deno