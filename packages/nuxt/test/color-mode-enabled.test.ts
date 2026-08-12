import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch, createPage } from '@nuxt/test-utils/e2e'

describe('color-mode integration enabled', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/color-mode-enabled', import.meta.url)),
  })

  it('uses @nuxtjs/color-mode composable and applies bootstrap dataValue default', async () => {
    const html = await $fetch('/')
    expect(html).toContain('color-mode-enabled-page')
    expect(html).toContain('<span id="has-preference">yes</span>')

    const page = await createPage('/')
    const theme = await page.locator('html').getAttribute('data-bs-theme')
    expect(theme === 'light' || theme === 'dark').toBe(true)
  })
})
