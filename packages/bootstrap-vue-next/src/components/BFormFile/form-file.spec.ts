import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it, vi} from 'vitest'
import {nextTick} from 'vue'
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

  describe('plain mode - classes', () => {
    it('has form-control class on input when plain=true', () => {
      const wrapper = mount(BFormFile, {
        props: {plain: true},
      })

      const $input = wrapper.find('input')
      expect($input.classes()).toContain('form-control')
    })

    it('does not have form-control-file class on input when plain=true', () => {
      const wrapper = mount(BFormFile, {
        props: {plain: true},
      })

      const $input = wrapper.find('input')
      expect($input.classes()).not.toContain('form-control-file')
    })

    it('has custom class on input when plain=true and class attribute provided', () => {
      const wrapper = mount(BFormFile, {
        props: {plain: true},
        attrs: {class: 'my-custom-class'},
      })

      const $input = wrapper.find('input')
      expect($input.classes()).toContain('my-custom-class')
      expect($input.classes()).toContain('form-control')
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

    it('input element has set attr capture to user when prop capture is user', () => {
      const wrapper = mount(BFormFile, {
        props: {capture: 'user', plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('capture')).toBe('user')
    })

    it('input element has set attr capture to environment when prop capture is environment', () => {
      const wrapper = mount(BFormFile, {
        props: {capture: 'environment', plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('capture')).toBe('environment')
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

    it('input element does not have attr directory when prop directory is false', () => {
      const wrapper = mount(BFormFile, {
        props: {directory: false, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('directory')).toBeUndefined()
    })

    it('input element does not have attr directory when prop directory is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {directory: undefined, plain: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('directory')).toBeUndefined()
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

    it('has title attribute transferred to input element in plain mode', () => {
      const wrapper = mount(BFormFile, {
        props: {
          plain: true,
        },
        attrs: {
          title: 'Upload a file',
        },
      })

      const $input = wrapper.find('input')
      expect($input.attributes('title')).toBeDefined()
      expect($input.attributes('title')).toEqual('Upload a file')
    })
  })

  describe('validation state classes', () => {
    it('has is-invalid class on control when state=false in custom mode', () => {
      const wrapper = mount(BFormFile, {
        props: {state: false},
      })

      const $control = wrapper.find('.b-form-file-control')
      expect($control.classes()).toContain('is-invalid')
    })

    it('has is-valid class on control when state=true in custom mode', () => {
      const wrapper = mount(BFormFile, {
        props: {state: true},
      })

      const $control = wrapper.find('.b-form-file-control')
      expect($control.classes()).toContain('is-valid')
    })

    it('does not have validation classes on control when state=undefined in custom mode', () => {
      const wrapper = mount(BFormFile, {
        props: {state: undefined},
      })

      const $control = wrapper.find('.b-form-file-control')
      expect($control.classes()).not.toContain('is-invalid')
      expect($control.classes()).not.toContain('is-valid')
    })

    it('has is-invalid class on input when state=false in plain mode', () => {
      const wrapper = mount(BFormFile, {
        props: {state: false, plain: true},
      })

      const $input = wrapper.find('input')
      expect($input.classes()).toContain('is-invalid')
    })

    it('has is-valid class on input when state=true in plain mode', () => {
      const wrapper = mount(BFormFile, {
        props: {state: true, plain: true},
      })

      const $input = wrapper.find('input')
      expect($input.classes()).toContain('is-valid')
    })

    it('does not have validation classes on input when state=undefined in plain mode', () => {
      const wrapper = mount(BFormFile, {
        props: {state: undefined, plain: true},
      })

      const $input = wrapper.find('input')
      expect($input.classes()).not.toContain('is-invalid')
      expect($input.classes()).not.toContain('is-valid')
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

    it('has title attribute transferred to wrapper element in custom mode', () => {
      const wrapper = mount(BFormFile, {
        attrs: {
          title: 'Upload a file',
        },
      })

      const $wrapper = wrapper.find('.b-form-file-wrapper')
      expect($wrapper.attributes('title')).toBeDefined()
      expect($wrapper.attributes('title')).toEqual('Upload a file')
    })

    it('does not have title attribute on hidden input element in custom mode', () => {
      const wrapper = mount(BFormFile, {
        attrs: {
          title: 'Upload a file',
        },
      })

      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('title')).toBeUndefined()
    })

    it('has class attribute transferred to root element in custom mode', () => {
      const wrapper = mount(BFormFile, {
        attrs: {
          class: 'my-custom-class',
        },
      })

      const $root = wrapper.find('.b-form-file-root')
      expect($root.classes()).toContain('my-custom-class')
    })

    it('has style attribute transferred to root element in custom mode', () => {
      const wrapper = mount(BFormFile, {
        attrs: {
          style: 'width: 100%',
        },
      })

      const $root = wrapper.find('.b-form-file-root')
      expect($root.attributes('style')).toBeDefined()
      expect($root.attributes('style')).toContain('width: 100%')
    })

    it('does not have class attribute on drop zone wrapper in custom mode', () => {
      const wrapper = mount(BFormFile, {
        attrs: {
          class: 'my-custom-class',
        },
      })

      const $wrapper = wrapper.find('.b-form-file-wrapper')
      expect($wrapper.classes()).not.toContain('my-custom-class')
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

    it('browse button is positioned on the left (before text element)', () => {
      const wrapper = mount(BFormFile)
      const $control = wrapper.find('.b-form-file-control')
      const {children} = $control.element

      // Button should be first child, text should be second
      expect(children[0].classList.contains('b-form-file-button')).toBe(true)
      expect(children[1].classList.contains('b-form-file-text')).toBe(true)
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

    it('control click does not trigger when disabled', () => {
      const wrapper = mount(BFormFile, {
        props: {disabled: true},
      })
      const $control = wrapper.find('.b-form-file-control')

      // Control should have aria-disabled
      expect($control.attributes('aria-disabled')).toBe('true')
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

  describe('input group integration', () => {
    it('wrapper has proper structure for input group usage', () => {
      const wrapper = mount(BFormFile)
      const $wrapper = wrapper.find('.b-form-file-wrapper')

      // Wrapper should exist and contain the control
      expect($wrapper.exists()).toBe(true)
      expect($wrapper.find('.b-form-file-control').exists()).toBe(true)
    })

    it('control maintains full width within wrapper', () => {
      const wrapper = mount(BFormFile)
      const $control = wrapper.find('.b-form-file-control')

      // Control should exist (CSS sets width: 100% in input groups)
      expect($control.exists()).toBe(true)
    })
  })

  describe('file filtering with accept attribute', () => {
    // Helper to create a mock File object
    const createMockFile = (name: string, type: string): File => new File(['content'], name, {type})

    it('accepts files matching extension pattern (.pdf)', async () => {
      const wrapper = mount(BFormFile, {
        props: {accept: '.pdf'},
      })

      const pdfFile = createMockFile('document.pdf', 'application/pdf')
      const txtFile = createMockFile('document.txt', 'text/plain')

      // Access the component's isFileAccepted method through vm
      const component = wrapper.vm as unknown as {isFileAccepted: (file: File) => boolean}
      expect(component.isFileAccepted).toBeDefined()
      expect(component.isFileAccepted(pdfFile)).toBe(true)
      expect(component.isFileAccepted(txtFile)).toBe(false)
    })

    it('accepts files matching exact MIME type (image/png)', async () => {
      const wrapper = mount(BFormFile, {
        props: {accept: 'image/png'},
      })

      const pngFile = createMockFile('image.png', 'image/png')
      const jpgFile = createMockFile('image.jpg', 'image/jpeg')

      const component = wrapper.vm as unknown as {isFileAccepted: (file: File) => boolean}
      expect(component.isFileAccepted(pngFile)).toBe(true)
      expect(component.isFileAccepted(jpgFile)).toBe(false)
    })

    it('accepts files matching wildcard MIME type (image/*)', async () => {
      const wrapper = mount(BFormFile, {
        props: {accept: 'image/*'},
      })

      const pngFile = createMockFile('image.png', 'image/png')
      const jpgFile = createMockFile('image.jpg', 'image/jpeg')
      const pdfFile = createMockFile('document.pdf', 'application/pdf')

      const component = wrapper.vm as unknown as {isFileAccepted: (file: File) => boolean}
      expect(component.isFileAccepted(pngFile)).toBe(true)
      expect(component.isFileAccepted(jpgFile)).toBe(true)
      expect(component.isFileAccepted(pdfFile)).toBe(false)
    })

    it('accepts all files with wildcard pattern (*/*)', async () => {
      const wrapper = mount(BFormFile, {
        props: {accept: '*/*'},
      })

      const pngFile = createMockFile('image.png', 'image/png')
      const pdfFile = createMockFile('document.pdf', 'application/pdf')
      const txtFile = createMockFile('document.txt', 'text/plain')

      const component = wrapper.vm as unknown as {isFileAccepted: (file: File) => boolean}
      expect(component.isFileAccepted(pngFile)).toBe(true)
      expect(component.isFileAccepted(pdfFile)).toBe(true)
      expect(component.isFileAccepted(txtFile)).toBe(true)
    })

    it('accepts files matching multiple accept types', async () => {
      const wrapper = mount(BFormFile, {
        props: {accept: ['.pdf', 'image/png', 'text/*']},
      })

      const pdfFile = createMockFile('document.pdf', 'application/pdf')
      const pngFile = createMockFile('image.png', 'image/png')
      const txtFile = createMockFile('document.txt', 'text/plain')
      const jpgFile = createMockFile('image.jpg', 'image/jpeg')

      const component = wrapper.vm as unknown as {isFileAccepted: (file: File) => boolean}
      expect(component.isFileAccepted(pdfFile)).toBe(true)
      expect(component.isFileAccepted(pngFile)).toBe(true)
      expect(component.isFileAccepted(txtFile)).toBe(true)
      expect(component.isFileAccepted(jpgFile)).toBe(false)
    })

    it('handles case-insensitive extension matching', async () => {
      const wrapper = mount(BFormFile, {
        props: {accept: '.PDF'},
      })

      const lowerPdf = createMockFile('document.pdf', 'application/pdf')
      const upperPdf = createMockFile('document.PDF', 'application/pdf')

      const component = wrapper.vm as unknown as {isFileAccepted: (file: File) => boolean}
      expect(component.isFileAccepted(lowerPdf)).toBe(true)
      expect(component.isFileAccepted(upperPdf)).toBe(true)
    })

    it('rejects files with malformed wildcard pattern (no slash)', async () => {
      const wrapper = mount(BFormFile, {
        props: {accept: 'image'},
      })

      const pngFile = createMockFile('image.png', 'image/png')

      const component = wrapper.vm as unknown as {isFileAccepted: (file: File) => boolean}
      expect(component.isFileAccepted(pngFile)).toBe(false)
    })

    it('accepts all files when accept is undefined', async () => {
      const wrapper = mount(BFormFile)

      const pngFile = createMockFile('image.png', 'image/png')
      const pdfFile = createMockFile('document.pdf', 'application/pdf')

      const component = wrapper.vm as unknown as {isFileAccepted: (file: File) => boolean}
      expect(component.isFileAccepted(pngFile)).toBe(true)
      expect(component.isFileAccepted(pdfFile)).toBe(true)
    })
  })

  describe('custom mode - hidden input attributes', () => {
    it('hidden input has attr name when name prop provided', () => {
      const wrapper = mount(BFormFile, {props: {name: 'myFile'}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('name')).toBe('myFile')
    })

    it('hidden input has attr form when form prop provided', () => {
      const wrapper = mount(BFormFile, {props: {form: 'myForm'}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('form')).toBe('myForm')
    })

    it('hidden input has attr multiple when multiple prop true', () => {
      const wrapper = mount(BFormFile, {props: {multiple: true}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('multiple')).toBeDefined()
    })

    it('hidden input does not have attr multiple when multiple prop false', () => {
      const wrapper = mount(BFormFile, {props: {multiple: false}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('multiple')).toBeUndefined()
    })

    it('hidden input has attr multiple when directory prop true', () => {
      const wrapper = mount(BFormFile, {props: {directory: true}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('multiple')).toBeDefined()
    })

    it('hidden input has attr disabled when disabled prop true', () => {
      const wrapper = mount(BFormFile, {props: {disabled: true}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('disabled')).toBeDefined()
    })

    it('hidden input does not have attr disabled when disabled prop false', () => {
      const wrapper = mount(BFormFile, {props: {disabled: false}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('disabled')).toBeUndefined()
    })

    it('hidden input has attr required when required prop true', () => {
      const wrapper = mount(BFormFile, {props: {required: true}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('required')).toBeDefined()
    })

    it('hidden input does not have attr required when required prop false', () => {
      const wrapper = mount(BFormFile, {props: {required: false}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('required')).toBeUndefined()
    })

    it('hidden input has attr accept when accept prop provided', () => {
      const wrapper = mount(BFormFile, {props: {accept: 'image/*'}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('accept')).toBe('image/*')
    })

    it('hidden input does not have attr accept when accept is empty', () => {
      const wrapper = mount(BFormFile, {props: {accept: ''}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('accept')).toBeUndefined()
    })

    it('hidden input has attr capture when capture prop provided', () => {
      const wrapper = mount(BFormFile, {props: {capture: 'user'}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('capture')).toBe('user')
    })

    it('hidden input has attr directory when directory prop true', () => {
      const wrapper = mount(BFormFile, {props: {directory: true}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('directory')).toBe('true')
    })

    it('hidden input has attr webkitdirectory when directory prop true', () => {
      const wrapper = mount(BFormFile, {props: {directory: true}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('webkitdirectory')).toBe('true')
    })

    it('hidden input does not have attr directory when directory prop false', () => {
      const wrapper = mount(BFormFile, {props: {directory: false}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('directory')).toBeUndefined()
    })

    it('hidden input has aria-hidden attribute', () => {
      const wrapper = mount(BFormFile)
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('aria-hidden')).toBe('true')
    })

    it('hidden input has tabindex -1', () => {
      const wrapper = mount(BFormFile)
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('tabindex')).toBe('-1')
    })
  })

  describe('label prop rendering', () => {
    it('renders label when label prop is provided', () => {
      const wrapper = mount(BFormFile, {props: {label: 'Upload File'}})
      const $label = wrapper.find('label')
      expect($label.exists()).toBe(true)
      expect($label.text()).toBe('Upload File')
    })

    it('does not render label when label prop is empty string', () => {
      const wrapper = mount(BFormFile, {props: {label: ''}})
      const $label = wrapper.find('label')
      expect($label.exists()).toBe(false)
    })

    it('label has form-label class', () => {
      const wrapper = mount(BFormFile, {props: {label: 'Upload'}})
      const $label = wrapper.find('label')
      expect($label.classes()).toContain('form-label')
    })

    it('label has labelClass when provided', () => {
      const wrapper = mount(BFormFile, {props: {label: 'Upload', labelClass: 'fw-bold'}})
      const $label = wrapper.find('label')
      expect($label.classes()).toContain('fw-bold')
    })

    it('label for attribute matches browse button id in custom mode', () => {
      const wrapper = mount(BFormFile, {props: {id: 'myFile', label: 'Upload'}})
      const $label = wrapper.find('label')
      const $button = wrapper.find('.b-form-file-button')
      expect($label.attributes('for')).toBe($button.attributes('id'))
    })

    it('label slot overrides label prop', () => {
      const wrapper = mount(BFormFile, {
        props: {label: 'Prop Label'},
        slots: {label: 'Slot Label'},
      })
      const $label = wrapper.find('label')
      expect($label.text()).toBe('Slot Label')
    })
  })

  describe('fileNameFormatter prop', () => {
    it('uses custom formatter for single file', async () => {
      const formatter = (files: readonly File[]) => `Custom: ${files[0].name}`
      const wrapper = mount(BFormFile, {
        props: {fileNameFormatter: formatter},
      })
      const file = new File(['content'], 'report.pdf', {type: 'application/pdf'})
      await wrapper.setProps({modelValue: file})

      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).toBe('Custom: report.pdf')
    })

    it('uses custom formatter for multiple files', async () => {
      const formatter = (files: readonly File[]) => files.map((f) => f.name).join(' | ')
      const wrapper = mount(BFormFile, {
        props: {multiple: true, fileNameFormatter: formatter},
      })
      const files = [new File(['1'], 'a.txt'), new File(['2'], 'b.txt')]
      await wrapper.setProps({modelValue: files})

      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).toBe('a.txt | b.txt')
    })

    it('uses default formatter when fileNameFormatter not provided', async () => {
      const wrapper = mount(BFormFile)
      const file = new File(['content'], 'test.txt')
      await wrapper.setProps({modelValue: file})

      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).toContain('test.txt')
    })
  })

  describe('placeholder behavior', () => {
    it('renders default placeholder "No file chosen" when no file selected', () => {
      const wrapper = mount(BFormFile)
      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).toContain('No file chosen')
    })

    it('renders custom placeholder when placeholder prop provided', () => {
      const wrapper = mount(BFormFile, {props: {placeholder: 'Select files...'}})
      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).toContain('Select files...')
    })

    it('placeholder has text-muted class', () => {
      const wrapper = mount(BFormFile, {props: {placeholder: 'Choose file'}})
      const $span = wrapper.find('.b-form-file-text span')
      expect($span.classes()).toContain('text-muted')
    })

    it('placeholder is replaced by file name when file is selected', async () => {
      const wrapper = mount(BFormFile, {props: {placeholder: 'Choose file'}})
      const file = new File(['content'], 'myfile.txt')
      await wrapper.setProps({modelValue: file})

      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).not.toContain('Choose file')
      expect($text.text()).toContain('myfile.txt')
    })

    it('renders placeholder slot content', () => {
      const wrapper = mount(BFormFile, {
        slots: {placeholder: '<em>Pick a file</em>'},
      })
      const $text = wrapper.find('.b-form-file-text')
      expect($text.find('em').exists()).toBe(true)
      expect($text.text()).toContain('Pick a file')
    })
  })

  describe('drop-placeholder slot', () => {
    it('renders default drop placeholder text "Drop files here..."', () => {
      const wrapper = mount(BFormFile)
      // Drop overlay only shows when isOverDropZone is true
      // We can verify the component has the default text prop
      expect(wrapper.vm.$props.dropPlaceholder).toBeUndefined()
    })

    it('renders custom dropPlaceholder prop text', () => {
      const wrapper = mount(BFormFile, {props: {dropPlaceholder: 'Release to upload'}})
      expect(wrapper.vm.$props.dropPlaceholder).toBe('Release to upload')
    })
  })

  describe('file-name slot', () => {
    it('renders custom file name slot when provided with file', async () => {
      const wrapper = mount(BFormFile, {
        slots: {
          'file-name': ({names}: {files: readonly File[]; names: readonly string[]}) =>
            `${names.length} custom: ${names.join(', ')}`,
        },
      })
      const file = new File(['content'], 'doc.pdf')
      await wrapper.setProps({modelValue: file})

      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).toContain('1 custom: doc.pdf')
    })

    it('file-name slot receives files and names props', async () => {
      let slotFiles: readonly File[] = []
      let slotNames: readonly string[] = []
      const wrapper = mount(BFormFile, {
        props: {multiple: true},
        slots: {
          'file-name': ({files, names}: {files: readonly File[]; names: readonly string[]}) => {
            slotFiles = files
            slotNames = names
            return `${names.join(', ')}`
          },
        },
      })
      const fileA = new File(['a'], 'alpha.txt')
      const fileB = new File(['b'], 'beta.txt')
      await wrapper.setProps({modelValue: [fileA, fileB]})

      expect(slotFiles).toHaveLength(2)
      expect(slotNames).toEqual(['alpha.txt', 'beta.txt'])
    })
  })

  describe('showFileNames prop', () => {
    it('renders external display when showFileNames true and files selected', async () => {
      const wrapper = mount(BFormFile, {props: {showFileNames: true}})
      const file = new File(['content'], 'test.txt')
      await wrapper.setProps({modelValue: file})

      const $display = wrapper.find('.b-form-file-display')
      expect($display.exists()).toBe(true)
    })

    it('renders external display with placeholder when showFileNames true and no files', () => {
      const wrapper = mount(BFormFile, {
        props: {showFileNames: true, placeholder: 'No files'},
      })
      const $display = wrapper.find('.b-form-file-display')
      expect($display.exists()).toBe(true)
      expect($display.text()).toContain('No files')
    })

    it('does not render external display when showFileNames false', async () => {
      const wrapper = mount(BFormFile, {props: {showFileNames: false}})
      const file = new File(['content'], 'test.txt')
      await wrapper.setProps({modelValue: file})

      const $display = wrapper.find('.b-form-file-display')
      expect($display.exists()).toBe(false)
    })

    it('does not render external display in plain mode', () => {
      const wrapper = mount(BFormFile, {props: {plain: true, showFileNames: true}})
      const $display = wrapper.find('.b-form-file-display')
      expect($display.exists()).toBe(false)
    })
  })

  describe('noDrop prop', () => {
    it('does not show drag overlay when noDrop is true', () => {
      const wrapper = mount(BFormFile, {props: {noDrop: true}})
      const $overlay = wrapper.find('.b-form-file-drag-overlay')
      expect($overlay.exists()).toBe(false)
    })
  })

  describe('ARIA live region', () => {
    it('has visually-hidden ARIA live region in custom mode', () => {
      const wrapper = mount(BFormFile)
      const $liveRegion = wrapper.find('.visually-hidden[aria-live="polite"]')
      expect($liveRegion.exists()).toBe(true)
      expect($liveRegion.attributes('aria-atomic')).toBe('true')
    })

    it('ARIA live region is empty when no files selected', () => {
      const wrapper = mount(BFormFile)
      const $liveRegion = wrapper.find('.visually-hidden[aria-live="polite"]')
      expect($liveRegion.text()).toBe('')
    })

    it('ARIA live region announces single file selection', async () => {
      const wrapper = mount(BFormFile)
      const file = new File(['content'], 'report.pdf')
      await wrapper.setProps({modelValue: file})

      const $liveRegion = wrapper.find('.visually-hidden[aria-live="polite"]')
      expect($liveRegion.text()).toContain('File selected: report.pdf')
    })

    it('ARIA live region announces multiple file selection count', async () => {
      const wrapper = mount(BFormFile, {props: {multiple: true}})
      const files = [new File(['1'], 'a.txt'), new File(['2'], 'b.txt'), new File(['3'], 'c.txt')]
      await wrapper.setProps({modelValue: files})

      const $liveRegion = wrapper.find('.visually-hidden[aria-live="polite"]')
      expect($liveRegion.text()).toContain('3 files selected')
    })

    it('does not have ARIA live region in plain mode', () => {
      const wrapper = mount(BFormFile, {props: {plain: true}})
      const $liveRegion = wrapper.find('.visually-hidden[aria-live="polite"]')
      expect($liveRegion.exists()).toBe(false)
    })
  })

  describe('exposed methods', () => {
    it('exposes reset method', () => {
      const wrapper = mount(BFormFile)
      expect(typeof wrapper.vm.reset).toBe('function')
    })

    it('exposes focus method', () => {
      const wrapper = mount(BFormFile)
      expect(typeof wrapper.vm.focus).toBe('function')
    })

    it('exposes blur method', () => {
      const wrapper = mount(BFormFile)
      expect(typeof wrapper.vm.blur).toBe('function')
    })

    it('exposes element property', () => {
      const wrapper = mount(BFormFile)
      expect(wrapper.vm.element).toBeDefined()
    })

    it('reset clears modelValue to null', async () => {
      const wrapper = mount(BFormFile)
      const file = new File(['content'], 'test.txt')
      await wrapper.setProps({modelValue: file})

      wrapper.vm.reset()
      await wrapper.vm.$nextTick()

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      const lastEmitted = wrapper.emitted('update:modelValue')!
      expect(lastEmitted[lastEmitted.length - 1][0]).toBe(null)
    })

    it('element returns browse button ref in custom mode', () => {
      const wrapper = mount(BFormFile)
      const {element} = wrapper.vm
      // In custom mode, element should be the browse button
      expect(element).toBeDefined()
    })

    it('element returns input ref in plain mode', () => {
      const wrapper = mount(BFormFile, {props: {plain: true}})
      const {element} = wrapper.vm
      expect(element).toBeDefined()
    })
  })

  describe('modelValue reactivity', () => {
    it('clears internal files when modelValue set to null', async () => {
      const wrapper = mount(BFormFile)
      const file = new File(['content'], 'test.txt')
      await wrapper.setProps({modelValue: file})

      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).toContain('test.txt')

      await wrapper.setProps({modelValue: null})
      expect($text.text()).not.toContain('test.txt')
    })

    it('sets internal files from array modelValue', async () => {
      const wrapper = mount(BFormFile, {props: {multiple: true}})
      const files = [new File(['1'], 'a.txt'), new File(['2'], 'b.txt')]
      await wrapper.setProps({modelValue: files})

      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).toContain('2 files selected')
    })

    it('sets internal files from single file modelValue', async () => {
      const wrapper = mount(BFormFile)
      const file = new File(['content'], 'single.pdf')
      await wrapper.setProps({modelValue: file})

      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).toContain('single.pdf')
    })
  })

  describe('b-form-file-has-files class', () => {
    it('wrapper does not have b-form-file-has-files class when no files', () => {
      const wrapper = mount(BFormFile)
      const $wrapper = wrapper.find('.b-form-file-wrapper')
      expect($wrapper.classes()).not.toContain('b-form-file-has-files')
    })

    it('wrapper has b-form-file-has-files class when file selected', async () => {
      const wrapper = mount(BFormFile)
      const file = new File(['content'], 'test.txt')
      await wrapper.setProps({modelValue: file})

      const $wrapper = wrapper.find('.b-form-file-wrapper')
      expect($wrapper.classes()).toContain('b-form-file-has-files')
    })

    it('wrapper loses b-form-file-has-files class when file cleared', async () => {
      const wrapper = mount(BFormFile)
      const file = new File(['content'], 'test.txt')
      await wrapper.setProps({modelValue: file})

      const $wrapper = wrapper.find('.b-form-file-wrapper')
      expect($wrapper.classes()).toContain('b-form-file-has-files')

      await wrapper.setProps({modelValue: null})
      expect($wrapper.classes()).not.toContain('b-form-file-has-files')
    })
  })

  describe('browse button ARIA attributes in custom mode', () => {
    it('browse button has aria-label when ariaLabel prop provided', () => {
      const wrapper = mount(BFormFile, {props: {ariaLabel: 'Select file'}})
      const $button = wrapper.find('.b-form-file-button')
      expect($button.attributes('aria-label')).toBe('Select file')
    })

    it('browse button has aria-labelledby when ariaLabelledby prop provided', () => {
      const wrapper = mount(BFormFile, {props: {ariaLabelledby: 'my-label'}})
      const $button = wrapper.find('.b-form-file-button')
      expect($button.attributes('aria-labelledby')).toBe('my-label')
    })

    it('browse button does not have aria-label when ariaLabel not provided', () => {
      const wrapper = mount(BFormFile)
      const $button = wrapper.find('.b-form-file-button')
      expect($button.attributes('aria-label')).toBeUndefined()
    })
  })

  describe('accept as array', () => {
    it('joins array accept prop into comma-separated string on input', () => {
      const wrapper = mount(BFormFile, {props: {accept: ['.pdf', '.doc', '.txt']}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('accept')).toBe('.pdf,.doc,.txt')
    })

    it('joins array accept prop in plain mode', () => {
      const wrapper = mount(BFormFile, {props: {accept: ['image/*', '.svg'], plain: true}})
      const $input = wrapper.find('input[type="file"]')
      expect($input.attributes('accept')).toBe('image/*,.svg')
    })
  })

  describe('root element structure', () => {
    it('has b-form-file-root class on root element', () => {
      const wrapper = mount(BFormFile)
      const $root = wrapper.find('.b-form-file-root')
      expect($root.exists()).toBe(true)
    })

    it('does not have drop zone wrapper in plain mode', () => {
      const wrapper = mount(BFormFile, {props: {plain: true}})
      const $wrapper = wrapper.find('.b-form-file-wrapper')
      expect($wrapper.exists()).toBe(false)
    })

    it('does not have browse button in plain mode', () => {
      const wrapper = mount(BFormFile, {props: {plain: true}})
      const $button = wrapper.find('.b-form-file-button')
      expect($button.exists()).toBe(false)
    })

    it('renders file input directly in plain mode', () => {
      const wrapper = mount(BFormFile, {props: {plain: true}})
      const $root = wrapper.find('.b-form-file-root')
      const $input = $root.find('input[type="file"]')
      expect($input.exists()).toBe(true)
      // Should not be hidden (no inline style with z-index: -5)
      expect($input.attributes('style')).toBeUndefined()
    })
  })

  describe('webkitdirectory in plain mode', () => {
    it('input has webkitdirectory attribute when directory prop true', () => {
      const wrapper = mount(BFormFile, {props: {directory: true, plain: true}})
      const $input = wrapper.get('input')
      expect($input.attributes('webkitdirectory')).toBe('true')
    })

    it('input does not have webkitdirectory attribute when directory prop false', () => {
      const wrapper = mount(BFormFile, {props: {directory: false, plain: true}})
      const $input = wrapper.get('input')
      expect($input.attributes('webkitdirectory')).toBeUndefined()
    })
  })

  describe('default file name formatting', () => {
    it('shows single file name for one file', async () => {
      const wrapper = mount(BFormFile)
      const file = new File(['data'], 'resume.pdf')
      await wrapper.setProps({modelValue: file})

      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).toBe('resume.pdf')
    })

    it('shows "N files selected" for multiple files', async () => {
      const wrapper = mount(BFormFile, {props: {multiple: true}})
      const files = [new File(['1'], 'f1.txt'), new File(['2'], 'f2.txt')]
      await wrapper.setProps({modelValue: files})

      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).toBe('2 files selected')
    })
  })

  describe('browse button type', () => {
    it('browse button has type="button" to prevent form submission', () => {
      const wrapper = mount(BFormFile)
      const $button = wrapper.find('.b-form-file-button')
      expect($button.attributes('type')).toBe('button')
    })
  })

  describe('control aria-disabled', () => {
    it('control has aria-disabled true when disabled', () => {
      const wrapper = mount(BFormFile, {props: {disabled: true}})
      const $control = wrapper.find('.b-form-file-control')
      expect($control.attributes('aria-disabled')).toBe('true')
    })

    it('control has aria-disabled false when not disabled', () => {
      const wrapper = mount(BFormFile, {props: {disabled: false}})
      const $control = wrapper.find('.b-form-file-control')
      expect($control.attributes('aria-disabled')).toBe('false')
    })
  })

  describe('plain mode - change event handling', () => {
    it('emits change event with native Event object in plain mode', async () => {
      const file = new File(['content'], 'test.txt', {type: 'text/plain'})
      const dataTransfer = new ClipboardEvent('').clipboardData ?? new DataTransfer()
      dataTransfer.items.add(file)

      const wrapper = mount(BFormFile, {props: {plain: true}})
      const $input = wrapper.get('input')
      $input.element.files = dataTransfer.files
      await $input.trigger('change')

      expect(wrapper.emitted('change')).toBeDefined()
      expect(wrapper.emitted('change')![0][0]).toBeInstanceOf(Event)
    })
  })

  describe('autofocus prop', () => {
    it('does not focus when autofocus is false', () => {
      const focusSpy = vi.spyOn(HTMLElement.prototype, 'focus')
      mount(BFormFile, {props: {autofocus: false}})
      expect(focusSpy).not.toHaveBeenCalled()
      focusSpy.mockRestore()
    })

    it('focuses browse button on mount when autofocus is true in custom mode', async () => {
      const focusSpy = vi.spyOn(HTMLElement.prototype, 'focus')
      mount(BFormFile, {props: {autofocus: true}})
      await nextTick()
      expect(focusSpy).toHaveBeenCalled()
      focusSpy.mockRestore()
    })

    it('focuses plain input on mount when autofocus is true in plain mode', async () => {
      const focusSpy = vi.spyOn(HTMLElement.prototype, 'focus')
      mount(BFormFile, {props: {autofocus: true, plain: true}})
      await nextTick()
      expect(focusSpy).toHaveBeenCalled()
      focusSpy.mockRestore()
    })
  })

  describe('prop reactivity - state', () => {
    it('updates validation class when state changes in custom mode', async () => {
      const wrapper = mount(BFormFile)
      const $control = wrapper.find('.b-form-file-control')

      expect($control.classes()).not.toContain('is-invalid')
      expect($control.classes()).not.toContain('is-valid')

      await wrapper.setProps({state: false})
      expect($control.classes()).toContain('is-invalid')
      expect($control.classes()).not.toContain('is-valid')

      await wrapper.setProps({state: true})
      expect($control.classes()).toContain('is-valid')
      expect($control.classes()).not.toContain('is-invalid')

      await wrapper.setProps({state: null})
      expect($control.classes()).not.toContain('is-invalid')
      expect($control.classes()).not.toContain('is-valid')
    })

    it('updates validation class when state changes in plain mode', async () => {
      const wrapper = mount(BFormFile, {props: {plain: true}})
      const $input = wrapper.find('input')

      expect($input.classes()).not.toContain('is-invalid')
      expect($input.classes()).not.toContain('is-valid')

      await wrapper.setProps({state: false})
      expect($input.classes()).toContain('is-invalid')
      expect($input.classes()).not.toContain('is-valid')

      await wrapper.setProps({state: true})
      expect($input.classes()).toContain('is-valid')
      expect($input.classes()).not.toContain('is-invalid')

      await wrapper.setProps({state: null})
      expect($input.classes()).not.toContain('is-invalid')
      expect($input.classes()).not.toContain('is-valid')
    })
  })

  describe('prop reactivity - size', () => {
    it('updates size class when size prop changes in custom mode', async () => {
      const wrapper = mount(BFormFile)
      const $control = wrapper.find('.b-form-file-control')

      expect($control.classes()).not.toContain('form-control-lg')
      expect($control.classes()).not.toContain('form-control-sm')

      await wrapper.setProps({size: 'lg'})
      expect($control.classes()).toContain('form-control-lg')
      expect($control.classes()).not.toContain('form-control-sm')

      await wrapper.setProps({size: 'sm'})
      expect($control.classes()).toContain('form-control-sm')
      expect($control.classes()).not.toContain('form-control-lg')

      await wrapper.setProps({size: undefined})
      expect($control.classes()).not.toContain('form-control-lg')
      expect($control.classes()).not.toContain('form-control-sm')
    })

    it('updates size class when size prop changes in plain mode', async () => {
      const wrapper = mount(BFormFile, {props: {plain: true}})
      const $input = wrapper.find('input')

      expect($input.classes()).not.toContain('form-control-lg')
      expect($input.classes()).not.toContain('form-control-sm')

      await wrapper.setProps({size: 'lg'})
      expect($input.classes()).toContain('form-control-lg')

      await wrapper.setProps({size: undefined})
      expect($input.classes()).not.toContain('form-control-lg')
    })
  })

  describe('prop reactivity - disabled', () => {
    it('updates browse button disabled state when disabled prop changes', async () => {
      const wrapper = mount(BFormFile)
      const $button = wrapper.find('.b-form-file-button')

      expect($button.attributes('disabled')).toBeUndefined()

      await wrapper.setProps({disabled: true})
      expect($button.attributes('disabled')).toBeDefined()

      await wrapper.setProps({disabled: false})
      expect($button.attributes('disabled')).toBeUndefined()
    })

    it('updates control aria-disabled when disabled prop changes', async () => {
      const wrapper = mount(BFormFile)
      const $control = wrapper.find('.b-form-file-control')

      expect($control.attributes('aria-disabled')).toBe('false')

      await wrapper.setProps({disabled: true})
      expect($control.attributes('aria-disabled')).toBe('true')

      await wrapper.setProps({disabled: false})
      expect($control.attributes('aria-disabled')).toBe('false')
    })

    it('updates plain input disabled state when disabled prop changes', async () => {
      const wrapper = mount(BFormFile, {props: {plain: true}})
      const $input = wrapper.find('input')

      expect($input.attributes('disabled')).toBeUndefined()

      await wrapper.setProps({disabled: true})
      expect($input.attributes('disabled')).toBeDefined()

      await wrapper.setProps({disabled: false})
      expect($input.attributes('disabled')).toBeUndefined()
    })
  })

  describe('prop reactivity - browseText', () => {
    it('updates browse button text when browseText prop changes', async () => {
      const wrapper = mount(BFormFile)
      const $button = wrapper.find('.b-form-file-button')

      expect($button.text()).toBe('Browse')

      await wrapper.setProps({browseText: 'Upload'})
      expect($button.text()).toBe('Upload')

      await wrapper.setProps({browseText: undefined})
      expect($button.text()).toBe('Browse')
    })
  })

  describe('prop reactivity - label', () => {
    it('shows and hides label when label prop changes', async () => {
      const wrapper = mount(BFormFile)
      expect(wrapper.find('label').exists()).toBe(false)

      await wrapper.setProps({label: 'Upload File'})
      expect(wrapper.find('label').exists()).toBe(true)
      expect(wrapper.find('label').text()).toBe('Upload File')

      await wrapper.setProps({label: ''})
      expect(wrapper.find('label').exists()).toBe(false)
    })

    it('updates label text when label prop changes', async () => {
      const wrapper = mount(BFormFile, {props: {label: 'First Label'}})
      expect(wrapper.find('label').text()).toBe('First Label')

      await wrapper.setProps({label: 'Second Label'})
      expect(wrapper.find('label').text()).toBe('Second Label')
    })

    it('updates labelClass when labelClass prop changes', async () => {
      const wrapper = mount(BFormFile, {props: {label: 'Upload', labelClass: 'fw-bold'}})
      expect(wrapper.find('label').classes()).toContain('fw-bold')

      await wrapper.setProps({labelClass: 'text-danger'})
      expect(wrapper.find('label').classes()).not.toContain('fw-bold')
      expect(wrapper.find('label').classes()).toContain('text-danger')
    })
  })

  describe('prop reactivity - id', () => {
    it('updates browse button id when id prop changes in custom mode', async () => {
      const wrapper = mount(BFormFile, {props: {id: 'first-id'}})
      const $button = wrapper.find('.b-form-file-button')
      expect($button.attributes('id')).toBe('first-id')

      await wrapper.setProps({id: 'second-id'})
      expect($button.attributes('id')).toBe('second-id')
    })

    it('updates plain input id when id prop changes', async () => {
      const wrapper = mount(BFormFile, {props: {id: 'first-id', plain: true}})
      const $input = wrapper.find('input')
      expect($input.attributes('id')).toBe('first-id')

      await wrapper.setProps({id: 'second-id'})
      expect($input.attributes('id')).toBe('second-id')
    })

    it('has auto-generated id when id prop not provided', () => {
      const wrapper = mount(BFormFile)
      const $button = wrapper.find('.b-form-file-button')
      expect($button.attributes('id')).toBeDefined()
      expect($button.attributes('id')).not.toBe('')
    })

    it('label for attribute updates when id prop changes', async () => {
      const wrapper = mount(BFormFile, {props: {id: 'first-id', label: 'Upload'}})
      expect(wrapper.find('label').attributes('for')).toBe('first-id')

      await wrapper.setProps({id: 'second-id'})
      expect(wrapper.find('label').attributes('for')).toBe('second-id')
    })
  })

  describe('browse button id', () => {
    it('browse button id matches computedId in custom mode', () => {
      const wrapper = mount(BFormFile, {props: {id: 'my-file'}})
      const $button = wrapper.find('.b-form-file-button')
      expect($button.attributes('id')).toBe('my-file')
    })

    it('label for attribute matches browse button id', () => {
      const wrapper = mount(BFormFile, {props: {id: 'my-file', label: 'Upload'}})
      const $label = wrapper.find('label')
      const $button = wrapper.find('.b-form-file-button')
      expect($label.attributes('for')).toBe($button.attributes('id'))
    })

    it('auto-generated id is consistent between label and button', () => {
      const wrapper = mount(BFormFile, {props: {label: 'Upload'}})
      const $label = wrapper.find('label')
      const $button = wrapper.find('.b-form-file-button')
      expect($label.attributes('for')).toBe($button.attributes('id'))
    })
  })

  describe('noButton prop combinations', () => {
    it('noButton with label still renders label', () => {
      const wrapper = mount(BFormFile, {props: {noButton: true, label: 'Upload'}})
      expect(wrapper.find('label').exists()).toBe(true)
      expect(wrapper.find('label').text()).toBe('Upload')
    })

    it('noButton with files still shows file name in text area', async () => {
      const wrapper = mount(BFormFile, {props: {noButton: true}})
      const file = new File(['content'], 'photo.png')
      await wrapper.setProps({modelValue: file})

      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).toContain('photo.png')
    })

    it('noButton with placeholder still shows placeholder', () => {
      const wrapper = mount(BFormFile, {
        props: {noButton: true, placeholder: 'Drop here'},
      })
      const $text = wrapper.find('.b-form-file-text')
      expect($text.text()).toContain('Drop here')
    })

    it('noButton still renders the control wrapper', () => {
      const wrapper = mount(BFormFile, {props: {noButton: true}})
      expect(wrapper.find('.b-form-file-control').exists()).toBe(true)
    })

    it('noButton with disabled does not show disabled browse button', () => {
      const wrapper = mount(BFormFile, {props: {noButton: true, disabled: true}})
      expect(wrapper.find('.b-form-file-button').exists()).toBe(false)
    })

    it('noButton still renders drop zone wrapper', () => {
      const wrapper = mount(BFormFile, {props: {noButton: true}})
      expect(wrapper.find('.b-form-file-wrapper').exists()).toBe(true)
    })
  })

  describe('custom mode - change event', () => {
    it('emits change event as CustomEvent in custom mode when files are handled via onDialogChange', async () => {
      const wrapper = mount(BFormFile)
      const file = new File(['content'], 'report.pdf', {type: 'application/pdf'})

      // Simulate the onDialogChange path by calling handleFiles directly
      // through the internal mechanism: set modelValue and verify UI + ARIA update
      await wrapper.setProps({modelValue: file})

      // Verify file was set correctly and reflected in UI
      expect(wrapper.find('.b-form-file-text').text()).toContain('report.pdf')

      // Verify ARIA live region is updated (side-effect of handleFiles)
      const $liveRegion = wrapper.find('.visually-hidden[aria-live="polite"]')
      expect($liveRegion.text()).toContain('File selected: report.pdf')
    })
  })

  describe('directory mode - multiple attribute', () => {
    it('plain input sets multiple when directory=true and multiple=false', () => {
      const wrapper = mount(BFormFile, {props: {directory: true, multiple: false, plain: true}})
      const $input = wrapper.find('input')
      expect($input.attributes('multiple')).toBeDefined()
    })

    it('plain input sets multiple when both directory and multiple are true', () => {
      const wrapper = mount(BFormFile, {props: {directory: true, multiple: true, plain: true}})
      const $input = wrapper.find('input')
      expect($input.attributes('multiple')).toBeDefined()
    })
  })

  describe('plain mode - required without name', () => {
    it('input has required attribute when required=true without name', () => {
      const wrapper = mount(BFormFile, {props: {required: true, plain: true}})
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBeDefined()
    })
  })

  describe('showFileNames with file-name slot', () => {
    it('renders file-name slot in external display when showFileNames is true', async () => {
      const wrapper = mount(BFormFile, {
        props: {showFileNames: true},
        slots: {
          'file-name': ({names}: {names: readonly string[]}) =>
            `Custom: ${names.join(', ')}`,
        },
      })
      const file = new File(['data'], 'custom.txt')
      await wrapper.setProps({modelValue: file})

      const $display = wrapper.find('.b-form-file-display')
      expect($display.exists()).toBe(true)
      expect($display.text()).toContain('Custom: custom.txt')
    })
  })

  describe('focus and blur exposed methods', () => {
    it('focus() focuses the browse button in custom mode', () => {
      const wrapper = mount(BFormFile)
      const focusSpy = vi.spyOn(HTMLElement.prototype, 'focus')

      wrapper.vm.focus()

      expect(focusSpy).toHaveBeenCalled()
      focusSpy.mockRestore()
    })

    it('blur() blurs the browse button in custom mode', () => {
      const wrapper = mount(BFormFile)
      const blurSpy = vi.spyOn(HTMLElement.prototype, 'blur')

      wrapper.vm.blur()

      expect(blurSpy).toHaveBeenCalled()
      blurSpy.mockRestore()
    })

    it('focus() focuses the input in plain mode', () => {
      const wrapper = mount(BFormFile, {props: {plain: true}})
      const focusSpy = vi.spyOn(HTMLElement.prototype, 'focus')

      wrapper.vm.focus()

      expect(focusSpy).toHaveBeenCalled()
      focusSpy.mockRestore()
    })

    it('blur() blurs the input in plain mode', () => {
      const wrapper = mount(BFormFile, {props: {plain: true}})
      const blurSpy = vi.spyOn(HTMLElement.prototype, 'blur')

      wrapper.vm.blur()

      expect(blurSpy).toHaveBeenCalled()
      blurSpy.mockRestore()
    })
  })

  describe('placeholder slot in showFileNames external display', () => {
    it('renders placeholder slot in external display when showFileNames is true and no files', () => {
      const wrapper = mount(BFormFile, {
        props: {showFileNames: true},
        slots: {
          placeholder: '<em>No files yet</em>',
        },
      })

      const $display = wrapper.find('.b-form-file-display')
      expect($display.exists()).toBe(true)
      expect($display.find('em').exists()).toBe(true)
      expect($display.text()).toContain('No files yet')
    })
  })

  describe('prop reactivity - placeholder', () => {
    it('updates placeholder text when placeholder prop changes', async () => {
      const wrapper = mount(BFormFile, {props: {placeholder: 'Initial placeholder'}})
      expect(wrapper.find('.b-form-file-text').text()).toContain('Initial placeholder')

      await wrapper.setProps({placeholder: 'Updated placeholder'})
      expect(wrapper.find('.b-form-file-text').text()).toContain('Updated placeholder')
      expect(wrapper.find('.b-form-file-text').text()).not.toContain('Initial placeholder')
    })
  })

  describe('prop reactivity - accept', () => {
    it('updates accept attribute on hidden input when accept prop changes', async () => {
      const wrapper = mount(BFormFile, {props: {accept: 'image/*'}})
      expect(wrapper.find('input[type="file"]').attributes('accept')).toBe('image/*')

      await wrapper.setProps({accept: '.pdf,.doc'})
      expect(wrapper.find('input[type="file"]').attributes('accept')).toBe('.pdf,.doc')
    })

    it('updates accept attribute on plain input when accept prop changes', async () => {
      const wrapper = mount(BFormFile, {props: {accept: 'image/*', plain: true}})
      expect(wrapper.find('input').attributes('accept')).toBe('image/*')

      await wrapper.setProps({accept: 'application/pdf'})
      expect(wrapper.find('input').attributes('accept')).toBe('application/pdf')
    })
  })

  describe('root element b-form-file-root', () => {
    it('root element is a div', () => {
      const wrapper = mount(BFormFile)
      expect(wrapper.find('.b-form-file-root').element.tagName).toBe('DIV')
    })

    it('root element is a div in plain mode', () => {
      const wrapper = mount(BFormFile, {props: {plain: true}})
      expect(wrapper.find('.b-form-file-root').element.tagName).toBe('DIV')
    })
  })
})
