import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormSelectOption from './BFormSelectOption.vue'
import {afterEach, describe, expect, it} from 'vitest'
import {ref} from 'vue'
import {formSelectKey} from '../../utils/keys'

describe('form-select-option', () => {
  enableAutoUnmount(afterEach)

  // --- Default structure ---

  it('has expected default structure', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
      },
    })

    expect(wrapper.element.tagName).toBe('OPTION')
    expect(wrapper.attributes('value')).toEqual('foo')
    expect(wrapper.text()).toEqual('')
  })

  // --- Slot content ---

  it('renders default slot content', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.element.tagName).toBe('OPTION')
    expect(wrapper.attributes('value')).toEqual('foo')
    expect(wrapper.text()).toEqual('foobar')
  })

  it('renders HTML as default slot content', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
      },
      slots: {
        default: '<b>Bold</b>',
      },
    })

    expect(wrapper.element.tagName).toBe('OPTION')
    expect(wrapper.attributes('value')).toEqual('foo')

    const $bold = wrapper.get('b')
    expect($bold.text()).toEqual('Bold')
  })

  // --- Disabled ---

  it('has disabled attribute applied when disabled=true', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
        disabled: true,
      },
    })

    expect(wrapper.element.tagName).toBe('OPTION')
    expect(wrapper.attributes('value')).toEqual('foo')
    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.text()).toEqual('')
  })

  it('does not have disabled attribute when disabled=false (default)', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
      },
    })
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('disabled is reactive', async () => {
    const wrapper = mount(BFormSelectOption, {
      props: {value: 'foo', disabled: false},
    })
    expect(wrapper.attributes('disabled')).toBeUndefined()

    await wrapper.setProps({disabled: true})
    expect(wrapper.attributes('disabled')).toBeDefined()

    await wrapper.setProps({disabled: false})
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  // --- Class ---

  it('applies class prop to option element', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
        class: 'custom-class',
      },
    })

    expect(wrapper.element.tagName).toBe('OPTION')
    expect(wrapper.classes()).toContain('custom-class')
  })

  it('applies class object prop to option element', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
        class: {'class-a': true, 'class-b': false},
      },
    })

    expect(wrapper.element.tagName).toBe('OPTION')
    expect(wrapper.classes()).toContain('class-a')
    expect(wrapper.classes()).not.toContain('class-b')
  })

  // --- Attrs ---

  it('applies attrs prop to option element', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
      },
      attrs: {'data-test': 'test-value', 'data-id': '123'},
    })

    expect(wrapper.element.tagName).toBe('OPTION')
    expect(wrapper.attributes('data-test')).toBe('test-value')
    expect(wrapper.attributes('data-id')).toBe('123')
  })

  it('applies both class and attrs props to option element', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
        class: 'custom-class',
      },
      attrs: {'data-test': 'test-value'},
    })

    expect(wrapper.element.tagName).toBe('OPTION')
    expect(wrapper.classes()).toContain('custom-class')
    expect(wrapper.attributes('data-test')).toBe('test-value')
  })

  // --- Value types ---

  it('handles number value', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {value: 42},
    })
    expect(wrapper.attributes('value')).toBe('42')
  })

  it('handles boolean value true', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {value: true},
    })
    expect(wrapper.attributes('value')).toBe('true')
  })

  it('handles boolean value false', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {value: false},
    })
    expect(wrapper.attributes('value')).toBe('false')
  })

  it('handles undefined value', () => {
    const wrapper = mount(BFormSelectOption)
    // When value is undefined, option doesn't have a value attribute
    expect(wrapper.element.tagName).toBe('OPTION')
  })

  // --- formSelectKey injection (isSelected) ---

  it('has selected attribute when formSelectKey modelValue matches value', () => {
    const modelValue = ref('foo')
    const wrapper = mount(BFormSelectOption, {
      props: {value: 'foo'},
      global: {
        provide: {
          [formSelectKey as unknown as symbol]: {modelValue},
        },
      },
    })
    expect(wrapper.attributes('selected')).toBeDefined()
  })

  it('does not have selected attribute when formSelectKey modelValue does not match', () => {
    const modelValue = ref('bar')
    const wrapper = mount(BFormSelectOption, {
      props: {value: 'foo'},
      global: {
        provide: {
          [formSelectKey as unknown as symbol]: {modelValue},
        },
      },
    })
    expect(wrapper.attributes('selected')).toBeUndefined()
  })

  it('does not have selected attribute when no formSelectKey is provided', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {value: 'foo'},
    })
    expect(wrapper.attributes('selected')).toBeUndefined()
  })

  it('selected state works with numeric values', () => {
    const modelValue = ref(42)
    const wrapper = mount(BFormSelectOption, {
      props: {value: 42},
      global: {
        provide: {
          [formSelectKey as unknown as symbol]: {modelValue},
        },
      },
    })
    expect(wrapper.attributes('selected')).toBeDefined()
  })

  it('selected state is false when types differ', () => {
    const modelValue = ref('42')
    const wrapper = mount(BFormSelectOption, {
      props: {value: 42},
      global: {
        provide: {
          [formSelectKey as unknown as symbol]: {modelValue},
        },
      },
    })
    // Strict equality: '42' !== 42
    expect(wrapper.attributes('selected')).toBeUndefined()
  })
})
