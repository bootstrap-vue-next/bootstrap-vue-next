import process from 'node:process'

import {Server} from '#mcp-sdk/server'
import {StdioServerTransport} from '#mcp-sdk/stdio'
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '#mcp-sdk/types'

import packageJson from '../package.json' with {type: 'json'}
import {DEFAULT_DOCS_BASE_URL, DOCS_BASE_URL_ENV_VAR, DocsSource} from './docs-source.js'
import {MigrationKnowledgeBase, type MigrationCategory, type MigrationMatch} from './migration-knowledge-base.js'

const SERVER_INFO = {
  name: packageJson.name,
  version: packageJson.version,
} as const

const SITE_INDEX_RESOURCE_URI = 'bootstrap-vue-next://docs/llms.txt'
const FULL_CORPUS_RESOURCE_URI = 'bootstrap-vue-next://docs/llms-full.txt'
const MIGRATION_OVERVIEW_RESOURCE_URI = 'bootstrap-vue-next://migration/overview'
const MIGRATION_GUIDE_ALIAS_RESOURCE_URI = 'bootstrap-vue-next://migration/guide'
const MIGRATION_ENTRY_RESOURCE_URI_PREFIX = 'bootstrap-vue-next://migration/entry/'

type ToolArguments = Record<string, unknown> | undefined

interface CreateServerOptions {
  docsBaseUrl?: string
  fetch?: typeof fetch
}

const toolDefinitions = [
  {
    annotations: {
      idempotentHint: true,
      readOnlyHint: true,
    },
    description: 'Fetch the migration knowledge-base overview plus the primary cross-cutting migration overview entry.',
    inputSchema: {
      properties: {},
      type: 'object',
    },
    name: 'fetch_migration_overview',
  },
  {
    annotations: {
      idempotentHint: true,
      readOnlyHint: true,
    },
    description: 'Fetch a migration entry by id or alias such as "bmodal", "v-b-tooltip", or "migration guide".',
    inputSchema: {
      properties: {
        id: {
          description: 'Migration entry id or alias.',
          type: 'string',
        },
      },
      required: ['id'],
      type: 'object',
    },
    name: 'fetch_migration_entry',
  },
  {
    annotations: {
      idempotentHint: true,
      readOnlyHint: true,
    },
    description: 'Search migration entries by component, directive, prop, keyword, or migration term.',
    inputSchema: {
      properties: {
        category: {
          description: 'Optional category filter.',
          enum: ['patterns', 'props', 'components', 'directives'],
          type: 'string',
        },
        limit: {
          description: 'Maximum number of matches to return. Defaults to 8.',
          minimum: 1,
          type: 'number',
        },
        query: {
          description: 'Free-text search query.',
          type: 'string',
        },
      },
      required: ['query'],
      type: 'object',
    },
    name: 'search_migration_entries',
  },
  {
    annotations: {
      idempotentHint: true,
      readOnlyHint: true,
    },
    description: 'Expand the related migration entries for a specific entry id or alias.',
    inputSchema: {
      properties: {
        id: {
          description: 'Migration entry id or alias.',
          type: 'string',
        },
      },
      required: ['id'],
      type: 'object',
    },
    name: 'expand_related_migration_entries',
  },
  {
    annotations: {
      idempotentHint: true,
      readOnlyHint: true,
    },
    description: 'Identify likely migration entries from a list of user-provided terms.',
    inputSchema: {
      properties: {
        includeRelated: {
          description: 'Whether to expand directly related migration entries.',
          type: 'boolean',
        },
        terms: {
          description: 'Component, directive, prop, or keyword terms to analyze.',
          items: {
            type: 'string',
          },
          type: 'array',
        },
      },
      required: ['terms'],
      type: 'object',
    },
    name: 'identify_migration_entries',
  },
  {
    annotations: {
      idempotentHint: true,
      readOnlyHint: true,
    },
    description:
      'Generate an upgrade checklist that splits likely safe rewrites from manual-review migrations.',
    inputSchema: {
      properties: {
        includeRelated: {
          description: 'Whether to expand directly related migration entries.',
          type: 'boolean',
        },
        terms: {
          description: 'Component, directive, prop, or keyword terms to analyze.',
          items: {
            type: 'string',
          },
          type: 'array',
        },
      },
      required: ['terms'],
      type: 'object',
    },
    name: 'generate_upgrade_checklist',
  },
] as const

const resolveDocsBaseUrl = (options: CreateServerOptions = {}): string =>
  options.docsBaseUrl ?? process.env[DOCS_BASE_URL_ENV_VAR] ?? DEFAULT_DOCS_BASE_URL

const getStringArgument = (arguments_: ToolArguments, key: string): string | undefined => {
  const value = arguments_?.[key]
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : undefined
}

const getStringArrayArgument = (arguments_: ToolArguments, key: string): string[] | undefined => {
  const value = arguments_?.[key]
  return Array.isArray(value) && value.every((item) => typeof item === 'string')
    ? value.map((item) => item.trim()).filter((item) => item !== '')
    : undefined
}

const getBooleanArgument = (arguments_: ToolArguments, key: string): boolean | undefined => {
  const value = arguments_?.[key]
  return typeof value === 'boolean' ? value : undefined
}

const getPositiveNumberArgument = (arguments_: ToolArguments, key: string): number | undefined => {
  const value = arguments_?.[key]
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : undefined
}

const getCategoryArgument = (arguments_: ToolArguments, key: string): MigrationCategory | undefined => {
  const value = arguments_?.[key]
  return value === 'patterns' || value === 'props' || value === 'components' || value === 'directives'
    ? value
    : undefined
}

const toTextResult = (text: string, structuredContent?: Record<string, unknown>, isError?: boolean) => ({
  content: [
    {
      text,
      type: 'text' as const,
    },
  ],
  isError,
  structuredContent,
})

const formatMigrationMatch = (match: MigrationMatch): string => {
  const classification = match.entry.metadata.manualReviewRequired
    ? 'manual review required'
    : match.entry.metadata.safeRewrite
      ? 'likely safe rewrite'
      : 'review recommended'
  const relatedSuffix = match.fromRelated ? ' (related)' : ''
  const matchedTermsSuffix =
    match.matchedTerms.length > 0 ? ` — matched: ${match.matchedTerms.join(', ')}` : ''

  return `- ${match.entry.title} (\`${match.entry.metadata.id}\`, ${match.entry.metadata.category}, ${classification})${relatedSuffix}${matchedTermsSuffix}`
}

const formatMigrationOverview = async (knowledgeBase: MigrationKnowledgeBase): Promise<string | undefined> => {
  const overview = await knowledgeBase.loadOverview()
  if (overview === undefined) {
    return
  }

  const primaryEntry = await knowledgeBase.getEntry('migration guide')

  return [
    `# ${overview.title}`,
    '',
    overview.summary,
    '',
    `Canonical page: ${overview.url}`,
    primaryEntry ? `Primary cross-cutting entry: ${primaryEntry.title} (\`${primaryEntry.metadata.id}\`)` : undefined,
    '',
    overview.content,
  ]
    .filter((line): line is string => line !== undefined)
    .join('\n')
}

const formatMigrationEntry = async (
  knowledgeBase: MigrationKnowledgeBase,
  idOrAlias: string
): Promise<{entryId?: string; text: string}> => {
  const entry = await knowledgeBase.getEntry(idOrAlias)
  if (entry === undefined) {
    return {
      text: `No migration entry matched "${idOrAlias}".`,
    }
  }

  return {
    entryId: entry.metadata.id,
    text: [
      `# ${entry.title}`,
      '',
      `ID: \`${entry.metadata.id}\``,
      `Category: ${entry.metadata.category}`,
      `Safe rewrite: ${entry.metadata.safeRewrite ? 'yes' : 'no'}`,
      `Manual review required: ${entry.metadata.manualReviewRequired ? 'yes' : 'no'}`,
      `URL: ${entry.url}`,
      '',
      entry.content,
    ].join('\n'),
  }
}

export const createServer = (options: CreateServerOptions = {}): Server => {
  const docsSource = new DocsSource({
    docsBaseUrl: resolveDocsBaseUrl(options),
    fetch: options.fetch,
  })
  const migrationKnowledgeBase = new MigrationKnowledgeBase(docsSource)
  const server = new Server(SERVER_INFO, {
    capabilities: {
      resources: {},
      tools: {},
    },
    instructions: `BootstrapVueNext migration assistant backed by deployed LLM markdown docs at ${docsSource.docsBaseUrl}. Override with ${DOCS_BASE_URL_ENV_VAR}.`,
  })

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [...toolDefinitions],
  }))

  server.setRequestHandler(ListResourcesRequestSchema, async () => {
    const entries = await migrationKnowledgeBase.loadEntries()

    return {
      resources: [
        {
          description: 'LLM site index generated from the docs build.',
          mimeType: 'text/plain',
          name: 'llms.txt',
          title: 'BootstrapVueNext docs LLM index',
          uri: SITE_INDEX_RESOURCE_URI,
        },
        {
          description: 'Combined LLM markdown corpus generated from the docs build.',
          mimeType: 'text/plain',
          name: 'llms-full.txt',
          title: 'BootstrapVueNext docs full LLM corpus',
          uri: FULL_CORPUS_RESOURCE_URI,
        },
        {
          description: 'Top-level migration knowledge-base overview page.',
          mimeType: 'text/markdown',
          name: 'migration-overview',
          title: 'Migration knowledge-base overview',
          uri: MIGRATION_OVERVIEW_RESOURCE_URI,
        },
        ...entries.map((entry) => ({
          description: entry.summary,
          mimeType: 'text/markdown',
          name: entry.metadata.id,
          title: entry.title,
          uri: entry.resourceUri,
        })),
      ],
    }
  })

  server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const {uri} = request.params

    if (uri === SITE_INDEX_RESOURCE_URI) {
      const siteIndex = await docsSource.loadSiteIndex()
      return {
        contents: [
          {
            mimeType: 'text/plain',
            text: siteIndex ?? 'Unable to load llms.txt from the configured docs base URL.',
            uri,
          },
        ],
      }
    }

    if (uri === FULL_CORPUS_RESOURCE_URI) {
      const fullCorpus = await docsSource.loadFullCorpus()
      return {
        contents: [
          {
            mimeType: 'text/plain',
            text: fullCorpus ?? 'Unable to load llms-full.txt from the configured docs base URL.',
            uri,
          },
        ],
      }
    }

    if (uri === MIGRATION_OVERVIEW_RESOURCE_URI || uri === MIGRATION_GUIDE_ALIAS_RESOURCE_URI) {
      const overviewText = await formatMigrationOverview(migrationKnowledgeBase)
      return {
        contents: [
          {
            mimeType: 'text/markdown',
            text: overviewText ?? 'Unable to load the migration overview from the configured docs base URL.',
            uri,
          },
        ],
      }
    }

    if (uri.startsWith(MIGRATION_ENTRY_RESOURCE_URI_PREFIX)) {
      const entryId = uri.slice(MIGRATION_ENTRY_RESOURCE_URI_PREFIX.length)
      const {text} = await formatMigrationEntry(migrationKnowledgeBase, entryId)

      return {
        contents: [
          {
            mimeType: 'text/markdown',
            text,
            uri,
          },
        ],
      }
    }

    return {
      contents: [
        {
          mimeType: 'text/plain',
          text: `Unknown resource URI: ${uri}`,
          uri,
        },
      ],
    }
  })

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const {arguments: arguments_, name} = request.params

    switch (name) {
      case 'fetch_migration_overview': {
        const overview = await migrationKnowledgeBase.loadOverview()
        const primaryEntry = await migrationKnowledgeBase.getEntry('migration guide')

        if (overview === undefined) {
          return toTextResult(
            'Unable to load the migration overview from the configured docs base URL.',
            {
              docsBaseUrl: migrationKnowledgeBase.docsBaseUrl,
            },
            true
          )
        }

        const overviewText =
          (await formatMigrationOverview(migrationKnowledgeBase)) ??
          'Unable to render the migration overview from the configured docs base URL.'

        return toTextResult(overviewText, {
          docsBaseUrl: migrationKnowledgeBase.docsBaseUrl,
          overview,
          primaryEntry,
        })
      }

      case 'fetch_migration_entry': {
        const id = getStringArgument(arguments_, 'id')
        if (id === undefined) {
          return toTextResult('The "id" argument is required.', undefined, true)
        }

        const entry = await migrationKnowledgeBase.getEntry(id)
        if (entry === undefined) {
          return toTextResult(`No migration entry matched "${id}".`, undefined, true)
        }

        return toTextResult((await formatMigrationEntry(migrationKnowledgeBase, id)).text, {
          entry,
        })
      }

      case 'search_migration_entries': {
        const query = getStringArgument(arguments_, 'query')
        if (query === undefined) {
          return toTextResult('The "query" argument is required.', undefined, true)
        }

        const matches = await migrationKnowledgeBase.searchEntries(query, {
          category: getCategoryArgument(arguments_, 'category'),
          limit: getPositiveNumberArgument(arguments_, 'limit'),
        })

        if (matches.length === 0) {
          return toTextResult(`No migration entries matched "${query}".`, {query})
        }

        return toTextResult(
          [
            `Search results for "${query}":`,
            '',
            ...matches.map((entry) =>
              formatMigrationMatch({
                entry,
                fromRelated: false,
                matchedTerms: [query],
                score: 0,
              })
            ),
          ].join('\n'),
          {
            matches,
            query,
          }
        )
      }

      case 'expand_related_migration_entries': {
        const id = getStringArgument(arguments_, 'id')
        if (id === undefined) {
          return toTextResult('The "id" argument is required.', undefined, true)
        }

        const relatedEntries = await migrationKnowledgeBase.expandRelatedEntries(id)
        if (relatedEntries.length === 0) {
          return toTextResult(`No migration entry matched "${id}".`, undefined, true)
        }

        return toTextResult(
          [`Related migration entries for "${id}":`, '', ...relatedEntries.map((entry) =>
            `- ${entry.title} (\`${entry.metadata.id}\`, ${entry.metadata.category})`
          )].join('\n'),
          {
            entries: relatedEntries,
          }
        )
      }

      case 'identify_migration_entries': {
        const terms = getStringArrayArgument(arguments_, 'terms')
        if (terms === undefined || terms.length === 0) {
          return toTextResult('The "terms" argument must be a non-empty string array.', undefined, true)
        }

        const matches = await migrationKnowledgeBase.identifyEntries(terms, {
          includeRelated: getBooleanArgument(arguments_, 'includeRelated'),
        })
        const identifyText =
          matches.length === 0
            ? `No migration entries matched: ${terms.join(', ')}`
            : ['Identified migration entries:', '', ...matches.map(formatMigrationMatch)].join('\n')

        return toTextResult(
          identifyText,
          {
            matches,
            terms,
          }
        )
      }

      case 'generate_upgrade_checklist': {
        const terms = getStringArrayArgument(arguments_, 'terms')
        if (terms === undefined || terms.length === 0) {
          return toTextResult('The "terms" argument must be a non-empty string array.', undefined, true)
        }

        const checklist = await migrationKnowledgeBase.generateUpgradeChecklist(terms, {
          includeRelated: getBooleanArgument(arguments_, 'includeRelated'),
        })

        return toTextResult(
          [
            `Upgrade checklist for: ${checklist.terms.join(', ')}`,
            '',
            'Manual review required:',
            ...(checklist.manualReviewRequired.length > 0
              ? checklist.manualReviewRequired.map(formatMigrationMatch)
              : ['- None identified']),
            '',
            'Likely safe rewrites:',
            ...(checklist.safeRewriteCandidates.length > 0
              ? checklist.safeRewriteCandidates.map(formatMigrationMatch)
              : ['- None identified']),
          ].join('\n'),
          {checklist}
        )
      }

      default:
        return toTextResult(`Unknown tool: ${name}`, undefined, true)
    }
  })

  return server
}

const startServer = async (): Promise<void> => {
  const server = createServer()
  const transport = new StdioServerTransport()

  await server.connect(transport)
}

void startServer().catch((error: unknown) => {
  console.error('Failed to start BootstrapVueNext MCP server.', error)
  process.exit(1)
})
