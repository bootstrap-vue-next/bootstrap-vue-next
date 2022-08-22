import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BCol from './BCol.vue'

describe('col', () => {
  it('tag is default div', () => {
    const wrapper = mount(BCol)
    expect(wrapper.element.tagName).toBe('DIV')

    wrapper.unmount()
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BCol, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')

    wrapper.unmount()
  })

  // TODO
})
