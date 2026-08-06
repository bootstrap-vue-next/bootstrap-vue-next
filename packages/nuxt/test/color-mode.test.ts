import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('color-mode integration enabled', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/color-mode-enabled', import.meta.url)),
  })

  it('uses @nuxtjs/color-mode composable and applies bootstrap dataValue default', async () => {
    const html = await $fetch('/')
    expect(html).toContain('color-mode-enabled-page')
    expect(html).toContain('<span id="has-preference">yes</span>')
    expect(html).toContain('data-bs-theme')
  })
})

describe('color-mode integration disabled', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/color-mode-disabled', import.meta.url)),
  })

  it('uses @nuxtjs/color-mode composable and does not inject bootstrap dataValue default', async () => {
    const html = await $fetch('/')
    expect(html).toContain('color-mode-disabled-page')
    expect(html).toContain('<span id="has-preference">yes</span>')
    expect(html).not.toContain('data-bs-theme')
  })
})

describe('color-mode module absent', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/color-mode-absent', import.meta.url)),
  })

  it('keeps bootstrap-vue-next useColorMode auto-import behavior', async () => {
    const html = await $fetch('/')
    expect(html).toContain('color-mode-absent-page')
    expect(html).toContain('<span id="has-preference">no</span>')
  })
})
