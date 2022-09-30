import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormGroup from './BFormGroup.vue'
import BCol from '../BCol.vue'

describe('form-group', () => {
  enableAutoUnmount(afterEach)

  it('tag is fieldset by default', () => {
    const wrapper = mount(BFormGroup)
    expect(wrapper.element.tagName).toBe('FIELDSET')
  })

  it('does not have child legend by default', () => {
    const wrapper = mount(BFormGroup)
    const $legend = wrapper.find('legend')
    expect($legend.exists()).toBe(false)
  })

  it('has child legend when prop label', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar'},
    })
    const $legend = wrapper.find('legend')
    expect($legend.exists()).toBe(true)
  })

  it('child legend has attr id to be defined by default', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar'},
    })
    const $legend = wrapper.get('legend')
    expect($legend.attributes('id')).toBeDefined()
  })

  it('has child div by default', () => {
    const wrapper = mount(BFormGroup)
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
  })

  it('child div has child BCol when prop labelCols', () => {
    const wrapper = mount(BFormGroup, {
      props: {labelCols: '4'},
    })
    const $div = wrapper.get('div')
    const $col = $div.findComponent(BCol)
    expect($col.exists()).toBe(true)
  })

  it('child div has child BCol when prop labelColsSm', () => {
    const wrapper = mount(BFormGroup, {
      props: {labelColsSm: '4'},
    })
    const $div = wrapper.get('div')
    const $col = $div.findComponent(BCol)
    expect($col.exists()).toBe(true)
  })

  it('child div has child BCol when prop labelColsMd', () => {
    const wrapper = mount(BFormGroup, {
      props: {labelColsMd: '4'},
    })
    const $div = wrapper.get('div')
    const $col = $div.findComponent(BCol)
    expect($col.exists()).toBe(true)
  })

  it('child div has child BCol when prop labelColsLg', () => {
    const wrapper = mount(BFormGroup, {
      props: {labelColsLg: '4'},
    })
    const $div = wrapper.get('div')
    const $col = $div.findComponent(BCol)
    expect($col.exists()).toBe(true)
  })

  it('child div has child BCol when prop labelColsXl', () => {
    const wrapper = mount(BFormGroup, {
      props: {labelColsXl: '4'},
    })
    const $div = wrapper.get('div')
    const $col = $div.findComponent(BCol)
    expect($col.exists()).toBe(true)
  })

  it('child div BCol child is given prop tag to be legend when prop labelCols', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar', labelCols: '4'},
    })
    const $div = wrapper.get('div')
    const $col = $div.getComponent(BCol)
    expect($col.props('tag')).toBe('legend')
  })

  it('child div BCol child is given prop labelCols', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar', labelCols: '4'},
    })
    const $div = wrapper.get('div')
    const $col = $div.getComponent(BCol)
    expect($col.props('cols')).toBe(4)
  })

  it('child div BCol child is given prop labelColsSm to be prop sm', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar', labelColsSm: '4'},
    })
    const $div = wrapper.get('div')
    const $col = $div.getComponent(BCol)
    expect($col.props('sm')).toBe(4)
  })

  it('child div BCol child is given prop labelColsMd to be prop md', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar', labelColsMd: '4'},
    })
    const $div = wrapper.get('div')
    const $col = $div.getComponent(BCol)
    expect($col.props('md')).toBe(4)
  })

  it('child div BCol child is given prop labelColsLg to be prop lg', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar', labelColsLg: '4'},
    })
    const $div = wrapper.get('div')
    const $col = $div.getComponent(BCol)
    expect($col.props('lg')).toBe(4)
  })

  it('child div BCol child is given prop labelColsXl to be prop xl', () => {
    const wrapper = mount(BFormGroup, {
      props: {labelColsXl: '4'},
    })
    const $div = wrapper.get('div')
    const $col = $div.getComponent(BCol)
    expect($col.props('xl')).toBe(4)
  })

  it('child div BCol child is given class text-{type} when prop labelAlign', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar', labelAlign: '5', labelCols: '2'},
    })
    const $div = wrapper.get('div')
    const $col = $div.getComponent(BCol)
    expect($col.classes()).toContain('text-5')
  })

  it('child div BCol child is given class text-{type} when prop labelAlignSm', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar', labelAlignSm: '5', labelCols: '2'},
    })
    const $div = wrapper.get('div')
    const $col = $div.getComponent(BCol)
    expect($col.classes()).toContain('text-sm-5')
  })

  it('child div BCol child is given class text-{type} when prop labelAlignMd', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar', labelAlignMd: '5', labelCols: '2'},
    })
    const $div = wrapper.get('div')
    const $col = $div.getComponent(BCol)
    expect($col.classes()).toContain('text-md-5')
  })

  it('child div BCol child is given class text-{type} when prop labelAlignLg', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar', labelAlignLg: '5', labelCols: '2'},
    })
    const $div = wrapper.get('div')
    const $col = $div.getComponent(BCol)
    expect($col.classes()).toContain('text-lg-5')
  })

  it('child div BCol child is given class text-{type} when prop labelAlignXl', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar', labelAlignXl: '5', labelCols: '2'},
    })
    const $div = wrapper.get('div')
    const $col = $div.getComponent(BCol)
    expect($col.classes()).toContain('text-xl-5')
  })

  it('child legend is given class text-{type} when prop labelAlign', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar', labelAlign: '5'},
    })
    const $legend = wrapper.get('legend')
    expect($legend.classes()).toContain('text-5')
  })

  it('child legend is given class text-sm-{type} when prop labelAlignSm ', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar', labelAlignSm: '5'},
    })
    const $legend = wrapper.get('legend')
    expect($legend.classes()).toContain('text-sm-5')
  })

  it('child legend is given class text-md-{type} when prop labelAlignMd', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar', labelAlignMd: '5'},
    })
    const $legend = wrapper.get('legend')
    expect($legend.classes()).toContain('text-md-5')
  })

  it('child legend is given class text-lg-{type} when prop labelAlignLg ', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar', labelAlignLg: '5'},
    })
    const $legend = wrapper.get('legend')
    expect($legend.classes()).toContain('text-lg-5')
  })

  it('child legend is given class text-xl-{type} when prop labelAlignXl ', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foobar', labelAlignXl: '5'},
    })
    const $legend = wrapper.get('legend')
    expect($legend.classes()).toContain('text-xl-5')
  })
})
