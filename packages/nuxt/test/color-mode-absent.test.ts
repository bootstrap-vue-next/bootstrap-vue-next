import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

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
