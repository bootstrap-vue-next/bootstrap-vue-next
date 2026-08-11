// @vitest-environment node
import {describe, it, expect} from 'vitest'
import {createSSRApp, h} from 'vue'
import {renderToString} from 'vue/server-renderer'
import BFormInput from '../src/components/BFormInput/BFormInput.vue'
import BFormTextarea from '../src/components/BFormTextarea/BFormTextarea.vue'
import BFormGroup from '../src/components/BFormGroup/BFormGroup.vue'

describe('SSR BFormTextarea in BFormGroup', () => {
  it('renders BFormTextarea alone without error', async () => {
    const app = createSSRApp({
      render() {
        return h(BFormTextarea)
      },
    })
    const html = await renderToString(app)
    expect(html).toContain('textarea')
  })

  it('renders BFormTextarea inside BFormGroup without error', async () => {
    const app = createSSRApp({
      render() {
        return h(BFormGroup, null, {
          default: () => h(BFormTextarea),
        })
      },
    })
    const html = await renderToString(app)
    expect(html).toContain('textarea')
  })
})

describe('SSR BFormGroup floating label', () => {
  it('renders a label element (never a legend) in floating mode so hydration matches', async () => {
    const app = createSSRApp({
      render() {
        return h(BFormGroup, {floating: true, label: 'Email'}, () =>
          h(BFormInput, {id: 'email-input'})
        )
      },
    })
    const html = await renderToString(app)
    expect(html).toContain('<label')
    expect(html).not.toContain('<legend')
  })
})
