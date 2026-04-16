import type {BAutocompleteProps, BAutocompleteSlots} from 'bootstrap-vue-next'
import {type ComponentReference, type PropRecord, type SlotRecord, StyleKind} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BAutocomplete: {
      styleSpec: {kind: StyleKind.BsvnClass},
      props: {
        ...pick(
          buildCommonProps({
            options: {type: "readonly (object | string | number | boolean)[]"},
          }),
          [
            'ariaInvalid',
            'autocomplete',
            'autofocus',
            'debounce',
            'debounceMaxWait',
            'disabled',
            'disabledField',
            'form',
            'formatter',
            'id',
            'lazyFormatter',
            'name',
            'placeholder',
            'plaintext',
            'readonly',
            'required',
            'size',
            'state',
            'options',
            'textField',
            'valueField',
          ]
        ),
        by: {
          type: 'string | ((a: unknown, b: unknown) => boolean)',
          default: undefined,
          description:
            'Property name or comparator function used to identify options. When a string, compares objects by that key. When a function, receives two values and returns true if they match',
        },
        dir: {
          type: "'ltr' | 'rtl'",
          default: undefined,
          description: 'The reading direction of the autocomplete when applicable',
        },
        filterFunction: {
          type: '(options: SelectOption[], searchTerm: string) => SelectOption[]',
          default: undefined,
          description:
            'Custom filter function for the options list. Receives the normalized options array and the current search term, and returns the filtered array. When provided, the built-in filter is bypassed',
        },
        modelValue: {
          type: 'AcceptableValue | AcceptableValue[] | undefined',
          default: undefined,
          description:
            'The current selected value of the autocomplete. In single mode, a single value; in multiple mode, an array of values',
        },
        multiple: {
          type: 'boolean',
          default: false,
          description:
            'When set, enables multiple selection mode. The modelValue becomes an array of selected values',
        },
        noToggle: {
          type: 'boolean',
          default: false,
          description: 'When set, hides the dropdown toggle button',
        },
        openOnFocus: {
          type: 'boolean',
          default: false,
          description: 'When set, the dropdown opens automatically when the input receives focus',
        },
        resetSearchTermOnBlur: {
          type: 'boolean',
          default: true,
          description: 'When set, clears the search input when the component loses focus',
        },
        resetSearchTermOnSelect: {
          type: 'boolean',
          default: true,
          description: 'When set, clears the search input after an option is selected',
        },
        search: {
          type: 'string',
          default: "''",
          description:
            "The current search text entered by the user. Can be bound with `v-model:search`. Use this to react to user input for features like async fetching",
        },
        tags: {
          type: 'boolean',
          default: false,
          description:
            'When set along with `multiple`, renders selected values as removable tag badges',
        },
        teleportTo: {
          type: 'string | HTMLElement',
          default: undefined,
          description:
            'Teleports the dropdown content to the specified element. Accepts a CSS selector string or an HTMLElement reference',
        },
      } satisfies PropRecord<keyof BAutocompleteProps>,
      emits: {
        'blur': {
          description: 'Emitted when the autocomplete input loses focus',
          args: {
            event: {
              type: 'FocusEvent',
              description: 'Native blur event',
            },
          },
        },
        'focus': {
          description: 'Emitted when the autocomplete input gains focus',
          args: {
            event: {
              type: 'FocusEvent',
              description: 'Native focus event',
            },
          },
        },
        'update:model-value': {
          description: 'Emitted when the selected value changes',
          args: {
            value: {
              type: 'AcceptableValue | AcceptableValue[] | undefined',
              description: 'The new selected value',
            },
          },
        },
        'update:open': {
          description: 'Emitted when the dropdown open state changes',
          args: {
            value: {
              type: 'boolean',
              description: 'The new open state',
            },
          },
        },
        'update:search': {
          description:
            'Emitted when the search input text changes. Use with `v-model:search` to react to user input',
          args: {
            value: {
              type: 'string',
              description: 'The new search text',
            },
          },
        },
      },
      slots: {
        'default': {
          description: 'Default slot for custom content inside the autocomplete',
        },
        'empty': {
          description:
            'Content to display when no options match the current search. Defaults to "No results found"',
        },
        'option': {
          description: 'Custom rendering for each option item in the dropdown list',
          scope: {
            value: {
              type: 'any',
              description: 'The value of the option',
            },
            text: {
              type: 'string',
              description: 'The display text of the option',
            },
            disabled: {
              type: 'boolean',
              description: 'Whether the option is disabled',
            },
          },
        },
        'option-indicator': {
          description:
            'Custom rendering for the check indicator shown on selected options. Defaults to a checkmark SVG',
        },
        'prepend': {
          description: 'Content to prepend before the input (via BInputGroup prepend slot)',
        },
        'append': {
          description:
            'Content to append after the input (via BInputGroup append slot). When not provided, a dropdown toggle button is rendered by default',
        },
        'tags': {
          description:
            'Custom rendering for tags in multiple+tags mode. Receives the selected options and a remove function',
          scope: {
            selected: {
              type: 'SelectOption[]',
              description: 'Array of currently selected option objects',
            },
            remove: {
              type: '(option: SelectOption) => void',
              description: 'Function to remove a selected option',
            },
          },
        },
      } satisfies SlotRecord<keyof BAutocompleteSlots>,
    },
  }),
}
