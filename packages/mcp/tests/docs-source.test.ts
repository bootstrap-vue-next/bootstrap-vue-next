import assert from 'node:assert/strict'
import {describe, it} from 'node:test'

import {DEFAULT_DOCS_BASE_URL, DocsSource, extractMarkdownOutputPaths, normalizeDocsOutputPath} from '../src/docs-source.js'
import {MigrationKnowledgeBase} from '../src/migration-knowledge-base.js'

const createResponse = (body: string, status: number = 200): Response => new Response(body, {status})

const createFetch = (responses: Record<string, Response | Error>) => async (input: string | URL | Request) => {
  const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url
  const response = responses[url]

  if (response instanceof Error) {
    throw response
  }

  return response ?? createResponse('Not Found', 404)
}

describe('DocsSource', () => {
  it('uses the deployed docs URL by default', () => {
    const docsSource = new DocsSource({fetch: createFetch({})})

    assert.equal(docsSource.docsBaseUrl, DEFAULT_DOCS_BASE_URL)
  })

  it('normalizes docs URL overrides and base-prefixed markdown paths', () => {
    const docsSource = new DocsSource({
      docsBaseUrl: 'https://example.com/previews/bootstrap-vue-next',
      fetch: createFetch({}),
    })

    assert.equal(docsSource.docsBaseUrl, 'https://example.com/previews/bootstrap-vue-next/')
    assert.equal(
      normalizeDocsOutputPath(
        'https://example.com/previews/bootstrap-vue-next/docs/migration-data/components/balert.md',
        docsSource.docsBaseUrl
      ),
      'docs/migration-data/components/balert.md'
    )
  })

  it('discovers migration-data pages from llms.txt links', async () => {
    const llmsIndex = [
      '- [Migration](/bootstrap-vue-next/docs/migration-data.md)',
      '- [Alert](/bootstrap-vue-next/docs/migration-data/components/balert.md)',
      '- [Show/Hide](/bootstrap-vue-next/docs/migration-data/patterns/show-hide.md)',
    ].join('\n')

    assert.deepEqual(extractMarkdownOutputPaths(llmsIndex), [
      'docs/migration-data.md',
      'docs/migration-data/components/balert.md',
      'docs/migration-data/patterns/show-hide.md',
    ])

    const docsSource = new DocsSource({
      fetch: createFetch({
        'https://bootstrap-vue-next.github.io/bootstrap-vue-next/llms.txt': createResponse(llmsIndex),
        'https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/migration-data.md': createResponse(
          '# Migration Knowledge Base'
        ),
        'https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/migration-data/components/balert.md':
          createResponse(`---
id: balert
title: BAlert Migration
description: Alert migration
category: components
match:
  - BAlert
safeRewrite: true
manualReviewRequired: false
related:
  - show-hide
---

# BAlert Migration`),
        'https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/migration-data/patterns/show-hide.md':
          createResponse(`---
id: show-hide
title: Show and Hide Migration
description: Shared visibility migration
category: patterns
match:
  - show
safeRewrite: false
manualReviewRequired: true
related:
  - balert
---

# Show and Hide Migration`),
      }),
    })
    const knowledgeBase = new MigrationKnowledgeBase(docsSource)
    const entries = await knowledgeBase.loadEntries()

    assert.deepEqual(
      entries.map((entry) => entry.metadata.id),
      ['show-hide', 'balert']
    )
  })

  it('treats "migration guide" as an alias for the migration overview entry', async () => {
    const docsSource = new DocsSource({
      fetch: createFetch({
        'https://bootstrap-vue-next.github.io/bootstrap-vue-next/llms.txt': createResponse(
          '- [Overview](/bootstrap-vue-next/docs/migration-data/patterns/overview.md)'
        ),
        'https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/migration-data.md': createResponse(
          '# Migration Knowledge Base'
        ),
        'https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/migration-data/patterns/overview.md':
          createResponse(`---
id: migration-overview
title: BootstrapVue to BootstrapVueNext Migration Overview
description: Cross-cutting migration guidance
category: patterns
match:
  - migration guide
safeRewrite: false
manualReviewRequired: true
related:
  - show-hide
---

# BootstrapVue to BootstrapVueNext Migration Overview`),
      }),
    })
    const knowledgeBase = new MigrationKnowledgeBase(docsSource)
    const entry = await knowledgeBase.getEntry('migration guide')

    assert.equal(entry?.metadata.id, 'migration-overview')
  })

  it('returns undefined when llms.txt, llms-full.txt, or page markdown cannot be loaded', async () => {
    const docsSource = new DocsSource({
      fetch: createFetch({
        'https://bootstrap-vue-next.github.io/bootstrap-vue-next/llms.txt': createResponse('nope', 404),
        'https://bootstrap-vue-next.github.io/bootstrap-vue-next/llms-full.txt': new Error('offline'),
        'https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/migration-data/components/balert.md':
          createResponse('missing', 500),
      }),
    })

    assert.equal(await docsSource.loadSiteIndex(), undefined)
    assert.equal(await docsSource.loadFullCorpus(), undefined)
    assert.equal(await docsSource.loadPage('docs/migration-data/components/balert.md'), undefined)
  })

  it('normalizes custom Vue doc components for migration entries', async () => {
    const docsSource = new DocsSource({
      fetch: createFetch({
        'https://bootstrap-vue-next.github.io/bootstrap-vue-next/llms.txt': createResponse(
          '- [BModal](/bootstrap-vue-next/docs/migration-data/components/bmodal.md)'
        ),
        'https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/migration-data.md': createResponse(
          '# Migration Knowledge Base'
        ),
        'https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/migration-data/components/bmodal.md':
          createResponse(`---
id: bmodal
title: BModal Migration
description: Modal migration
category: components
match:
  - BModal
safeRewrite: false
manualReviewRequired: true
related: []
---

# BModal Migration

<DeprecatedFeature reason="x">
Use the <BLink href="/docs/components/modal">modal documentation</BLink>.
</DeprecatedFeature>

<NotYetDocumented :help-only="true" />`),
      }),
    })
    const knowledgeBase = new MigrationKnowledgeBase(docsSource)
    const entry = await knowledgeBase.getEntry('bmodal')

    assert.ok(entry)
    assert.match(entry.content, /modal documentation \(/)
    assert.doesNotMatch(entry.content, /<DeprecatedFeature|<BLink|<NotYetDocumented/)
  })
})
