import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it, vi} from 'vitest'
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
      expect($input.attributes('capture')).toBe(undefined)
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
      expect($label.attributes('class')?.includes('labelClass')).toBe(true)
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
      const emitted = wrapper.emitted('update:modelValue')
      expect(emitted && (emitted[0][0] as File[])[0]).toStrictEqual(file1)
      const em = wrapper.emitted('update:modelValue')
      expect(em && (em[0][0] as File[])[1]).toStrictEqual(file2)
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
      const emittedValue = wrapper.emitted('update:modelValue')
      expect(emittedValue && (emittedValue[0][0] as File[])[0]).toStrictEqual(file1)
      const em = wrapper.emitted('update:modelValue')
      expect(em && (em[0][0] as File[])[1]).toStrictEqual(file2)
    })
  })

  describe('file name display', () => {
    it('does not show file display by default', () => {
      const wrapper = mount(BFormFile)
      const $display = wrapper.find('.b-form-file-display')
      expect($display.exists()).toBe(false)
    })

    it('shows file display when showFileNames is true', () => {
      const wrapper = mount(BFormFile, {props: {showFileNames: true}})
      const $display = wrapper.find('.b-form-file-display')
      expect($display.exists()).toBe(true)
    })

    it('shows placeholder when no files and placeholder prop', () => {
      const wrapper = mount(BFormFile, {props: {placeholder: 'Choose a file...'}})
      const $display = wrapper.find('.b-form-file-display')
      expect($display.exists()).toBe(true)
      expect($display.text()).toBe('Choose a file...')
    })

    it('shows placeholder via slot when no files', () => {
      const wrapper = mount(BFormFile, {
        props: {showFileNames: true},
        slots: {placeholder: 'Custom placeholder'},
      })
      const $display = wrapper.find('.b-form-file-display')
      expect($display.exists()).toBe(true)
      expect($display.text()).toBe('Custom placeholder')
    })

    it('displays single file name', async () => {
      const file = new File(['foo'], 'test-file.txt', {
        type: 'text/plain',
        lastModified: Date.now(),
      })

      const dataTransfer = new ClipboardEvent('').clipboardData ?? new DataTransfer()
      dataTransfer.items.add(file)

      const wrapper = mount(BFormFile, {props: {showFileNames: true}})
      const $input = wrapper.get('input')
      $input.element.files = dataTransfer.files
      await $input.trigger('change')

      await wrapper.vm.$nextTick()

      const $display = wrapper.find('.b-form-file-display')
      expect($display.exists()).toBe(true)
      expect($display.text()).toBe('test-file.txt')
    })

    it('displays "X files selected" for multiple files', async () => {
      const file1 = new File(['foo'], 'file1.txt', {type: 'text/plain', lastModified: Date.now()})
      const file2 = new File(['bar'], 'file2.txt', {type: 'text/plain', lastModified: Date.now()})

      const dataTransfer = new ClipboardEvent('').clipboardData ?? new DataTransfer()
      dataTransfer.items.add(file1)
      dataTransfer.items.add(file2)

      const wrapper = mount(BFormFile, {props: {showFileNames: true, multiple: true}})
      const $input = wrapper.get('input')
      $input.element.files = dataTransfer.files
      await $input.trigger('change')

      await wrapper.vm.$nextTick()

      const $display = wrapper.find('.b-form-file-display')
      expect($display.exists()).toBe(true)
      expect($display.text()).toBe('2 files selected')
    })

    it('uses fileNameFormatter when provided', async () => {
      const file1 = new File(['foo'], 'file1.txt', {type: 'text/plain', lastModified: Date.now()})
      const file2 = new File(['bar'], 'file2.txt', {type: 'text/plain', lastModified: Date.now()})

      const dataTransfer = new ClipboardEvent('').clipboardData ?? new DataTransfer()
      dataTransfer.items.add(file1)
      dataTransfer.items.add(file2)

      const formatter = vi.fn((files: readonly File[]) =>
        files.map((f) => f.name.toUpperCase()).join(' | ')
      )

      const wrapper = mount(BFormFile, {
        props: {showFileNames: true, multiple: true, fileNameFormatter: formatter},
      })
      const $input = wrapper.get('input')
      $input.element.files = dataTransfer.files
      await $input.trigger('change')

      await wrapper.vm.$nextTick()

      expect(formatter).toHaveBeenCalled()
      const $display = wrapper.find('.b-form-file-display')
      expect($display.text()).toBe('FILE1.TXT | FILE2.TXT')
    })

    it('file-name slot receives correct scope', async () => {
      const file = new File(['foo'], 'test.txt', {type: 'text/plain', lastModified: Date.now()})

      const dataTransfer = new ClipboardEvent('').clipboardData ?? new DataTransfer()
      dataTransfer.items.add(file)

      const wrapper = mount(BFormFile, {
        props: {showFileNames: true},
        slots: {
          'file-name': `
            <template #file-name="{ files, names }">
              <div class="custom">{{ files.length }} - {{ names.join(', ') }}</div>
            </template>
          `,
        },
      })

      const $input = wrapper.get('input')
      $input.element.files = dataTransfer.files
      await $input.trigger('change')

      await wrapper.vm.$nextTick()

      const $custom = wrapper.find('.custom')
      expect($custom.exists()).toBe(true)
      expect($custom.text()).toBe('1 - test.txt')
    })
  })

  describe('drag and drop feedback', () => {
    it('shows drag overlay on dragenter when not noDrop', async () => {
      const wrapper = mount(BFormFile, {props: {showFileNames: true}})
      const $input = wrapper.get('input')

      await $input.trigger('dragenter')
      await wrapper.vm.$nextTick()

      const $overlay = wrapper.find('.b-form-file-drag-overlay')
      expect($overlay.exists()).toBe(true)
    })

    it('does not show drag overlay when noDrop is true', async () => {
      const wrapper = mount(BFormFile, {props: {noDrop: true, showFileNames: true}})
      const $input = wrapper.get('input')

      await $input.trigger('dragenter')
      await wrapper.vm.$nextTick()

      const $wrapper = wrapper.find('.b-form-file-wrapper')
      expect($wrapper.classes()).not.toContain('b-form-file-dragging')
    })

    it('hides drag overlay on dragleave', async () => {
      const wrapper = mount(BFormFile, {props: {showFileNames: true}})
      const $input = wrapper.get('input')

      await $input.trigger('dragenter')
      await wrapper.vm.$nextTick()

      let $wrapper = wrapper.find('.b-form-file-wrapper')
      expect($wrapper.classes()).toContain('b-form-file-dragging')

      await $input.trigger('dragleave')
      await wrapper.vm.$nextTick()

      $wrapper = wrapper.find('.b-form-file-wrapper')
      expect($wrapper.classes()).not.toContain('b-form-file-dragging')
    })

    it('shows default drop placeholder text', async () => {
      const wrapper = mount(BFormFile, {props: {showFileNames: true}})
      const $input = wrapper.get('input')

      await $input.trigger('dragenter')
      await wrapper.vm.$nextTick()

      const $text = wrapper.find('.b-form-file-drag-text')
      expect($text.exists()).toBe(true)
      expect($text.text()).toBe('Drop files here...')
    })

    it('shows custom dropPlaceholder text', async () => {
      const wrapper = mount(BFormFile, {
        props: {showFileNames: true, dropPlaceholder: 'Drop your files!'},
      })
      const $input = wrapper.get('input')

      await $input.trigger('dragenter')
      await wrapper.vm.$nextTick()

      const $text = wrapper.find('.b-form-file-drag-text')
      expect($text.text()).toBe('Drop your files!')
    })

    it('uses drop-placeholder slot when provided', async () => {
      const wrapper = mount(BFormFile, {
        props: {showFileNames: true},
        slots: {
          'drop-placeholder': `
            <template #drop-placeholder="{ dropAllowed }">
              <div class="custom-drop">{{ dropAllowed ? 'Drop it!' : 'Nope!' }}</div>
            </template>
          `,
        },
      })
      const $input = wrapper.get('input')

      await $input.trigger('dragenter')
      await wrapper.vm.$nextTick()

      const $custom = wrapper.find('.custom-drop')
      expect($custom.exists()).toBe(true)
    })

    it('clears drag state on drop', async () => {
      const wrapper = mount(BFormFile, {props: {showFileNames: true}})
      const $input = wrapper.get('input')

      await $input.trigger('dragenter')
      await wrapper.vm.$nextTick()

      let $wrapper = wrapper.find('.b-form-file-wrapper')
      expect($wrapper.classes()).toContain('b-form-file-dragging')

      await $input.trigger('drop')
      await wrapper.vm.$nextTick()

      $wrapper = wrapper.find('.b-form-file-wrapper')
      expect($wrapper.classes()).not.toContain('b-form-file-dragging')
    })
  })
})
