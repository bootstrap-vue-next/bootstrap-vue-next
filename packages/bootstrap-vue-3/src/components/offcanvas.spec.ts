import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BOffcanvas from './BOffcanvas.vue'

describe('offcanvas', () => {
  it('has static class offcanvas', () => {
    const wrapper = mount(BOffcanvas)
    expect(wrapper.classes()).toContain('offcanvas')
  })

  it('has tabindex -1', () => {
    const wrapper = mount(BOffcanvas)
    expect(wrapper.attributes('tabindex')).toBe('-1')
  })

  it('has aria-labelledby offcanvasLabel', () => {
    const wrapper = mount(BOffcanvas)
    expect(wrapper.attributes('aria-labelledby')).toBe('offcanvasLabel')
  })
})
