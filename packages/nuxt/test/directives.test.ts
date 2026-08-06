import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch, createPage } from '@nuxt/test-utils/e2e'

describe('directives', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/directives', import.meta.url)),
  })

  it('vBTooltip renders without SSR error', async () => {
    const html = await $fetch('/')
    expect(html).toContain('tooltip-el')
    expect(html).toContain('Tooltip target')
  })

  it('vBTooltip shows tooltip content after hydration', async () => {
    const page = await createPage('/')

    await page.hover('#tooltip-el')
    await page.waitForSelector('.tooltip.show .tooltip-inner')
    expect(await page.locator('.tooltip.show .tooltip-inner').textContent()).toContain('A tooltip')

    await page.close()
  })

  it('vBModal renders without SSR error', async () => {
    const html = await $fetch('/')
    expect(html).toContain('modal-trigger')
    expect(html).toContain('Open modal')
  })

  it('vBModal opens the matching modal target after hydration', async () => {
    const page = await createPage('/')

    await page.click('#modal-trigger')
    await page.waitForSelector('#my-modal.show')
    expect(await page.locator('#my-modal .modal-body').textContent()).toContain('Directive modal body')

    await page.close()
  })

  it('vBPopover renders without SSR error', async () => {
    const html = await $fetch('/')
    expect(html).toContain('popover-el')
    expect(html).toContain('Popover target')
  })

  it('vBPopover shows popover content after hydration', async () => {
    const page = await createPage('/')

    await page.hover('#popover-el')
    await page.waitForSelector('.popover.show')
    expect(await page.locator('.popover.show').textContent()).toContain('A popover')

    await page.close()
  })

  it('all elements in the directives page render in SSR output', async () => {
    const html = await $fetch('/')
    expect(html).toContain('directives-page')
  })
})
