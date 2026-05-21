# @bootstrap-vue-next/mcp

Minimal Model Context Protocol server package for future BootstrapVueNext migration tooling.

## Development

```bash
pnpm --filter @bootstrap-vue-next/mcp run dev
```

## Build

```bash
pnpm --filter @bootstrap-vue-next/mcp run build
pnpm --filter @bootstrap-vue-next/mcp run typecheck
```

## Run

```bash
pnpm --filter @bootstrap-vue-next/mcp run build
pnpm --filter @bootstrap-vue-next/mcp run start
```

## Notes

- `src/index.ts` initializes the MCP server and stdio transport.
- Tool registration is intentionally scaffold-only for future implementation.
- No migration logic or codemods are included in this package yet.
