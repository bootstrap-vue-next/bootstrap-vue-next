import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormSelect',
      props: [
        {prop: 'ariaInvalid'},
        {prop: 'autofocus'},
        {prop: 'disabled'},
        {prop: 'disabledField'},
        {prop: 'form'},
        {prop: 'htmlField'},
        {prop: 'id'},
        {
          prop: 'labelField',
          type: 'string',
          default: 'label',
          description: 'The key to use from the option object to get the label',
        },
        {
          prop: 'multiple',
          type: 'boolean',
          default: false,
          description: 'When set, allows multiple options to be selected (multi-select)',
        },
        {prop: 'name'},
        {
          prop: 'options',
          type: 'unknown[] | Record<string, unknown>',
        },
        {
          prop: 'optionsField',
          type: 'string',
          default: 'options',
          description: 'The key to use from the option object to get the options',
        },
        {prop: 'plain'},
        {prop: 'required'},
        {
          prop: 'selectSize',
          type: 'Numberish',
          default: 0,
          description:
            'When set to a number larger than 0, will set the number of display option rows. Note not all browser will respect this setting',
        },
        {prop: 'size'},
        {prop: 'state'},
        {prop: 'textField'},
        {prop: 'valueField'},
        {
          prop: 'modelValue',
          type: `SelectValue`,
          default: '',
          description: 'The value of the select control',
        },
      ],
      emits: [
        {
          event: 'update:modelValue',
          args: [
            {
              arg: 'value',
              description: 'Currently selected value of the select control.',
              type: 'SelectValue',
            },
          ],
          description:
            'Emitted when the selected value(s) are changed. Looking for the `input` or `change` event - use `update:modelValue` instead.',
        },
      ],
      slots: [
        {
          description: 'Content to place in the form select',
          name: 'default',
        },
        {
          description:
            "Slot to place options or option groups above options provided via the 'options' prop",
          name: 'first',
        },
      ],
    },
    {
      component: 'BFormSelectOption',
      emits: [],
      props: [
        {
          prop: 'value',
          type: 'any',
          default: undefined,
          description: 'The value of the option',
        },
        {
          prop: 'disabled',
          type: 'boolean',
          default: false,
          description: 'The disabled state of the option',
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the form select option',
        },
      ],
    },
    {
      component: 'BFormSelectOptionGroup',
      props: [
        {
          prop: 'label',
          type: 'string',
          default: undefined,
          description: 'The label for the option group',
        },
        {prop: 'disabledField'},
        {prop: 'htmlField'},
        {
          prop: 'options',
          type: 'readonly (unknown | Record<string, unknown>)[]',
        },
        {prop: 'textField'},
        {prop: 'valueField'},
      ],
      emits: [],
      slots: [
        {
          name: 'first',
          description: 'Content to place in the form select option group',
        },
        {
          name: 'default',
          description: "Slot to place options above options provided via the 'options' prop",
        },
      ],
    },
  ],
}
