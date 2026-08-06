export const DEFAULT_DOCS_BASE_URL = 'https://bootstrap-vue-next.github.io/bootstrap-vue-next/'
export const DOCS_BASE_URL_ENV_VAR = 'BOOTSTRAP_VUE_NEXT_MCP_DOCS_URL'

type FetchLike = typeof fetch

const markdownLinkRegex = /\[[^\]]+\]\(([^)]+\.md)\)/g

export interface DocsSourceOptions {
  docsBaseUrl?: string
  fetch?: FetchLike
}

export const normalizeDocsBaseUrl = (docsBaseUrl: string): string => {
  const normalizedUrl = new URL(docsBaseUrl)
  normalizedUrl.hash = ''
  normalizedUrl.search = ''
  normalizedUrl.pathname = `${normalizedUrl.pathname.replace(/\/+$/, '')}/`
  return normalizedUrl.toString()
}

const getBasePathname = (docsBaseUrl: string): string => {
  const pathname = new URL(normalizeDocsBaseUrl(docsBaseUrl)).pathname.replace(/\/+$/, '')
  return pathname === '' ? '/' : pathname
}

export const normalizeDocsOutputPath = (
  outputPathOrUrl: string,
  docsBaseUrl: string = DEFAULT_DOCS_BASE_URL
): string => {
  const rawPathname = (() => {
    try {
      return new URL(outputPathOrUrl).pathname
    } catch {
      return outputPathOrUrl
    }
  })()

  const basePathname = getBasePathname(docsBaseUrl)
  let normalizedPath = rawPathname.replace(/[#?].*$/, '')

  if (basePathname !== '/' && normalizedPath.startsWith(basePathname)) {
    normalizedPath = normalizedPath.slice(basePathname.length)
  }

  return normalizedPath.replace(/^\/+/, '')
}

export const extractMarkdownOutputPaths = (
  llmsIndexContent: string,
  docsBaseUrl: string = DEFAULT_DOCS_BASE_URL
): string[] => {
  const outputPaths = new Set<string>()

  for (const match of llmsIndexContent.matchAll(markdownLinkRegex)) {
    const outputPath = normalizeDocsOutputPath(match[1] ?? '', docsBaseUrl)
    if (outputPath !== '') {
      outputPaths.add(outputPath)
    }
  }

  return [...outputPaths]
}

export class DocsSource {
  readonly docsBaseUrl: string
  readonly #fetch: FetchLike

  constructor(options: DocsSourceOptions = {}) {
    const fetchImplementation = options.fetch ?? globalThis.fetch

    if (fetchImplementation === undefined) {
      throw new Error('Fetch API is not available in this runtime.')
    }

    this.docsBaseUrl = normalizeDocsBaseUrl(options.docsBaseUrl ?? DEFAULT_DOCS_BASE_URL)
    this.#fetch = (...args) => fetchImplementation(...args)
  }

  async loadSiteIndex(): Promise<string | undefined> {
    return this.#loadRelativeText('llms.txt')
  }

  async loadFullCorpus(): Promise<string | undefined> {
    return this.#loadRelativeText('llms-full.txt')
  }

  async loadPage(outputPath: string): Promise<string | undefined> {
    const normalizedOutputPath = normalizeDocsOutputPath(outputPath, this.docsBaseUrl)

    if (normalizedOutputPath === '' || !normalizedOutputPath.endsWith('.md')) {
      return
    }

    return this.#loadRelativeText(normalizedOutputPath)
  }

  async #loadRelativeText(relativePath: string): Promise<string | undefined> {
    const requestUrl = new URL(relativePath.replace(/^\/+/, ''), this.docsBaseUrl)

    try {
      const response = await this.#fetch(requestUrl.toString())
      if (!response.ok) {
        return
      }

      return await response.text()
    } catch {
      return
    }
  }
}
