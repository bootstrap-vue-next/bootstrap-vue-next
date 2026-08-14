---
title: MCP Server
description: Use the BootstrapVueNext MCP server for AI-assisted migration and docs access.
---

The `@bootstrap-vue-next/mcp` package is a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that gives AI assistants direct access to the BootstrapVueNext documentation and migration knowledge base. Connect it to your AI editor or coding assistant to get accurate, up-to-date migration guidance without leaving your workflow.

## Installation

The easiest way to use the MCP server is via `npx` — no local installation required:

```bash
npx @bootstrap-vue-next/mcp
```

### AI editor configuration

Most AI editors and assistants (Cursor, VS Code with GitHub Copilot, Claude Desktop, etc.) support MCP servers through a JSON configuration file. Add the following entry to your MCP configuration:

```json
{
  "mcpServers": {
    "bootstrap-vue-next": {
      "command": "npx",
      "args": ["@bootstrap-vue-next/mcp"]
    }
  }
}
```

### Global install

If you prefer to install the server globally:

::: code-group

```bash [PNPM]
pnpm add -g @bootstrap-vue-next/mcp
```

```bash [NPM]
npm install -g @bootstrap-vue-next/mcp
```

:::

Then reference the installed binary in your MCP config:

```json
{
  "mcpServers": {
    "bootstrap-vue-next": {
      "command": "bootstrap-vue-next-mcp"
    }
  }
}
```

## Configuration

### Docs base URL

By default the server reads LLM markdown docs from the published documentation site:

```
https://bootstrap-vue-next.github.io/bootstrap-vue-next/
```

Override this with the `BOOTSTRAP_VUE_NEXT_MCP_DOCS_URL` environment variable to target a staging build, a pull-request preview, or a locally running docs server:

```json
{
  "mcpServers": {
    "bootstrap-vue-next": {
      "command": "npx",
      "args": ["@bootstrap-vue-next/mcp"],
      "env": {
        "BOOTSTRAP_VUE_NEXT_MCP_DOCS_URL": "http://localhost:8000/bootstrap-vue-next/"
      }
    }
  }
}
```

## Resources

The server exposes the following resources that AI clients can read directly:

| Resource URI | Description |
| --- | --- |
| `bootstrap-vue-next://docs/llms.txt` | LLM site index generated from the docs build |
| `bootstrap-vue-next://docs/llms-full.txt` | Full LLM markdown corpus generated from the docs build |
| `bootstrap-vue-next://migration/overview` | Top-level migration knowledge-base overview page |
| `bootstrap-vue-next://migration/entry/{id}` | Individual migration entry by its id (e.g. `bmodal`, `v-b-tooltip`) |

## Tools

The server provides the following tools for AI assistants:

| Tool | Description | Arguments |
| --- | --- | --- |
| `fetch_migration_overview` | Fetches the migration knowledge-base overview and the primary cross-cutting migration entry | — |
| `fetch_migration_entry` | Fetches a migration entry by id or alias | `id` (required) |
| `search_migration_entries` | Searches migration entries by component, directive, prop, or keyword | `query` (required); `category`, `limit` (optional) |
| `expand_related_migration_entries` | Expands the related migration entries for a given entry | `id` (required) |
| `identify_migration_entries` | Identifies likely migration entries from a list of terms | `terms[]` (required); `includeRelated` (optional) |
| `generate_upgrade_checklist` | Generates a checklist split into likely safe rewrites and items requiring manual review | `terms[]` (required); `includeRelated` (optional) |

### `search_migration_entries` category filter

The optional `category` argument narrows results to a specific type of migration entry:

| Value | Description |
| --- | --- |
| `components` | Component-level migrations (e.g. `BModal`, `BDropdown`) |
| `directives` | Directive-level migrations (e.g. `v-b-tooltip`, `v-b-toggle`) |
| `props` | Prop-level changes within components |
| `patterns` | Cross-cutting patterns and conventions |

## Use Cases

### Find migration guidance for a specific component

Ask your AI assistant to fetch migration details for a component or directive you are updating:

> "Fetch the migration entry for BModal"
> "What changed for v-b-tooltip when migrating from BootstrapVue?"

The assistant will use `fetch_migration_entry` or `search_migration_entries` to retrieve the relevant guidance directly from the knowledge base.

### Generate an upgrade checklist

When starting a migration, provide the list of BootstrapVue components and directives your project uses and ask the assistant to generate a checklist:

> "Generate an upgrade checklist for BModal, BTable, BFormInput, and v-b-tooltip"

The assistant will use `generate_upgrade_checklist` to split the work into items that are likely safe to rewrite automatically and items that require manual review.

### Search for prop-level changes

Ask the assistant to search for specific prop or API changes:

> "Search for migration entries related to the 'size' prop"
> "Are there any breaking changes for the 'variant' prop?"

The assistant will use `search_migration_entries` with `category: "props"` to surface the relevant entries.
