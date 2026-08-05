import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

// `@nuxt/image`'s real `NuxtImg` component renders a bare `<img>` tag (see its source), so it is
// indistinguishable from BImg's own default output by inspecting HTML alone. To confidently
// assert that `BImg` (and anything using it internally) is actually resolving to and rendering
// the `NuxtImg` component - and not merely emitting an unresolved `<NuxtImg>` custom element,
// which Vue would otherwise silently render as literal (but non-functional) markup - this
// fixture shadows the real `NuxtImg` with a local stub (test/fixtures/nuxt-image/components/NuxtImg.vue)
// that renders a `data-stub="nuxt-img"` marker. `@nuxt/image` itself is still installed and
// enabled in the fixture, so `hasNuxtModule('@nuxt/image')` detection is exercised for real.
describe('nuxt-image integration', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/nuxt-image', import.meta.url)),
  })

  it('renders BImg using NuxtImg when @nuxt/image is installed', async () => {
    const html = await $fetch('/')
    expect(html).toMatch(/<img[^>]*data-stub="nuxt-img"[^>]*id="direct-img"/)
  })

  it('renders components that use BImg internally (e.g. BCardImg) using NuxtImg too', async () => {
    const html = await $fetch('/')
    expect(html).toMatch(/<img[^>]*data-stub="nuxt-img"[^>]*id="card-img"/)
  })
})
