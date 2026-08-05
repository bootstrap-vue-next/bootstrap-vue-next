import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('ssr-smoke', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/ssr-smoke', import.meta.url)),
  })

  it('BModal renders without SSR error', async () => {
    const html = await $fetch('/modal')
    expect(html).toContain('modal-page')
  })

  it('BOffcanvas renders without SSR error', async () => {
    const html = await $fetch('/offcanvas')
    expect(html).toContain('offcanvas-page')
  })

  it('BOrchestrator renders without SSR error', async () => {
    const html = await $fetch('/orchestrator')
    expect(html).toContain('orchestrator-page')
  })

  it('BCarousel renders without SSR error', async () => {
    const html = await $fetch('/carousel')
    expect(html).toContain('carousel-page')
  })

  it('BDropdown renders without SSR error', async () => {
    const html = await $fetch('/dropdown')
    expect(html).toContain('dropdown-page')
  })
})
