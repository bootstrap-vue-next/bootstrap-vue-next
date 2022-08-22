import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BBreadcrumb from './BBreadcrumb.vue'
import BBreadcrumbItem from './BBreadcrumbItem.vue'

describe.skip('breadcrumb', () => {
  it('contains aria-label breadcrumb', () => {
    const wrapper = mount(BBreadcrumb)
    expect(wrapper.attributes('aria-label')).toBe('breadcrumb')

    wrapper.unmount()
  })

  it('tag is nav', () => {
    const wrapper = mount(BBreadcrumb)
    expect(wrapper.element.tagName).toBe('NAV')

    wrapper.unmount()
  })

  it('child tag is ol', () => {
    const wrapper = mount(BBreadcrumb)
    // It should be noted, this doesn't determine if it's a child,
    // Rather, only that it is deeply nested inside the component
    const $ol = wrapper.find('ol')
    expect($ol.exists()).toBe(true)

    wrapper.unmount()
  })
})
