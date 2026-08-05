import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('module-options', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/module-options', import.meta.url)),
  })

  it('css: false — no bootstrap-vue-next CSS link tag in SSR output', async () => {
    const html = await $fetch('/')
    expect(html).not.toContain('bootstrap-vue-next.css')
  })

  it('renders BButton without errors when CSS is disabled', async () => {
    const html = await $fetch('/')
    expect(html).toContain('btn')
  })

  it('selective directive vBTooltip is registered and renders without error', async () => {
    const html = await $fetch('/')
    expect(html).toContain('tooltip-target')
  })
})
