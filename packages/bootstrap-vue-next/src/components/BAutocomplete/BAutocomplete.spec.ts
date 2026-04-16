import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {h, nextTick} from 'vue'
import BAutocomplete from './BAutocomplete.vue'

describe('BAutocomplete', () => {
  enableAutoUnmount(afterEach)

  // --- Rendering / Structure ---

  describe('rendering', () => {
    it('has b-autocomplete class on root element', () => {
      const wrapper = mount(BAutocomplete)
      expect(wrapper.find('.b-autocomplete').exists()).toBe(true)
    })

    it('renders an input element', () => {
      const wrapper = mount(BAutocomplete)
      const input = wrapper.find('input')
      expect(input.exists()).toBe(true)
    })

    it('renders a toggle button by default', () => {
      const wrapper = mount(BAutocomplete)
      const btn = wrapper.find('.b-autocomplete-trigger')
      expect(btn.exists()).toBe(true)
    })

    it('hides toggle button when noToggle is true', () => {
      const wrapper = mount(BAutocomplete, {
        props: {noToggle: true},
      })
      const btn = wrapper.find('.b-autocomplete-trigger')
      expect(btn.exists()).toBe(false)
    })

    it('renders with BInputGroup wrapper', () => {
      const wrapper = mount(BAutocomplete)
      const inputGroup = wrapper.find('.input-group')
      expect(inputGroup.exists()).toBe(true)
    })

    it('generates an id for the input', () => {
      const wrapper = mount(BAutocomplete)
      const input = wrapper.find('input')
      expect(input.attributes('id')).toBeDefined()
    })

    it('uses custom id when provided', () => {
      const wrapper = mount(BAutocomplete, {
        props: {id: 'my-autocomplete'},
      })
      const input = wrapper.find('input')
      expect(input.attributes('id')).toBe('my-autocomplete')
    })
  })

  // --- Input CSS classes ---

  describe('input CSS classes', () => {
    it('has form-control class by default', () => {
      const wrapper = mount(BAutocomplete)
      const input = wrapper.find('input')
      expect(input.classes()).toContain('form-control')
    })

    it('has form-control-plaintext class when plaintext is true', () => {
      const wrapper = mount(BAutocomplete, {
        props: {plaintext: true},
      })
      const input = wrapper.find('input')
      expect(input.classes()).toContain('form-control-plaintext')
      expect(input.classes()).not.toContain('form-control')
    })

    it('has form-control-sm class when size is sm', () => {
      const wrapper = mount(BAutocomplete, {
        props: {size: 'sm'},
      })
      const input = wrapper.find('input')
      expect(input.classes()).toContain('form-control-sm')
    })

    it('has form-control-lg class when size is lg', () => {
      const wrapper = mount(BAutocomplete, {
        props: {size: 'lg'},
      })
      const input = wrapper.find('input')
      expect(input.classes()).toContain('form-control-lg')
    })

    it('does not have size class when size is not set', () => {
      const wrapper = mount(BAutocomplete)
      const input = wrapper.find('input')
      expect(input.classes()).not.toContain('form-control-sm')
      expect(input.classes()).not.toContain('form-control-lg')
    })

    it('has is-valid class when state is true', () => {
      const wrapper = mount(BAutocomplete, {
        props: {state: true},
      })
      const input = wrapper.find('input')
      expect(input.classes()).toContain('is-valid')
      expect(input.classes()).not.toContain('is-invalid')
    })

    it('has is-invalid class when state is false', () => {
      const wrapper = mount(BAutocomplete, {
        props: {state: false},
      })
      const input = wrapper.find('input')
      expect(input.classes()).toContain('is-invalid')
      expect(input.classes()).not.toContain('is-valid')
    })

    it('has no state class when state is null', () => {
      const wrapper = mount(BAutocomplete)
      const input = wrapper.find('input')
      expect(input.classes()).not.toContain('is-valid')
      expect(input.classes()).not.toContain('is-invalid')
    })
  })

  // --- Input attributes ---

  describe('input attributes', () => {
    it('has disabled attribute when disabled is true', () => {
      const wrapper = mount(BAutocomplete, {
        props: {disabled: true},
      })
      const input = wrapper.find('input')
      expect(input.attributes('disabled')).toBeDefined()
    })

    it('does not have disabled attribute when disabled is false', () => {
      const wrapper = mount(BAutocomplete, {
        props: {disabled: false},
      })
      const input = wrapper.find('input')
      expect(input.attributes('disabled')).toBeUndefined()
    })

    it('has readonly attribute when readonly is true', () => {
      const wrapper = mount(BAutocomplete, {
        props: {readonly: true},
      })
      const input = wrapper.find('input')
      expect(input.attributes('readonly')).toBeDefined()
    })

    it('has readonly attribute when plaintext is true', () => {
      const wrapper = mount(BAutocomplete, {
        props: {plaintext: true},
      })
      const input = wrapper.find('input')
      expect(input.attributes('readonly')).toBeDefined()
    })

    it('has required attribute when required is true', () => {
      const wrapper = mount(BAutocomplete, {
        props: {required: true},
      })
      const input = wrapper.find('input')
      expect(input.attributes('required')).toBeDefined()
    })

    it('has aria-required when required is true', () => {
      const wrapper = mount(BAutocomplete, {
        props: {required: true},
      })
      const input = wrapper.find('input')
      expect(input.attributes('aria-required')).toBe('true')
    })

    it('has placeholder attribute when placeholder is set', () => {
      const wrapper = mount(BAutocomplete, {
        props: {placeholder: 'Type here...'},
      })
      const input = wrapper.find('input')
      expect(input.attributes('placeholder')).toBe('Type here...')
    })

    it('has form attribute when form is set', () => {
      const wrapper = mount(BAutocomplete, {
        props: {form: 'my-form'},
      })
      const input = wrapper.find('input')
      expect(input.attributes('form')).toBe('my-form')
    })

    it('does not have form attribute when form is not set', () => {
      const wrapper = mount(BAutocomplete)
      const input = wrapper.find('input')
      expect(input.attributes('form')).toBeUndefined()
    })

    it('has autocomplete attribute when autocomplete is set', () => {
      const wrapper = mount(BAutocomplete, {
        props: {autocomplete: 'off'},
      })
      const input = wrapper.find('input')
      expect(input.attributes('autocomplete')).toBe('off')
    })
  })

  // --- ARIA attributes ---

  describe('ARIA attributes', () => {
    it('has aria-invalid attribute when ariaInvalid is true', () => {
      const wrapper = mount(BAutocomplete, {
        props: {ariaInvalid: true},
      })
      const input = wrapper.find('input')
      expect(input.attributes('aria-invalid')).toBe('true')
    })

    it('has aria-invalid when state is false', () => {
      const wrapper = mount(BAutocomplete, {
        props: {state: false},
      })
      const input = wrapper.find('input')
      expect(input.attributes('aria-invalid')).toBe('true')
    })

    it('does not have aria-invalid when state is true', () => {
      const wrapper = mount(BAutocomplete, {
        props: {state: true},
      })
      const input = wrapper.find('input')
      expect(input.attributes('aria-invalid')).toBeUndefined()
    })
  })

  // --- Options normalization ---

  describe('options normalization', () => {
    it('normalizes string array options', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: ['apple', 'banana', 'cherry'],
          open: true,
        },
      })
      await nextTick()
      const items = wrapper.findAll('.b-autocomplete-item')
      expect(items).toHaveLength(3)
      expect(items[0].text()).toContain('apple')
      expect(items[1].text()).toContain('banana')
      expect(items[2].text()).toContain('cherry')
    })

    it('normalizes number array options', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: [10, 20, 30],
          open: true,
        },
      })
      await nextTick()
      const items = wrapper.findAll('.b-autocomplete-item')
      expect(items).toHaveLength(3)
      expect(items[0].text()).toContain('10')
      expect(items[1].text()).toContain('20')
      expect(items[2].text()).toContain('30')
    })

    it('normalizes boolean array options', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: [true, false],
          open: true,
        },
      })
      await nextTick()
      const items = wrapper.findAll('.b-autocomplete-item')
      expect(items).toHaveLength(2)
      expect(items[0].text()).toContain('true')
      expect(items[1].text()).toContain('false')
    })

    it('normalizes object array options', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: [
            {value: 1, text: 'One'},
            {value: 2, text: 'Two'},
            {value: 3, text: 'Three'},
          ],
          open: true,
        },
      })
      await nextTick()
      const items = wrapper.findAll('.b-autocomplete-item')
      expect(items).toHaveLength(3)
      expect(items[0].text()).toContain('One')
      expect(items[1].text()).toContain('Two')
      expect(items[2].text()).toContain('Three')
    })

    it('uses custom valueField and textField', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          valueField: 'id',
          textField: 'label',
          options: [
            {id: 'a', label: 'Alpha'},
            {id: 'b', label: 'Beta'},
          ],
          open: true,
        },
      })
      await nextTick()
      const items = wrapper.findAll('.b-autocomplete-item')
      expect(items).toHaveLength(2)
      expect(items[0].text()).toContain('Alpha')
      expect(items[1].text()).toContain('Beta')
    })

    it('uses custom disabledField', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          disabledField: 'inactive',
          options: [
            {value: 'a', text: 'A', inactive: true},
            {value: 'b', text: 'B', inactive: false},
          ],
          open: true,
        },
      })
      await nextTick()
      const items = wrapper.findAll('.b-autocomplete-item')
      expect(items).toHaveLength(2)
      // First item should have data-disabled attribute (reka-ui sets this on disabled items)
      expect(items[0].attributes('data-disabled')).toBeDefined()
      expect(items[1].attributes('data-disabled')).toBeUndefined()
    })

    it('renders empty state when options is empty', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: [],
          open: true,
        },
      })
      await nextTick()
      const empty = wrapper.find('.b-autocomplete-empty')
      expect(empty.exists()).toBe(true)
      expect(empty.text()).toContain('No results found')
    })

    it('renders no items when options is empty', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: [],
          open: true,
        },
      })
      await nextTick()
      const items = wrapper.findAll('.b-autocomplete-item')
      expect(items).toHaveLength(0)
    })
  })

  // --- Options reactivity ---

  describe('options reactivity', () => {
    it('updates rendered options when options prop changes', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: ['a', 'b'],
          open: true,
        },
      })
      await nextTick()
      expect(wrapper.findAll('.b-autocomplete-item')).toHaveLength(2)

      await wrapper.setProps({options: ['x', 'y', 'z']})
      await nextTick()
      const items = wrapper.findAll('.b-autocomplete-item')
      expect(items).toHaveLength(3)
      expect(items[0].text()).toContain('x')
    })
  })

  // --- Filtering ---

  describe('filtering', () => {
    it('filters options by search term (case-insensitive) in multiple mode', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: ['Apple', 'Banana', 'Apricot', 'Cherry'],
          open: true,
          multiple: true,
          modelValue: [],
        },
      })
      await nextTick()
      // Type search term into input
      const input = wrapper.find('input')
      await input.setValue('ap')
      await nextTick()
      const items = wrapper.findAll('.b-autocomplete-item')
      expect(items).toHaveLength(2)
      expect(items[0].text()).toContain('Apple')
      expect(items[1].text()).toContain('Apricot')
    })

    it('shows all options when search term is empty', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: ['Apple', 'Banana', 'Cherry'],
          open: true,
          multiple: true,
          modelValue: [],
        },
      })
      await nextTick()
      const items = wrapper.findAll('.b-autocomplete-item')
      expect(items).toHaveLength(3)
    })

    it('uses custom filterFunction when provided', async () => {
      const customFilter = (
        options: Array<{text?: string; value: unknown; disabled?: boolean}>,
        term: string
      ) => options.filter((opt) => String(opt.text).startsWith(term))

      const wrapper = mount(BAutocomplete, {
        props: {
          options: ['Apple', 'Banana', 'Apricot'],
          open: true,
          filterFunction: customFilter,
        },
      })
      await nextTick()
      // Type search term into input
      const input = wrapper.find('input')
      await input.setValue('A')
      await nextTick()
      const items = wrapper.findAll('.b-autocomplete-item')
      // Custom filter: startsWith 'A' matches 'Apple' and 'Apricot'
      expect(items).toHaveLength(2)
      expect(items[0].text()).toContain('Apple')
      expect(items[1].text()).toContain('Apricot')
    })

    it('shows empty state when no options match filter in multiple mode', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: ['Apple', 'Banana', 'Cherry'],
          open: true,
          multiple: true,
          modelValue: [],
        },
      })
      await nextTick()
      // Type search term that matches nothing
      const input = wrapper.find('input')
      await input.setValue('xyz')
      await nextTick()
      const items = wrapper.findAll('.b-autocomplete-item')
      expect(items).toHaveLength(0)
    })
  })

  // --- Multiple mode ---

  describe('multiple mode', () => {
    it('does not show selection container when no values selected', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          multiple: true,
          options: ['a', 'b', 'c'],
          modelValue: [],
        },
      })
      const selection = wrapper.find('.b-autocomplete-selection')
      expect(selection.exists()).toBe(false)
    })

    it('shows selection container when values are selected', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          multiple: true,
          options: ['a', 'b', 'c'],
          modelValue: ['a', 'b'],
        },
      })
      const selection = wrapper.find('.b-autocomplete-selection')
      expect(selection.exists()).toBe(true)
    })

    it('does not show selection container in single mode', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          multiple: false,
          options: ['a', 'b'],
          modelValue: 'a',
        },
      })
      const selection = wrapper.find('.b-autocomplete-selection')
      expect(selection.exists()).toBe(false)
    })

    it('displays selected items as comma-separated text by default (non-tags)', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          multiple: true,
          options: ['apple', 'banana', 'cherry'],
          modelValue: ['apple', 'banana'],
        },
      })
      const selection = wrapper.find('.b-autocomplete-selection')
      expect(selection.exists()).toBe(true)
      expect(selection.classes()).not.toContain('b-autocomplete-selection-tags')
      expect(selection.text()).toContain('apple')
      expect(selection.text()).toContain('banana')
    })

    it('displays tags when tags prop is true', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          multiple: true,
          tags: true,
          options: ['apple', 'banana', 'cherry'],
          modelValue: ['apple', 'banana'],
        },
      })
      const selection = wrapper.find('.b-autocomplete-selection')
      expect(selection.exists()).toBe(true)
      expect(selection.classes()).toContain('b-autocomplete-selection-tags')
    })

    it('renders BFormTag elements in tags mode', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          multiple: true,
          tags: true,
          options: [
            {value: 1, text: 'One'},
            {value: 2, text: 'Two'},
            {value: 3, text: 'Three'},
          ],
          modelValue: [1, 2],
        },
      })
      const tags = wrapper.findAll('.b-form-tag')
      expect(tags.length).toBe(2)
    })
  })

  // --- Events ---

  describe('events', () => {
    it('emits blur event when input loses focus', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: ['a', 'b'],
        },
      })
      const input = wrapper.find('input')
      await input.trigger('blur')
      expect(wrapper.emitted('blur')).toBeTruthy()
      expect(wrapper.emitted('blur')!.length).toBe(1)
    })

    it('emits focus event when input gains focus', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: ['a', 'b'],
        },
      })
      const input = wrapper.find('input')
      await input.trigger('focus')
      expect(wrapper.emitted('focus')).toBeTruthy()
      expect(wrapper.emitted('focus')!.length).toBe(1)
    })
  })

  // --- v-model bindings ---

  describe('v-model bindings', () => {
    it('supports v-model:open', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          'open': false,
          'onUpdate:open': (e: boolean) => wrapper.setProps({open: e}),
          'options': ['a', 'b'],
        },
      })
      // Initially closed - no content visible
      expect(wrapper.find('.b-autocomplete-content').exists()).toBe(false)

      // Open the autocomplete
      await wrapper.setProps({open: true})
      await nextTick()
      expect(wrapper.find('.b-autocomplete-content').exists()).toBe(true)
    })

    it('supports v-model:search', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          search: 'hello',
          options: ['a', 'b'],
        },
      })
      const input = wrapper.find('input')
      expect(input.element.value).toBe('hello')
    })
  })

  // --- Slots ---

  describe('slots', () => {
    it('renders prepend slot content', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: ['a'],
        },
        slots: {
          prepend: () => h('span', {class: 'custom-prepend'}, 'Before'),
        },
      })
      expect(wrapper.find('.custom-prepend').exists()).toBe(true)
      expect(wrapper.find('.custom-prepend').text()).toBe('Before')
    })

    it('renders append slot content instead of toggle button', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: ['a'],
        },
        slots: {
          append: () => h('span', {class: 'custom-append'}, 'After'),
        },
      })
      expect(wrapper.find('.custom-append').exists()).toBe(true)
      expect(wrapper.find('.custom-append').text()).toBe('After')
      // The default toggle button should be replaced
      expect(wrapper.find('.b-autocomplete-trigger').exists()).toBe(false)
    })

    it('renders empty slot content', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: [],
          open: true,
        },
        slots: {
          empty: () => h('div', {class: 'custom-empty'}, 'Nothing here'),
        },
      })
      await nextTick()
      expect(wrapper.find('.custom-empty').exists()).toBe(true)
      expect(wrapper.find('.custom-empty').text()).toBe('Nothing here')
    })

    it('renders option slot content', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: ['apple', 'banana'],
          open: true,
        },
        slots: {
          option: (props: {value: unknown; text?: string}) =>
            h('span', {class: 'custom-option'}, `Custom: ${props.text}`),
        },
      })
      await nextTick()
      const customOptions = wrapper.findAll('.custom-option')
      expect(customOptions).toHaveLength(2)
      expect(customOptions[0].text()).toBe('Custom: apple')
      expect(customOptions[1].text()).toBe('Custom: banana')
    })

    it('renders option-indicator slot content when item is selected', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: ['apple'],
          open: true,
          modelValue: 'apple',
        },
        slots: {
          'option-indicator': () => h('span', {class: 'custom-indicator'}, '✓'),
        },
      })
      await nextTick()
      const item = wrapper.find('.b-autocomplete-item')
      expect(item.exists()).toBe(true)
      // The indicator container exists within the item
      const indicatorContainer = item.find('.b-autocomplete-item-indicator')
      expect(indicatorContainer.exists()).toBe(true)
    })

    it('renders tags slot content in multiple tags mode', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          multiple: true,
          tags: true,
          options: ['apple', 'banana'],
          modelValue: ['apple', 'banana'],
        },
        slots: {
          tags: (props: {
            selected: Array<{value: unknown; text?: string}>
            remove: (opt: {value: unknown; text?: string}) => void
          }) =>
            h(
              'div',
              {class: 'custom-tags'},
              props.selected.map((s) => h('span', {key: String(s.value)}, s.text))
            ),
        },
      })
      const customTags = wrapper.find('.custom-tags')
      expect(customTags.exists()).toBe(true)
      expect(customTags.text()).toContain('apple')
      expect(customTags.text()).toContain('banana')
    })
  })

  // --- Backspace delete behavior ---

  describe('backspace delete in multiple mode', () => {
    it('sets pending delete state on first backspace with empty search', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          multiple: true,
          options: ['apple', 'banana', 'cherry'],
          modelValue: ['apple', 'banana'],
          search: '',
        },
      })
      const input = wrapper.find('input')
      await input.trigger('keydown', {key: 'Backspace'})
      await nextTick()
      const selection = wrapper.find('.b-autocomplete-selection')
      expect(selection.classes()).toContain('b-autocomplete-selection-pending-delete')
    })

    it('does not set pending delete when search term is not empty', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          multiple: true,
          options: ['apple', 'banana', 'cherry'],
          modelValue: ['apple', 'banana'],
        },
      })
      const input = wrapper.find('input')
      // Type something into the input to set a non-empty search term
      await input.setValue('some text')
      await nextTick()
      await input.trigger('keydown', {key: 'Backspace'})
      await nextTick()
      const selection = wrapper.find('.b-autocomplete-selection')
      expect(selection.classes()).not.toContain('b-autocomplete-selection-pending-delete')
    })

    it('does not set pending delete when not in multiple mode', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          multiple: false,
          options: ['apple', 'banana'],
          modelValue: 'apple',
          search: '',
        },
      })
      const input = wrapper.find('input')
      await input.trigger('keydown', {key: 'Backspace'})
      await nextTick()
      const selection = wrapper.find('.b-autocomplete-selection')
      expect(selection.exists()).toBe(false)
    })

    it('does not set pending delete when no items are selected', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          multiple: true,
          options: ['apple', 'banana'],
          modelValue: [],
          search: '',
        },
      })
      const input = wrapper.find('input')
      await input.trigger('keydown', {key: 'Backspace'})
      await nextTick()
      // No selection container exists
      expect(wrapper.find('.b-autocomplete-selection').exists()).toBe(false)
    })

    it('removes last selected item on second backspace', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          'multiple': true,
          'options': ['apple', 'banana', 'cherry'],
          'modelValue': ['apple', 'banana'],
          'search': '',
          'onUpdate:modelValue': (val: unknown[]) => wrapper.setProps({modelValue: val}),
        },
      })
      const input = wrapper.find('input')

      // First backspace: set pending
      await input.trigger('keydown', {key: 'Backspace'})
      await nextTick()

      // Second backspace: remove last item
      await input.trigger('keydown', {key: 'Backspace'})
      await nextTick()

      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      const emittedValues = wrapper.emitted('update:modelValue')!
      const lastEmitted = emittedValues[emittedValues.length - 1][0]
      expect(lastEmitted).toEqual(['apple'])
    })

    it('resets pending delete on non-backspace key', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          multiple: true,
          options: ['apple', 'banana', 'cherry'],
          modelValue: ['apple', 'banana'],
          search: '',
        },
      })
      const input = wrapper.find('input')

      // First backspace: set pending
      await input.trigger('keydown', {key: 'Backspace'})
      await nextTick()
      expect(
        wrapper.find('.b-autocomplete-selection').classes()
      ).toContain('b-autocomplete-selection-pending-delete')

      // Another key: resets pending
      await input.trigger('keydown', {key: 'a'})
      await nextTick()
      expect(
        wrapper.find('.b-autocomplete-selection').classes()
      ).not.toContain('b-autocomplete-selection-pending-delete')
    })
  })

  // --- Disabled toggle button ---

  describe('disabled toggle button', () => {
    it('disables toggle button when disabled is true', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          disabled: true,
          options: ['a'],
        },
      })
      const btn = wrapper.find('.b-autocomplete-trigger')
      expect(btn.attributes('disabled')).toBeDefined()
    })
  })

  // --- Chevron rotation ---

  describe('chevron icon', () => {
    it('does not have open class when closed', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          open: false,
          options: ['a'],
        },
      })
      const chevron = wrapper.find('.b-autocomplete-chevron')
      expect(chevron.exists()).toBe(true)
      expect(chevron.classes()).not.toContain('b-autocomplete-chevron-open')
    })

    it('has open class when open', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          open: true,
          options: ['a'],
        },
      })
      const chevron = wrapper.find('.b-autocomplete-chevron')
      expect(chevron.exists()).toBe(true)
      expect(chevron.classes()).toContain('b-autocomplete-chevron-open')
    })
  })

  // --- Dropdown content ---

  describe('dropdown content', () => {
    it('shows dropdown content when open is true', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: ['apple', 'banana'],
          open: true,
        },
      })
      await nextTick()
      const content = wrapper.find('.b-autocomplete-content')
      expect(content.exists()).toBe(true)
      expect(content.classes()).toContain('dropdown-menu')
      expect(content.classes()).toContain('show')
    })

    it('does not show dropdown content when open is false', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: ['apple', 'banana'],
          open: false,
        },
      })
      const content = wrapper.find('.b-autocomplete-content')
      expect(content.exists()).toBe(false)
    })

    it('renders items with dropdown-item class', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: ['apple'],
          open: true,
        },
      })
      await nextTick()
      const items = wrapper.findAll('.b-autocomplete-item')
      expect(items).toHaveLength(1)
      expect(items[0].classes()).toContain('dropdown-item')
    })
  })

  // --- Mixed option types ---

  describe('mixed option types', () => {
    it('handles mixed string, number, and boolean options', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: ['text', 42, true],
          open: true,
        },
      })
      await nextTick()
      const items = wrapper.findAll('.b-autocomplete-item')
      expect(items).toHaveLength(3)
      expect(items[0].text()).toContain('text')
      expect(items[1].text()).toContain('42')
      expect(items[2].text()).toContain('true')
    })
  })

  // --- Default empty slot content ---

  describe('default empty message', () => {
    it('shows "No results found" when no custom empty slot', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          options: [],
          open: true,
        },
      })
      await nextTick()
      const empty = wrapper.find('.b-autocomplete-empty')
      expect(empty.text()).toBe('No results found')
    })
  })

  // --- Size prop on input group ---

  describe('size prop on input group', () => {
    it('passes size to BInputGroup', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          size: 'lg',
          options: ['a'],
        },
      })
      const inputGroup = wrapper.find('.input-group')
      expect(inputGroup.classes()).toContain('input-group-lg')
    })

    it('passes size sm to BInputGroup', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          size: 'sm',
          options: ['a'],
        },
      })
      const inputGroup = wrapper.find('.input-group')
      expect(inputGroup.classes()).toContain('input-group-sm')
    })
  })

  // --- Pending delete visual states in tags mode ---

  describe('pending delete visual states in tags mode', () => {
    it('applies muted class to non-last tags during pending delete', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          multiple: true,
          tags: true,
          options: ['apple', 'banana', 'cherry'],
          modelValue: ['apple', 'banana'],
          search: '',
        },
      })
      const input = wrapper.find('input')

      // Trigger pending delete
      await input.trigger('keydown', {key: 'Backspace'})
      await nextTick()

      const tags = wrapper.findAll('.b-form-tag')
      expect(tags.length).toBe(2)
      // First tag (not last) should be muted
      expect(tags[0].classes()).toContain('b-autocomplete-tag-muted')
      // Last tag should have pending delete styling
      expect(tags[1].classes()).toContain('b-autocomplete-tag-pending-delete')
    })

    it('does not apply muted/pending-delete classes when not in pending delete', () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          multiple: true,
          tags: true,
          options: ['apple', 'banana'],
          modelValue: ['apple', 'banana'],
        },
      })
      const tags = wrapper.findAll('.b-form-tag')
      expect(tags.length).toBe(2)
      tags.forEach((tag) => {
        expect(tag.classes()).not.toContain('b-autocomplete-tag-muted')
        expect(tag.classes()).not.toContain('b-autocomplete-tag-pending-delete')
      })
    })
  })

  // --- Pending delete visual states in non-tags mode ---

  describe('pending delete visual states in non-tags mode', () => {
    it('applies text-body-tertiary class to non-last items during pending delete', async () => {
      const wrapper = mount(BAutocomplete, {
        props: {
          multiple: true,
          tags: false,
          options: ['apple', 'banana', 'cherry'],
          modelValue: ['apple', 'banana'],
          search: '',
        },
      })
      const input = wrapper.find('input')

      // Trigger pending delete
      await input.trigger('keydown', {key: 'Backspace'})
      await nextTick()

      const spans = wrapper.find('.b-autocomplete-selection').findAll('span')
      // The first span (non-last selected) should have text-body-tertiary
      expect(spans[0].classes()).toContain('text-body-tertiary')
    })
  })
})
