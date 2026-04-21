import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {defineComponent, inject} from 'vue'
import {buttonGroupKey} from '../../utils/keys'
import BButtonGroup from './BButtonGroup.vue'

describe('button-group', () => {
  enableAutoUnmount(afterEach)

  it('tag is div by default', () => {
    const wrapper = mount(BButtonGroup)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BButtonGroup, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('tag changes when prop tag changes', async () => {
    const wrapper = mount(BButtonGroup, {
      props: {tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
    await wrapper.setProps({tag: 'span'})
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has static attr role as group', () => {
    const wrapper = mount(BButtonGroup)
    expect(wrapper.attributes('role')).toBe('group')
  })

  it('has attr aria-label as prop ariaLabel', () => {
    const wrapper = mount(BButtonGroup, {
      props: {ariaLabel: 'foobar'},
    })
    expect(wrapper.attributes('aria-label')).toBe('foobar')
  })

  it('has attr aria-label to be Group by default', () => {
    const wrapper = mount(BButtonGroup)
    expect(wrapper.attributes('aria-label')).toBe('Group')
  })

  it('aria-label changes when prop ariaLabel changes', async () => {
    const wrapper = mount(BButtonGroup, {
      props: {ariaLabel: 'initial'},
    })
    expect(wrapper.attributes('aria-label')).toBe('initial')
    await wrapper.setProps({ariaLabel: 'updated'})
    expect(wrapper.attributes('aria-label')).toBe('updated')
  })

  it('renders default slot', () => {
    const wrapper = mount(BButtonGroup, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('has class btn-group when not prop vertical', () => {
    const wrapper = mount(BButtonGroup, {
      props: {vertical: false},
    })
    expect(wrapper.classes()).toContain('btn-group')
  })

  it('does not have class btn-group when prop vertical', () => {
    const wrapper = mount(BButtonGroup, {
      props: {vertical: true},
    })
    expect(wrapper.classes()).not.toContain('btn-group')
  })

  it('toggles btn-group class when vertical prop changes', async () => {
    const wrapper = mount(BButtonGroup, {
      props: {vertical: false},
    })
    expect(wrapper.classes()).toContain('btn-group')
    await wrapper.setProps({vertical: true})
    expect(wrapper.classes()).not.toContain('btn-group')
    await wrapper.setProps({vertical: false})
    expect(wrapper.classes()).toContain('btn-group')
  })

  it('has class btn-group-{type} when prop size', () => {
    const wrapper = mount(BButtonGroup, {
      props: {size: 'lg'},
    })
    expect(wrapper.classes()).toContain('btn-group-lg')
  })

  it('has class btn-group-sm when prop size is sm', () => {
    const wrapper = mount(BButtonGroup, {
      props: {size: 'sm'},
    })
    expect(wrapper.classes()).toContain('btn-group-sm')
  })

  it('does not have a btn-group size class when size is undefined (default)', () => {
    const wrapper = mount(BButtonGroup)
    expect(wrapper.classes()).not.toContain('btn-group-md')
    expect(wrapper.classes()).not.toContain('btn-group-sm')
    expect(wrapper.classes()).not.toContain('btn-group-lg')
  })

  it('does not have class btn-group-{type} when prop size is undefined', () => {
    const wrapper = mount(BButtonGroup, {
      props: {size: undefined},
    })
    expect(wrapper.classes()).not.toContain('btn-group-undefined')
  })

  it('size class changes when prop size changes', async () => {
    const wrapper = mount(BButtonGroup, {
      props: {size: 'sm'},
    })
    expect(wrapper.classes()).toContain('btn-group-sm')
    await wrapper.setProps({size: 'lg'})
    expect(wrapper.classes()).not.toContain('btn-group-sm')
    expect(wrapper.classes()).toContain('btn-group-lg')
  })

  it('does not have class btn-group-vertical when not prop vertical', () => {
    const wrapper = mount(BButtonGroup, {
      props: {vertical: false},
    })
    expect(wrapper.classes()).not.toContain('btn-group-vertical')
  })

  it('has class btn-group-vertical when prop vertical', () => {
    const wrapper = mount(BButtonGroup, {
      props: {vertical: true},
    })
    expect(wrapper.classes()).toContain('btn-group-vertical')
  })

  it('provides buttonGroupKey as true to child components', () => {
    let injectedValue: boolean | undefined
    const Child = defineComponent({
      setup() {
        injectedValue = inject(buttonGroupKey)
        return () => null
      },
    })
    mount(BButtonGroup, {
      slots: {default: Child},
    })
    expect(injectedValue).toBe(true)
  })
})
