import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch, createPage } from '@nuxt/test-utils/e2e'

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

  it('configured useToast works at runtime', async () => {
    const page = await createPage('/')

    expect(await page.locator('#toast-status').textContent()).toContain('toast-ready')
    await page.click('#toast-trigger')
    await page.waitForSelector('.toast')
    expect(await page.locator('.toast').textContent()).toContain('Configured toast body')

    await page.close()
  })

  it('configured BModal.teleportTo is applied at runtime', async () => {
    const page = await createPage('/')

    await page.click('#configured-modal-trigger')
    await page.waitForSelector('#custom-teleport #configured-modal.show')
    expect(
      await page.locator('#custom-teleport #configured-modal .modal-body').textContent(),
    ).toContain('Configured modal body')

    await page.close()
  })

  it('configured BLink.routerComponentName is applied at runtime', async () => {
    const page = await createPage('/')

    expect(await page.locator('#configured-link').getAttribute('data-router-component')).toBe(
      'NuxtLink',
    )

    await page.close()
  })
})
