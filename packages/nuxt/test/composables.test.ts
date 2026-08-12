import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('composables auto-imports', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/composables', import.meta.url)),
  })

  it('useBreadcrumb SSR: renders breadcrumb items without error (auto-import works)', async () => {
    const html = await $fetch('/breadcrumb')
    expect(html).toContain('breadcrumb-page')
    expect(html).toContain('Home')
    expect(html).toContain('About')
  })

  it('useToggle SSR: page renders without error when composable is auto-imported', async () => {
    const html = await $fetch('/toggle')
    expect(html).toContain('toggle-page')
    expect(html).toContain('toggle-value')
    expect(html).toContain('shown')
  })

  it('useColorMode SSR: renders without error and does not throw on server', async () => {
    const html = await $fetch('/colormode')
    expect(html).toContain('colormode-page')
    expect(html).toContain('theme-mode')
  })
})
