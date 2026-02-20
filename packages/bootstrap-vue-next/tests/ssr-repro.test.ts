// @vitest-environment node
import {describe, it, expect} from 'vitest'
import {createSSRApp, h} from 'vue'
import {renderToString} from 'vue/server-renderer'
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
