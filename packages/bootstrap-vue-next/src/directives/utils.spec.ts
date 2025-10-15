import {afterAll, describe, expect, it, vi} from 'vitest'
import {type Component, provide} from 'vue'
import {injectWithinDirective} from './utils'
import {mount} from '@vue/test-utils'

describe('injectWithinDirective', () => {
  const consoleErrorMock = vi.spyOn(console, 'error').mockImplementation(() => undefined)

  afterAll(() => {
    consoleErrorMock.mockReset()
  })

  it('nested providers', async () => {
    let unmountedFoo: unknown = null

    const ProviderTwo: Component = {
      directives: {
        test: {
          mounted(el, binding) {
            const foo = injectWithinDirective(binding, 'foo')
            const bar = injectWithinDirective(binding, 'bar')
            const baz = injectWithinDirective(binding, 'baz')
            el.textContent = [foo, bar, baz].join(',')
          },
          unmounted(el, binding) {
            unmountedFoo = injectWithinDirective(binding, 'foo')
          },
        },
      },
      props: {
        show: {
          type: Boolean,
          default: true,
        },
      },
      setup() {
        // override parent value
        provide('foo', 'fooOverride')
        provide('baz', 'baz')
      },
      template: `<div v-if="show" v-test></div>`,
    }

    const ProviderOne = {
      components: {ProviderTwo},
      props: {
        show: {
          type: Boolean,
          default: true,
        },
      },
      setup() {
        provide('foo', 'foo')
        provide('bar', 'bar')
      },
      template: `<ProviderTwo :show="show" />`,
    }

    const wrapper = mount(ProviderOne)

    // Should find all 3 injections
    expect(wrapper.html()).toBe('<div>fooOverride,bar,baz</div>')

    // Should not error when used during unmounted hook
    await wrapper.setProps({show: false})
    expect(wrapper.html()).toBe('<!--v-if-->')
    expect(unmountedFoo).toBe('fooOverride')
    expect(consoleErrorMock).toHaveBeenCalledTimes(0)

    wrapper.unmount()
  })
})
