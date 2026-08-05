import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders the index page with BootstrapVueNext components', async () => {
    const html = await $fetch('/')
    expect(html).toContain('Hello from BootstrapVueNext')
    expect(html).toContain('alert')
    expect(html).toContain('btn')
  })

  it('renders BImg as a plain img tag when @nuxt/image is not installed', async () => {
    const html = await $fetch('/')
    expect(html).toContain('<img')
    expect(html).toContain('id="plain-img"')
    expect(html).not.toContain('<NuxtImg')
  })
})
