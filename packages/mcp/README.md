# @bootstrap-vue-next/mcp

BootstrapVueNext Model Context Protocol server for migration-focused docs access and planning.

## Docs source

- The server reads the deployed LLM markdown docs by default from:
  - `https://bootstrap-vue-next.github.io/bootstrap-vue-next/llms.txt`
  - `https://bootstrap-vue-next.github.io/bootstrap-vue-next/llms-full.txt`
- Individual migration pages are loaded from the published `.md` routes under the same docs base URL.
- Override the docs base URL with `BOOTSTRAP_VUE_NEXT_MCP_DOCS_URL` to target staging, preview, or local docs.

## Migration capabilities

- Fetch the migration knowledge-base overview.
- Fetch a migration entry by id or alias.
- Search migration entries by component, directive, prop, or keyword.
- Expand related migration entries for a topic.
- Identify likely migrations from user-provided terms.
- Generate upgrade checklists split into likely safe rewrites and manual-review work.

The migration corpus is sourced from the docs build's LLM markdown output, including the structured migration frontmatter metadata already present in `apps/docs/src/docs/migration-data/**/*.md`.

## Development

```bash
pnpm --filter @bootstrap-vue-next/mcp run dev
```

## Build

```bash
pnpm --filter @bootstrap-vue-next/mcp run build
pnpm --filter @bootstrap-vue-next/mcp run typecheck
pnpm --filter @bootstrap-vue-next/mcp run test:unit:ci
```

## Run

```bash
pnpm --filter @bootstrap-vue-next/mcp run build
pnpm --filter @bootstrap-vue-next/mcp run start
```

## Notes

- `src/index.ts` initializes the MCP server and stdio transport.
- Migration docs are consumed from the published LLM markdown endpoints instead of scraping HTML.
- The server currently provides read-only migration resources and planning tools; it does not apply code changes or codemods.
