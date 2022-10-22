// @vitest-environment jsdom
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BProgressBar from './BProgressBar.vue'
import {afterEach, describe, expect, it} from 'vitest'
// This exists, ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {injectionKey} from './BProgress.vue'

describe('progress-bar', () => {
  enableAutoUnmount(afterEach)

  it('element is div', () => {
    const wrapper = mount(BProgressBar, {
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has static class progress-bar', () => {
    const wrapper = mount(BProgressBar, {
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.classes()).toContain('progress-bar')
  })

  it('has static attr role to be progressbar', () => {
    const wrapper = mount(BProgressBar, {
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.attributes('role')).toBe('progressbar')
  })

  it('has static attr aria-valuemin to be 0', () => {
    const wrapper = mount(BProgressBar, {
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.attributes('aria-valuemin')).toBe('0')
  })

  it('has static attr aria-valuenow to be prop value', async () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 5},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.attributes('aria-valuenow')).toBe('5')
    await wrapper.setProps({value: 55})
    expect(wrapper.attributes('aria-valuenow')).toBe('55')
  })

  it('has static attr aria-valuemax to be prop max', async () => {
    const wrapper = mount(BProgressBar, {
      props: {max: 5},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.attributes('aria-valuemax')).toBe('5')
    await wrapper.setProps({max: 55})
    expect(wrapper.attributes('aria-valuemax')).toBe('55')
  })

  it('has class progress-bar-animated if prop animated', async () => {
    const wrapper = mount(BProgressBar, {
      props: {animated: true},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.classes()).toContain('progress-bar-animated')
    await wrapper.setProps({animated: false})
    expect(wrapper.classes()).not.toContain('progress-bar-animated')
  })

  it('has class progress-bar-animated if parent animated', async () => {
    const wrapper = mount(BProgressBar, {
      global: {provide: {[injectionKey as unknown as symbol]: {animated: true}}},
    })
    expect(wrapper.classes()).toContain('progress-bar-animated')
  })

  it('has class progress-bar-striped if prop striped', async () => {
    const wrapper = mount(BProgressBar, {
      props: {striped: true},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.classes()).toContain('progress-bar-striped')
    await wrapper.setProps({striped: false})
    expect(wrapper.classes()).not.toContain('progress-bar-striped')
  })

  it('has class progress-bar-striped if parent striped', async () => {
    const wrapper = mount(BProgressBar, {
      global: {provide: {[injectionKey as unknown as symbol]: {striped: true}}},
    })
    expect(wrapper.classes()).toContain('progress-bar-striped')
  })

  it('has class progress-bar-striped if prop animated', async () => {
    const wrapper = mount(BProgressBar, {
      props: {animated: true},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.classes()).toContain('progress-bar-striped')
    await wrapper.setProps({animated: false})
    expect(wrapper.classes()).not.toContain('progress-bar-striped')
  })

  it('has class progress-bar-striped if parent animated', async () => {
    const wrapper = mount(BProgressBar, {
      global: {provide: {[injectionKey as unknown as symbol]: {animated: true}}},
    })
    expect(wrapper.classes()).toContain('progress-bar-striped')
  })

  it('has class progress-bar-striped if prop variant', async () => {
    const wrapper = mount(BProgressBar, {
      props: {variant: 'info'},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.classes()).toContain('bg-info')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('bg-info')
  })

  it('renders default slot', () => {
    const wrapper = mount(BProgressBar, {
      slots: {default: 'foobar'},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders computed label when prop showValue and value', () => {
    const wrapper = mount(BProgressBar, {
      props: {showValue: true, value: 55},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.text()).toBe('55')
  })

  it('does not render computed label when prop value and not prop showValue', () => {
    const wrapper = mount(BProgressBar, {
      props: {showValue: false, value: 55},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.text()).toBe('')
  })

  it('renders computed label when parent showValue and prop value', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 55},
      global: {provide: {[injectionKey as unknown as symbol]: {showValue: true}}},
    })
    expect(wrapper.text()).toBe('55')
  })

  it('renders progress when prop showProgress', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 55, showProgress: true, max: 95},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.text()).toBe('58')
  })

  it('renders progress when parent showProgress', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 55, max: 95},
      global: {provide: {[injectionKey as unknown as symbol]: {showProgress: true}}},
    })
    expect(wrapper.text()).toBe('58')
  })

  it('renders prop label', () => {
    const wrapper = mount(BProgressBar, {
      props: {label: 'foobar'},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders labelHtml over showValue', () => {
    const wrapper = mount(BProgressBar, {
      props: {labelHtml: 'foobar', showValue: true, value: 55},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders value over progress', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 55, showValue: true, showProgress: true},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.text()).toBe('55')
  })

  it('renders progress over label', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 55, showProgress: true, label: 'foobar'},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.text()).toBe('55')
  })

  it('attr style has correct width when prop max', () => {
    const wrapper = mount(BProgressBar, {
      props: {max: 100, value: 15},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.attributes('style')).toBe('width: 15%;')
  })

  it('attr style has correct width when prop max is string', () => {
    const wrapper = mount(BProgressBar, {
      props: {max: '100', value: 15},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.attributes('style')).toBe('width: 15%;')
  })

  it('attr style has correct width when prop value when is string', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: '155%'},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.attributes('style')).toBe('width: 155%;')
  })

  it('attr style has correct width of undefined when prop value string is wrong', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: '155'},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.attributes('style')).toBeUndefined()
  })

  it('attr style has correct width when prop value when is number', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 155},
      global: {provide: {[injectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.attributes('style')).toBe('width: 155%;')
  })
})
