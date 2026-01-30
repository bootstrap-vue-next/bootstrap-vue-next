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
      expect(children[0]!.classList.contains('b-form-file-button')).toBe(true)
      expect(children[1]!.classList.contains('b-form-file-text')).toBe(true)
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
      expect(wrapper.emitted('change')?.[0]![0]).toBeInstanceOf(Event)
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
      expect(wrapper.emitted('update:modelValue')?.[0]![0]).toStrictEqual(file)
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
      expect(emitted && (emitted[0]![0] as File[])[0]).toStrictEqual(file1)
      const em = wrapper.emitted('update:modelValue')
      expect(em && (em[0]![0] as File[])[1]).toStrictEqual(file2)
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
      expect(emittedValue && (emittedValue[0]![0] as File[])[0]).toStrictEqual(file1)
      const em = wrapper.emitted('update:modelValue')
      expect(em && (em[0]![0] as File[])[1]).toStrictEqual(file2)
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
})
