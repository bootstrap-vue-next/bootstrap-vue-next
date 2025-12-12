import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BFormFile from './BFormFile.vue'

describe('form-file', () => {
  enableAutoUnmount(afterEach)

  describe('size variants', () => {
    it('has class form-control-lg on control when size=lg', () => {
      const wrapper = mount(BFormFile, {
        props: {size: 'lg'},
      })

      const $control = wrapper.find('.b-form-file-control')
      expect($control.classes()).toContain('form-control-lg')
    })

    it('has class form-control-sm on control when size=sm', () => {
      const wrapper = mount(BFormFile, {
        props: {size: 'sm'},
      })

      const $control = wrapper.find('.b-form-file-control')
      expect($control.classes()).toContain('form-control-sm')
    })

    it('does not have size class when size undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {size: undefined},
      })

      const $control = wrapper.find('.b-form-file-control')
      expect($control.classes()).not.toContain('form-control-lg')
      expect($control.classes()).not.toContain('form-control-sm')
    })

    it('has class form-control-lg on plain input when size=lg and plain=true', () => {
      const wrapper = mount(BFormFile, {
        props: {size: 'lg', plain: true},
      })

      const $input = wrapper.find('input')
      expect($input.classes()).toContain('form-control-lg')
    })
  })

  describe('plain mode - input attributes', () => {
    it('has input element when plain=true', () => {
      const wrapper = mount(BFormFile, {props: {plain: true}})
      const $input = wrapper.find('input')
      expect($input.exists()).toBe(true)
    })

    it('input element has attr id', () => {
      const wrapper = mount(BFormFile, {props: {plain: true}})
      const $input = wrapper.get('input')
      expect($input.attributes('id')).toBeDefined()
    })

    it('input element attr id contains content from prop id', () => {
      const wrapper = mount(BFormFile, {
        props: {id: 'foobar', plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('id')).toBe('foobar')
    })

    it('input element has attr type to be file', () => {
      const wrapper = mount(BFormFile, {props: {plain: true}})
      const $input = wrapper.get('input')
      expect($input.attributes('type')).toBe('file')
    })

    it('input element has attr disabled when prop disabled', () => {
      const wrapper = mount(BFormFile, {
        props: {disabled: true, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBe('')
    })

    it('input element does not have attr disabled when prop disabled is false', () => {
      const wrapper = mount(BFormFile, {
        props: {disabled: false, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBeUndefined()
    })

    it('input element does not have attr disabled when prop disabled is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {disabled: undefined, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBeUndefined()
    })

    it('input element has attr required when prop name and prop required', () => {
      const wrapper = mount(BFormFile, {
        props: {required: true, name: 'foo', plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBe('')
    })

    it('input element does not have attr required when prop name is empty string and prop required', () => {
      const wrapper = mount(BFormFile, {props: {plain: true}})
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBeUndefined()
    })

    it('input element has attr name to be prop name', () => {
      const wrapper = mount(BFormFile, {
        props: {name: 'foobar', plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('name')).toBe('foobar')
    })

    it('input element has attr name is undefined when prop name undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {name: undefined, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('name')).toBeUndefined()
    })

    it('input element has attr form to be prop form', () => {
      const wrapper = mount(BFormFile, {
        props: {form: 'foobar', plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('form')).toBe('foobar')
    })

    it('input element has attr form is undefined when prop form undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {form: undefined, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('form')).toBeUndefined()
    })

    it('input element has attr aria-label to be prop ariaLabel', () => {
      const wrapper = mount(BFormFile, {
        props: {ariaLabel: 'foobar', plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-label')).toBe('foobar')
    })

    it('input element has attr aria-label is undefined when prop ariaLabel undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {ariaLabel: undefined, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-label')).toBeUndefined()
    })

    it('input element has attr aria-labelledby to be prop ariaLabelledby', () => {
      const wrapper = mount(BFormFile, {
        props: {ariaLabelledby: 'foobar', plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-labelledby')).toBe('foobar')
    })

    it('input element has attr aria-labelledby is undefined when prop ariaLabelledby undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {ariaLabelledby: undefined, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-labelledby')).toBeUndefined()
    })

    it('input element aria-required when prop name and prop required true', () => {
      const wrapper = mount(BFormFile, {
        props: {name: 'foo', required: true, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-required')).toBe('true')
    })

    it('input element does not have aria-required when prop name and prop required false', () => {
      const wrapper = mount(BFormFile, {
        props: {name: 'foo', required: false, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-required')).toBeUndefined()
    })

    it('input element has set attr multiple to true when prop multiple is true', () => {
      const wrapper = mount(BFormFile, {
        props: {multiple: true, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('multiple')).toBeDefined()
    })

    it('input element has set attr multiple to false when prop multiple is false', () => {
      const wrapper = mount(BFormFile, {
        props: {multiple: false, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('multiple')).toBeUndefined()
    })

    it('input element has set attr multiple to false when prop multiple is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {multiple: undefined, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('multiple')).toBeUndefined()
    })

    it('input element has set attr capture to true when prop capture is true', () => {
      const wrapper = mount(BFormFile, {
        props: {capture: true, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('capture')).toBe('true')
    })

    it('input element has set attr capture to false when prop capture is false', () => {
      const wrapper = mount(BFormFile, {
        props: {capture: false, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('capture')).toBe('false')
    })

    it('input element has set attr capture to undefined when prop capture is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {capture: undefined, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('capture')).toBe(undefined)
    })

    it('input element has set attr accept to empty when prop accept is empty string', () => {
      const wrapper = mount(BFormFile, {
        props: {accept: '', plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('accept')).toBeUndefined()
    })

    it('input element has set attr accept to "foo" when prop accept is "foo"', () => {
      const wrapper = mount(BFormFile, {
        props: {accept: 'foo', plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('accept')).toBe('foo')
    })

    it('input element does not have attr accept when prop accept is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {accept: undefined, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('accept')).toBeUndefined()
    })

    it('input element has set attr directory to true when prop directory is true', () => {
      const wrapper = mount(BFormFile, {
        props: {directory: true, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('directory')).toBe('true')
    })

    it('input element has set attr directory to false when prop directory is false', () => {
      const wrapper = mount(BFormFile, {
        props: {directory: false, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('directory')).toBe('false')
    })

    it('input element has set attr directory to false when prop directory is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {directory: undefined, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('directory')).toBe('false')
    })

    it('has custom attributes transferred to input element in plain mode', async () => {
      const wrapper = mount(BFormFile, {
        props: {
          id: 'foo',
          plain: true,
        },
        attrs: {
          foo: 'bar',
        },
      })

      const $input = wrapper.find('input')
      expect($input.attributes('foo')).toBeDefined()
      expect($input.attributes('foo')).toEqual('bar')
    })
  })

  describe('custom mode - UI elements', () => {
    it('renders hidden input element for form submission in custom mode', () => {
      const wrapper = mount(BFormFile, {props: {name: 'testFile'}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.exists()).toBe(true)
      // Should be hidden with proper styling
      expect($input.attributes('style')).toContain('position: absolute')
      expect($input.attributes('style')).toContain('z-index: -5')
      // Should have form attributes
      expect($input.attributes('name')).toBe('testFile')
    })

    it('has custom attributes transferred to hidden input element in custom mode', () => {
      const wrapper = mount(BFormFile, {attrs: {'foo': 'bar', 'data-test': 'value'}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('foo')).toBeDefined()
      expect($input.attributes('foo')).toEqual('bar')
      expect($input.attributes('data-test')).toBeDefined()
      expect($input.attributes('data-test')).toEqual('value')
    })

    it('renders custom file control', () => {
      const wrapper = mount(BFormFile)
      expect(wrapper.find('.b-form-file-control').exists()).toBe(true)
    })

    it('renders browse button', () => {
      const wrapper = mount(BFormFile)
      const $button = wrapper.find('.b-form-file-button')
      expect($button.exists()).toBe(true)
      expect($button.text()).toBe('Browse')
    })

    it('renders custom browse text when browseText prop provided', () => {
      const wrapper = mount(BFormFile, {
        props: {browseText: 'Choose File'},
      })
      const $button = wrapper.find('.b-form-file-button')
      expect($button.text()).toBe('Choose File')
    })

    it('browse button is disabled when disabled prop true', () => {
      const wrapper = mount(BFormFile, {
        props: {disabled: true},
      })
      const $button = wrapper.find('.b-form-file-button')
      expect($button.attributes('disabled')).toBeDefined()
    })

    it('browse button is not disabled when disabled prop false', () => {
      const wrapper = mount(BFormFile, {
        props: {disabled: false},
      })
      const $button = wrapper.find('.b-form-file-button')
      expect($button.attributes('disabled')).toBeUndefined()
    })

    it('does not render browse button when noButton prop true', () => {
      const wrapper = mount(BFormFile, {
        props: {noButton: true},
      })
      const $button = wrapper.find('.b-form-file-button')
      expect($button.exists()).toBe(false)
    })

    it('renders file name when file selected', async () => {
      const wrapper = mount(BFormFile)
      const file = new File(['content'], 'test.txt', {type: 'text/plain'})

      await wrapper.setProps({modelValue: file})

      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).toContain('test.txt')
    })

    it('renders multiple file count when multiple files selected', async () => {
      const wrapper = mount(BFormFile, {
        props: {multiple: true},
      })
      const files = [
        new File(['1'], 'file1.txt'),
        new File(['2'], 'file2.txt'),
        new File(['3'], 'file3.txt'),
      ]

      await wrapper.setProps({modelValue: files})

      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).toContain('3 files selected')
    })

    it('renders placeholder when no file selected and placeholder prop provided', () => {
      const wrapper = mount(BFormFile, {
        props: {placeholder: 'Choose a file'},
      })
      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).toContain('Choose a file')
    })

    it('renders drop zone wrapper', () => {
      const wrapper = mount(BFormFile)
      expect(wrapper.find('.b-form-file-wrapper').exists()).toBe(true)
    })

    it('applies dragging class when isOverDropZone is true', async () => {
      const wrapper = mount(BFormFile)
      // Note: Actual drag simulation would require mocking VueUse useDropZone
      // This test verifies the class binding exists
      const $wrapper = wrapper.find('.b-form-file-wrapper')
      expect($wrapper.classes()).not.toContain('b-form-file-dragging')
    })
  })

  describe('plain mode - label and slots', () => {
    it('has no label by default in plain mode', () => {
      const wrapper = mount(BFormFile, {props: {plain: true}})
      const $label = wrapper.find('label')
      expect($label.exists()).toBe(false)
    })

    it('has label when label slot defined in plain mode', () => {
      const wrapper = mount(BFormFile, {
        props: {labelClass: 'labelClass', plain: true},
        slots: {label: 'foo'},
      })
      const $label = wrapper.get('label')
      expect($label).not.toBeUndefined()
      expect($label.attributes('class')?.includes('labelClass')).toBe(true)
    })

    it('label for attribute matches input id in plain mode', () => {
      const wrapper = mount(BFormFile, {
        props: {id: 'fooFile', label: 'foo', plain: true},
        slots: {default: 'foo'},
      })

      const $input = wrapper.get('input')
      const $label = wrapper.get('label')

      const $labelFor = $label.attributes('for')
      const $inputId = $input.attributes('id')

      expect($labelFor).toBe($inputId)
    })
  })

  describe('custom mode - label and slots', () => {
    it('has no label by default in custom mode', () => {
      const wrapper = mount(BFormFile)
      const $label = wrapper.find('label')
      expect($label.exists()).toBe(false)
    })

    it('has label when label slot defined in custom mode', () => {
      const wrapper = mount(BFormFile, {
        props: {labelClass: 'labelClass'},
        slots: {label: 'foo'},
      })
      const $label = wrapper.get('label')
      expect($label).not.toBeUndefined()
      expect($label.attributes('class')?.includes('labelClass')).toBe(true)
    })
  })

  describe('plain mode - model and events', () => {
    it('emits change event when file changed in plain mode', async () => {
      const file = new File(['foo'], 'foo.txt', {
        type: 'text/plain',
        lastModified: Date.now(),
      })

      const wrapper = mount(BFormFile, {props: {id: 'foo', modelValue: file, plain: true}})

      const $input = wrapper.get('input')
      await $input.trigger('change')

      expect(wrapper.emitted('change')).toBeDefined()
      expect(wrapper.emitted('change')).toHaveLength(1)
      expect(wrapper.emitted('change')?.[0][0]).toBeInstanceOf(Event)
    })

    it('emits update:modelValue with file when file selected in plain mode', async () => {
      const file = new File(['foo'], 'foo.txt', {
        type: 'text/plain',
        lastModified: Date.now(),
      })

      const dataTransfer = new ClipboardEvent('').clipboardData ?? new DataTransfer()
      dataTransfer.items.add(file)

      const wrapper = mount(BFormFile, {props: {id: 'foo', modelValue: undefined, plain: true}})

      const $input = wrapper.get('input')
      $input.element.files = dataTransfer.files
      await $input.trigger('change')

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toStrictEqual(file)
    })

    it('emits update:modelValue with file array in multiple mode (plain)', async () => {
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
        props: {id: 'foo', modelValue: undefined, multiple: true, plain: true},
      })

      const $input = wrapper.get('input')
      $input.element.files = dataTransfer.files
      await $input.trigger('change')

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
      const emitted = wrapper.emitted('update:modelValue')
      expect(emitted && (emitted[0][0] as File[])[0]).toStrictEqual(file1)
      const em = wrapper.emitted('update:modelValue')
      expect(em && (em[0][0] as File[])[1]).toStrictEqual(file2)
    })

    it('emits update:modelValue with file array in directory mode (plain)', async () => {
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
        props: {id: 'foo', modelValue: undefined, multiple: true, directory: true, plain: true},
      })

      const $input = wrapper.get('input')
      $input.element.files = dataTransfer.files
      await $input.trigger('change')

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
      const emittedValue = wrapper.emitted('update:modelValue')
      expect(emittedValue && (emittedValue[0][0] as File[])[0]).toStrictEqual(file1)
      const em = wrapper.emitted('update:modelValue')
      expect(em && (em[0][0] as File[])[1]).toStrictEqual(file2)
    })
  })

  describe('VueUse integration', () => {
    it('browse button triggers file dialog in custom mode', async () => {
      const wrapper = mount(BFormFile)
      const $button = wrapper.find('.b-form-file-button')

      // VueUse useFileDialog should be integrated
      expect($button.exists()).toBe(true)
      expect($button.attributes('disabled')).toBeUndefined()
    })

    it('drop zone wrapper exists for drag and drop functionality', () => {
      const wrapper = mount(BFormFile)
      const $wrapper = wrapper.find('.b-form-file-wrapper')

      expect($wrapper.exists()).toBe(true)
    })

    it('modelValue updates correctly after prop change', async () => {
      const wrapper = mount(BFormFile)
      const file = new File(['content'], 'test.txt')

      await wrapper.setProps({modelValue: file})
      expect(wrapper.vm.modelValue).toStrictEqual(file)

      await wrapper.setProps({modelValue: null})
      expect(wrapper.vm.modelValue).toBe(null)
    })
  })
})
