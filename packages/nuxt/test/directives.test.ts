import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('directives', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/directives', import.meta.url)),
  })

  it('vBTooltip renders without SSR error', async () => {
    const html = await $fetch('/')
    expect(html).toContain('tooltip-el')
    expect(html).toContain('Tooltip target')
  })

  it('vBModal renders without SSR error', async () => {
    const html = await $fetch('/')
    expect(html).toContain('modal-trigger')
    expect(html).toContain('Open modal')
  })

  it('vBPopover renders without SSR error', async () => {
    const html = await $fetch('/')
    expect(html).toContain('popover-el')
    expect(html).toContain('Popover target')
  })

  it('all elements in the directives page render in SSR output', async () => {
    const html = await $fetch('/')
    expect(html).toContain('directives-page')
  })
})
