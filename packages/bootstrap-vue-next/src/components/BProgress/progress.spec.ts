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

  it('has role progressbar', () => {
    const wrapper = mount(BProgress)
    expect(wrapper.attributes('role')).toBe('progressbar')
  })

  it('has aria-valuemin 0', () => {
    const wrapper = mount(BProgress)
    expect(wrapper.attributes('aria-valuemin')).toBe('0')
  })

  it('has aria-valuemax to be prop max', async () => {
    const wrapper = mount(BProgress, {
      props: {max: 50},
    })
    expect(wrapper.attributes('aria-valuemax')).toBe('50')
    await wrapper.setProps({max: 200})
    expect(wrapper.attributes('aria-valuemax')).toBe('200')
  })

  it('has aria-valuemax default 100', () => {
    const wrapper = mount(BProgress)
    expect(wrapper.attributes('aria-valuemax')).toBe('100')
  })

  it('has aria-valuenow to be prop value', async () => {
    const wrapper = mount(BProgress, {
      props: {value: 25},
    })
    expect(wrapper.attributes('aria-valuenow')).toBe('25')
    await wrapper.setProps({value: 75})
    expect(wrapper.attributes('aria-valuenow')).toBe('75')
  })

  it('has aria-valuenow undefined when value is not set', () => {
    const wrapper = mount(BProgress)
    expect(wrapper.attributes('aria-valuenow')).toBeUndefined()
  })

  it('has style to be prop height', async () => {
    const wrapper = mount(BProgress, {
      props: {height: '100px'},
    })
    expect(wrapper.attributes('style')).toContain('height: 100px;')
  })

  it('has no height style when height prop not set', () => {
    const wrapper = mount(BProgress)
    expect(wrapper.attributes('style')).toBeUndefined()
  })

  it('height style is reactive', async () => {
    const wrapper = mount(BProgress, {
      props: {height: '50px'},
    })
    expect(wrapper.attributes('style')).toContain('height: 50px;')
    await wrapper.setProps({height: '200px'})
    expect(wrapper.attributes('style')).toContain('height: 200px;')
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

  it('renders default slot content', () => {
    const wrapper = mount(BProgress, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders HTML in default slot', () => {
    const wrapper = mount(BProgress, {
      slots: {default: '<span class="custom">bar</span>'},
    })
    const $span = wrapper.find('.custom')
    expect($span.exists()).toBe(true)
    expect($span.text()).toBe('bar')
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

  it('BProgressBar has prop bgVariant to be prop bgVariant', async () => {
    const wrapper = mount(BProgress, {
      props: {bgVariant: 'danger'},
    })
    const $progressbar = wrapper.getComponent(BProgressBar)
    expect($progressbar.props('bgVariant')).toBe('danger')
    await wrapper.setProps({bgVariant: 'success'})
    expect($progressbar.props('bgVariant')).toBe('success')
  })

  it('BProgressBar has prop textVariant to be prop textVariant', async () => {
    const wrapper = mount(BProgress, {
      props: {textVariant: 'primary'},
    })
    const $progressbar = wrapper.getComponent(BProgressBar)
    expect($progressbar.props('textVariant')).toBe('primary')
    await wrapper.setProps({textVariant: 'warning'})
    expect($progressbar.props('textVariant')).toBe('warning')
  })

  it('provides progressInjectionKey with animated', () => {
    const wrapper = mount(BProgress, {
      props: {animated: true},
    })
    const $bar = wrapper.getComponent(BProgressBar)
    const bar = $bar.find('.progress-bar')
    expect(bar.classes()).toContain('progress-bar-animated')
  })

  it('provides progressInjectionKey with max', () => {
    const wrapper = mount(BProgress, {
      props: {max: 200, value: 100},
    })
    const $bar = wrapper.getComponent(BProgressBar)
    const bar = $bar.find('.progress-bar')
    expect(bar.attributes('style')).toContain('width: 50%')
  })

  it('provides progressInjectionKey with showProgress', () => {
    const wrapper = mount(BProgress, {
      props: {showProgress: true, value: 50, max: 100},
    })
    const $bar = wrapper.getComponent(BProgressBar)
    expect($bar.text()).toBe('50')
  })

  it('provides progressInjectionKey with showValue', () => {
    const wrapper = mount(BProgress, {
      props: {showValue: true, value: 25},
    })
    const $bar = wrapper.getComponent(BProgressBar)
    expect($bar.text()).toBe('25')
  })

  it('provides progressInjectionKey with striped', () => {
    const wrapper = mount(BProgress, {
      props: {striped: true},
    })
    const $bar = wrapper.getComponent(BProgressBar)
    const bar = $bar.find('.progress-bar')
    expect(bar.classes()).toContain('progress-bar-striped')
  })
})
