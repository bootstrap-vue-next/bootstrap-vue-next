import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import {
  getMaterializedSourceMarkdown,
  normalizeLLMOutputPath,
  rebuildLLMSFullContent,
  resolveLLMSnippetDirectives,
  toLLMOutputPath,
  toSourceMarkdownPath,
} from '../src/utils/llmsSnippetResolution'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const srcRoot = path.resolve(__dirname, '../src')
const docsRoot = path.join(srcRoot, 'docs')

describe('LLMS snippet resolution', () => {
  it('materializes fragment directives into fenced code blocks', () => {
    const sourceMarkdownPath = path.join(docsRoot, 'migration-guide.md')
    const content = '<<< FRAGMENT ./demo/AlertBefore.vue#template{vue-html}'

    expect(resolveLLMSnippetDirectives(content, sourceMarkdownPath)).toBe(
      '```vue-html\n<BAlert show dismissible>I am an alert!</BAlert>\n```'
    )
  })

  it('materializes demo directives into fenced code blocks', () => {
    const sourceMarkdownPath = path.join(docsRoot, 'migration-guide.md')
    const content = '<<< DEMO ./demo/AlertAfter.vue#template{vue-html}'

    expect(resolveLLMSnippetDirectives(content, sourceMarkdownPath)).toBe(
      '```vue-html\n<BAlert model-value dismissible>I am an alert!</BAlert>\n```'
    )
  })

  it('maps nested index pages to LLM markdown output paths', () => {
    expect(toLLMOutputPath(path.join(docsRoot, 'components/index.md'), docsRoot)).toBe('components.md')
    expect(toLLMOutputPath(path.join(docsRoot, 'migration-guide.md'), docsRoot)).toBe('migration-guide.md')
  })

  it('normalizes base-prefixed request paths for LLM markdown routes', () => {
    expect(normalizeLLMOutputPath('/bootstrap-vue-next/docs/migration-data/components/balert.md', '/bootstrap-vue-next/')).toBe(
      'docs/migration-data/components/balert.md'
    )
  })

  it('maps generated LLM paths back to source markdown files', () => {
    expect(toSourceMarkdownPath('docs/migration-data/components/balert.md', srcRoot)).toBe(
      path.join(srcRoot, 'docs/migration-data/components/balert.md')
    )
    expect(toSourceMarkdownPath('docs/migration-data.md', srcRoot)).toBe(
      path.join(srcRoot, 'docs/migration-data/index.md')
    )
  })

  it('materializes source markdown for dev LLM route fallbacks', () => {
    const materialized = getMaterializedSourceMarkdown('docs/migration-data/components/balert.md', srcRoot)

    expect(materialized?.content).toContain('```vue-html\n<BAlert show dismissible>I am an alert!</BAlert>\n```')
    expect(materialized?.content).not.toContain('<<< FRAGMENT ../../demo/AlertBefore.vue#template{vue-html}')
  })

  it('rebuilds llms-full content from llms.txt links', () => {
    const rebuilt = rebuildLLMSFullContent(
      `- [Guide](/bootstrap-vue-next/migration-guide.md)\n- [Components](/bootstrap-vue-next/components.md)`,
      (outputPath) =>
        ({
          'components.md': '---\nurl: /bootstrap-vue-next/components.md\n---\n\n# Components',
          'migration-guide.md': '---\nurl: /bootstrap-vue-next/migration-guide.md\n---\n\n# Migration Guide',
        })[outputPath],
      '/bootstrap-vue-next/'
    )

    expect(rebuilt).toBe(
      '---\nurl: /bootstrap-vue-next/migration-guide.md\n---\n\n# Migration Guide\n---\n\n---\nurl: /bootstrap-vue-next/components.md\n---\n\n# Components'
    )
  })
})
