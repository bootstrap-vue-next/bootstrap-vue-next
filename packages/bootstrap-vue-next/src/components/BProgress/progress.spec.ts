import {enableAutoUnmount, mount} from '@vue/test-utils'
import BProgress from './BProgress.vue'
import BProgressBar from './BProgressBar.vue'
import {afterEach, describe, expect, it} from 'vitest'

describe('progress', () => {
  enableAutoUnmount(afterEach)

  it('tag is div', () => {
    const wrapper = mount(BProgress)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has static class progress', () => {
    const wrapper = mount(BProgress)
    expect(wrapper.classes()).toContain('progress')
  })

  it('has style to be prop height', async () => {
    const wrapper = mount(BProgress, {
      props: {height: '100px'},
    })
    expect(wrapper.attributes('style')).toContain('height: 100px;')
  })

  it('has BProgressBar in slot by default', () => {
    const wrapper = mount(BProgress)
    const $progressbar = wrapper.findComponent(BProgressBar)
    expect($progressbar.exists()).toBe(true)
  })

  it('does not have BProgressBar when default slot', () => {
    const wrapper = mount(BProgress, {
      slots: {default: 'foobar'},
    })
    const $progressbar = wrapper.findComponent(BProgressBar)
    expect($progressbar.exists()).toBe(false)
  })

  it('BProgressBar has prop animated to be prop animated', async () => {
    const wrapper = mount(BProgress, {
      props: {animated: true},
    })
    const $progressbar = wrapper.getComponent(BProgressBar)
    expect($progressbar.props('animated')).toBe(true)
    await wrapper.setProps({animated: false})
    expect($progressbar.props('animated')).toBe(false)
  })

  it('BProgressBar has prop max to be prop max', async () => {
    const wrapper = mount(BProgress, {
      props: {max: '50'},
    })
    const $progressbar = wrapper.getComponent(BProgressBar)
    expect($progressbar.props('max')).toBe('50')
    await wrapper.setProps({max: '20'})
    expect($progressbar.props('max')).toBe('20')
  })

  it('BProgressBar has prop precision to be prop precision', async () => {
    const wrapper = mount(BProgress, {
      props: {precision: '50'},
    })
    const $progressbar = wrapper.getComponent(BProgressBar)
    expect($progressbar.props('precision')).toBe('50')
    await wrapper.setProps({precision: '20'})
    expect($progressbar.props('precision')).toBe('20')
  })

  it('BProgressBar has prop showProgress to be prop showProgress', async () => {
    const wrapper = mount(BProgress, {
      props: {showProgress: true},
    })
    const $progressbar = wrapper.getComponent(BProgressBar)
    expect($progressbar.props('showProgress')).toBe(true)
    await wrapper.setProps({showProgress: false})
    expect($progressbar.props('showProgress')).toBe(false)
  })

  it('BProgressBar has prop showValue to be prop showValue', async () => {
    const wrapper = mount(BProgress, {
      props: {showValue: true},
    })
    const $progressbar = wrapper.getComponent(BProgressBar)
    expect($progressbar.props('showValue')).toBe(true)
    await wrapper.setProps({showValue: false})
    expect($progressbar.props('showValue')).toBe(false)
  })

  it('BProgressBar has prop striped to be prop striped', async () => {
    const wrapper = mount(BProgress, {
      props: {striped: true},
    })
    const $progressbar = wrapper.getComponent(BProgressBar)
    expect($progressbar.props('striped')).toBe(true)
    await wrapper.setProps({striped: false})
    expect($progressbar.props('striped')).toBe(false)
  })

  it('BProgressBar has prop value to be prop value', async () => {
    const wrapper = mount(BProgress, {
      props: {value: '50'},
    })
    const $progressbar = wrapper.getComponent(BProgressBar)
    expect($progressbar.props('value')).toBe('50')
    await wrapper.setProps({value: '20'})
    expect($progressbar.props('value')).toBe('20')
  })

  it('BProgressBar has prop variant to be prop variant', async () => {
    const wrapper = mount(BProgress, {
      props: {variant: 'danger'},
    })
    const $progressbar = wrapper.getComponent(BProgressBar)
    expect($progressbar.props('variant')).toBe('danger')
    await wrapper.setProps({variant: 'secondary'})
    expect($progressbar.props('variant')).toBe('secondary')
  })
})
