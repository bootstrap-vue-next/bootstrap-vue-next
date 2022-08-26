import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BButton from './BButton.vue'

describe('button', () => {
  it('has static class btn', () => {
    const wrapper = mount(BButton)
    expect(wrapper.classes()).toContain('btn')
  })

  it('has tag button by default', () => {
    const wrapper = mount(BButton)
    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  // TODO
})
