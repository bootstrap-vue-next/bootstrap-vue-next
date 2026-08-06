import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('nuxt-link integration', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/nuxt-link', import.meta.url)),
  })

  it('renders BLink and BLink-consuming components using NuxtLink by default', async () => {
    const html = await $fetch('/')

    expect(html).toMatch(/<a(?=[^>]*id="direct-link")(?=[^>]*data-router-component="NuxtLink")[^>]*>/)
    expect(html).toMatch(/<a(?=[^>]*id="button-link")(?=[^>]*data-router-component="NuxtLink")[^>]*>/)
    expect(html).toMatch(/<a(?=[^>]*id="nav-item-link")(?=[^>]*data-router-component="NuxtLink")[^>]*>/)
    expect(
      html,
    ).toMatch(/<a(?=[^>]*id="dropdown-item-link")(?=[^>]*data-router-component="NuxtLink")[^>]*>/)
  })
})
