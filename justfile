default:
    cd scryr-diagram/deno_scripts && just

# Run the Vite development server using Deno
vite-dev:
    deno run -A --unstable npm:vite

# Build the Vite project using Deno
vite-build:
    deno run -A --unstable npm:vite build

# Preview the Vite production build using Deno
vite-preview:
    deno run -A --unstable npm:vite preview

# Format all supported files in the project, including the justfile itself
fmt:
    deno fmt
    just --fmt --unstable

# Lint the project
lint:
    deno lint

# Type check the project
check:
    deno check src/main.tsx

# Run all checks (format, lint, type check)
fix:
    just fmt
    just lint
    just check
