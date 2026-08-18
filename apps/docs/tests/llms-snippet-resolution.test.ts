import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import {
  getMaterializedSourceMarkdown,
  normalizeLLMOutputPath,
  rebuildLLMSFullContent,
  resolveLLMSnippetDirectives,
  stripVueComponents,
  toLLMOutputPath,
  toSourceMarkdownPath,
} from '../src/utils/llmsSnippetResolution'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const srcRoot = path.resolve(__dirname, '../src')
const docsRoot = path.join(srcRoot, 'docs')

describe('LLMS snippet resolution', () => {
  it('materializes fragment directives into fenced code blocks', () => {
    const sourceMarkdownPath = path.join(docsRoot, 'migration-data/components/balert.md')
    const content = '<<< FRAGMENT ../../demo/AlertBefore.vue#template{vue-html}'

    expect(resolveLLMSnippetDirectives(content, sourceMarkdownPath)).toBe(
      '```vue-html\n<BAlert show dismissible>I am an alert!</BAlert>\n```'
    )
  })

  it('materializes demo directives into fenced code blocks', () => {
    const sourceMarkdownPath = path.join(docsRoot, 'migration-data/components/balert.md')
    const content = '<<< DEMO ../../demo/AlertAfter.vue#template{vue-html}'

    expect(resolveLLMSnippetDirectives(content, sourceMarkdownPath)).toBe(
      '```vue-html\n<BAlert model-value dismissible>I am an alert!</BAlert>\n```'
    )
  })

  it('maps nested index pages to LLM markdown output paths', () => {
    expect(toLLMOutputPath(path.join(docsRoot, 'components/index.md'), docsRoot)).toBe('components.md')
    expect(toLLMOutputPath(path.join(docsRoot, 'migration-data/index.md'), docsRoot)).toBe('migration-data.md')
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
      `- [Guide](/bootstrap-vue-next/docs/migration-data.md)\n- [Components](/bootstrap-vue-next/components.md)`,
      (outputPath) =>
        ({
          'components.md': '---\nurl: /bootstrap-vue-next/components.md\n---\n\n# Components',
          'docs/migration-data.md': '---\nurl: /bootstrap-vue-next/docs/migration-data.md\n---\n\n# Migration Knowledge Base',
        })[outputPath],
      '/bootstrap-vue-next/'
    )

    expect(rebuilt).toBe(
      '---\nurl: /bootstrap-vue-next/docs/migration-data.md\n---\n\n# Migration Knowledge Base\n---\n\n---\nurl: /bootstrap-vue-next/components.md\n---\n\n# Components'
    )
  })

  describe('stripVueComponents', () => {
    it('removes script setup blocks', () => {
      const input = '# Title\n\nSome text.\n\n<script setup lang="ts">\nimport {Foo} from \'bar\'\n</script>\n'
      expect(stripVueComponents(input)).not.toContain('<script')
      expect(stripVueComponents(input)).toContain('# Title')
      expect(stripVueComponents(input)).toContain('Some text.')
    })

    it('unwraps PascalCase component tags while preserving inner text', () => {
      const input = '<DeprecatedFeature :reason="DeprecationReason.X" what="`v-b-hover` directive">\n  This directive will not be implemented.\n</DeprecatedFeature>'
      const result = stripVueComponents(input)
      expect(result).not.toContain('<DeprecatedFeature')
      expect(result).not.toContain('</DeprecatedFeature>')
      expect(result).toContain('This directive will not be implemented.')
    })

    it('removes self-closing PascalCase component tags', () => {
      const input = 'Some text.\n<SelfClosing prop="value" />\nMore text.'
      const result = stripVueComponents(input)
      expect(result).not.toContain('<SelfClosing')
      expect(result).toContain('Some text.')
      expect(result).toContain('More text.')
    })

    it('unwraps BLink tags preserving inner text', () => {
      const input = 'Consider using <BLink href="https://example.com">`useElementHover()`</BLink> composable.'
      const result = stripVueComponents(input)
      expect(result).not.toContain('<BLink')
      expect(result).not.toContain('</BLink>')
      expect(result).toContain('`useElementHover()`')
      expect(result).toContain('composable.')
    })

    it('strips Vue components from materialized migration pages', () => {
      const materialized = getMaterializedSourceMarkdown('docs/migration-data/directives/v-b-hover.md', srcRoot)
      expect(materialized?.content).not.toContain('<DeprecatedFeature')
      expect(materialized?.content).not.toContain('<BLink')
      expect(materialized?.content).not.toContain('<script')
      expect(materialized?.content).toContain('This directive will not be implemented.')
    })
  })
})
