import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import {
  getMaterializedSourceMarkdown,
  normalizeLLMOutputPath,
  rebuildLLMSFullContent,
  resolveLLMSnippetDirectives,
  resolveLLMVueComponents,
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
      '```vue-html\n<BAlert show dismissible>I am an alert!</BAlert>\n```',
    )
  })

  it('materializes demo directives into fenced code blocks', () => {
    const sourceMarkdownPath = path.join(docsRoot, 'migration-data/components/balert.md')
    const content = '<<< DEMO ../../demo/AlertAfter.vue#template{vue-html}'

    expect(resolveLLMSnippetDirectives(content, sourceMarkdownPath)).toBe(
      '```vue-html\n<BAlert model-value dismissible>I am an alert!</BAlert>\n```',
    )
  })

  it('maps nested index pages to LLM markdown output paths', () => {
    expect(toLLMOutputPath(path.join(docsRoot, 'components/index.md'), docsRoot)).toBe(
      'components.md',
    )
    expect(toLLMOutputPath(path.join(docsRoot, 'migration-data/index.md'), docsRoot)).toBe(
      'migration-data.md',
    )
  })

  it('normalizes base-prefixed request paths for LLM markdown routes', () => {
    expect(
      normalizeLLMOutputPath(
        '/bootstrap-vue-next/docs/migration-data/components/balert.md',
        '/bootstrap-vue-next/',
      ),
    ).toBe('docs/migration-data/components/balert.md')
  })

  it('maps generated LLM paths back to source markdown files', () => {
    expect(toSourceMarkdownPath('docs/migration-data/components/balert.md', srcRoot)).toBe(
      path.join(srcRoot, 'docs/migration-data/components/balert.md'),
    )
    expect(toSourceMarkdownPath('docs/migration-data.md', srcRoot)).toBe(
      path.join(srcRoot, 'docs/migration-data/index.md'),
    )
  })

  it('materializes source markdown for dev LLM route fallbacks', () => {
    const materialized = getMaterializedSourceMarkdown(
      'docs/migration-data/components/balert.md',
      srcRoot,
    )

    expect(materialized?.content).toContain(
      '```vue-html\n<BAlert show dismissible>I am an alert!</BAlert>\n```',
    )
    expect(materialized?.content).not.toContain(
      '<<< FRAGMENT ../../demo/AlertBefore.vue#template{vue-html}',
    )
  })

  it('rebuilds llms-full content from llms.txt links', () => {
    const rebuilt = rebuildLLMSFullContent(
      `- [Guide](/bootstrap-vue-next/docs/migration-data.md)\n- [Components](/bootstrap-vue-next/components.md)`,
      (outputPath) =>
        ({
          'components.md': '---\nurl: /bootstrap-vue-next/components.md\n---\n\n# Components',
          'docs/migration-data.md':
            '---\nurl: /bootstrap-vue-next/docs/migration-data.md\n---\n\n# Migration Knowledge Base',
        })[outputPath],
      '/bootstrap-vue-next/',
    )

    expect(rebuilt).toBe(
      '---\nurl: /bootstrap-vue-next/docs/migration-data.md\n---\n\n# Migration Knowledge Base\n---\n\n---\nurl: /bootstrap-vue-next/components.md\n---\n\n# Components',
    )
  })

  it('extracts text from DeprecatedFeature and BLink components while removing script blocks', () => {
    const input = [
      '## Breaking Change',
      '',
      '<DeprecatedFeature :reason="DeprecationReason.MODERN_ALTERNATIVE" what="Icon support on `BAvatar`">',
      '  Use <BLink href="/docs/icons">unplugin-icons</BLink> instead.',
      '</DeprecatedFeature>',
      '',
      '<script setup lang="ts">',
      "import {DeprecationReason} from '../../../types/deprecation'",
      '</script>',
    ].join('\n')

    expect(resolveLLMVueComponents(input)).toBe(
      [
        '## Breaking Change',
        '',
        '**Icon support on `BAvatar` is deprecated:** a modern alternative exists. – Use [unplugin-icons](/docs/icons) instead.',
      ].join('\n'),
    )
  })

  it('handles self-closing DeprecatedFeature with plural prop and preserves code fences and inline code', () => {
    const input = [
      '---',
      'match:',
      '  - <BEmbed>',
      '---',
      '',
      'Use `<BAlert>` in templates:',
      '',
      '<DeprecatedFeature reason="bootstrap-deprecated" what="Legacy props" :plural="true" />',
      '',
      '<BAlert show>Plain alert text</BAlert>',
      '<ComponentReference :data="data" />',
      '',
      '```vue-html',
      '<BAlert show>Keep code block verbatim</BAlert>',
      '```',
    ].join('\n')

    const output = resolveLLMVueComponents(input)

    expect(output).toContain('  - <BEmbed>')
    expect(output).toContain('Use `<BAlert>` in templates:')
    expect(output).toContain('**Legacy props are deprecated:** deprecated by Bootstrap.')
    expect(output).toContain('Plain alert text')
    expect(output).not.toContain('<ComponentReference')
    expect(output).toContain('```vue-html\n<BAlert show>Keep code block verbatim</BAlert>\n```')
  })

  it('materializes real migration pages with DeprecatedFeature into readable markdown', () => {
    const bembed = getMaterializedSourceMarkdown(
      'docs/migration-data/components/bembed.md',
      srcRoot,
    )
    const bavatar = getMaterializedSourceMarkdown(
      'docs/migration-data/components/bavatar.md',
      srcRoot,
    )

    expect(bembed?.content).toContain(
      '**`BEmbed` component is deprecated:** insufficient demand for initial release. – This component will not be implemented for v1 due to insufficient demand.',
    )
    expect(bembed?.content).not.toContain('<DeprecatedFeature')
    expect(bembed?.content).not.toContain('<script setup')

    expect(bavatar?.content).toContain(
      '**Icon support on `BAvatar` is deprecated:** a modern alternative exists.',
    )
    expect(bavatar?.content).toContain('[unplugin-icons](/docs/icons)')
    expect(bavatar?.content).not.toContain('<BLink')
    expect(bavatar?.content).toContain('```vue-html')
  })

  it('keeps a self-closing DeprecatedFeature separate from a paired one after it', () => {
    const output = resolveLLMVueComponents(
      [
        '<DeprecatedFeature what="Old A" />',
        '',
        '<DeprecatedFeature what="Old B">Use B.</DeprecatedFeature>',
      ].join('\n'),
    )

    expect(output).toBe(
      ['**Old A is deprecated:**', '', '**Old B is deprecated:** – Use B.'].join('\n'),
    )
  })

  it('leaves components and script tags inside inline code untouched', () => {
    const output = resolveLLMVueComponents(
      [
        'Use `<DeprecatedFeature what="Old" />` to mark it.',
        'Write `<script setup>x</script>` at the top.',
        '<DeprecatedFeature what="Old">Write `<BLink href="/a">A</BLink>` instead.</DeprecatedFeature>',
        'Replace with `$1` or `$&`.',
      ].join('\n'),
    )

    expect(output).toBe(
      [
        'Use `<DeprecatedFeature what="Old" />` to mark it.',
        'Write `<script setup>x</script>` at the top.',
        '**Old is deprecated:** – Write `<BLink href="/a">A</BLink>` instead.',
        'Replace with `$1` or `$&`.',
      ].join('\n'),
    )
  })

  it('keeps blank lines inside fenced code', () => {
    const output = resolveLLMVueComponents(
      ['Text', '', '', '', 'More', '', '```txt', 'A', '', '', '', 'B', '```'].join('\n'),
    )

    expect(output).toBe(['Text', '', 'More', '', '```txt', 'A', '', '', '', 'B', '```'].join('\n'))
  })

  it('removes the slot template tags of unwrapped components', () => {
    const output = resolveLLMVueComponents(
      [
        '<HighlightCard>',
        '  <template #html>',
        '',
        '```vue',
        '<template>',
        '  <BButton />',
        '</template>',
        '```',
        '',
        '  </template>',
        '</HighlightCard>',
      ].join('\n'),
    )

    expect(output).toBe(['```vue', '<template>', '  <BButton />', '</template>', '```'].join('\n'))
  })
})
