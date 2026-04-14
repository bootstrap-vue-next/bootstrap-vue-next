import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BAspect from './BAspect.vue'

describe('aspect', () => {
  enableAutoUnmount(afterEach)

  it('tag is div by default', () => {
    const wrapper = mount(BAspect)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is tag prop', () => {
    const wrapper = mount(BAspect, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('tag is reactive', async () => {
    const wrapper = mount(BAspect, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
    await wrapper.setProps({tag: 'div'})
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('should have expected structure when aspect is set to "4:3"', async () => {
    const wrapper = mount(BAspect, {
      props: {aspect: '4:3'},
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.classes()).toContain('b-aspect')
    expect(wrapper.classes()).toContain('d-flex')
    expect(wrapper.classes().length).toBe(2)

    const $sizer = wrapper.find('.b-aspect-sizer')
    expect($sizer.exists()).toBe(true)
    expect($sizer.element.tagName).toBe('DIV')
    expect($sizer.classes()).toContain('flex-grow-1')
    expect($sizer.attributes('style')).toContain('padding-bottom: 75%;')

    const $content = wrapper.find('.b-aspect-content')
    expect($content.exists()).toBe(true)
    expect($content.element.tagName).toBe('DIV')
    expect($content.classes()).toContain('flex-grow-1')
    expect($content.classes()).toContain('w-100')
    expect($content.classes()).toContain('mw-100')
    expect($content.attributes('style')).toContain('margin-left: -100%;')
  })

  it('should have expected structure when aspect is set to `16/9`', async () => {
    const wrapper = mount(BAspect, {
      props: {aspect: 16 / 9},
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.classes()).toContain('b-aspect')
    expect(wrapper.classes()).toContain('d-flex')
    expect(wrapper.classes().length).toBe(2)

    const $sizer = wrapper.find('.b-aspect-sizer')
    expect($sizer.exists()).toBe(true)
    expect($sizer.element.tagName).toBe('DIV')
    expect($sizer.classes()).toContain('flex-grow-1')
    expect($sizer.attributes('style')).toContain('padding-bottom: 56.25%;')

    const $content = wrapper.find('.b-aspect-content')
    expect($content.exists()).toBe(true)
    expect($content.element.tagName).toBe('DIV')
    expect($content.classes()).toContain('flex-grow-1')
    expect($content.classes()).toContain('w-100')
    expect($content.classes()).toContain('mw-100')
    expect($content.attributes('style')).toContain('margin-left: -100%;')
  })

  it('should have expected structure when aspect is set to `16x9`', async () => {
    const wrapper = mount(BAspect, {
      props: {aspect: '16x9'},
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.classes()).toContain('b-aspect')
    expect(wrapper.classes()).toContain('d-flex')
    expect(wrapper.classes().length).toBe(2)

    const $sizer = wrapper.find('.b-aspect-sizer')
    expect($sizer.exists()).toBe(true)
    expect($sizer.element.tagName).toBe('DIV')
    expect($sizer.classes()).toContain('flex-grow-1')
    expect($sizer.attributes('style')).toContain('padding-bottom: 56.25%;')

    const $content = wrapper.find('.b-aspect-content')
    expect($content.exists()).toBe(true)
    expect($content.element.tagName).toBe('DIV')
    expect($content.classes()).toContain('flex-grow-1')
    expect($content.classes()).toContain('w-100')
    expect($content.classes()).toContain('mw-100')
    expect($content.attributes('style')).toContain('margin-left: -100%;')
  })

  it('should have expected structure when aspect is set to `1.5`', async () => {
    const wrapper = mount(BAspect, {
      props: {aspect: 1.5},
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.classes()).toContain('b-aspect')
    expect(wrapper.classes()).toContain('d-flex')
    expect(wrapper.classes().length).toBe(2)

    const $sizer = wrapper.find('.b-aspect-sizer')
    expect($sizer.exists()).toBe(true)
    expect($sizer.element.tagName).toBe('DIV')
    expect($sizer.classes()).toContain('flex-grow-1')
    expect($sizer.attributes('style')).toContain('padding-bottom: 66.66666666666667%;')

    const $content = wrapper.find('.b-aspect-content')
    expect($content.exists()).toBe(true)
    expect($content.element.tagName).toBe('DIV')
    expect($content.classes()).toContain('flex-grow-1')
    expect($content.classes()).toContain('w-100')
    expect($content.classes()).toContain('mw-100')
    expect($content.attributes('style')).toContain('margin-left: -100%;')
  })
})
