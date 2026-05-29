import {parse as parseYaml} from 'yaml'

import {DocsSource, extractMarkdownOutputPaths} from './docs-source.js'

export type MigrationCategory = 'patterns' | 'props' | 'components' | 'directives'

type MigrationMetadataSource = {
  category?: unknown
  components?: unknown
  confidence?: unknown
  deprecated?: unknown
  description?: unknown
  id?: unknown
  introducedIn?: unknown
  manualReviewRequired?: unknown
  match?: unknown
  migrationType?: unknown
  related?: unknown
  replacement?: unknown
  safeRewrite?: unknown
  tags?: unknown
  title?: unknown
}

export interface MigrationMetadata {
  category: MigrationCategory
  components: string[]
  confidence?: string
  deprecated: string[]
  description?: string
  id: string
  introducedIn?: string
  manualReviewRequired: boolean
  match: string[]
  migrationType?: string
  related: string[]
  replacement: Record<string, string>
  safeRewrite: boolean
  tags: string[]
  title: string
}

export interface MigrationOverviewDocument {
  content: string
  outputPath: string
  summary: string
  title: string
  url: string
}

export interface MigrationEntry {
  content: string
  metadata: MigrationMetadata
  outputPath: string
  resourceUri: string
  summary: string
  title: string
  url: string
}

export interface MigrationMatch {
  entry: MigrationEntry
  fromRelated: boolean
  matchedTerms: string[]
  score: number
}

export interface UpgradeChecklist {
  all: MigrationMatch[]
  manualReviewRequired: MigrationMatch[]
  safeRewriteCandidates: MigrationMatch[]
  terms: string[]
}

interface MigrationContext {
  aliases: Map<string, string>
  entries: MigrationEntry[]
  entriesById: Map<string, MigrationEntry>
  overview?: MigrationOverviewDocument
}

const MIGRATION_OVERVIEW_OUTPUT_PATH = 'docs/migration-data.md'
const MIGRATION_ENTRY_PREFIX = 'docs/migration-data/'
const RESOURCE_URI_PREFIX = 'bootstrap-vue-next://migration/entry/'
const migrationOverviewAliases = ['migration guide', 'migration knowledge base', 'migration data'] as const
const categoryRank: Record<MigrationCategory, number> = {
  patterns: 0,
  props: 1,
  components: 2,
  directives: 3,
}
const selfClosingComponentFallbacks: Record<string, string> = {
  NotYetDocumented: 'Documentation status: this section is still in progress.',
}

const isString = (value: unknown): value is string => typeof value === 'string' && value.trim() !== ''

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === 'string')

const isStringRecord = (value: unknown): value is Record<string, string> =>
  typeof value === 'object' &&
  value !== null &&
  Object.values(value).every((item) => typeof item === 'string')

const normalizeLookupKey = (value: string): string =>
  value.trim() === ''
    ? ''
    : value
        .toLowerCase()
        .replace(/[`'"()[\]{}]/g, ' ')
        .replace(/[^a-z0-9]+/g, ' ')
        .trim()
        .replace(/\s+/g, ' ')

const uniqueStrings = (values: Iterable<string>): string[] => [...new Set(values)]

const parseMarkdownDocument = (content: string): {body: string; frontmatter?: unknown} => {
  const normalizedContent = content.replaceAll('\r\n', '\n')

  if (!normalizedContent.startsWith('---\n')) {
    return {body: normalizedContent.trim()}
  }

  const endOfFrontmatter = normalizedContent.indexOf('\n---\n', 4)

  if (endOfFrontmatter === -1) {
    return {body: normalizedContent.trim()}
  }

  const rawFrontmatter = normalizedContent.slice(4, endOfFrontmatter)
  const body = normalizedContent.slice(endOfFrontmatter + 5).trim()

  try {
    return {body, frontmatter: parseYaml(rawFrontmatter)}
  } catch {
    return {body}
  }
}

const extractSummary = (content: string, fallbackTitle: string): string => {
  const summaryMatch = content.match(/^## Summary\s+([\s\S]*?)(?:\n## |\n# |$)/m)
  if (summaryMatch?.[1] !== undefined) {
    return summaryMatch[1].trim()
  }

  const titlelessContent = content.replace(/^# .+\n+/m, '')
  const firstParagraph = titlelessContent.split(/\n{2,}/)[0]?.trim()
  return firstParagraph && firstParagraph !== '' ? firstParagraph : fallbackTitle
}

const normalizeMigrationMarkdown = (content: string): string =>
  content
    .replaceAll('\r\n', '\n')
    .replace(
      /<BLink\s+[^>]*href=['"]([^'"]+)['"][^>]*>([\s\S]*?)<\/BLink>/g,
      (_, href: string, text: string) => `${text.trim()} (${href})`
    )
    .replace(/<([A-Z][A-Za-z0-9-]*)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/g, (_, _tag: string, inner: string) =>
      inner.trim()
    )
    .replace(/<([A-Z][A-Za-z0-9-]*)(?:\s[^/>]*)?\s*\/>/g, (_, tag: string) => selfClosingComponentFallbacks[tag] ?? '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

const parseMigrationMetadata = (frontmatter: unknown): MigrationMetadata | undefined => {
  if (typeof frontmatter !== 'object' || frontmatter === null) {
    return
  }

  const source = frontmatter as MigrationMetadataSource

  if (
    !isString(source.id) ||
    !isString(source.title) ||
    (source.category !== 'patterns' &&
      source.category !== 'props' &&
      source.category !== 'components' &&
      source.category !== 'directives')
  ) {
    return
  }

  return {
    category: source.category,
    components: isStringArray(source.components) ? source.components : [],
    confidence: isString(source.confidence) ? source.confidence : undefined,
    deprecated: isStringArray(source.deprecated) ? source.deprecated : [],
    description: isString(source.description) ? source.description : undefined,
    id: source.id,
    introducedIn: isString(source.introducedIn) ? source.introducedIn : undefined,
    manualReviewRequired: source.manualReviewRequired === true,
    match: isStringArray(source.match) ? source.match : [],
    migrationType: isString(source.migrationType) ? source.migrationType : undefined,
    related: isStringArray(source.related) ? source.related : [],
    replacement: isStringRecord(source.replacement) ? source.replacement : {},
    safeRewrite: source.safeRewrite === true,
    tags: isStringArray(source.tags) ? source.tags : [],
    title: source.title,
  }
}

const toOverviewDocument = (content: string, docsBaseUrl: string): MigrationOverviewDocument => {
  const {body, frontmatter} = parseMarkdownDocument(content)
  const normalizedBody = normalizeMigrationMarkdown(body)
  const fallbackTitle =
    typeof frontmatter === 'object' && frontmatter !== null && isString((frontmatter as {title?: unknown}).title)
      ? (frontmatter as {title: string}).title
      : 'Migration Knowledge Base'

  return {
    content: normalizedBody,
    outputPath: MIGRATION_OVERVIEW_OUTPUT_PATH,
    summary: extractSummary(normalizedBody, fallbackTitle),
    title: fallbackTitle,
    url: new URL(MIGRATION_OVERVIEW_OUTPUT_PATH, docsBaseUrl).toString(),
  }
}

const toMigrationEntry = (
  outputPath: string,
  content: string,
  docsBaseUrl: string
): MigrationEntry | undefined => {
  const {body, frontmatter} = parseMarkdownDocument(content)
  const metadata = parseMigrationMetadata(frontmatter)

  if (metadata === undefined) {
    return
  }

  const normalizedBody = normalizeMigrationMarkdown(body)

  return {
    content: normalizedBody,
    metadata,
    outputPath,
    resourceUri: `${RESOURCE_URI_PREFIX}${metadata.id}`,
    summary: metadata.description ?? extractSummary(normalizedBody, metadata.title),
    title: metadata.title,
    url: new URL(outputPath, docsBaseUrl).toString(),
  }
}

const isMigrationEntryOutputPath = (outputPath: string): boolean =>
  outputPath.startsWith(MIGRATION_ENTRY_PREFIX) && outputPath !== MIGRATION_OVERVIEW_OUTPUT_PATH

const compareEntries = (left: MigrationEntry, right: MigrationEntry): number => {
  const categoryDiff = categoryRank[left.metadata.category] - categoryRank[right.metadata.category]
  if (categoryDiff !== 0) {
    return categoryDiff
  }

  if (left.metadata.id === 'migration-overview') {
    return -1
  }

  if (right.metadata.id === 'migration-overview') {
    return 1
  }

  return left.title.localeCompare(right.title)
}

const buildAliasMap = (entries: MigrationEntry[]): Map<string, string> => {
  const aliases = new Map<string, string>()

  for (const entry of entries) {
    const aliasCandidates = uniqueStrings([
      entry.metadata.id,
      entry.title,
      ...entry.metadata.components,
      ...entry.metadata.match,
      ...entry.metadata.tags,
      entry.metadata.category,
    ])

    for (const aliasCandidate of aliasCandidates) {
      const normalizedAlias = normalizeLookupKey(aliasCandidate)
      if (normalizedAlias !== '' && !aliases.has(normalizedAlias)) {
        aliases.set(normalizedAlias, entry.metadata.id)
      }
    }
  }

  for (const alias of migrationOverviewAliases) {
    aliases.set(alias, 'migration-overview')
  }

  return aliases
}

const scoreEntry = (entry: MigrationEntry, query: string): number => {
  const normalizedQuery = normalizeLookupKey(query)
  if (normalizedQuery === '') {
    return 0
  }

  const queryTokens = normalizedQuery.split(' ')
  const normalizedId = normalizeLookupKey(entry.metadata.id)
  const normalizedTitle = normalizeLookupKey(entry.title)
  const normalizedMatches = entry.metadata.match.map(normalizeLookupKey)
  const normalizedTags = entry.metadata.tags.map(normalizeLookupKey)
  const normalizedComponents = entry.metadata.components.map(normalizeLookupKey)
  const searchCorpus = normalizeLookupKey(
    [
      entry.metadata.id,
      entry.title,
      entry.metadata.description,
      entry.summary,
      entry.content,
      ...entry.metadata.match,
      ...entry.metadata.tags,
      ...entry.metadata.components,
      ...entry.metadata.related,
      ...Object.keys(entry.metadata.replacement),
      ...Object.values(entry.metadata.replacement),
      ...entry.metadata.deprecated,
    ]
      .filter((value): value is string => typeof value === 'string')
      .join(' ')
  )

  let score = 0

  if (normalizedId === normalizedQuery) {
    score += 200
  }

  if (normalizedTitle === normalizedQuery) {
    score += 160
  }

  if (normalizedMatches.includes(normalizedQuery)) {
    score += 150
  }

  if (normalizedTags.includes(normalizedQuery)) {
    score += 120
  }

  if (normalizedComponents.includes(normalizedQuery)) {
    score += 120
  }

  for (const queryToken of queryTokens) {
    if (queryToken.length < 2) {
      continue
    }

    if (searchCorpus.includes(queryToken)) {
      score += 15
    }
  }

  if (queryTokens.every((queryToken) => searchCorpus.includes(queryToken))) {
    score += 35
  }

  if (entry.metadata.category === 'patterns') {
    score += 10
  }

  return score
}

export class MigrationKnowledgeBase {
  readonly #docsSource: DocsSource
  #contextPromise: Promise<MigrationContext> | undefined

  constructor(docsSource: DocsSource = new DocsSource()) {
    this.#docsSource = docsSource
  }

  get docsBaseUrl(): string {
    return this.#docsSource.docsBaseUrl
  }

  async loadOverview(): Promise<MigrationOverviewDocument | undefined> {
    return (await this.#loadContext()).overview
  }

  async loadEntries(): Promise<MigrationEntry[]> {
    return (await this.#loadContext()).entries
  }

  async getEntry(idOrAlias: string): Promise<MigrationEntry | undefined> {
    const context = await this.#loadContext()
    const normalizedLookupKey = normalizeLookupKey(idOrAlias)

    if (normalizedLookupKey === '') {
      return
    }

    const resolvedId = context.aliases.get(normalizedLookupKey) ?? normalizedLookupKey.replace(/\s+/g, '-')
    return context.entriesById.get(resolvedId)
  }

  async searchEntries(
    query: string,
    options: {category?: MigrationCategory; limit?: number} = {}
  ): Promise<MigrationEntry[]> {
    const normalizedQuery = normalizeLookupKey(query)
    if (normalizedQuery === '') {
      return []
    }

    const entries = await this.loadEntries()
    const limit = Math.max(1, options.limit ?? 8)

    return entries
      .filter((entry) => options.category === undefined || entry.metadata.category === options.category)
      .map((entry) => ({entry, score: scoreEntry(entry, normalizedQuery)}))
      .filter(({score}) => score > 0)
      .sort((left, right) => {
        if (right.score !== left.score) {
          return right.score - left.score
        }

        return compareEntries(left.entry, right.entry)
      })
      .slice(0, limit)
      .map(({entry}) => entry)
  }

  async expandRelatedEntries(idOrAlias: string): Promise<MigrationEntry[]> {
    const entry = await this.getEntry(idOrAlias)
    if (entry === undefined) {
      return []
    }

    const context = await this.#loadContext()

    return uniqueStrings([entry.metadata.id, ...entry.metadata.related])
      .map((relatedId) => context.entriesById.get(relatedId))
      .filter((relatedEntry): relatedEntry is MigrationEntry => relatedEntry !== undefined)
      .sort(compareEntries)
  }

  async identifyEntries(
    terms: string[],
    options: {includeRelated?: boolean; limitPerTerm?: number} = {}
  ): Promise<MigrationMatch[]> {
    const cleanedTerms = uniqueStrings(terms.map((term) => term.trim()).filter((term) => term !== ''))
    const context = await this.#loadContext()
    const matches = new Map<string, MigrationMatch>()

    for (const term of cleanedTerms) {
      const directEntry = await this.getEntry(term)
      const directMatches =
        directEntry === undefined
          ? await this.searchEntries(term, {limit: options.limitPerTerm ?? 5})
          : [directEntry, ...(await this.searchEntries(term, {limit: options.limitPerTerm ?? 5}))]

      for (const entry of directMatches) {
        const existingMatch = matches.get(entry.metadata.id)
        const score = scoreEntry(entry, term)
        const nextMatchedTerms = uniqueStrings([...(existingMatch?.matchedTerms ?? []), term])

        matches.set(entry.metadata.id, {
          entry,
          fromRelated: existingMatch?.fromRelated ?? false,
          matchedTerms: nextMatchedTerms,
          score: Math.max(existingMatch?.score ?? 0, score),
        })
      }
    }

    if (options.includeRelated === true) {
      for (const match of [...matches.values()]) {
        for (const relatedId of match.entry.metadata.related) {
          const relatedEntry = context.entriesById.get(relatedId)
          if (relatedEntry === undefined) {
            continue
          }

          const existingMatch = matches.get(relatedId)
          matches.set(relatedId, {
            entry: relatedEntry,
            fromRelated: true,
            matchedTerms: uniqueStrings([...(existingMatch?.matchedTerms ?? []), ...match.matchedTerms]),
            score: Math.max(existingMatch?.score ?? 0, Math.max(match.score - 25, 1)),
          })
        }
      }
    }

    return [...matches.values()].sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score
      }

      return compareEntries(left.entry, right.entry)
    })
  }

  async generateUpgradeChecklist(
    terms: string[],
    options: {includeRelated?: boolean} = {}
  ): Promise<UpgradeChecklist> {
    const allMatches = await this.identifyEntries(terms, {
      includeRelated: options.includeRelated,
    })
    const cleanedTerms = uniqueStrings(terms.map((term) => term.trim()).filter((term) => term !== ''))

    return {
      all: allMatches,
      manualReviewRequired: allMatches.filter((match) => match.entry.metadata.manualReviewRequired),
      safeRewriteCandidates: allMatches.filter(
        (match) => !match.entry.metadata.manualReviewRequired && match.entry.metadata.safeRewrite
      ),
      terms: cleanedTerms,
    }
  }

  async #loadContext(): Promise<MigrationContext> {
    this.#contextPromise ??= this.#loadContextInternal()
    return this.#contextPromise
  }

  async #loadContextInternal(): Promise<MigrationContext> {
    const [siteIndexContent, overviewContent] = await Promise.all([
      this.#docsSource.loadSiteIndex(),
      this.#docsSource.loadPage(MIGRATION_OVERVIEW_OUTPUT_PATH),
    ])

    const discoveredOutputPaths = siteIndexContent
      ? extractMarkdownOutputPaths(siteIndexContent, this.docsBaseUrl).filter(isMigrationEntryOutputPath)
      : []

    const uniqueOutputPaths = uniqueStrings(discoveredOutputPaths)
    const entryResults = await Promise.all(
      uniqueOutputPaths.map(async (outputPath) => ({
        content: await this.#docsSource.loadPage(outputPath),
        outputPath,
      }))
    )

    const entries = entryResults
      .map(({content, outputPath}) =>
        content === undefined ? undefined : toMigrationEntry(outputPath, content, this.docsBaseUrl)
      )
      .filter((entry): entry is MigrationEntry => entry !== undefined)
      .sort(compareEntries)

    return {
      aliases: buildAliasMap(entries),
      entries,
      entriesById: new Map(entries.map((entry) => [entry.metadata.id, entry] as const)),
      overview: overviewContent === undefined ? undefined : toOverviewDocument(overviewContent, this.docsBaseUrl),
    }
  }
}
