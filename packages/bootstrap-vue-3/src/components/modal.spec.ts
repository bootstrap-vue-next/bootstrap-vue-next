import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BModal from './BModal.vue'

describe.skip('modal', () => {
  enableAutoUnmount(afterEach)
  // Having issues getting the 'body' from the VDOM

  it('has static class modal', () => {
    const wrapper = mount(BModal)
    expect(wrapper.classes()).toContain('modal')
  })
})
