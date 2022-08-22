import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BModal from './BModal.vue'

describe.skip('modal', () => {
  // Having issues getting the 'body' from the VDOM

  it('has static class modal', () => {
    const wrapper = mount(BModal)
    expect(wrapper.classes()).toContain('modal')

    wrapper.unmount()
  })
})
