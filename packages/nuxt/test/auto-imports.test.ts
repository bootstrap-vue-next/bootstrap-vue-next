import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('auto-imports', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('BAlert is auto-importable and renders SSR output', async () => {
    const html = await $fetch('/')
    expect(html).toContain('alert')
    expect(html).toContain('Hello from BootstrapVueNext')
  })

  it('BButton is auto-importable and renders SSR output', async () => {
    const html = await $fetch('/')
    expect(html).toContain('btn')
  })

  it('BImg is auto-importable and renders as an img tag', async () => {
    const html = await $fetch('/')
    expect(html).toContain('<img')
    expect(html).toContain('id="plain-img"')
  })
})
