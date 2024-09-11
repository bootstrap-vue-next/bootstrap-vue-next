import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BFormFile from './BFormFile.vue'

describe('form-file', () => {
  enableAutoUnmount(afterEach)

  it('has class form-control-{type} when prop size', () => {
    const wrapper = mount(BFormFile, {
      props: {size: 'lg'},
    })

    const $input = wrapper.find('input')
    expect($input.classes()).toContain('form-control-lg')
  })

  it('does not have class form-control-{type} when prop size undefined', () => {
    const wrapper = mount(BFormFile, {
      props: {size: undefined},
    })

    const $input = wrapper.find('input')
    expect($input.classes()).not.toContain('form-control-lg')
  })

  describe('input attributes', () => {
    it('has input element', () => {
      const wrapper = mount(BFormFile)
      const $input = wrapper.find('input')
      expect($input.exists()).toBe(true)
    })

    it('input element has attr id', () => {
      const wrapper = mount(BFormFile)
      const $input = wrapper.get('input')
      expect($input.attributes('id')).toBeDefined()
    })

    it('input element attr id contains content from prop id', () => {
      const wrapper = mount(BFormFile, {
        props: {id: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('id')).toBe('foobar')
    })

    it('input element has attr type to be file', () => {
      const wrapper = mount(BFormFile)
      const $input = wrapper.get('input')
      expect($input.attributes('type')).toBe('file')
    })

    it('input element has attr disabled when prop disabled', () => {
      const wrapper = mount(BFormFile, {
        props: {disabled: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBe('')
    })

    it('input element does not have attr disabled when prop disabled is false', () => {
      const wrapper = mount(BFormFile, {
        props: {disabled: false},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBeUndefined()
    })

    it('input element does not have attr disabled when prop disabled is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {disabled: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBeUndefined()
    })

    it('input element has attr required when prop name and prop required', () => {
      const wrapper = mount(BFormFile, {
        props: {required: true, name: 'foo'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBe('')
    })

    it('input element does not have attr required when prop name is empty string and prop required', () => {
      const wrapper = mount(BFormFile)
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBeUndefined()
    })

    it('input element has attr name to be prop name', () => {
      const wrapper = mount(BFormFile, {
        props: {name: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('name')).toBe('foobar')
    })

    it('input element has attr name is undefined when prop name undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {name: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('name')).toBeUndefined()
    })

    it('input element has attr form to be prop form', () => {
      const wrapper = mount(BFormFile, {
        props: {form: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('form')).toBe('foobar')
    })

    it('input element has attr form is undefined when prop form undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {form: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('form')).toBeUndefined()
    })

    it('input element has attr aria-label to be prop ariaLabel', () => {
      const wrapper = mount(BFormFile, {
        props: {ariaLabel: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-label')).toBe('foobar')
    })

    it('input element has attr aria-label is undefined when prop ariaLabel undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {ariaLabel: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-label')).toBeUndefined()
    })

    it('input element has attr aria-labelledby to be prop ariaLabelledby', () => {
      const wrapper = mount(BFormFile, {
        props: {ariaLabelledby: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-labelledby')).toBe('foobar')
    })

    it('input element has attr aria-labelledby is undefined when prop ariaLabelledby undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {ariaLabelledby: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-labelledby')).toBeUndefined()
    })

    it('input element has attr aria-labelledby is undefined when prop ariaLabelledby undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {ariaLabelledby: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-labelledby')).toBeUndefined()
    })

    it('input element has attr value to be true when value is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {value: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('value')).toBeUndefined()
    })

    it('input element aria-required when prop name and prop required true', () => {
      const wrapper = mount(BFormFile, {
        props: {name: 'foo', required: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-required')).toBe('true')
    })

    it('input element does not have aria-required when prop name and prop required false', () => {
      const wrapper = mount(BFormFile, {
        props: {name: 'foo', required: false},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-required')).toBeUndefined()
    })

    it('input element has set attr multiple to true when prop multiple is true', () => {
      const wrapper = mount(BFormFile, {
        props: {multiple: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('multiple')).toBeDefined()
    })

    it('input element has set attr multiple to false when prop multiple is false', () => {
      const wrapper = mount(BFormFile, {
        props: {multiple: false},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('multiple')).toBeUndefined()
    })

    it('input element has set attr multiple to false when prop multiple is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {multiple: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('multiple')).toBeUndefined()
    })

    it('input element has set attr capture to true when prop capture is true', () => {
      const wrapper = mount(BFormFile, {
        props: {capture: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('capture')).toBe('true')
    })

    it('input element has set attr capture to false when prop capture is false', () => {
      const wrapper = mount(BFormFile, {
        props: {capture: false},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('capture')).toBe('false')
    })

    it('input element has set attr capture to false when prop disabled is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {capture: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('capture')).toBe('false')
    })

    it('input element has set attr accept to empty when prop accept is true', () => {
      const wrapper = mount(BFormFile, {
        props: {accept: ''},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('accept')).toBeUndefined()
    })

    it('input element has set attr accept to "foo" when prop accept is false', () => {
      const wrapper = mount(BFormFile, {
        props: {accept: 'foo'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('accept')).toBe('foo')
    })

    it('input element does not have attr accept when prop accept is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {accept: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('accept')).toBeUndefined()
    })

    it('input element has set attr directory to true when prop directory is true', () => {
      const wrapper = mount(BFormFile, {
        props: {directory: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('directory')).toBe('true')
    })

    it('input element has set attr directory to false when prop directory is false', () => {
      const wrapper = mount(BFormFile, {
        props: {directory: false},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('directory')).toBe('false')
    })

    it('input element has set attr directory to false when prop directory is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {directory: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('directory')).toBe('false')
    })

    it('default has custom attributes transferred input element', async () => {
      const wrapper = mount(BFormFile, {
        propsData: {
          id: 'foo',
          foo: 'bar',
        },
      })

      const $input = wrapper.find('input')
      expect($input.attributes('foo')).toBeDefined()
      expect($input.attributes('foo')).toEqual('bar')
    })
  })

  describe('label attributes', () => {
    it('has no label by default', () => {
      const wrapper = mount(BFormFile)
      const $label = wrapper.find('label')
      expect($label.exists()).toBe(false)
    })

    it('has label when has label slot defined', () => {
      const wrapper = mount(BFormFile, {
        props: {labelClass: 'labelClass'},
        slots: {label: 'foo'},
      })
      const $label = wrapper.get('label')
      expect($label).not.toBeUndefined()
      expect($label.attributes('class')?.includes('labelClass'))
    })
    it('has label has attr for to be defined by default', () => {
      const wrapper = mount(BFormFile, {
        props: {id: 'fooFile', label: 'foo'},
        slots: {default: 'foo'},
      })

      const $input = wrapper.get('input')
      const $label = wrapper.get('label')

      const $labelFor = $label.attributes('for')
      const $inputId = $input.attributes('id')

      expect($labelFor).toBe($inputId)
    })
  })

  describe('model behavior', () => {
    it('emits input even when file changed', async () => {
      const file = new File(['foo'], 'foo.txt', {
        type: 'text/plain',
        lastModified: Date.now(),
      })

      const wrapper = mount(BFormFile, {props: {id: 'foo', modelValue: file}})

      const $input = wrapper.get('input')
      await $input.trigger('change')

      expect(wrapper.emitted('change')).toBeDefined()
      expect(wrapper.emitted('change')).toHaveLength(1)
      expect(wrapper.emitted('change')?.[0][0]).toBeInstanceOf(Event)
    })

    it('emits update:modelValue===file event when file changed', async () => {
      const file = new File(['foo'], 'foo.txt', {
        type: 'text/plain',
        lastModified: Date.now(),
      })

      const dataTransfer = new ClipboardEvent('').clipboardData ?? new DataTransfer()
      dataTransfer.items.add(file)

      const wrapper = mount(BFormFile, {props: {id: 'foo', modelValue: undefined}})

      const $input = wrapper.get('input')
      $input.element.files = dataTransfer.files
      await $input.trigger('change')

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toStrictEqual(file)
    })

    it('emits update:modelValue===file event when file changed in multiple mode', async () => {
      const file1 = new File(['foo'], 'foo.txt', {
        type: 'text/plain',
        lastModified: Date.now(),
      })

      const file2 = new File(['foo2'], 'foo2.txt', {
        type: 'text/plain',
        lastModified: Date.now(),
      })

      const dataTransfer = new ClipboardEvent('').clipboardData ?? new DataTransfer()
      dataTransfer.items.add(file1)
      dataTransfer.items.add(file2)

      const wrapper = mount(BFormFile, {props: {id: 'foo', modelValue: undefined, multiple: true}})

      const $input = wrapper.get('input')
      $input.element.files = dataTransfer.files
      await $input.trigger('change')

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
      expect((wrapper.emitted('update:modelValue')?.[0][0] as File[])[0]).toStrictEqual(file1)
      expect((wrapper.emitted('update:modelValue')?.[0][0] as File[])[1]).toStrictEqual(file2)
    })

    it('emits update:modelValue===file event when file changed in directory mode', async () => {
      const file1 = new File(['foo'], 'foo.txt', {
        type: 'text/plain',
        lastModified: Date.now(),
      })

      const file2 = new File(['foo2'], 'foo2.txt', {
        type: 'text/plain',
        lastModified: Date.now(),
      })

      const dataTransfer = new ClipboardEvent('').clipboardData ?? new DataTransfer()
      dataTransfer.items.add(file1)
      dataTransfer.items.add(file2)

      const wrapper = mount(BFormFile, {
        props: {id: 'foo', modelValue: undefined, multiple: true, directory: true},
      })

      const $input = wrapper.get('input')
      $input.element.files = dataTransfer.files
      await $input.trigger('change')

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
      expect((wrapper.emitted('update:modelValue')?.[0][0] as File[])[0]).toStrictEqual(file1)
      expect((wrapper.emitted('update:modelValue')?.[0][0] as File[])[1]).toStrictEqual(file2)
    })

    it('reset() method works in single mode', async () => {})
    it('reset() method works in multiple mode', async () => {})
  })
})
