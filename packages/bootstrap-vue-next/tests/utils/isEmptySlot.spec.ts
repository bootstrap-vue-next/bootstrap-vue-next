import {mount} from '@vue/test-utils'
import {isEmptySlot} from '../../src/utils/dom'
import {describe, expect, it} from 'vitest'
import BSpinner from '../../src/components/BSpinner.vue'

describe('isEmptySlot', () => {
  it('returns true when slot is empty', () => {
    const wrapper = mount(BSpinner)
    expect(isEmptySlot(wrapper.vm.$slots.label)).toBe(true)
  })

  it('returns false when slot is not empty', () => {
    const wrapper = mount(BSpinner, {
      slots: {label: 'foo'},
    })
    expect(isEmptySlot(wrapper.vm.$slots.label)).toBe(false)
  })

  it('returns true when passed undefined', () => {
    expect(isEmptySlot(undefined)).toBe(true)
  })
})
